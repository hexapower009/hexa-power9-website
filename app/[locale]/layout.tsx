import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { locales, type Locale } from "@/data/site";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
  metadataBase: new URL("https://hexapoweralnakheel.com"),

  alternates: {
    canonical: `/${locale}`,
    languages: {
      ar: "/ar",
      en: "/en",
      "x-default": "/ar",
    },
  },

    verification: {
      google: "oxTE3OxPSa7oAziMPM4jF7cpA7Wa4nNtN_hBMMNe4vE",
    },
    title: isArabic
      ? "هيكسا باور 9 | مركز PPF وحماية سيارات في الرياض"
      : "Hexa Power 9 | PPF & Car Protection Center in Riyadh",

    description: isArabic
      ? "هيكسا باور 13 فرعًا حي النخيل في الرياض متخصص في حماية PPF، النانو سيراميك، العازل الحراري، تلميع السيارات، والعناية الداخلية والخارجية."
      : "Hexa Power 9 Al Nakheel branch in Riyadh specializes in PPF, nano ceramic, window film, car polishing, and interior and exterior detailing.",

    keywords: isArabic
      ? [
          "PPF الرياض",
          "حماية PPF الرياض",
          "مركز PPF الرياض",
          "نانو سيراميك الرياض",
          "عازل حراري سيارات الرياض",
          "تظليل حراري الرياض",
          "تلميع سيارات الرياض",
          "حماية سيارات الرياض",
          "هيكسا باور 9",
          "حي النخيل الرياض",
        ]
      : [
          "PPF Riyadh",
          "Paint Protection Film Riyadh",
          "Car Protection Riyadh",
          "Nano Ceramic Riyadh",
          "Window Film Riyadh",
          "Car Polishing Riyadh",
          "Car Detailing Riyadh",
          "Hexa Power 9",
          "Al Nakheel Riyadh",
        ],

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dir = locale === "ar" ? "rtl" : "ltr";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Hexa Power 9 - Al Nakheel",
  alternateName: "هيكسا باور 9 - فرع حي النخيل",
  description:
    "مركز متخصص في حماية وعناية السيارات في الرياض يقدم خدمات PPF، النانو سيراميك، العازل الحراري، تلميع السيارات، والعناية الداخلية والخارجية.",
  telephone: "+966597359130",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressRegion: "Riyadh",
    addressCountry: "SA",
    streetAddress: "Al Nakheel District",
  },
  areaServed: {
    "@type": "City",
    name: "Riyadh",
  },
  openingHours: [
    "Sa-Th 09:00-02:00",
    "Fr 13:00-02:00"
  ],
  priceRange: "$$",
  hasMap: "https://www.google.com/maps?cid=12855065691082982779",
  sameAs: [
    "https://www.google.com/maps?cid=12855065691082982779"
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "PPF Paint Protection Film",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Nano Ceramic Coating",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Window Film",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Car Polishing",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Interior and Exterior Car Detailing",
      },
    },
  ],
};

return (
  <div lang={locale} dir={dir}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
    {children}
  </div>
);
}