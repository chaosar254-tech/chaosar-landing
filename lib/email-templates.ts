export interface LeadData {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  platform?: string;
}

export function buildLeadEmail(data: LeadData): string {
  const { name, email, company, phone, platform } = data;

  const cleanPhone = (phone ?? "").replace(/\D/g, "");
  const waNumber = cleanPhone.startsWith("90")
    ? cleanPhone
    : `90${cleanPhone}`;
  const waLink = `https://wa.me/${waNumber}`;

  const platformLabels: Record<string, string> = {
    shopify: "Shopify",
    ikas: "İkas",
    ticimax: "Ticimax",
    ideasoft: "İdeasoft",
    woocommerce: "WooCommerce",
    trendyol: "Sadece Trendyol / Hepsiburada",
    ozel: "Özel yazılım",
    yok: "Henüz site yok",
  };

  const platformLabel = platform ? (platformLabels[platform] ?? platform) : "—";

  return `
<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5F1EA;font-family:system-ui,-apple-system,sans-serif;">
  <div style="max-width:600px;margin:40px auto;padding:0 20px;">

    <div style="background:#0A0908;border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <p style="margin:0;font-size:32px;font-weight:900;color:#F5F1EA;letter-spacing:-0.03em;">
        CHAOS<span style="color:#B8956A;font-style:italic;">AR</span>
      </p>
      <p style="margin:8px 0 0;font-size:13px;color:rgba(245,241,234,0.5);letter-spacing:0.15em;text-transform:uppercase;">
        Yeni Demo Talebi
      </p>
    </div>

    <div style="background:#ffffff;padding:40px 32px;border-left:1px solid #e8e4dd;border-right:1px solid #e8e4dd;">
      <p style="margin:0 0 24px;font-size:16px;color:#0A0908;">
        🎯 <strong>${company || "Yeni bir lead"}</strong> ücretsiz demo talep etti.
      </p>

      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${row("Ad Soyad", name || "—")}
        ${row("Email", email || "—")}
        ${row("Marka / Firma", company || "—")}
        ${row("Telefon", phone || "—")}
        ${row("Platform", platformLabel)}
      </table>

      ${
        phone
          ? `<div style="margin-top:32px;text-align:center;">
              <a href="${waLink}"
                style="display:inline-block;background:#25D366;color:#ffffff;padding:14px 32px;
                       border-radius:999px;text-decoration:none;font-size:15px;font-weight:700;">
                💬 WhatsApp&apos;tan Ara
              </a>
            </div>`
          : ""
      }
    </div>

    <div style="background:#0A0908;border-radius:0 0 16px 16px;padding:20px 32px;text-align:center;">
      <p style="margin:0;font-size:12px;color:rgba(245,241,234,0.4);">
        Sıcak lead! 24 saat içinde iletişime geçmen tavsiye edilir.
      </p>
    </div>

  </div>
</body>
</html>`;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 16px 10px 0;color:#8A6D4A;font-weight:600;
                 font-size:11px;text-transform:uppercase;letter-spacing:0.08em;
                 white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;color:#0A0908;font-size:15px;">${value}</td>
    </tr>`;
}
