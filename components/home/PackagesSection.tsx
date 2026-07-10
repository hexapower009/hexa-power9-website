import { siteConfig, type Locale } from "@/data/site";

type PackagesSectionProps = {
  locale: Locale;
};

export default function PackagesSection({ locale }: PackagesSectionProps) {
  const isArabic = locale === "ar";

  const packages = [
  {
    title: isArabic ? "باقة VIP" : "VIP Package",
    tag: isArabic ? "الحماية الأعلى" : "Top Protection",
    description: isArabic
      ? "باقة حماية شاملة للسيارة من الداخل والخارج مع خدمات قيمة مضافة."
      : "A complete interior and exterior protection package with premium added services.",
    features: isArabic
      ? [
          "PPF كامل للسيارة",
          "حماية PPF للشاشات",
          "نانو سيراميك داخلي",
          "نانو سيراميك خارجي للزجاج والجنوط",
          "عازل حراري كامل",
          "درع زجاج أمامي",
          "تلبيس وطبات دعاسات",
          "استبدال مجاني لأول قطعة PPF متضررة حتى في حال سوء الاستخدام",
        ]
      : [
          "Full Vehicle PPF",
          "PPF Screen Protection",
          "Interior Nano Ceramic",
          "Exterior Nano for Glass & Wheels",
          "Full Window Film",
          "Windshield Protection",
          "Floor Mats & Door Sill Covers",
          "Free replacement for the first damaged PPF piece, even in misuse cases",
        ],
    message: isArabic
      ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى عرض باقة VIP لسيارتي."
      : "Hello, I came from Al Nakheel branch website and I want a quote for the VIP Package.",
  },
  {
    title: isArabic ? "باقة الحماية بريميوم" : "Premium Protection Package",
    tag: isArabic ? "الأكثر طلبًا" : "Most Requested",
    description: isArabic
      ? "حماية قوية لأهم أجزاء السيارة مع خدمات عناية تحافظ على المظهر والقيمة."
      : "Strong protection for key vehicle areas with care services that preserve look and value.",
    features: isArabic
      ? [
          "PPF للواجهة والأجزاء المهمة",
          "الصدام الأمامي والخلفي",
          "الكبوت والرفارف",
          "الكشافات والمرايات",
          "فتحات الأبواب والأطراف",
          "نانو سيراميك خارجي",
          "استبدال مجاني لأول قطعة PPF متضررة حتى في حال سوء الاستخدام",
        ]
      : [
          "PPF for key exterior areas",
          "Front & Rear Bumpers",
          "Hood & Fenders",
          "Headlights & Mirrors",
          "Door Edges & Sensitive Areas",
          "Exterior Nano Ceramic",
          "Free replacement for the first damaged PPF piece, even in misuse cases",
        ],
    message: isArabic
      ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى عرض باقة الحماية بريميوم لسيارتي."
      : "Hello, I came from Al Nakheel branch website and I want a quote for the Premium Protection Package.",
  },
  {
    title: isArabic ? "باقة الواجهة الأمامية" : "Front-End Package",
    tag: isArabic ? "حماية مركزة" : "Focused Protection",
    description: isArabic
      ? "مناسبة لحماية أكثر المناطق تعرضًا للحصى والخدوش أثناء القيادة."
      : "Ideal for protecting the most exposed areas from road chips and scratches.",
    features: isArabic
      ? [
          "ربع كبوت",
          "ربع رفارف",
          "صدام أمامي",
          "السقف الأمامي 10 سم",
          "الكشافات",
          "المرايات",
          "نانو سيراميك للجنوط",
        ]
      : [
          "Quarter Hood",
          "Quarter Fenders",
          "Front Bumper",
          "Front Roof Strip 10 cm",
          "Headlights",
          "Mirrors",
          "Nano Ceramic for Wheels",
        ],
    message: isArabic
      ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى عرض باقة الواجهة الأمامية لسيارتي."
      : "Hello, I came from Al Nakheel branch website and I want a quote for the Front-End Package.",
  },
  {
    title: isArabic ? "باقة العازل الحراري" : "Window Film Package",
    tag: isArabic ? "راحة وخصوصية" : "Comfort & Privacy",
    description: isArabic
      ? "عازل حراري كامل للسيارة بجودة عالية، متوفر بعدة درجات مع ضمان مدى الحياة."
      : "Full vehicle window film with high quality, multiple shades, and lifetime warranty.",
    features: isArabic
      ? [
          "عازل حراري كامل للسيارة",
          "متوفر بجميع الدرجات",
          "حماية من الحرارة",
          "راحة وخصوصية أعلى",
          "ضمان مدى الحياة",
          "تركيب احترافي",
        ]
      : [
          "Full Vehicle Window Film",
          "Available in Multiple Shades",
          "Heat Protection",
          "More Comfort & Privacy",
          "Lifetime Warranty",
          "Professional Installation",
        ],
    message: isArabic
      ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى عرض باقة العازل الحراري لسيارتي."
      : "Hello, I came from Al Nakheel branch website and I want a quote for the Window Film Package.",
  },
];

  const getPackageUrl = (message: string) => {
    const phone = siteConfig.contact.phoneInternational;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="packages"
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        background:
          "linear-gradient(180deg, #050505 0%, #120306 48%, #050505 100%)",
        color: "white",
        padding: "110px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          width: "min(1200px, calc(100% - 32px))",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "46px",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              color: "#E50914",
              fontSize: "18px",
              fontWeight: 900,
            }}
          >
            {isArabic ? "الباقات الرئيسية" : "Main Packages"}
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 4vw, 58px)",
              lineHeight: 1.18,
              fontWeight: 950,
            }}
          >
            {isArabic
              ? "اختر الباقة المناسبة لسيارتك"
              : "Choose the Right Package for Your Car"}
          </h2>

          <p
            style={{
              margin: "18px auto 0",
              maxWidth: "760px",
              color: "#D6D6D6",
              fontSize: "18px",
              lineHeight: 1.9,
              fontWeight: 600,
            }}
          >
            {isArabic
              ? "اختر الباقة المناسبة، وسيتم إرسال التفاصيل حسب نوع سيارتك واحتياجها."
              : "Choose the right package and we will send the details based on your car and needs."}
          </p>
        </div>

        <div
          style={{
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "22px",
  maxWidth: "980px",
  marginLeft: "auto",
  marginRight: "auto",
}}
        >
          {packages.map((item) => (
            <article
              key={item.title}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "28px",
                padding: "28px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
                boxShadow: "0 24px 90px rgba(0,0,0,0.36)",
                minHeight: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    border: "1px solid rgba(229,9,20,0.45)",
                    borderRadius: "999px",
                    padding: "8px 13px",
                    color: "#E50914",
                    fontSize: "13px",
                    fontWeight: 900,
                    marginBottom: "18px",
                  }}
                >
                  {item.tag}
                </span>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "28px",
                    lineHeight: 1.25,
                    fontWeight: 950,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "16px 0 22px",
                    color: "#D6D6D6",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    fontWeight: 600,
                  }}
                >
                  {item.description}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gap: "12px",
                  }}
                >
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "#E6E6E6",
                        fontSize: "14px",
                        fontWeight: 800,
                      }}
                    >
                      <span style={{ color: "#E50914" }}>●</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getPackageUrl(item.message)}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: "28px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  borderRadius: "999px",
                  padding: "14px 18px",
                  background: "#E50914",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 950,
                  boxShadow: "0 0 30px rgba(229,9,20,0.35)",
                }}
              >
                {isArabic ? "اطلب عرض لسيارتك" : "Request a Quote"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}