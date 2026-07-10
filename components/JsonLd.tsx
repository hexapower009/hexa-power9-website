import type { Locale } from "@/data/dictionaries";
import { mapsUrl, phoneIntl } from "@/lib/contact";

export function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: locale === "ar" ? "هيكسا باور 9 - فرع النخيل" : "Hexa Power 9 - Al Nakheel Branch",
    image: "/images/gallery/showroom-rear.webp",
    telephone: `+${phoneIntl}`,
    url: "https://example.com",
    hasMap: mapsUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ar" ? "الرياض" : "Riyadh",
      addressRegion: locale === "ar" ? "الرياض" : "Riyadh",
      addressCountry: "SA",
      streetAddress: locale === "ar" ? "حي النخيل" : "Al Nakheel"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "02:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "13:00",
        closes: "02:00"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5"
    },
    serviceType: ["Paint Protection Film", "Window Film", "Ceramic Coating", "Polishing", "Steam Cleaning"]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
