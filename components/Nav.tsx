"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Body scroll lock when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav>
        <a href="/" className="logo" aria-label="ChaosAR Ana Sayfa">
          CHAOS<span>AR</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="https://cha0sar.shop" className="site-link" target="_blank" rel="noopener noreferrer">
            <span>Ana Site</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#demo-form" className="nav-cta">Ücretsiz Demo</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`nav-hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer" role="dialog" aria-modal="true" aria-label="Navigasyon">
          <div className="drawer-header">
            <a href="/" className="logo" onClick={close}>
              CHAOS<span>AR</span>
            </a>
            <button className="nav-hamburger open" onClick={close} aria-label="Kapat">
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className="drawer-links">
            <a href="https://cha0sar.shop" target="_blank" rel="noopener noreferrer" onClick={close}>
              Ana Site
            </a>
            <a href="#nasil" onClick={close}>Nasıl Çalışır</a>
            <a href="#demo-form" onClick={close}>Demo Talep Et</a>
          </div>

          <a href="#demo-form" className="drawer-cta" onClick={close}>
            Başvuru Yap →
          </a>
        </div>
      )}
    </>
  );
}
