const items = [
  "Daha yüksek dönüşüm",
  "Daha az iade",
  "Rakiplerden ayrış",
  "48 saatte teslimat",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="marquee-section">
      <div className="marquee-label">
        Shopify · İkas · Ticimax · WooCommerce · Trendyol · Hepsiburada
      </div>
      <div className="marquee">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
