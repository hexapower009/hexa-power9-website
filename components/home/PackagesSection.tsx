import { siteConfig, type Locale } from "@/data/site";

type PackagesSectionProps = {
  locale: Locale;
};

type PackageItem = {
  title: string;
  tag: string;
  image: string;
  description: string;
  features: string[];
  extras?: string[];
  message: string;
};

export default function PackagesSection({ locale }: PackagesSectionProps) {
  const isArabic = locale === "ar";

  const mainPackages: PackageItem[] = [
    {
      title: isArabic ? "باقة VIP" : "VIP Package",
      tag: isArabic ? "الحماية الأعلى" : "Top Protection",
      image: "/images/gallery/vip-protection.webp",
      description: isArabic
        ? "باقة حماية شاملة للسيارة من الداخل والخارج مع خدمات قيمة مضافة"
        : "A complete interior and exterior protection package with premium added services",
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
        ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى عرض باقة VIP لسيارتي"
        : "Hello, I came from Al Nakheel branch website and I want a quote for the VIP Package",
    },

    {
      title: isArabic
        ? "باقة الحماية بريميوم"
        : "Premium Protection Package",
      tag: isArabic ? "الأكثر طلبًا" : "Most Requested",
      image: "/images/gallery/full-protection.webp",
      description: isArabic
        ? "حماية قوية لأهم أجزاء السيارة مع خدمات عناية تحافظ على المظهر والقيمة"
        : "Strong protection for key vehicle areas with care services that preserve look and value",
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
        ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى عرض باقة الحماية بريميوم لسيارتي"
        : "Hello, I came from Al Nakheel branch website and I want a quote for the Premium Protection Package",
    },

    {
      title: isArabic ? "باقة الواجهة الأمامية" : "Front-End Package",
      tag: isArabic ? "حماية مركزة" : "Focused Protection",
      image: "/images/gallery/front-detail.webp",
      description: isArabic
        ? "مناسبة لحماية أكثر المناطق تعرضًا للحصى والخدوش أثناء القيادة"
        : "Ideal for protecting the most exposed areas from road chips and scratches",
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
        ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى عرض باقة الواجهة الأمامية لسيارتي"
        : "Hello, I came from Al Nakheel branch website and I want a quote for the Front-End Package",
    },

    {
      title: isArabic ? "باقة العازل الحراري" : "Window Film Package",
      tag: isArabic ? "راحة وخصوصية" : "Comfort & Privacy",
      image: "/images/gallery/thermal-tint.webp",
      description: isArabic
        ? "عازل حراري كامل للسيارة بجودة عالية، متوفر بعدة درجات مع ضمان مدى الحياة"
        : "Full vehicle window film with high quality, multiple shades, and lifetime warranty",
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
        ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى عرض باقة العازل الحراري لسيارتي"
        : "Hello, I came from Al Nakheel branch website and I want a quote for the Window Film Package",
    },
  ];

  const carePackages: PackageItem[] = [
    {
      title: isArabic
        ? "باقة تغيير اللون PPF"
        : "Color Change PPF Package",
      tag: isArabic ? "تغيير وحماية" : "Color & Protection",
      image: "/images/gallery/color-change.webp",
      description: isArabic
        ? "غيّر مظهر سيارتك بالكامل مع حماية PPF تجمع بين اللون الجديد والحماية في باقة واحدة"
        : "Transform your vehicle with color-change PPF that combines a new look with premium protection",
      features: isArabic
        ? [
            "تغيير لون كامل السيارة بحماية PPF",
            "PPF أمريكي TPU بضمان 10 سنوات",
            "عازل حراري كامل للسيارة",
            "تلميع داخلي وخارجي",
            "درع للزجاج الأمامي",
            "حماية PPF للشاشات الداخلية",
            "نانو سيراميك داخلي للفرش والمراتب والبلاستيك",
            "نانو سيراميك للجنوط",
            "غسيل تفصيلي",
          ]
        : [
            "Full Vehicle Color Change PPF",
            "American TPU PPF with 10-Year Warranty",
            "Full Vehicle Window Film",
            "Interior & Exterior Polishing",
            "Windshield Protection",
            "Interior Screen PPF Protection",
            "Interior Nano Ceramic",
            "Wheel Nano Ceramic",
            "Detailed Wash",
          ],
      extras: isArabic
        ? [
            "خيار حماية PPF مطفي",
            "إمكانية رش الدواخل بلون الحماية",
            "خدمة تغيير اللون في الاستمارة",
          ]
        : [
            "Matte PPF Option",
            "Interior Color Matching Available",
            "Registration Color Change Service",
          ],
      message: isArabic
        ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى تفاصيل باقة تغيير اللون PPF لسيارتي"
        : "Hello, I came from Al Nakheel branch website and I want details about the Color Change PPF Package",
    },

    {
      title: isArabic ? "باقة التلميع الخارجي" : "Exterior Polishing",
      tag: isArabic ? "استعادة اللمعة" : "Restore the Shine",
      image: "/images/gallery/exterior-polish.webp",
      description: isArabic
        ? "استعد لمعان وأناقة السيارة مع تلميع خارجي احترافي يعيد للطلاء مظهره المميز"
        : "Restore your vehicle's shine with professional exterior polishing for a refined finish",
      features: isArabic
        ? [
            "تلميع خارجي احترافي",
            "استعادة لمعان الطلاء",
            "تحسين مظهر البودي",
            "معالجة آثار الاستخدام السطحية",
            "تنفيذ احترافي داخل مركز هيكسا باور 9",
          ]
        : [
            "Professional Exterior Polishing",
            "Paint Shine Restoration",
            "Enhanced Body Appearance",
            "Treatment of Light Surface Marks",
            "Professional Service at Hexa Power 9",
          ],
      message: isArabic
        ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى تفاصيل باقة التلميع الخارجي لسيارتي"
        : "Hello, I came from Al Nakheel branch website and I want details about the Exterior Polishing Package",
    },

    {
      title: isArabic ? "باقة التلميع الداخلي" : "Interior Detailing",
      tag: isArabic ? "عناية داخلية" : "Interior Care",
      image: "/images/gallery/interior-detailing.webp",
      description: isArabic
        ? "عناية احترافية للمقصورة الداخلية تساعد على استعادة نظافة وأناقة تفاصيل السيارة من الداخل"
        : "Professional interior detailing designed to restore cleanliness and refine every cabin detail",
      features: isArabic
        ? [
            "تنظيف وتلميع داخلي",
            "العناية بالفرش والأجزاء الداخلية",
            "خدمة مخصصة للفرش الجلد",
            "خدمة مخصصة للفرش القماش",
            "تنظيف ومعالجة التفاصيل الداخلية",
          ]
        : [
            "Interior Cleaning & Detailing",
            "Interior Surface Care",
            "Leather Upholstery Service",
            "Fabric Upholstery Service",
            "Detailed Interior Treatment",
          ],
      message: isArabic
        ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى تفاصيل باقة التلميع الداخلي لسيارتي"
        : "Hello, I came from Al Nakheel branch website and I want details about the Interior Detailing Package",
    },

    {
      title: isArabic
        ? "باقة التلميع + النانو سيراميك"
        : "Polishing + Nano Ceramic",
      tag: isArabic ? "عناية متكاملة" : "Complete Care",
      image: "/images/gallery/nano-polish.webp",
      description: isArabic
        ? "باقة عناية متكاملة تجمع بين التلميع والنانو سيراميك للحفاظ على مظهر السيارة من الداخل والخارج"
        : "A complete care package combining polishing and nano ceramic protection inside and out",
      features: isArabic
        ? [
            "تلميع داخلي",
            "تلميع خارجي",
            "نانو سيراميك داخلي",
            "نانو سيراميك خارجي",
            "حماية لمدة 6 أشهر",
          ]
        : [
            "Interior Polishing",
            "Exterior Polishing",
            "Interior Nano Ceramic",
            "Exterior Nano Ceramic",
            "6-Month Protection",
          ],
      message: isArabic
        ? "السلام عليكم، وصلت لكم من موقع فرع حي النخيل وأبغى تفاصيل باقة التلميع والنانو سيراميك لسيارتي"
        : "Hello, I came from Al Nakheel branch website and I want details about the Polishing and Nano Ceramic Package",
    },
  ];

  const getPackageUrl = (message: string) => {
    const phone = siteConfig.contact.whatsappNumber;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const renderPackageCard = (item: PackageItem) => (
    <article key={item.title} className="package-card">
      <div>
        <div className="package-image-wrap">
          <img
            src={item.image}
            alt={item.title}
            className="package-image"
          />

          <div className="package-image-overlay" />

          <span className="image-tag">{item.tag}</span>
        </div>

        <div className="package-content">
          <h3 className="package-title">{item.title}</h3>

          <p className="package-description">
            {item.description}
          </p>

          <ul className="package-features">
            {item.features.map((feature) => (
              <li key={feature}>
                <span className="feature-dot">●</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {item.extras && (
            <div className="extras-box">
              <p className="extras-title">
                {isArabic
                  ? "خيارات إضافية"
                  : "Additional Options"}
              </p>

              <div className="extras-list">
                {item.extras.map((extra) => (
                  <span key={extra}>{extra}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <a
        href={getPackageUrl(item.message)}
        target="_blank"
        rel="noreferrer"
        className="package-button"
      >
        {isArabic
          ? "استفسر عن الباقة"
          : "Ask About This Package"}
      </a>
    </article>
  );

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700;800&display=swap');

          #packages {
            font-family:
              "DIN Next LT Arabic",
              "Alexandria",
              "Segoe UI",
              sans-serif;
          }

          #packages .packages-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
            max-width: 1040px;
            margin-left: auto;
            margin-right: auto;
          }

          #packages .package-card {
            border: 1px solid rgba(255,255,255,0.11);
            border-radius: 30px;
            background:
              linear-gradient(
                145deg,
                rgba(255,255,255,0.075),
                rgba(255,255,255,0.025)
              );
            box-shadow:
              0 25px 85px rgba(0,0,0,0.42),
              inset 0 1px 0 rgba(255,255,255,0.04);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 620px;

            transition:
              transform .28s ease,
              border-color .28s ease,
              box-shadow .28s ease;
          }

          #packages .package-card:hover {
            transform: translateY(-6px);

            border-color:
              rgba(229,9,20,0.35);

            box-shadow:
              0 36px 110px rgba(0,0,0,0.55),
              0 0 55px rgba(229,9,20,0.08);
          }

          #packages .package-image-wrap {
            position: relative;
            height: 260px;
            overflow: hidden;
            background: #090909;
          }

          #packages .package-image {
            width: 100%;
            height: 100%;
            display: block;

            object-fit: cover;
            object-position: center;

            transform: scale(1.01);

            transition:
              transform .55s ease;
          }

          #packages .package-card:hover
          .package-image {
            transform: scale(1.055);
          }

          #packages .package-image-overlay {
            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                180deg,
                rgba(0,0,0,0.02) 0%,
                rgba(0,0,0,0.16) 50%,
                rgba(5,5,5,0.92) 100%
              );
          }

          #packages .image-tag {
            position: absolute;
            top: 18px;
            right: 18px;

            z-index: 2;

            border-radius: 999px;

            padding:
              8px 14px;

            color: #ffffff;

            background:
              rgba(5,5,5,0.67);

            backdrop-filter:
              blur(10px);

            border:
              1px solid
              rgba(255,255,255,0.17);

            font-size: 12px;
            font-weight: 700;
          }

          #packages[dir="ltr"]
          .image-tag {
            right: auto;
            left: 18px;
          }

          #packages .package-content {
            padding:
              27px 29px 0;
          }

          #packages .package-title {
            margin: 0;

            color: #ffffff;

            font-size: 29px;
            line-height: 1.45;

            font-weight: 800;

            letter-spacing:
              -0.4px;
          }

          #packages .package-description {
            margin:
              15px 0 23px;

            color: #cfcfcf;

            font-size: 14px;
            line-height: 2;

            font-weight: 500;
          }

          #packages .package-features {
            list-style: none;

            padding: 0;
            margin: 0;

            display: grid;

            gap: 12px;
          }

          #packages .package-features li {
            display: flex;

            align-items:
              flex-start;

            gap: 10px;

            color: #ededed;

            font-size: 14px;

            line-height: 1.8;

            font-weight: 600;
          }

          #packages .feature-dot {
            color: #e50914;

            font-size: 9px;

            line-height: 2.7;

            flex: 0 0 auto;
          }

          #packages .extras-box {
            margin-top: 24px;

            padding:
              17px 18px;

            border-radius: 18px;

            border:
              1px solid
              rgba(255,255,255,0.09);

            background:
              linear-gradient(
                145deg,
                rgba(255,255,255,0.045),
                rgba(255,255,255,0.018)
              );
          }

          #packages .extras-title {
            margin:
              0 0 10px;

            color: #ffffff;

            font-size: 13px;

            font-weight: 800;
          }

          #packages .extras-list {
            display: grid;
            gap: 7px;
          }

          #packages .extras-list span {
            color: #bdbdbd;

            font-size: 12px;

            line-height: 1.75;

            font-weight: 500;
          }

          #packages .package-button {
            margin:
              28px;

            display: inline-flex;

            align-items: center;
            justify-content: center;

            border-radius:
              999px;

            padding:
              15px 18px;

            background:
              linear-gradient(
                135deg,
                #e50914 0%,
                #b90009 100%
              );

            color: #ffffff;

            text-decoration: none;

            font-size: 14px;

            font-weight: 800;

            box-shadow:
              0 12px 40px
              rgba(229,9,20,0.23);

            transition:
              transform .2s ease,
              box-shadow .2s ease;
          }

          #packages .package-button:hover {
            transform:
              translateY(-2px);

            box-shadow:
              0 18px 48px
              rgba(229,9,20,0.34);
          }

          #packages .section-eyebrow {
            margin:
              0 0 12px;

            color: #e50914;

            font-size: 17px;

            font-weight: 700;
          }

          #packages .section-title {
            margin: 0;

            font-size:
              clamp(34px,4vw,58px);

            line-height: 1.35;

            font-weight: 800;

            letter-spacing:
              -0.7px;
          }

          #packages .section-description {
            margin:
              17px auto 0;

            max-width: 760px;

            color: #c9c9c9;

            font-size: 16px;

            line-height: 2;

            font-weight: 500;
          }

          #packages .care-heading {
            position: relative;

            text-align: center;

            margin:
              110px auto 46px;

            max-width: 850px;
          }

          #packages .care-heading::before {
            content: "";

            display: block;

            width: 70px;
            height: 2px;

            margin:
              0 auto 26px;

            background:
              linear-gradient(
                90deg,
                transparent,
                #e50914,
                transparent
              );
          }

          @media (max-width: 800px) {

            #packages {
              padding:
                75px 0 !important;
            }

            #packages .packages-grid {
              grid-template-columns:
                1fr;
            }

            #packages .package-card {
              min-height: auto;
            }

            #packages .package-image-wrap {
              height: 220px;
            }

            #packages .package-content {
              padding:
                24px 22px 0;
            }

            #packages .package-title {
              font-size: 25px;
            }

            #packages .package-button {
              margin:
                24px 22px 22px;
            }

            #packages .care-heading {
              margin-top: 80px;
            }
          }
        `}
      </style>

      <section
        id="packages"
        dir={isArabic ? "rtl" : "ltr"}
        style={{
          background:
            "linear-gradient(180deg, #050505 0%, #120306 48%, #050505 100%)",
          color: "white",
          padding: "110px 0",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            width:
              "min(1200px, calc(100% - 32px))",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "46px",
            }}
          >
            <p className="section-eyebrow">
              {isArabic
                ? "الباقات الرئيسية"
                : "Main Packages"}
            </p>

            <h2 className="section-title">
              {isArabic
                ? "اختر الباقة المناسبة لسيارتك"
                : "Choose the Right Package for Your Car"}
            </h2>

            <p className="section-description">
              {isArabic
                ? "اختر الباقة المناسبة وسيتم إرسال التفاصيل حسب نوع سيارتك واحتياجها"
                : "Choose the right package and we will send the details based on your car and needs"}
            </p>
          </div>

          <div className="packages-grid">
            {mainPackages.map(
              renderPackageCard
            )}
          </div>

          <div className="care-heading">
            <p className="section-eyebrow">
              {isArabic
                ? "خدمات إضافية لسيارتك"
                : "Additional Car Care Services"}
            </p>

            <h2 className="section-title">
              {isArabic
                ? "باقات العناية وتغيير اللون"
                : "Car Care & Color Change Packages"}
            </h2>

            <p className="section-description">
              {isArabic
                ? "خدمات متخصصة لتغيير مظهر السيارة واستعادة لمعانها والعناية بالتفاصيل الداخلية والخارجية"
                : "Specialized services for transforming your vehicle, restoring its shine, and caring for interior and exterior details"}
            </p>
          </div>

          <div className="packages-grid">
            {carePackages.map(
              renderPackageCard
            )}
          </div>
        </div>
      </section>
    </>
  );
}