"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 600;
      const formSection = document.getElementById("demo-form");
      const formRect = formSection?.getBoundingClientRect();
      const formVisible = formRect
        ? formRect.top < window.innerHeight && formRect.bottom > 0
        : false;
      setShow(scrolled && !formVisible);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky-cta${show ? " sticky-cta--visible" : ""}`}
      aria-hidden={!show}
    >
      <a href="#demo-form" className="sticky-cta-btn">
        Başvuru Yap →
      </a>
    </div>
  );
}
