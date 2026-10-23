import { notFound } from "next/navigation";
import { type Metadata } from "next";
import Script from "next/script";
import { locales, type Locale } from "@/data/site";
import GoogleAdsWhatsAppTracker from "@/components/GoogleAdsWhatsAppTracker";

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
      ? "هيكسا باور 9 فرع حي النخيل بالرياض، ضمن شبكة هيكسا باور التي تضم 11 فرعًا داخل المملكة، متخصص في حماية PPF، نانو سيراميك، عازل حراري، تلميع وعناية سيارات."
      : "Hexa Power 9 Al Nakheel branch in Riyadh, part of Hexa Power’s 11-branch network in Saudi Arabia, specializes in PPF, nano ceramic, window film, car polishing, and detailing.",

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
      "هيكسا باور 9 فرع حي النخيل بالرياض، ضمن شبكة هيكسا باور التي تضم 11 فرعًا داخل المملكة، يقدم خدمات حماية PPF، النانو سيراميك، العازل الحراري، تلميع السيارات، والعناية الداخلية والخارجية.",

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
      "Fr 11:00-02:00",
    ],

    priceRange: "$$",

    hasMap:
      "https://www.google.com/maps?cid=12855065691082982779",

    sameAs: [
      "https://www.google.com/maps?cid=12855065691082982779",
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
      {/* Microsoft Clarity */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments);
              };

              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;

              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xohtuln73f");
          `,
        }}
      />

      {/* Google Ads Global Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17990425966"
        strategy="afterInteractive"
      />

      {/* Google Ads Base Configuration */}
      <Script
        id="google-ads-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            window.gtag = function(){
              window.dataLayer.push(arguments);
            };

            window.gtag('js', new Date());

            window.gtag('config', 'AW-17990425966');
          `,
        }}
      />

      {/* TikTok Pixel */}
      <Script
        id="tiktok-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;

              var ttq=w[t]=w[t]||[];

              ttq.methods=[
                "page",
                "track",
                "identify",
                "instances",
                "debug",
                "on",
                "off",
                "once",
                "ready",
                "alias",
                "group",
                "enableCookie",
                "disableCookie",
                "holdConsent",
                "revokeConsent",
                "grantConsent"
              ];

              ttq.setAndDefer=function(t,e){
                t[e]=function(){
                  t.push([
                    e
                  ].concat(
                    Array.prototype.slice.call(arguments,0)
                  ));
                };
              };

              for(
                var i=0;
                i<ttq.methods.length;
                i++
              ){
                ttq.setAndDefer(
                  ttq,
                  ttq.methods[i]
                );
              }

              ttq.instance=function(t){
                for(
                  var e=ttq._i[t]||[],
                  n=0;
                  n<ttq.methods.length;
                  n++
                ){
                  ttq.setAndDefer(
                    e,
                    ttq.methods[n]
                  );
                }

                return e;
              };

              ttq.load=function(e,n){
                var r=
                  "https://analytics.tiktok.com/i18n/pixel/events.js";

                ttq._i=ttq._i||{};
                ttq._i[e]=[];
                ttq._i[e]._u=r;

                ttq._t=ttq._t||{};
                ttq._t[e]=+new Date;

                ttq._o=ttq._o||{};
                ttq._o[e]=n||{};

                n=document.createElement("script");

                n.type="text/javascript";
                n.async=true;
                n.src=r+"?sdkid="+e+"&lib="+t;

                e=document.getElementsByTagName(
                  "script"
                )[0];

                e.parentNode.insertBefore(
                  n,
                  e
                );
              };

              ttq.load(
                'D9DMK1JC77U1ITCMQ0V0'
              );

              ttq.page();

            }(
              window,
              document,
              'ttq'
            );
          `,
        }}
      />

      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              localBusinessSchema
            ),
        }}
      />

      {/* Central WhatsApp Google Ads Conversion Tracking */}
      <GoogleAdsWhatsAppTracker />

      {children}
    </div>
  );
}