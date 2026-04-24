import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F5F1EA",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#B8956A",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "28px",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#0A0908",
            marginBottom: "48px",
            display: "flex",
          }}
        >
          CHAOS
          <span style={{ color: "#B8956A", fontStyle: "italic" }}>AR</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "72px",
            fontWeight: 500,
            color: "#0A0908",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textAlign: "center",
            maxWidth: "900px",
            marginBottom: "32px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          Ürünleriniz ekrandan çıksın,
          <span
            style={{
              color: "#8A6D4A",
              fontStyle: "italic",
              marginLeft: "16px",
            }}
          >
            sepete girsin.
          </span>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "64px",
            marginTop: "16px",
          }}
        >
          {[
            ["+%30", "Dönüşüm Artışı"],
            ["-%40", "Ürün İadesi"],
            ["48sa", "Teslimat"],
          ].map(([num, label]) => (
            <div
              key={label}
              style={{ textAlign: "center", display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  fontFamily: "serif",
                  fontSize: "48px",
                  fontWeight: 600,
                  color: "#B8956A",
                  lineHeight: 1,
                }}
              >
                {num}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#3A3632",
                  marginTop: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom tag */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "15px",
            color: "#8A6D4A",
            letterSpacing: "0.05em",
          }}
        >
          cha0sar.shop
        </div>
      </div>
    ),
    { ...size }
  );
}
