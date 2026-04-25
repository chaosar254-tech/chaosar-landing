"use client";

import { useState, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { isValidTRPhone, isValidEmail } from "@/lib/validators";
import { trackLead, trackFormStart } from "@/lib/analytics";

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  platform: string;
  _hp: string; // honeypot
}

interface FieldErrors {
  contact?: string;
  phone?: string;
  email?: string;
}

const benefits = [
  "1 ürün tamamen ücretsiz — kendi ürününüzle test edin",
  "48 saatte teslim — bir iş günü içinde görürsünüz",
  "Taahhüt yok — beğenmezseniz hiçbir şey borçlu değilsiniz",
  "Özel danışmanlık — e-ticaretinize özel stratejiyi konuşalım",
];

const CheckIcon = () => (
  <span className="check-icon">
    <Check size={12} strokeWidth={2.5} />
  </span>
);

export default function Offer() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    phone: "",
    platform: "",
    _hp: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const formStarted = useRef(false);

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors.contact || errors.phone || errors.email) {
      setErrors({});
    }
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart();
    }
  }

  function validate(): boolean {
    const errs: FieldErrors = {};
    const hasPhone = form.phone.trim().length > 0;
    const hasEmail = form.email.trim().length > 0;

    if (!hasPhone && !hasEmail) {
      errs.contact = "Telefon veya email yazmanız yeterli, size ulaşacağız.";
      setErrors(errs);
      return false;
    }
    if (hasPhone && !isValidTRPhone(form.phone)) {
      errs.phone = "Geçerli bir TR telefon numarası girin (05XX XXX XX XX).";
    }
    if (hasEmail && !isValidEmail(form.email)) {
      errs.email = "Geçerli bir email adresi girin.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (form._hp) return; // honeypot — silently reject bots
    if (!validate()) return;

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          platform: form.platform,
          _hp: form._hp,
        }),
      });

      if (res.status === 429) {
        setStatus("error");
        setServerError("Çok fazla istek gönderildi. Lütfen bir dakika bekleyin.");
        return;
      }
      if (!res.ok) throw new Error("server");

      trackLead(form.company);
      setStatus("success");
    } catch {
      setStatus("error");
      setServerError("Bir hata oluştu. Lütfen tekrar deneyin ya da direkt email'den yazın.");
    }
  }

  return (
    <section className="offer" id="demo-form">
      <div className="offer-card">
        {/* Left */}
        <div className="offer-left">
          <div className="offer-ribbon">İlk 20 Başvuruya Özel</div>
          <h2>
            <em>Bir ürününüzü</em>
            <br />
            ücretsiz 3D&apos;leyelim.
          </h2>
          <p className="lead">
            Hiçbir taahhüt yok. Bir ürününüzü seçin, biz ücretsiz 3D
            modelleyip sitenize nasıl görüneceğini gösterelim. Beğenirseniz
            devam edelim.
          </p>

          <ul className="offer-benefits">
            {benefits.map((b) => (
              <li key={b}>
                <CheckIcon />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="form-wrap">
          {status === "success" ? (
            <div className="form-success active">
              <div className="form-success-icon">
                <Check size={28} strokeWidth={2.5} />
              </div>
              <h3>Başvurunuz alındı</h3>
              <p>
                24 saat içinde sizi arayacağız. Şimdilik rahat bir nefes alın
                — gerisi bizde.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-title">İletişim bırakın, biz arayalım</div>
              <div className="form-sub">24 saat içinde size ulaşıyoruz.</div>

              {/* Honeypot — hidden from humans */}
              <input
                type="text"
                name="_hp"
                value={form._hp}
                onChange={(e) => set("_hp", e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-group">
                <label className="form-label" htmlFor="fname">Ad Soyad</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-input"
                  placeholder="Adınız ve soyadınız"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="femail">
                  Email <span className="form-optional">(opsiyonel)</span>
                </label>
                <input
                  type="email"
                  id="femail"
                  name="email"
                  className={`form-input${errors.email ? " has-error" : ""}`}
                  placeholder="ornek@sirket.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                />
                {errors.email && (
                  <p className="form-error" role="alert">{errors.email}</p>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="company">Marka / Firma</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-input"
                  placeholder="Markanızın adı"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  autoComplete="organization"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Telefon / WhatsApp <span className="form-optional">(opsiyonel)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`form-input${errors.phone ? " has-error" : ""}`}
                  placeholder="0 5__ ___ __ __"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9\s\+\-\(\)]*"
                />
                {errors.phone && (
                  <p className="form-error" role="alert">{errors.phone}</p>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="platform">E-ticaret Platformunuz</label>
                <select
                  id="platform"
                  name="platform"
                  className="form-select"
                  value={form.platform}
                  onChange={(e) => set("platform", e.target.value)}
                >
                  <option value="">Seçiniz</option>
                  <option value="shopify">Shopify</option>
                  <option value="ikas">İkas</option>
                  <option value="ticimax">Ticimax</option>
                  <option value="ideasoft">İdeasoft</option>
                  <option value="woocommerce">WooCommerce</option>
                  <option value="trendyol">Sadece Trendyol / Hepsiburada</option>
                  <option value="ozel">Özel yazılım</option>
                  <option value="yok">Henüz site yok</option>
                </select>
              </div>

              {errors.contact && (
                <p className="form-error form-error--contact" role="alert">
                  {errors.contact}
                </p>
              )}

              {serverError && (
                <p className="form-error form-error--contact" role="alert">
                  {serverError}
                </p>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={status === "loading"}
                aria-busy={status === "loading"}
              >
                {status === "loading" ? (
                  "Gönderiliyor..."
                ) : (
                  <>
                    Ücretsiz Demomu İstiyorum
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <p className="form-note">
                Telefon veya email yazmanız yeterli, size ulaşacağız.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
