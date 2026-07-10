import { type Locale } from "@/data/site";

type TrustBarProps = {
  locale: Locale;
};

export default function TrustBar({ locale }: TrustBarProps) {
  const isArabic = locale === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        background: "#050505",
        padding: "28px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          width: "min(1200px, calc(100% - 32px))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "14px",
        }}
      >
        <div style={cardStyle}>
          <strong style={numberStyle}>10</strong>
          <p style={labelStyle}>
            {isArabic ? "سنوات ضمان على PPF" : "Years PPF Warranty"}
          </p>
        </div>

        <div style={cardStyle}>
          <strong style={numberStyle}>∞</strong>
          <p style={labelStyle}>
            {isArabic ? "ضمان مدى الحياة للعازل" : "Lifetime Tint Warranty"}
          </p>
        </div>

        <div style={cardStyle}>
          <strong style={numberStyle}>5.0</strong>
          <div style={{ color: "#FFD84D", fontSize: "18px", marginBottom: "8px" }}>
            ★★★★★
          </div>
          <p style={labelStyle}>
            {isArabic ? "تقييم Google" : "Google Rating"}
          </p>
        </div>

        <div style={cardStyle}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "12px",
              flexWrap: "wrap",
            }}
          >
            <img
              src="/images/brand/tabby.png"
              alt="Tabby"
              style={{
                width: "88px",
                height: "34px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />

            <img
              src="/images/brand/tamara.png"
              alt="Tamara"
              style={{
                width: "96px",
                height: "34px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>

          <p style={labelStyle}>
            {isArabic ? "تقسيط متاح" : "Installments Available"}
          </p>
        </div>
      </div>
    </section>
  );
}

const cardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "22px",
  padding: "22px 18px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
  boxShadow: "0 18px 70px rgba(0,0,0,0.32)",
  textAlign: "center",
  minHeight: "118px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const numberStyle: React.CSSProperties = {
  display: "block",
  color: "#E50914",
  fontSize: "30px",
  fontWeight: 950,
  lineHeight: 1,
  marginBottom: "10px",
};

const labelStyle: React.CSSProperties = {
  margin: 0,
  color: "#E6E6E6",
  fontSize: "14px",
  fontWeight: 800,
  lineHeight: 1.6,
};