"use client";

import { motion } from "framer-motion";

const vp = { once: true, margin: "-60px" } as const;

export default function ModelsCTA() {
  return (
    <section className="models-cta">
      <div className="models-cta-inner">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.4 }}
        >
          Portföy
        </motion.div>

        <motion.h2
          className="section-title display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          Gerçek markalar, <em>gerçek modeller.</em>
        </motion.h2>

        <motion.p
          className="models-cta-desc"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          Daha önce hayata geçirdiğimiz 3D modelleri ve AR deneyimlerini
          ana sitemizde inceleyebilirsiniz.
        </motion.p>

        <motion.a
          href="https://cha0sar.shop"
          target="_blank"
          rel="noopener noreferrer"
          className="models-cta-btn"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.4, delay: 0.18 }}
        >
          Modelleri İncele
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 13L13 3M13 3H6M13 3V10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
