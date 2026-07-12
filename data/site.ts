export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const siteConfig = {
  name: "Hexa Power 9",
  brandName: "Hexa Power",
  branchName: {
    ar: "فرع النخيل",
    en: "Al Nakheel Branch",
  },

  location: {
    ar: "حي النخيل، الرياض",
    en: "Al Nakheel, Riyadh",
  },

  branchesCount: 9,

  contact: {
    phoneDisplay: "0597359130",
    phoneInternational: "+966597359130",
    whatsappNumber: "966597359130",
    whatsappMessage: {
  ar: "السلام عليكم، أرغب في معرفة أفضل باقة حماية مناسبة لسيارتي من هيكسا باور 9 فرع حي النخيل.",
  en: "Hello, I would like to know the best protection package for my car from Hexa Power 9 Al Nakheel branch.",
},
    mapUrl: "https://maps.app.goo.gl/pjUnApf4jnXYPTXx5",
  },

  workingHours: {
    ar: {
      normalDays: "من 9 صباحاً إلى 2 بعد منتصف الليل",
      friday: "الجمعة من 1 ظهراً إلى 2 بعد منتصف الليل",
    },
    en: {
      normalDays: "9:00 AM to 2:00 AM",
      friday: "Friday: 1:00 PM to 2:00 AM",
    },
  },

  payment: {
    methods: ["Tabby", "Tamara"],
    ar: "متاح التقسيط عبر تابي وتمارا",
    en: "Installments available through Tabby and Tamara",
  },

  socialProof: {
    googleRating: "5.0",
    ar: "تقييم Google",
    en: "Google Rating",
  },

  guarantees: {
    ppf: {
      ar: "ضمان 10 سنوات على PPF",
      en: "10-year warranty on PPF",
    },
    tint: {
      ar: "ضمان مدى الحياة على العازل الحراري",
      en: "Lifetime warranty on window film",
    },
  },
};

export const getWhatsAppUrl = (locale: Locale = defaultLocale) => {
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage[locale]);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;
};