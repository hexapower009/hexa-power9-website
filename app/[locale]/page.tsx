import { getWhatsAppUrl, siteConfig, type Locale } from "@/data/site";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import PackagesSection from "@/components/home/PackagesSection";
import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
import ProcessSection from "@/components/home/ProcessSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import StickyWhatsApp from "@/components/home/StickyWhatsApp";
import SEOSection from "@/components/home/SEOSection";
type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const isArabic = currentLocale === "ar";

  return (
    <main className="min-h-screen bg-hexa-black text-white">
    <Header locale={currentLocale} />
<HeroSection locale={currentLocale} />
<PackagesSection locale={currentLocale} />
<GallerySection locale={currentLocale} />
<AboutSection locale={currentLocale} />
<SEOSection locale={currentLocale} />
<ProcessSection locale={currentLocale} /> 
<FAQSection locale={currentLocale} />
<ContactSection locale={currentLocale} />
<StickyWhatsApp locale={currentLocale} />
    </main>
  );
}