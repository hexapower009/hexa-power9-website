import { type Locale } from "@/data/site";

type FAQSectionProps = {
  locale: Locale;
};

export default function FAQSection({ locale }: FAQSectionProps) {
  const isArabic = locale === "ar";

  const faqs = [
    {
      question: isArabic ? "هل PPF عليه ضمان؟" : "Does PPF come with warranty?",
      answer: isArabic
        ? "نعم، ضمان PPF لمدة 10 سنوات ضد الاصفرار والبهتان ومشاكل الفيلم حسب شروط الضمان."
        : "Yes, PPF comes with a 10-year warranty against yellowing, fading, and film-related issues according to warranty terms.",
    },
    {
      question: isArabic
        ? "هل يتم فك الأوكر والمرايات أثناء التركيب؟"
        : "Do you remove handles and mirrors during installation?",
      answer: isArabic
        ? "نعم، يتم فك الأوكر والمساكات والمرايات وبعض الأطراف حسب حاجة السيارة، حتى يدخل PPF تحت الحواف بدون أطراف ظاهرة."
        : "Yes, handles, trims, mirrors, and selected edges are removed when needed so the PPF wraps under the edges with no visible film lines.",
    },
    {
      question: isArabic
        ? "هل العازل الحراري عليه ضمان؟"
        : "Does window film come with warranty?",
      answer: isArabic
        ? "نعم، العازل الحراري عليه ضمان مدى الحياة، مع توفر درجات مختلفة تناسب احتياجك."
        : "Yes, window film comes with a lifetime warranty, with different shades available based on your needs.",
    },
    {
      question: isArabic
        ? "هل متاح التقسيط عبر تابي وتمارا؟"
        : "Are Tabby and Tamara available?",
      answer: isArabic
        ? "نعم، التقسيط متاح عبر تابي وتمارا لتسهيل اختيار الباقة المناسبة لسيارتك."
        : "Yes, installments are available through Tabby and Tamara to make it easier to choose the right package for your car.",
    },
    {
      question: isArabic
        ? "هل السعر يختلف حسب نوع السيارة؟"
        : "Does the price change based on the car?",
      answer: isArabic
        ? "نعم، السعر يختلف حسب حجم السيارة، نوع الباقة، وحالة السيارة قبل التنفيذ. راسلنا بصورة السيارة ونرسل لك العرض المناسب."
        : "Yes, pricing depends on the car size, selected package, and vehicle condition before installation. Send us a photo of your car and we will share the right offer.",
    },
    {
      question: isArabic
        ? "هل إزالة PPF تترك أثر على البوية؟"
        : "Does removing PPF affect the paint?",
      answer: isArabic
        ? "عند إزالة PPF بطريقة احترافية لا يترك أثر على البوية الأصلية، بشرط أن تكون البوية بحالة جيدة قبل التركيب."
        : "When removed professionally, PPF does not leave residue on the original paint, provided the paint was in good condition before installation.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section
        id="faq"
        dir={isArabic ? "rtl" : "ltr"}
        style={{
          background:
            "linear-gradient(180deg, #050505 0%, #0B0204 55%, #050505 100%)",
          color: "white",
          padding: "110px 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            width: "min(1000px, calc(100% - 32px))",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                margin: "0 0 12px",
                color: "#E50914",
                fontSize: "18px",
                fontWeight: 900,
              }}
            >
              {isArabic ? "الأسئلة الشائعة" : "FAQ"}
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(34px, 4vw, 58px)",
                lineHeight: 1.18,
                fontWeight: 950,
              }}
            >
              {isArabic ? "قبل ما تختار الباقة" : "Before Choosing Your Package"}
            </h2>

            <p
              style={{
                margin: "18px auto 0",
                maxWidth: "720px",
                color: "#D6D6D6",
                fontSize: "18px",
                lineHeight: 1.9,
                fontWeight: 600,
              }}
            >
              {isArabic
                ? "إجابات سريعة على أهم الأسئلة قبل تركيب PPF أو العازل الحراري أو النانو سيراميك."
                : "Quick answers to the most common questions before installing PPF, window film, or nano ceramic."}
            </p>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "24px",
                  padding: "0 24px",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
                  boxShadow: "0 18px 70px rgba(0,0,0,0.3)",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    padding: "24px 0",
                    fontSize: "21px",
                    lineHeight: 1.5,
                    fontWeight: 950,
                    color: "white",
                  }}
                >
                  {faq.question}
                </summary>

                <p
                  style={{
                    margin: "0 0 24px",
                    color: "#D6D6D6",
                    fontSize: "17px",
                    lineHeight: 1.9,
                    fontWeight: 600,
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}