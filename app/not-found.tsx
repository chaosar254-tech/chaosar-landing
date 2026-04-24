import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0908",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
        fontFamily: "var(--font-inter, system-ui, sans-serif)",
      }}
    >
      <p
        style={{
          fontSize: "13px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#B8956A",
          fontWeight: 600,
          marginBottom: "24px",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-fraunces, Georgia, serif)",
          fontSize: "clamp(40px, 8vw, 80px)",
          fontWeight: 500,
          color: "#F5F1EA",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          marginBottom: "20px",
        }}
      >
        Sayfa <em style={{ color: "#B8956A", fontStyle: "italic" }}>bulunamadı.</em>
      </h1>
      <p
        style={{
          fontSize: "17px",
          color: "rgba(245,241,234,0.55)",
          maxWidth: "400px",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.
      </p>
      <Link
        href="/"
        style={{
          background: "#B8956A",
          color: "#0A0908",
          padding: "16px 32px",
          borderRadius: "999px",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: 700,
          transition: "opacity 0.2s",
        }}
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
