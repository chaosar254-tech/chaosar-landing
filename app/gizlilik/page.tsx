import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — ChaosAR",
  robots: { index: false, follow: false },
};

export default function GizlilikPage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="policy">
          <div className="policy-inner">
            <div className="policy-header">
              <div className="section-label">KVKK</div>
              <h1 className="display">Gizlilik Politikası</h1>
              <p className="policy-intro">
                İşbu Gizlilik Politikası, ChaosAR (&quot;Şirket&quot;) tarafından
                sunulan e-ticaret siteleri için 3D/AR ürün gösterim çözümleri
                kapsamında, 6698 sayılı Kişisel Verilerin Korunması Kanunu
                (&quot;KVKK&quot;) uyarınca kişisel verilerin işlenmesine ilişkin
                esasları açıklamaktadır.
              </p>
            </div>

            <div className="policy-body">
              <div className="policy-section">
                <h2>1. Veri Sorumlusu</h2>
                <p>KVKK kapsamında veri sorumlusu:</p>
                <p>
                  <strong>Firma Adı:</strong> ChaosAR
                  <br />
                  <strong>E-posta:</strong>{" "}
                  <a href="mailto:info@cha0sar.com">info@cha0sar.com</a>
                </p>
              </div>

              <div className="policy-section">
                <h2>2. Toplanan Kişisel Veriler</h2>
                <p>
                  Şirketimiz tarafından aşağıdaki kişisel veriler
                  toplanmaktadır:
                </p>
                <ul>
                  <li>Ad ve soyad</li>
                  <li>E-posta adresi</li>
                  <li>Telefon numarası</li>
                  <li>Firma adı</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
                <p>
                  Kişisel verileriniz, Meta (Facebook/Instagram) Lead Formları
                  üzerinden kullanıcıların demo talebinde bulunması yoluyla
                  elektronik ortamda toplanmaktadır.
                </p>
                <p>
                  Veriler, KVKK&apos;nın 5. maddesi uyarınca açık rızanıza
                  dayanarak işlenmektedir.
                </p>
              </div>

              <div className="policy-section">
                <h2>4. Kişisel Verilerin İşlenme Amaçları</h2>
                <p>
                  Toplanan kişisel veriler aşağıdaki amaçlarla işlenmektedir:
                </p>
                <ul>
                  <li>Demo taleplerinin değerlendirilmesi</li>
                  <li>Müşteri ile iletişime geçilmesi</li>
                  <li>Satış süreçlerinin yürütülmesi</li>
                  <li>Hizmetler hakkında bilgilendirme yapılması</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>5. Kişisel Verilerin Saklanma Süresi</h2>
                <p>
                  Kişisel verileriniz, işleme amaçlarının gerektirdiği süre
                  boyunca ve ilgili mevzuatta öngörülen saklama süreleri
                  boyunca saklanır. Bu sürelerin sona ermesi halinde verileriniz
                  silinir, yok edilir veya anonim hale getirilir.
                </p>
              </div>

              <div className="policy-section">
                <h2>6. Kişisel Verilerin Üçüncü Taraflarla Paylaşımı</h2>
                <p>
                  Kişisel verileriniz, açık rızanız olmaksızın hiçbir üçüncü
                  taraf ile paylaşılmamaktadır.
                </p>
              </div>

              <div className="policy-section">
                <h2>7. KVKK Kapsamındaki Haklarınız</h2>
                <p>
                  KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara
                  sahipsiniz:
                </p>
                <ul>
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>
                    İşlenme amacını ve amacına uygun kullanılıp
                    kullanılmadığını öğrenme
                  </li>
                  <li>
                    Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini
                    isteme
                  </li>
                  <li>
                    KVKK&apos;ya uygun olarak silinmesini veya yok edilmesini
                    isteme
                  </li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>8. Hakların Kullanılması</h2>
                <p>
                  Yukarıda belirtilen haklarınıza ilişkin taleplerinizi
                  aşağıdaki e-posta adresi üzerinden iletebilirsiniz:
                </p>
                <p>
                  <a href="mailto:info@cha0sar.com" className="policy-email">
                    info@cha0sar.com
                  </a>
                </p>
              </div>

              <div className="policy-section">
                <h2>9. Çerez (Cookie) Kullanımı</h2>
                <p>
                  Web sitemizde kullanıcı deneyimini geliştirmek amacıyla
                  sınırlı düzeyde çerezler kullanılabilir. Çerezler, site
                  kullanımını analiz etmek ve hizmet kalitesini artırmak
                  amacıyla kullanılmaktadır.
                </p>
              </div>

              <div className="policy-section">
                <h2>10. Güncellemeler</h2>
                <p>
                  İşbu Gizlilik Politikası gerekli görüldüğü takdirde
                  güncellenebilir. Güncellenmiş metin web sitemiz üzerinden
                  yayımlandığı anda yürürlüğe girer.
                </p>
              </div>

              <div className="policy-back">
                <a href="/" className="btn-ghost">
                  ← Ana Sayfaya Dön
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
