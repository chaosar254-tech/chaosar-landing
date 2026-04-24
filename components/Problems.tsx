"use client";

import { motion } from "framer-motion";

const problems = [
  {
    num: "01",
    title: "Müşteri emin olamıyor",
    desc: 'Ürünün gerçek boyutunu, dokusunu, detayını göremeyen müşteri "acaba beklediğim gibi mi?" diye sepetten vazgeçiyor.',
  },
  {
    num: "02",
    title: "İadeler kâr yiyor",
    desc: "Ürün elde görünce hayal kırıklığı yaratıyor. İade kargo, iade işlemi, yeniden stoklama — her iade sizden para götürüyor.",
  },
  {
    num: "03",
    title: "Rakiplerle aynısınız",
    desc: "Herkes aynı stok fotoğraflarını kullanıyor. Müşteriyi etkileyecek, aklında kalacak bir deneyim sunmak gerekiyor.",
  },
];

const vp = { once: true, margin: "-60px" } as const;

export default function Problems() {
  return (
    <section className="problems">
      <motion.div
        className="section-label"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.4 }}
      >
        Sorun
      </motion.div>
      <motion.h2
        className="section-title display"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        Düz fotoğraflar artık <em>yeterli değil.</em>
      </motion.h2>

      <div className="problem-grid">
        {problems.map((p, i) => (
          <motion.div
            key={p.num}
            className="problem-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="problem-number">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
