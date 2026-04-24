"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Ürünlerinizi gönderin",
    desc: "Fotoğraf veya fiziki örnek yeterli. Biz 48 saat içinde 3D modelleri hazırlayalım.",
  },
  {
    num: "2",
    title: "Kodu sitenize ekleyin",
    desc: "Shopify, İkas, Ticimax — hangi platformdaysanız tek satır kodla entegrasyon.",
  },
  {
    num: "3",
    title: "Satışları izleyin",
    desc: "Müşterileriniz ürünü AR'da görsün, daha rahat karar versin, daha az iade gelsin.",
  },
];

const vp = { once: true, margin: "-60px" } as const;

export default function Process() {
  return (
    <section className="process">
      <motion.div
        className="section-label"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.4 }}
      >
        Süreç
      </motion.div>
      <motion.h2
        className="section-title display"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.5, delay: 0.06 }}
      >
        Üç adımda <em>başlayın.</em>
      </motion.h2>

      <div className="process-steps">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="step"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: i * 0.14 }}
          >
            <div className="step-num">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
