import { type Locale } from "@/data/site";

type SEOSectionProps = {
  locale: Locale;
};

export default function SEOSection({ locale }: SEOSectionProps) {
  const isArabic = locale === "ar";

  const services = [
    {
      title: isArabic ? "حماية PPF في الرياض" : "PPF Protection in Riyadh",
      text: isArabic
        ? "نوفر حماية PPF للسيارات لحماية البوية من الخدوش، الحصى، آثار الطريق والعوامل الخارجية، مع تركيب احترافي مخفي الحواف."
        : "We provide PPF paint protection film in Riyadh to protect your car paint from scratches, road chips, and daily driving damage with professional hidden-edge installation.",
    },
    {
      title: isArabic ? "نانو سيراميك للسيارات" : "Nano Ceramic Coating",
      text: isArabic
        ? "خدمة النانو سيراميك تساعد على تعزيز اللمعان، تسهيل التنظيف، وتقليل التصاق الأتربة والمياه على سطح السيارة."
        : "Nano ceramic coating helps enhance gloss, make cleaning easier, and reduce dust and water adhesion on the vehicle surface.",
    },
    {
      title: isArabic ? "عازل حراري وتظليل سيارات" : "Window Film & Heat Rejection",
      text: isArabic
        ? "نوفر عازل حراري للسيارات بدرجات مختلفة يساعد على تقليل الحرارة داخل السيارة مع الحفاظ على الراحة والخصوصية."
        : "We offer automotive window film with different shades to help reduce cabin heat while improving comfort and privacy.",
    },
    {
      title: isArabic ? "تلميع وعناية السيارات" : "Car Polishing & Detailing",
      text: isArabic
        ? "نقدم خدمات تلميع السيارات والعناية الداخلية والخارجية لمعالجة المظهر العام وتجهيز السيارة قبل الحماية."
        : "We provide car polishing and interior/exterior detailing to restore the look of your vehicle and prepare it before protection services.",
    },
  ];

  return (
    <>
      <style>
        {`
          @media (max-width: 900px) {
            .seo-section-container {
              width: min(100%, calc(100% - 28px)) !important;
            }

            .seo-services-grid {
              grid-template-columns: 1fr !important;
            }

            .seo-section-title {
              font-size: 38px !important;
              line-height: 1.25 !important;
            }

            .seo-service-card {
              padding: 24px 20px !important;
            }
          }
        `}
      </style>

      <section
        id="services"
        dir={isArabic ? "rtl" : "ltr"}
        style={{
          background:
            "linear-gradient(180deg, #050505 0%, #0B0204 55%, #050505 100%)",
          color: "white",
          padding: "100px 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="seo-section-container"
          style={{
            width: "min(1120px, calc(100% - 56px))",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "46px" }}>
            <p
              style={{
                margin: "0 0 12px",
                color: "#E50914",
                fontSize: "18px",
                fontWeight: 950,
              }}
            >
              {isArabic ? "خدماتنا في الرياض" : "Our Services in Riyadh"}
            </p>

            <h2
              className="seo-section-title"
              style={{
                margin: 0,
                fontSize: "clamp(34px, 4vw, 58px)",
                lineHeight: 1.18,
                fontWeight: 950,
              }}
            >
              {isArabic
                ? "خدمات حماية وعناية السيارات"
                : "Car Protection & Detailing Services"}
            </h2>

            <p
              style={{
                margin: "18px auto 0",
                maxWidth: "820px",
                color: "#D6D6D6",
                fontSize: "18px",
                lineHeight: 1.9,
                fontWeight: 700,
              }}
            >
              {isArabic
                ? "هيكسا باور 13 فرعًا حي النخيل في الرياض يقدم حلول حماية وعناية السيارات من PPF، النانو سيراميك، العازل الحراري، التلميع، والعناية الداخلية والخارجية."
                : "Hexa Power 9 Al Nakheel branch in Riyadh provides complete car protection and detailing services including PPF, nano ceramic, window film, polishing, and interior/exterior care."}
            </p>
          </div>

          <div
            className="seo-services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {services.map((service) => (
              <article
                key={service.title}
                className="seo-service-card"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "28px",
                  padding: "30px",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
                  boxShadow: "0 20px 80px rgba(0,0,0,0.34)",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 14px",
                    color: "white",
                    fontSize: "24px",
                    lineHeight: 1.35,
                    fontWeight: 950,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#D6D6D6",
                    fontSize: "17px",
                    lineHeight: 1.9,
                    fontWeight: 650,
                  }}
                >
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}