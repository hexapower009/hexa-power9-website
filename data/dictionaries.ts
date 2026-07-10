export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

const ar = {
  seo: {
    title: "هيكسا باور 9 | حماية PPF وتظليل حراري في حي النخيل الرياض",
    description: "فرع هيكسا باور 9 حي النخيل الرياض: حماية PPF بضمان 10 سنوات، عازل حراري بضمان مدى الحياة، نانو سيراميك وتلميع احترافي."
  },
  nav: {
    packages: "الباقات",
    process: "طريقة التركيب",
    work: "أعمالنا",
    reviews: "التقييمات",
    location: "الموقع",
    english: "English"
  },
  hero: {
    eyebrow: "فرع النخيل - الرياض",
    title: "حماية سيارتك تبدأ من التشطيب الصحيح",
    subtitle: "PPF بضمان 10 سنوات، عازل حراري بضمان مدى الحياة، وتركيب احترافي مع فك القطع للوصول لتغطية أنظف ونتيجة أقرب للوكالة.",
    primary: "راسلنا واتساب",
    secondary: "افتح الموقع على الخريطة",
    call: "اتصل الآن",
    badgeOne: "تقييم Google 5 نجوم",
    badgeTwo: "حجز مخصص لفرع النخيل",
    badgeThree: "تابي وتمارا متاحين",
    whatsappMessage: "السلام عليكم، وصلت لكم من موقع فرع النخيل وأبغى أعرف أنسب باقة حماية لسيارتي."
  },
  trust: [
    { value: "10", label: "سنوات ضمان على PPF" },
    { value: "∞", label: "ضمان مدى الحياة للعازل" },
    { value: "13", label: "فروع داخل المملكة" },
    { value: "5.0", label: "تقييمنا على Google" }
  ],
  packagesIntro: {
    eyebrow: "الباقات الرئيسية",
    title: "اختار مستوى الحماية حسب استخدامك وسيارتك",
    subtitle: "الأسعار سيتم ضبطها ضمن خطة تسعير الشهر القادم، لذلك صممنا الباقات الآن بطريقة مرنة حتى نقدر نضيف أو نغير العرض بدون كسر تصميم الموقع."
  },
  packages: [
    {
      name: "باقة الحماية VIP",
      tag: "الأعلى قيمة",
      description: "مناسبة للسيارات الجديدة والفاخرة والعميل الذي يريد حماية شاملة ومظهر فاخر لأطول مدة.",
      features: ["PPF كامل للسيارة", "حماية للشاشات", "نانو سيراميك داخلي", "نانو سيراميك للجنوط والزجاج", "خدمات مجانية حسب العرض"],
      cta: "اطلب عرض VIP"
    },
    {
      name: "باقة الحماية بريميوم",
      tag: "الأكثر طلبًا",
      description: "حماية قوية لأكثر المناطق تعرضًا للخدوش والاحتكاك مع خدمات عناية داعمة.",
      features: ["صدام أمامي وخلفي", "كبوت ورفارف", "مرايات وكشافات", "أطراف الأبواب", "نانو سيراميك خارجي"],
      cta: "اعرف تفاصيل بريميوم"
    },
    {
      name: "باقة الواجهة الأمامية",
      tag: "حماية مركزة",
      description: "مناسبة للسيارات المستخدمة يوميًا أو السفر، لحماية أكثر الأجزاء مواجهة للطريق.",
      features: ["PPF للواجهة الأمامية", "أجزاء مختارة من السيارة", "نانو سيراميك للجنوط", "ضمان PPF", "فحص بعد التركيب"],
      cta: "اطلب تفاصيل الواجهة"
    },
    {
      name: "باقة العازل الحراري",
      tag: "راحة يومية",
      description: "عازل حراري أمريكي بدرجات مختلفة، مع ضمان مدى الحياة وراحة أعلى داخل السيارة.",
      features: ["تظليل حراري كامل", "درجات وألوان مختلفة", "حماية من الشمس", "مقاوم للخدوش", "ضمان مدى الحياة"],
      cta: "اطلب عرض التظليل"
    }
  ],
  process: {
    eyebrow: "طريقة العمل",
    title: "الفرق الحقيقي يظهر في التفاصيل قبل التسليم",
    subtitle: "مش كل PPF زي بعض. جودة النتيجة تبدأ من تجهيز السطح، فك القطع المطلوبة، إخفاء الأطراف، والمراجعة النهائية.",
    steps: ["استلام وفحص السيارة", "تجهيز السطح والتنظيف", "فك القطع المطلوبة", "تركيب PPF وإخفاء الأطراف", "مراجعة التشطيب", "تسليم ومتابعة بعد التركيب"]
  },
  services: {
    eyebrow: "خدماتنا",
    title: "حماية وعناية متكاملة تحت سقف واحد",
    items: [
      { title: "حماية PPF", text: "فيلم حماية شفاف يحافظ على دهان السيارة من الخدوش والعوامل الخارجية مع ضمان 10 سنوات." },
      { title: "عازل حراري", text: "عازل حراري أمريكي بدرجات متعددة، يحسن الراحة داخل السيارة مع ضمان مدى الحياة." },
      { title: "نانو سيراميك", text: "لمعان قوي، طرد مياه وتقليل التصاق الغبار للهيكل والزجاج والجنوط والداخلية." },
      { title: "تلميع وتنظيف", text: "تلميع داخلي وخارجي وغسيل بخار حسب حالة السيارة لاستعادة المظهر الفاخر." }
    ]
  },
  gallery: {
    eyebrow: "من داخل الفرع",
    title: "صور حقيقية من شغلنا في فرع النخيل",
    subtitle: "استخدمنا صور حقيقية بدل الصور العامة حتى يشوف العميل جودة المكان والتفاصيل قبل ما يتواصل."
  },
  reviews: {
    eyebrow: "ثقة العملاء",
    title: "تقييم Google 5 نجوم",
    subtitle: "نعرض تقييم الفرع كعنصر ثقة رئيسي، ومعه زر مباشر لفتح تقييمات Google Maps والتأكد بنفسك.",
    cta: "شاهد تقييماتنا على Google"
  },
  branch: {
    eyebrow: "فرع النخيل فقط",
    title: "Hexa Power شبكة تضم 13 فرعًا، وحجزك هنا مخصص لفرع النخيل",
    subtitle: "صممنا الموقع حتى يخدم مبيعات فرع النخيل مباشرة: واتساب الفرع، خريطة الفرع، ورسائل حجز واضحة يمكن تتبعها في الحملات.",
    hoursTitle: "ساعات العمل",
    hours: ["السبت - الخميس: 9 صباحًا إلى 2 بعد منتصف الليل", "الجمعة: 1 ظهرًا إلى 2 بعد منتصف الليل"],
    location: "حي النخيل - الرياض",
    directions: "افتح الاتجاهات"
  },
  faq: {
    eyebrow: "أسئلة مهمة",
    title: "قبل ما تحجز حماية سيارتك",
    items: [
      { q: "هل الموقع خاص بفرع النخيل؟", a: "نعم، كل أزرار الحجز والواتساب والخريطة في هذه الصفحة مخصصة لفرع النخيل - الرياض." },
      { q: "هل يتم فك القطع أثناء تركيب PPF؟", a: "حسب حالة السيارة ونوع القطعة، يتم فك بعض القطع للوصول إلى تغطية أفضل وإخفاء الأطراف بطريقة احترافية." },
      { q: "هل أقدر أقسط عبر تابي وتمارا؟", a: "نعم، تابي وتمارا متاحين حسب سياسة مزود الخدمة وقيمة الباقة." },
      { q: "هل الأسعار ثابتة؟", a: "الأسعار تختلف حسب نوع السيارة وحجم الباقة، لذلك نرشح أن يرسل العميل نوع سيارته للحصول على عرض أدق." }
    ]
  },
  footer: {
    text: "Hexa Power 9 - فرع النخيل، الرياض. حماية وعناية سيارات بمعايير فاخرة.",
    whatsapp: "واتساب",
    call: "اتصال",
    maps: "الموقع"
  }
};

const en = {
  seo: {
    title: "Hexa Power 9 | PPF & Window Film in Al Nakheel Riyadh",
    description: "Hexa Power 9 Al Nakheel Riyadh: PPF protection with 10-year warranty, lifetime warranty window film, ceramic coating and premium detailing."
  },
  nav: {
    packages: "Packages",
    process: "Installation",
    work: "Our Work",
    reviews: "Reviews",
    location: "Location",
    english: "العربية"
  },
  hero: {
    eyebrow: "Al Nakheel Branch - Riyadh",
    title: "Protect your car with a finish that looks factory-clean",
    subtitle: "Premium PPF with 10-year warranty, lifetime warranty window film, and professional installation with parts removal when needed for cleaner hidden edges.",
    primary: "WhatsApp Us",
    secondary: "Open Maps",
    call: "Call Now",
    badgeOne: "5-Star Google Rating",
    badgeTwo: "Al Nakheel Booking Only",
    badgeThree: "Tabby & Tamara Available",
    whatsappMessage: "Hello, I came from Hexa Power Al Nakheel website and I would like to know the best protection package for my car."
  },
  trust: [
    { value: "10", label: "Years PPF warranty" },
    { value: "∞", label: "Lifetime window film warranty" },
    { value: "9", label: "Branches in KSA" },
    { value: "5.0", label: "Google rating" }
  ],
  packagesIntro: {
    eyebrow: "Main Packages",
    title: "Choose the protection level that fits your car and usage",
    subtitle: "Package pricing is designed to stay flexible for the upcoming launch, so offers can be updated later without redesigning the website."
  },
  packages: [
    {
      name: "VIP Protection Package",
      tag: "Highest Value",
      description: "Built for new and luxury cars where the owner wants complete protection and a premium finish.",
      features: ["Full car PPF", "Screen protection", "Interior ceramic coating", "Wheels and glass ceramic coating", "Offer-based free services"],
      cta: "Request VIP Offer"
    },
    {
      name: "Premium Protection Package",
      tag: "Most Requested",
      description: "Strong protection for the most exposed areas with additional detailing support.",
      features: ["Front and rear bumper", "Hood and fenders", "Mirrors and headlights", "Door edges", "Exterior ceramic coating"],
      cta: "Get Premium Details"
    },
    {
      name: "Front-End Package",
      tag: "Focused Protection",
      description: "Ideal for daily driving and highway trips, covering the areas most exposed to road damage.",
      features: ["Front-end PPF", "Selected car parts", "Wheels ceramic coating", "PPF warranty", "Post-installation check"],
      cta: "Ask About Front-End"
    },
    {
      name: "Window Film Package",
      tag: "Daily Comfort",
      description: "American window film with different shades, lifetime warranty, and better cabin comfort.",
      features: ["Full window film", "Different shades", "Sun protection", "Scratch resistant", "Lifetime warranty"],
      cta: "Request Tint Offer"
    }
  ],
  process: {
    eyebrow: "Our Process",
    title: "The real difference appears in the details",
    subtitle: "Not all PPF installations are equal. Quality starts from paint preparation, parts removal when needed, hidden edges and final inspection.",
    steps: ["Car intake and inspection", "Surface preparation", "Parts removal when needed", "PPF installation and hidden edges", "Final finish inspection", "Delivery and aftercare follow-up"]
  },
  services: {
    eyebrow: "Services",
    title: "Complete protection and detailing under one roof",
    items: [
      { title: "PPF Protection", text: "Transparent protection film that preserves paint against scratches and external factors with 10-year warranty." },
      { title: "Window Film", text: "American heat-control window film with multiple shades, better comfort and lifetime warranty." },
      { title: "Ceramic Coating", text: "Gloss, water beading and dust resistance for body, glass, wheels and interior surfaces." },
      { title: "Polishing & Steam Cleaning", text: "Interior and exterior detailing based on the car condition to restore a premium finish." }
    ]
  },
  gallery: {
    eyebrow: "Inside the Branch",
    title: "Real work from Al Nakheel branch",
    subtitle: "We use real branch photos so clients can see the place, cars and detailing quality before contacting us."
  },
  reviews: {
    eyebrow: "Client Trust",
    title: "5-Star Google Rating",
    subtitle: "Google rating is displayed as a trust signal with a direct button to view reviews on Google Maps.",
    cta: "View Google Reviews"
  },
  branch: {
    eyebrow: "Al Nakheel Only",
    title: "Hexa Power has 13 branches, and this booking page is dedicated to Al Nakheel",
    subtitle: "This website is built to support Al Nakheel branch sales directly: dedicated WhatsApp, maps and campaign-ready tracking messages.",
    hoursTitle: "Working Hours",
    hours: ["Saturday - Thursday: 9 AM to 2 AM", "Friday: 1 PM to 2 AM"],
    location: "Al Nakheel - Riyadh",
    directions: "Open Directions"
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before booking your protection package",
    items: [
      { q: "Is this website for Al Nakheel branch only?", a: "Yes. All booking, WhatsApp and Maps buttons on this page are dedicated to Al Nakheel branch in Riyadh." },
      { q: "Do you remove parts during PPF installation?", a: "Depending on the car and part type, some parts are removed to achieve cleaner coverage and better hidden edges." },
      { q: "Can I pay with Tabby or Tamara?", a: "Yes, Tabby and Tamara are available depending on provider approval and package value." },
      { q: "Are prices fixed?", a: "Prices depend on the car type and package size, so the best approach is to send your car model for an accurate offer." }
    ]
  },
  footer: {
    text: "Hexa Power 9 - Al Nakheel, Riyadh. Premium automotive protection and detailing.",
    whatsapp: "WhatsApp",
    call: "Call",
    maps: "Maps"
  }
};

export type Dictionary = typeof ar;

export function getDictionary(locale: Locale) {
  return locale === "ar" ? ar : en;
}
