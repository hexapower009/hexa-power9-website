import { type Locale } from "@/data/site";

type GallerySectionProps = {
  locale: Locale;
};

export default function GallerySection({ locale }: GallerySectionProps) {
  const isArabic = locale === "ar";

  const images = [
  {
    src: "/images/gallery/showroom-rear.webp",
    title: isArabic ? "تجهيز وتسليم السيارات" : "Vehicle Preparation & Delivery",
    position: "center center",
  },
  {
    src: "/images/gallery/front-detail.webp",
    title: isArabic ? "تفاصيل الواجهة الأمامية" : "Front-End Details",
    position: "center center",
  },
  {
    src: "/images/gallery/interior-console.webp",
    title: isArabic ? "عناية داخلية دقيقة" : "Precise Interior Care",
    position: "center center",
  },
  {
    src: "/images/gallery/rear-side.webp",
    title: isArabic ? "تفاصيل داخلية فاخرة" : "Luxury Interior Details",
    position: "center center",
  },
  {
    src: "/images/gallery/film-rolls.webp",
    title: isArabic ? "أفلام حماية وعازل حراري" : "PPF & Window Film Materials",
    position: "center center",
  },
  {
    src: "/images/gallery/headlight-detail.webp",
    title: isArabic ? "معالجة وتلميع الكشافات" : "Headlight Restoration & Polishing",
    position: "center center",
  },
  {
    src: "/images/gallery/branch-front.webp",
    title: isArabic ? "فرع حي النخيل - الرياض" : "Al Nakheel Branch - Riyadh",
    position: "center center",
  },
  {
    src: "/images/gallery/red-car-front.webp",
    title: isArabic ? "حماية خارجية ولمعان نهائي" : "Exterior Protection & Final Gloss",
    position: "center center",
  },
];

  return (
    <section
      id="gallery"
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        background: "#050505",
        color: "white",
        padding: "110px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          width: "min(1120px, calc(100% - 56px))",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              margin: "0 0 12px",
              color: "#E50914",
              fontSize: "18px",
              fontWeight: 950,
            }}
          >
            {isArabic ? "من أعمالنا" : "Our Work"}
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 4vw, 58px)",
              lineHeight: 1.18,
              fontWeight: 950,
            }}
          >
            {isArabic ? "شغل حقيقي من داخل الفرع" : "Real Work From Our Branch"}
          </h2>

          <p
            style={{
              margin: "18px auto 0",
              maxWidth: "760px",
              color: "#D6D6D6",
              fontSize: "18px",
              lineHeight: 1.9,
              fontWeight: 700,
            }}
          >
            {isArabic
              ? "صور من تنفيذ وتجهيز السيارات داخل هيكسا باور 9 — فرع حي النخيل في الرياض."
              : "Photos from real vehicle protection and detailing work at Hexa Power 9 — Al Nakheel, Riyadh."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {images.map((image) => (
            <article
              key={image.src}
              style={{
                position: "relative",
                height: "330px",
                borderRadius: "30px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(0,0,0,0.9))",
                boxShadow: "0 24px 90px rgba(0,0,0,0.38)",
              }}
            >
              <img
  src={image.src}
  alt={image.title}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: image.position,
    display: "block",
    padding: "0",
  }}
/>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.02) 35%, rgba(0,0,0,0.76) 100%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: "22px",
                  right: "22px",
                  bottom: "20px",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "22px",
                    lineHeight: 1.35,
                    fontWeight: 950,
                    textShadow: "0 4px 18px rgba(0,0,0,0.65)",
                  }}
                >
                  {image.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}