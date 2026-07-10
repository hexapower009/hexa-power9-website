import { type Locale } from "@/data/site";

type AboutSectionProps = {
  locale: Locale;
};

export default function AboutSection({ locale }: AboutSectionProps) {
  const isArabic = locale === "ar";

  const stats = [
    {
      value: "+500",
      label: isArabic ? "سيارة تم تنفيذها" : "Cars Protected",
    },
    {
      value: "13",
      label: isArabic ? "فرعًا داخل المملكة" : "Branches in Saudi Arabia",
    },
    {
      value: "PPF",
      label: isArabic ? "تركيب احترافي مخفي للحواف" : "Professional Hidden-Edge Installation",
    },
    {
      value: "VIP",
      label: isArabic ? "عناية شاملة للسيارات" : "Premium Car Care",
    },
  ];

  return (
    <section
      id="about"
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
          width: "min(1180px, calc(100% - 56px))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "34px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(229,9,20,0.32)",
            borderRadius: "34px",
            padding: "44px 38px",
            textAlign: "center",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
            boxShadow: "0 26px 100px rgba(0,0,0,0.42)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "430px",
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              color: "#E50914",
              fontSize: "18px",
              fontWeight: 950,
            }}
          >
            {isArabic ? "من نحن؟" : "About Us"}
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(38px, 4vw, 64px)",
              lineHeight: 1.18,
              fontWeight: 950,
            }}
          >
            {isArabic ? (
              <>
                هيكسا باور 9
                <br />
                فرع حي النخيل
              </>
            ) : (
              <>
                Hexa Power 9
                <br />
                Al Nakheel Branch
              </>
            )}
          </h2>

          <p
            style={{
              margin: "26px auto 0",
              color: "#D6D6D6",
              fontSize: "18px",
              lineHeight: 2,
              fontWeight: 700,
              maxWidth: "720px",
            }}
          >
            {isArabic
              ? "مركز متخصص في حماية وعناية السيارات في الرياض، نقدم خدمات PPF، النانو\u00A0سيراميك ، العازل الحراري، التلميع، والعناية الداخلية والخارجية بمعايير تنفيذ عالية تحافظ على قيمة سيارتك ومظهرها."
              : "A specialized car protection and detailing center in Riyadh, offering PPF, nano ceramic, window film, polishing, and full interior and exterior car care with premium finishing."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          {stats.map((item) => (
            <div
              key={item.label}
              style={{
                minHeight: "205px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "28px",
                padding: "26px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
                boxShadow: "0 20px 80px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <strong
                style={{
                  display: "block",
                  color: "#E50914",
                  fontSize: item.value === "PPF" || item.value === "VIP" ? "52px" : "56px",
                  fontWeight: 950,
                  lineHeight: 1,
                  marginBottom: "18px",
                  letterSpacing: item.value === "PPF" || item.value === "VIP" ? "1px" : "0",
                }}
              >
                {item.value}
              </strong>

              <p
                style={{
                  margin: 0,
                  color: "#F1F1F1",
                  fontSize: "17px",
                  fontWeight: 850,
                  lineHeight: 1.7,
                  maxWidth: "220px",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}