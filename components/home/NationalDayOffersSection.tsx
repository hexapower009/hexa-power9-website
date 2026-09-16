import { type Locale } from "@/data/site";

type NationalDayOffersSectionProps = {
  locale: Locale;
};

export default function NationalDayOffersSection({
  locale,
}: NationalDayOffersSectionProps) {
  const isArabic = locale === "ar";

  const offers = [
    {
      title: isArabic ? "الحماية الكاملة PPF" : "Full PPF Protection",
      subtitle: isArabic
        ? "حماية شاملة للسيارة ضمن عروض اليوم الوطني"
        : "Complete vehicle protection for National Day",
      message: isArabic
        ? "السلام عليكم، أرغب في معرفة تفاصيل عرض اليوم الوطني على الحماية الكاملة PPF."
        : "Hello, I would like to know the details of the National Day offer for full PPF protection.",
    },
    {
      title: isArabic ? "حماية الواجهة" : "Front Protection",
      subtitle: isArabic
        ? "حماية الأجزاء الأكثر عرضة للخدوش والصدمات"
        : "Protection for the most exposed areas of your car",
      message: isArabic
        ? "السلام عليكم، أرغب في معرفة تفاصيل عرض اليوم الوطني على حماية الواجهة."
        : "Hello, I would like to know the details of the National Day offer for front protection.",
    },
    {
      title: isArabic ? "الحماية الربعية" : "Quarter Protection",
      subtitle: isArabic
        ? "حل عملي لحماية مقدمة السيارة"
        : "A practical protection solution for the front of your car",
      message: isArabic
        ? "السلام عليكم، أرغب في معرفة تفاصيل عرض اليوم الوطني على الحماية الربعية."
        : "Hello, I would like to know the details of the National Day offer for quarter protection.",
    },
    {
      title: isArabic ? "العازل الحراري" : "Window Film",
      subtitle: isArabic
        ? "عازل حراري للسيارة ضمن عروض اليوم الوطني"
        : "Premium window film for National Day",
      message: isArabic
        ? "السلام عليكم، أرغب في معرفة تفاصيل عرض اليوم الوطني على العازل الحراري."
        : "Hello, I would like to know the details of the National Day offer for window film.",
    },
  ];

  return (
    <section
      id="national-day-offers"
      style={{
        padding: "70px 20px",
        background:
          "linear-gradient(180deg, #050505 0%, #07120b 50%, #050505 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "42px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,108,53,0.18)",
              marginBottom: "16px",
              fontWeight: 800,
              fontSize: "14px",
            }}
          >
            {isArabic ? "عروض اليوم الوطني 96" : "National Day 96 Offers"}
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px, 5vw, 52px)",
              lineHeight: 1.2,
              fontWeight: 900,
            }}
          >
            {isArabic
              ? "اختَر الحماية المناسبة لسيارتك"
              : "Choose the right protection for your car"}
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "16px auto 0",
              color: "rgba(255,255,255,0.72)",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            {isArabic
              ? "استفد من عروض اليوم الوطني في هيكسا باور 9 فرع حي النخيل. تواصل معنا لمعرفة التفاصيل والباقات المناسبة لسيارتك."
              : "Explore our National Day offers at Hexa Power 9 Al Nakheel branch and contact us to find the right package for your car."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "18px",
          }}
        >
          {offers.map((offer) => {
            const whatsappUrl = `https://wa.me/966597359130?text=${encodeURIComponent(
              offer.message
            )}`;

            return (
              <article
                key={offer.title}
                style={{
                  borderRadius: "24px",
                  padding: "28px",
                  minHeight: "260px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "#b8e7c9",
                      marginBottom: "12px",
                    }}
                  >
                    {isArabic ? "عرض اليوم الوطني" : "National Day Offer"}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: "26px",
                      lineHeight: 1.3,
                      fontWeight: 900,
                    }}
                  >
                    {offer.title}
                  </h3>

                  <p
                    style={{
                      margin: "12px 0 0",
                      color: "rgba(255,255,255,0.68)",
                      lineHeight: 1.7,
                    }}
                  >
                    {offer.subtitle}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "52px",
                    borderRadius: "14px",
                    background: "#25D366",
                    color: "#07120b",
                    textDecoration: "none",
                    fontWeight: 900,
                    fontSize: "16px",
                  }}
                >
                  {isArabic ? "اعرف تفاصيل العرض" : "Get Offer Details"}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}