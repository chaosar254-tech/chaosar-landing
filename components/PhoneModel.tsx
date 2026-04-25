"use client";

import { useEffect, useState } from "react";

export default function PhoneModel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    import("@google/model-viewer");
  }, []);

  // SSR fallback — golden placeholder until client mounts
  if (!mounted) return <div className="phone-product" />;

  // Cast to any so TypeScript accepts custom web component attributes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MV = "model-viewer" as any;

  return (
    <MV
      src="/demo-model.glb"
      auto-rotate=""
      auto-rotate-delay="800"
      rotation-per-second="20deg"
      shadow-intensity="1"
      exposure="1.2"
      camera-orbit="0deg 75deg 105%"
      interaction-prompt="none"
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    />
  );
}
