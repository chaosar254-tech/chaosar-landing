import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://cha0sar.shop"),
  title: "ChaosAR — E-Ticaret Siteniz İçin 3D/AR Ürün Gösterim Çözümü",
  description:
    "Ürünlerinizi müşterilerinize 3D ve AR ile gösterin. Dönüşüm %30 artar, iade %40 azalır. İlk ürününüz ücretsiz — 48 saatte teslim.",
  alternates: {
    canonical: "https://cha0sar.shop/demo",
  },
  openGraph: {
    title: "ChaosAR — Ürünleriniz Ekrandan Çıksın, Sepete Girsin",
    description:
      "E-ticaret siteleri için 3D/AR altyapısı. İlk ürün ücretsiz. Shopify, İkas, Ticimax ile entegre.",
    type: "website",
    locale: "tr_TR",
    url: "https://cha0sar.shop/demo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ChaosAR — E-ticaret için 3D/AR altyapısı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaosAR — E-Ticaret İçin 3D/AR",
    description:
      "İlk ürününüz ücretsiz. +%30 dönüşüm, -%40 iade. 48 saatte teslimat.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cha0sar.shop/#organization",
      name: "ChaosAR",
      url: "https://cha0sar.shop",
      email: "info@cha0sar.com",
      description:
        "E-ticaret siteleri için 3D/AR ürün gösterim altyapısı. Shopify, İkas, Ticimax ve daha fazlasıyla entegre.",
    },
    {
      "@type": "Service",
      "@id": "https://cha0sar.shop/#service",
      name: "3D/AR E-Ticaret Entegrasyonu",
      provider: { "@id": "https://cha0sar.shop/#organization" },
      description:
        "E-ticaret ürünlerinizin profesyonel 3D modellenmesi ve Web AR entegrasyonu.",
      areaServed: "TR",
      serviceType: "3D Modelleme ve Artırılmış Gerçeklik",
      offers: {
        "@type": "Offer",
        description: "İlk ürün ücretsiz demo",
        price: "0",
        priceCurrency: "TRY",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}

        {/* Meta Pixel */}
        {META_PIXEL_ID && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
                (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init','${META_PIXEL_ID}');
                fbq('track','PageView');
              `,
            }}
          />
        )}

        {/* Microsoft Clarity */}
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wjslckwjd2");
            `,
          }}
        />

        {/* Google Analytics 4 */}
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer=window.dataLayer||[];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js',new Date());
                  gtag('config','${GA4_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
