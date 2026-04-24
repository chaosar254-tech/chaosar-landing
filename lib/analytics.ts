declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageView() {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "PageView");
}

export function trackLead(company = "") {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead", {
    content_name: "ChaosAR Demo Request",
    content_category: company || "unknown",
    value: 500,
    currency: "TRY",
  });
  window.gtag?.("event", "generate_lead", {
    form_name: "demo_request",
    company,
  });
}

export function trackFormStart() {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "InitiateCheckout", {
    content_name: "ChaosAR Demo Form",
  });
  window.gtag?.("event", "form_start", { form_name: "demo_request" });
}

export function trackCTAClick(source: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "cta_click", { source });
}
