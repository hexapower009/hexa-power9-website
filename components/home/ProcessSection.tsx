import { type Locale } from "@/data/site";

type ProcessSectionProps = {
  locale: Locale;
};

export default function ProcessSection({ locale }: ProcessSectionProps) {
  const isArabic = locale === "ar";

  const steps = [
    {
      number: "01",
      title: isArabic ? "فحص السيارة وتجهيز السطح" : "Inspection & Surface Preparation",
      text: isArabic
        ? "نراجع حالة السيارة ونجهّز السطح بعناية قبل التركيب لضمان ثبات طبقة PPF وظهور النتيجة بأعلى جودة."
        : "We inspect the car and prepare the surface carefully before installation to ensure premium PPF adhesion and finishing.",
    },
    {
      number: "02",
      title: isArabic ? "فك الأوكر والمساكات والمرايات" : "Removing Handles, Trims & Mirrors",
      text: isArabic
        ? "يتم فك الأوكر والمساكات والمرايات وبعض الأطراف حسب حاجة السيارة، حتى يدخل PPF تحت الحواف بدون أطراف ظاهرة."
        : "Handles, trims, mirrors, and selected edges are removed when needed so the PPF wraps cleanly under the edges.",
    },
    {
      number: "03",
      title: isArabic ? "تركيب PPF تحت الحواف" : "PPF Installation Under Edges",
      text: isArabic
        ? "نركّب طبقة PPF بدقة على التفاصيل والحواف للحفاظ على شكل السيارة الأصلي وحمايتها من الخدوش والعوامل الخارجية."
        : "We install PPF precisely around details and edges to protect the vehicle while preserving its original look.",
    },
    {
      number: "04",
      title: isArabic ? "فحص الجودة والتشطيب النهائي" : "Final Quality Check",
      text: isArabic
        ? "نراجع الأطراف، الفقاعات، مستوى اللمعان، ونظافة التركيب قبل التسليم للتأكد من جودة النتيجة."
        : "We check edges, bubbles, gloss level, and installation cleanliness before delivery.",
    },
    {
      number: "05",
      title: isArabic ? "تسليم السيارة ومراجعة الضمان" : "Delivery & Warranty Review",
      text: isArabic
        ? "نشرح للعميل طريقة العناية بعد التركيب، تفاصيل الضمان، والمتابعة المناسبة للحفاظ على الحماية."
        : "We explain aftercare instructions, warranty details, and the best follow-up process after installation.",
    },
  ];

  return (
    <section
      id="process"
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        background:
          "linear-gradient(180deg, #050505 0%, #100305 52%, #050505 100%)",
        color: "white",
        padding: "110px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          width: "min(1200px, calc(100% - 32px))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "44px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: "110px",
            border: "1px solid rgba(229,9,20,0.32)",
            borderRadius: "32px",
            padding: "38px",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
            boxShadow: "0 26px 100px rgba(0,0,0,0.42)",
            textAlign: isArabic ? "center" : "left",
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              color: "#E50914",
              fontSize: "18px",
              fontWeight: 900,
            }}
          >
            {isArabic ? "طريقة التركيب" : "Installation Process"}
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 4vw, 58px)",
              lineHeight: 1.18,
              fontWeight: 950,
            }}
          >
            {isArabic ? (
              <>
                تركيب PPF
                <br />
                بدون أطراف ظاهرة
              </>
            ) : (
              <>
                Hidden-Edge
                <br />
                PPF Installation
              </>
            )}
          </h2>

          <p
            style={{
              margin: "22px 0 0",
              color: "#D6D6D6",
              fontSize: "18px",
              lineHeight: 1.9,
              fontWeight: 600,
            }}
          >
            {isArabic
              ? "الفرق الحقيقي في PPF ليس في الفيلم فقط، بل في تجهيز السيارة وطريقة التركيب ودقة إخفاء الأطراف."
              : "The real difference in PPF is not only the film, but the preparation, installation, and hidden-edge finishing."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {steps.map((step) => (
            <article
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: isArabic ? "90px 1fr" : "90px 1fr",
                gap: "20px",
                alignItems: "center",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "28px",
                padding: "26px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
                boxShadow: "0 20px 80px rgba(0,0,0,0.34)",
              }}
            >
              <strong
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#E50914",
                  fontSize: "26px",
                  fontWeight: 950,
                  border: "1px solid rgba(229,9,20,0.42)",
                  background: "rgba(229,9,20,0.08)",
                  boxShadow: "0 0 34px rgba(229,9,20,0.16)",
                }}
              >
                {step.number}
              </strong>

              <div style={{ textAlign: isArabic ? "right" : "left" }}>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "24px",
                    lineHeight: 1.35,
                    fontWeight: 950,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#D6D6D6",
                    fontSize: "16px",
                    lineHeight: 1.9,
                    fontWeight: 600,
                  }}
                >
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}