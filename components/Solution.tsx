"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: "Gerçekçi 3D modeller",
    desc: "Ürünlerinizi stüdyo kalitesinde 3D'ye dönüştürüyoruz. 360° dönen, gerçek dokulu, satın aldırıcı modeller.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Web AR deneyimi",
    desc: "Uygulama indirmeye gerek yok. Müşteri telefonuyla QR okutur, ürünü kendi evinde, masasında görür.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 3V21H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14L11 10L15 14L21 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Dönüşüm analitiği",
    desc: "Hangi ürüne kaç kez bakıldı, AR'da ne kadar zaman geçirildi, hangisi sepete gitti — hepsi panelde.",
  },
];

const vp = { once: true, margin: "-60px" } as const;

export default function Solution() {
  return (
    <section className="solution" id="nasil">
      <div className="solution-inner">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.4 }}
        >
          Çözüm
        </motion.div>
        <motion.h2
          className="section-title display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          ChaosAR <em>bir satır kodla</em> sitenize giriyor.
        </motion.h2>

        <div className="solution-grid">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="solution-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="solution-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
