import { type CSSProperties } from "react";
import { type Locale } from "@/data/site";

type HeroSectionProps = {
  locale: Locale;
};

export default function HeroSection({ locale }: HeroSectionProps) {
  const isArabic = locale === "ar";

  const phoneCall = "+966597359130";
  const mapUrl = "https://www.google.com/maps?cid=12855065691082982779";

  const instagramUrl =
    "https://www.instagram.com/hexapower_alnakheel?igsh=bGJzMjQxNnh5ZW0z&utm_source=qr";
  const tiktokUrl = "https://vt.tiktok.com/ZSCEgYFCT/";
  const snapchatUrl = "https://snapchat.com/t/R5UCOcbD";

  const whatsappText = encodeURIComponent(
    isArabic
      ? "السلام عليكم، أرغب في معرفة الباقة المناسبة لسيارتي من هيكسا باور 13 فرعًا حي النخيل."
      : "Hello, I would like to know the right package for my car from Hexa Power 9 Al Nakheel branch."
  );

  const whatsappUrl = `https://wa.me/966597359130?text=${whatsappText}`;

  const features = [
    {
      type: "text",
      title: isArabic
        ? "PPF أمريكي TPU بضمان 10 سنوات"
        : "American TPU PPF with 10-Year Warranty",
    },
    {
      type: "text",
      title: isArabic ? "معالجة ذاتية للخدوش" : "Self-Healing Scratches",
    },
    {
      type: "text",
      title: isArabic ? "ضمان مدى الحياة للعازل" : "Lifetime Window Film Warranty",
    },
    {
      type: "rating",
      title: isArabic ? "تقييم Google" : "Google Rating",
    },
    {
      type: "installments",
      title: isArabic ? "تقسيط متاح" : "Installments Available",
    },
    {
      type: "social",
      title: isArabic ? "تابعنا على المنصات" : "Follow Us",
    },
  ];

  return (
    <>
      <style>
        {`
          @media (max-width: 900px) {
            #home.hero-section {
              padding: 165px 0 54px !important;
              min-height: auto !important;
            }

            #home .hero-container {
              width: min(100%, calc(100% - 28px)) !important;
              display: flex !important;
              flex-direction: column !important;
              gap: 28px !important;
            }

            #home .hero-content {
              order: 1 !important;
              max-width: 100% !important;
              padding-top: 0 !important;
              margin-top: 0 !important;
              overflow: visible !important;
            }

            #home .hero-kicker {
              display: block !important;
              visibility: visible !important;
              opacity: 1 !important;
              height: auto !important;
              overflow: visible !important;
              margin: 0 0 18px !important;
              padding: 0 !important;
              color: #ff1f2d !important;
              font-size: 17px !important;
              line-height: 1.6 !important;
              font-weight: 950 !important;
              position: relative !important;
              z-index: 5 !important;
            }

            #home .hero-title {
              font-size: 44px !important;
              line-height: 1.18 !important;
              margin-top: 0 !important;
            }

            #home .hero-description {
              font-size: 18px !important;
              line-height: 1.85 !important;
              max-width: 360px !important;
            }

            #home .hero-actions {
              flex-direction: column !important;
              align-items: center !important;
              gap: 12px !important;
              margin-top: 28px !important;
            }

            #home .hero-actions a {
              width: 100% !important;
              max-width: 310px !important;
            }

            #home .hero-features {
              grid-template-columns: 1fr !important;
              max-width: 340px !important;
              margin-top: 30px !important;
            }

            #home .hero-image-card {
              order: 2 !important;
              width: 100% !important;
              min-height: 420px !important;
              border-radius: 28px !important;
            }

            #home .hero-image-card img {
              min-height: 420px !important;
              height: 420px !important;
              object-fit: cover !important;
              object-position: center !important;
            }
          }
        `}
      </style>

      <section
        id="home"
        className="hero-section"
        dir={isArabic ? "rtl" : "ltr"}
        style={{
          minHeight: "calc(100vh - 90px)",
          background:
            "radial-gradient(circle at top right, rgba(229,9,20,0.22), transparent 34%), linear-gradient(180deg, #120104 0%, #050505 100%)",
          color: "white",
          padding: "92px 0 70px",
          overflow: "hidden",
        }}
      >
        <div
          className="hero-container"
          style={{
            width: "min(1220px, calc(100% - 56px))",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "44px",
            alignItems: "center",
          }}
        >
          <div
            className="hero-image-card"
            style={{
              borderRadius: "38px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 34px 130px rgba(0,0,0,0.55)",
              minHeight: "620px",
              background: "#111",
            }}
          >
            <img
              src="/images/gallery/showroom-rear.webp"
              alt={isArabic ? "هيكسا باور 9" : "Hexa Power 9"}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "620px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div
            className="hero-content"
            style={{
              textAlign: "center",
              maxWidth: "920px",
              margin: "0 auto",
            }}
          >
            <p
              className="hero-kicker"
              style={{
                margin: "0 0 16px",
                color: "#E50914",
                fontSize: "19px",
                fontWeight: 950,
                lineHeight: 1.4,
              }}
            >
              {isArabic
                ? "مركز العناية الشاملة للسيارات"
                : "Premium Automotive Care Center"}
            </p>

            <h1
              className="hero-title"
              style={{
                margin: 0,
                fontSize: "clamp(52px, 6vw, 96px)",
                lineHeight: 1.08,
                fontWeight: 950,
                letterSpacing: "-1px",
              }}
            >
              {isArabic ? (
                <>
                  أفضل مركز <span style={{ color: "white" }}>PPF</span>
                  <br />
                  في الرياض
                </>
              ) : (
                <>
                  Premium PPF
                  <br />
                  in Riyadh
                </>
              )}
            </h1>

            <p
              className="hero-description"
              style={{
                margin: "28px auto 0",
                maxWidth: "880px",
                color: "#F2F2F2",
                fontSize: "22px",
                lineHeight: 1.9,
                fontWeight: 800,
              }}
            >
              {isArabic
                ? "حماية PPF، نانو سيراميك، تلميع، عازل حراري، وعناية داخلية وخارجية لسيارتك."
                : "PPF protection, nano ceramic, polishing, window film, and complete interior and exterior car care."}
            </p>

            <div
              className="hero-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "38px",
                justifyContent: "center",
              }}
            >
              <a href={whatsappUrl} target="_blank" style={primaryButton}>
                {isArabic ? "راسلنا واتساب" : "WhatsApp Us"}
              </a>

              <a href={`tel:${phoneCall}`} style={secondaryButton}>
                {isArabic ? "اتصل الآن" : "Call Now"}
              </a>

              <a href={mapUrl} target="_blank" style={secondaryButton}>
                {isArabic ? "افتح الموقع على الخريطة" : "Open Location"}
              </a>
            </div>

            <div
              className="hero-features"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "14px",
                marginTop: "36px",
                width: "100%",
                maxWidth: "760px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {features.map((feature) => (
                <div key={feature.title} style={featureCard}>
                  {feature.type === "rating" ? (
                    <>
                      <strong style={ratingNumber}>5.0</strong>
                      <span style={stars}>★★★★★</span>
                      <span style={{ marginTop: "5px" }}>{feature.title}</span>
                    </>
                  ) : feature.type === "installments" ? (
                    <>
                      <div style={installmentLogos}>
                        <img
                          src="/images/brand/tamara.png"
                          alt="Tamara"
                          style={logoStyle}
                        />
                        <img
                          src="/images/brand/tabby.png"
                          alt="Tabby"
                          style={logoStyle}
                        />
                      </div>
                      <span>{feature.title}</span>
                    </>
                  ) : feature.type === "social" ? (
                    <>
                      <span style={{ marginBottom: "10px" }}>
                        {feature.title}
                      </span>

                      <div style={socialLinks}>
                        <a
                          href={instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Instagram"
                          style={socialButton}
                        >
                          <InstagramIcon />
                        </a>

                        <a
                          href={tiktokUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="TikTok"
                          style={socialButton}
                        >
                          <TikTokIcon />
                        </a>

                        <a
                          href={snapchatUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Snapchat"
                          style={socialButton}
                        >
                          <SnapchatIcon />
                        </a>
                      </div>
                    </>
                  ) : (
                    <span>{feature.title}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "64px",
  padding: "0 34px",
  borderRadius: "999px",
  background: "#E50914",
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 950,
  boxShadow: "0 20px 60px rgba(229,9,20,0.38)",
};

const secondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "64px",
  padding: "0 30px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 950,
  border: "1px solid rgba(255,255,255,0.18)",
};

const featureCard: CSSProperties = {
  minHeight: "92px",
  padding: "0 16px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.055)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "16px",
  lineHeight: 1.45,
  fontWeight: 950,
};

const ratingNumber: CSSProperties = {
  color: "#E50914",
  fontSize: "28px",
  fontWeight: 950,
  lineHeight: 1,
};

const stars: CSSProperties = {
  color: "#FFD84D",
  fontSize: "18px",
  marginTop: "5px",
  lineHeight: 1,
};

const installmentLogos: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  marginBottom: "7px",
};

const logoStyle: CSSProperties = {
  width: "72px",
  height: "28px",
  objectFit: "contain",
};

const socialLinks: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

const socialButton: CSSProperties = {
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: 950,
};

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2C5.7 4 4 5.7 4 7.8v8.4C4 18.3 5.7 20 7.8 20h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8C20 5.7 18.3 4 16.2 4H7.8Zm4.2 3.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2ZM17.1 6.7a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 2c.3 2.4 1.7 4.1 4.1 4.3v3.1c-1.4.1-2.7-.3-4-1.1v6.1c0 3.8-2.3 6.4-5.9 6.4-3.2 0-5.7-2.3-5.7-5.4 0-3.5 2.7-5.8 6.4-5.5v3.2c-1.7-.3-3.1.5-3.1 2.1 0 1.3 1 2.2 2.3 2.2 1.5 0 2.5-.9 2.5-3.1V2h3.4Z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2c3.1 0 5.1 2.1 5.1 5.2 0 .8-.1 1.6-.1 2.3.2.1.5.1.8.1.6 0 1 .4 1 .9 0 .8-.9 1.2-1.8 1.5.4 1.2 1.3 2.1 2.8 2.7.4.2.6.5.6.9 0 .5-.4.8-.9.9-.7.1-1.3.2-1.8.5-.6.3-.7.8-1.3.8-.5 0-1-.3-1.7-.3-.6 0-1.4.4-2.7.4s-2.1-.4-2.7-.4c-.7 0-1.2.3-1.7.3-.6 0-.7-.5-1.3-.8-.5-.3-1.1-.4-1.8-.5-.5-.1-.9-.4-.9-.9 0-.4.2-.7.6-.9 1.5-.6 2.4-1.5 2.8-2.7-.9-.3-1.8-.7-1.8-1.5 0-.5.4-.9 1-.9.3 0 .6 0 .8-.1 0-.7-.1-1.5-.1-2.3C6.9 4.3 8.9 2.2 12 2.2Z" />
    </svg>
  );
}