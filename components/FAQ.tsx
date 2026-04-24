"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Ücretsiz demo gerçekten ücretsiz mi?",
    a: "Evet, tamamen ücretsiz. Bir ürününüzü seçiyoruz, 3D modelliyoruz, sitenize nasıl oturacağını gösteriyoruz. Beğenirseniz paketlerden birine geçersiniz, beğenmezseniz hiçbir yükümlülük yok.",
  },
  {
    q: "Ne kadar sürede hazır olur?",
    a: "Demo için 48 saat içinde ürününüzün 3D modelini size gösteriyoruz. Paketinize geçtiğinizde her yeni ürün ortalama 48 saatte hazırlanır (Pro pakette 24 saat).",
  },
  {
    q: "Hangi e-ticaret platformlarıyla çalışıyor?",
    a: "Shopify, İkas, Ticimax, İdeasoft, Trendyol, Hepsiburada, WooCommerce ve özel yazılımlar dahil hepsiyle entegre olabiliyoruz. Tek satır kod veya iframe ile siteye ekleniyor.",
  },
  {
    q: "Müşterim AR için uygulama indirmesi gerekiyor mu?",
    a: "Hayır. Web AR teknolojisi kullanıyoruz — müşteriniz sadece ürün sayfasındaki butona dokunuyor, kamera açılıyor, ürünü kendi ortamında görüyor. Uygulama yok, indirme yok.",
  },
  {
    q: "Fiyatlandırma nasıl?",
    aHtml:
      'Ürün sayınıza ve ihtiyacınıza göre 3 farklı paketimiz var. Demo görüşmemizde size en uygun paketi birlikte seçeriz — detaylı modelleri <a href="https://cha0sar.shop" target="_blank" rel="noopener noreferrer">ana sitemizde</a> görebilirsiniz.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="faq">
      <div className="section-label" style={{ textAlign: "center" }}>SSS</div>
      <h2
        className="section-title display"
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        Aklınızdaki <em>sorular.</em>
      </h2>

      {faqs.map((faq, i) => (
        <div
          key={i}
          className="faq-item"
          onClick={() => setOpenIdx(openIdx === i ? null : i)}
        >
          <div className="faq-question">
            <span>{faq.q}</span>
            <span className={`faq-icon${openIdx === i ? " open" : ""}`}>
              <Plus size={14} strokeWidth={1.8} />
            </span>
          </div>
          {openIdx === i && (
            <div className="faq-answer">
              {faq.aHtml ? (
                <span dangerouslySetInnerHTML={{ __html: faq.aHtml }} />
              ) : (
                faq.a
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
