import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidTRPhone, isValidEmail } from "@/lib/validators";
import { buildLeadEmail } from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// In-memory rate limit (production: Redis önerilir)
const rateLimitMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (hits.length >= RATE_MAX) return true;
  rateLimitMap.set(ip, [...hits, now]);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });
    }

    const body = await req.json();
    const { name, email, company, phone, platform, _hp } = body;

    // Honeypot — bot sessizce reddedilir
    if (_hp) {
      return NextResponse.json({ ok: true });
    }

    // Validation: telefon veya email'den en az biri gerekli
    const hasPhone = typeof phone === "string" && phone.trim().length > 0;
    const hasEmail = typeof email === "string" && email.trim().length > 0;

    if (!hasPhone && !hasEmail) {
      return NextResponse.json(
        { error: "Telefon veya email gerekli" },
        { status: 400 }
      );
    }
    if (hasPhone && !isValidTRPhone(phone)) {
      return NextResponse.json(
        { error: "Geçersiz telefon formatı" },
        { status: 400 }
      );
    }
    if (hasEmail && !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Geçersiz email formatı" },
        { status: 400 }
      );
    }

    const leadData = { name, email, company, phone, platform };

    // Email bildirimi (Resend)
    if (resend && process.env.LEAD_NOTIFICATION_EMAIL) {
      await resend.emails.send({
        from: process.env.FROM_EMAIL ?? "noreply@cha0sar.com",
        to: process.env.LEAD_NOTIFICATION_EMAIL,
        subject: `🎯 Yeni ChaosAR Lead${company ? `: ${company}` : ""}`,
        html: buildLeadEmail(leadData),
      });
    } else {
      // Development: console'a yaz
      console.log("[Lead]", leadData);
    }

    // TODO: Supabase'e kaydet
    // const { createClient } = await import("@supabase/supabase-js");
    // const supabase = createClient(
    //   process.env.SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_KEY!
    // );
    // await supabase.from("leads").insert([{ ...leadData, created_at: new Date() }]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
