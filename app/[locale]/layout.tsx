import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { locales, type Locale } from "@/data/site";
import Script from "next/script";

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
  ? "PPF الرياض | حماية سيارات ونانو سيراميك | هيكسا باور 9 النخيل"
  : "PPF Riyadh | Car Protection & Nano Ceramic | Hexa Power 9",

description: isArabic
  ? "هيكسا باور 9 فرع حي النخيل بالرياض، ضمن شبكة هيكسا باور التي تضم 13 فرعًا داخل المملكة، متخصص في حماية PPF، نانو سيراميك، عازل حراري، تلميع وعناية سيارات."
  : "Hexa Power 9 Al Nakheel branch in Riyadh, part of Hexa Power’s 13-branch network in Saudi Arabia, specializes in PPF, nano ceramic, window film, car polishing, and detailing.",

keywords: isArabic
  ? [
      "PPF الرياض",
      "بي بي اف الرياض",
      "حماية PPF الرياض",
      "حماية سيارات الرياض",
      "حماية واجهة السيارة",
      "تغليف حماية السيارة",
      "افضل مركز PPF في الرياض",
      "نانو سيراميك الرياض",
      "عازل حراري سيارات الرياض",
      "تظليل حراري الرياض",
      "تلميع سيارات الرياض",
      "عناية سيارات الرياض",
      "هيكسا باور 9",
      "هيكسا باور النخيل",
      "حي النخيل الرياض",
    ]
  : [
      "PPF Riyadh",
      "Paint Protection Film Riyadh",
      "Car Protection Riyadh",
      "Best PPF Center Riyadh",
      "Nano Ceramic Riyadh",
      "Window Film Riyadh",
      "Car Polishing Riyadh",
      "Car Detailing Riyadh",
      "Hexa Power 9",
      "Hexa Power Al Nakheel",
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
  "هيكسا باور 9 فرع حي النخيل بالرياض، ضمن شبكة هيكسا باور التي تضم 13 فرعًا داخل المملكة، يقدم خدمات حماية PPF، النانو سيراميك، العازل الحراري، تلميع السيارات، والعناية الداخلية والخارجية.",
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
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=AW-17990425966"
      strategy="afterInteractive"
    />

    <Script id="google-ads-tag" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17990425966');
      `}
    </Script>

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