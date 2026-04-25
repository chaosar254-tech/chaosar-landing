import PhoneModel from "./PhoneModel";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">E-ticaret markaları için 3D/AR altyapısı</div>
        <h1 className="display">
          Ürünleriniz
          <br />
          ekrandan <em>çıksın</em>,
          <br />
          <span className="underline">sepete girsin.</span>
        </h1>
        <p className="lead">
          Müşterileriniz ürünlerinizi telefondan çıkarıp masalarına koysun,
          360° incelesin. Sonuç:{" "}
          <strong>daha yüksek dönüşüm, daha az iade.</strong>
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">
              +<span>%30</span>
            </div>
            <div className="stat-label">Dönüşüm artışı</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              -<span>%40</span>
            </div>
            <div className="stat-label">Ürün iadesi</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              48<span>sa</span>
            </div>
            <div className="stat-label">Teslimat süresi</div>
          </div>
        </div>

        <div className="hero-ctas">
          <a href="#demo-form" className="btn-primary">
            Ücretsiz Demo İste
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#nasil" className="btn-ghost">
            Nasıl çalışır?
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1V11M6 11L2 7M6 11L10 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-bg-circle" />

        <div className="floating-tag tag-1">
          <div className="tag-label">Sepete Ekleme</div>
          <div className="tag-value">
            +<span>%32</span>
          </div>
        </div>

        <div className="floating-tag tag-2">
          <div className="tag-label">İade Oranı</div>
          <div className="tag-value">
            -<span>%41</span>
          </div>
        </div>

        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="ar-label">AR GÖRÜNÜM</div>
            <PhoneModel />
          </div>
        </div>
      </div>
    </section>
  );
}
