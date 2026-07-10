import { type CSSProperties } from "react";
import { type Locale } from "@/data/site";

type ContactSectionProps = {
  locale: Locale;
};

export default function ContactSection({ locale }: ContactSectionProps) {
  const isArabic = locale === "ar";

  const phoneDisplay = "0597359130";
  const phoneCall = "+966597359130";
  const mapUrl = "https://www.google.com/maps?cid=12855065691082982779";

  const whatsappText = encodeURIComponent(
    isArabic
      ? "السلام عليكم، أرغب في معرفة الباقة المناسبة لسيارتي من هيكسا باور 13 فرعًا حي النخيل."
      : "Hello, I would like to know the right package for my car from Hexa Power 9 Al Nakheel branch."
  );

  const whatsappUrl = `https://wa.me/966597359130?text=${whatsappText}`;

  return (
    <section
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        background:
          "radial-gradient(circle at top, rgba(229,9,20,0.18), transparent 34%), linear-gradient(180deg, #050505 0%, #0B0204 100%)",
        color: "white",
        padding: "110px 0 34px",
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
            border: "1px solid rgba(229,9,20,0.28)",
            borderRadius: "36px",
            padding: "46px",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.085), rgba(255,255,255,0.025))",
            boxShadow: "0 30px 120px rgba(0,0,0,0.48)",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "34px",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: isArabic ? "right" : "left" }}>
            <p
              style={{
                margin: "0 0 14px",
                color: "#E50914",
                fontSize: "18px",
                fontWeight: 900,
              }}
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(34px, 4vw, 60px)",
                lineHeight: 1.18,
                fontWeight: 950,
              }}
            >
              {isArabic
                ? "جاهز تحمي سيارتك؟"
                : "Ready to Protect Your Car?"}
            </h2>

            <p
              style={{
                margin: "20px 0 0",
                color: "#D6D6D6",
                fontSize: "18px",
                lineHeight: 1.9,
                fontWeight: 600,
                maxWidth: "720px",
              }}
            >
              {isArabic
                ? "راسلنا بصورة سيارتك ونوع الخدمة المطلوبة، ونرسل لك الباقة الأنسب حسب نوع السيارة واحتياجها."
                : "Send us your car photo and the service you need, and we will share the right package based on your vehicle and needs."}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "32px",
                justifyContent: isArabic ? "flex-start" : "flex-start",
              }}
            >
              <a href={whatsappUrl} target="_blank" style={primaryButton}>
                {isArabic ? "راسلنا واتساب" : "WhatsApp Us"}
              </a>

              <a href={`tel:${phoneCall}`} style={secondaryButton}>
                {isArabic ? "اتصال مباشر" : "Call Now"}
              </a>

              <a href={mapUrl} target="_blank" style={secondaryButton}>
                {isArabic ? "موقع الفرع" : "Branch Location"}
              </a>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "30px",
              padding: "30px",
              background: "rgba(0,0,0,0.32)",
            }}
          >
            <InfoItem
              title={isArabic ? "الفرع" : "Branch"}
              value={
                isArabic
                  ? "هيكسا باور 9 - حي النخيل، الرياض"
                  : "Hexa Power 9 - Al Nakheel, Riyadh"
              }
            />

            <InfoItem
              title={isArabic ? "رقم التواصل" : "Phone"}
              value={phoneDisplay}
            />

            <InfoItem
              title={isArabic ? "ساعات العمل" : "Working Hours"}
              value={
                isArabic
                  ? "يوميًا من 9 صباحًا إلى 2 صباحًا، والجمعة من 1 ظهرًا"
                  : "Daily from 9 AM to 2 AM, Friday from 1 PM"
              }
            />

            <InfoItem
              title={isArabic ? "التقسيط" : "Installments"}
              value={isArabic ? "متاح عبر تابي وتمارا" : "Available via Tabby & Tamara"}
              last
            />
          </div>
        </div>

        <footer
          style={{
            marginTop: "34px",
            paddingTop: "26px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            gap: "18px",
            flexWrap: "wrap",
            color: "#AFAFAF",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          <span>
            {isArabic
              ? "© هيكسا باور 9 - فرع حي النخيل"
              : "© Hexa Power 9 - Al Nakheel Branch"}
          </span>

          <span>
            {isArabic
              ? "PPF • نانو سيراميك • عازل حراري • تلميع"
              : "PPF • Nano Ceramic • Window Film • Polishing"}
          </span>
        </footer>
      </div>
    </section>
  );
}

function InfoItem({
  title,
  value,
  last,
}: {
  title: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        paddingBottom: last ? 0 : "20px",
        marginBottom: last ? 0 : "20px",
        borderBottom: last ? "none" : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <p
        style={{
          margin: "0 0 8px",
          color: "#E50914",
          fontSize: "15px",
          fontWeight: 900,
        }}
      >
        {title}
      </p>

      <p
        style={{
          margin: 0,
          color: "white",
          fontSize: "18px",
          lineHeight: 1.7,
          fontWeight: 800,
        }}
      >
        {value}
      </p>
    </div>
  );
}

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "54px",
  padding: "0 26px",
  borderRadius: "999px",
  background: "#E50914",
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
  fontWeight: 900,
  boxShadow: "0 18px 50px rgba(229,9,20,0.34)",
};

const secondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "54px",
  padding: "0 24px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
  fontWeight: 900,
  border: "1px solid rgba(255,255,255,0.16)",
};