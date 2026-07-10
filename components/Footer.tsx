import Image from "next/image";
import type { Dictionary, Locale } from "@/data/dictionaries";
import { callUrl, mapsUrl, whatsappUrl } from "@/lib/contact";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <footer className="border-t border-white/10 bg-black py-12 pb-28 md:pb-12">
      <div className="container-page flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-4 text-center md:text-start">
          <Image src="/images/brand/logo-dark.png" alt="Hexa Power" width={150} height={50} className="h-12 w-auto object-contain" />
          <p className="max-w-md text-sm leading-7 text-white/62">{t.footer.text}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm font-black">
          <a href={whatsappUrl(t.hero.whatsappMessage)} target="_blank" className="rounded-full bg-hexa-red px-5 py-3 text-white">{t.footer.whatsapp}</a>
          <a href={callUrl} className="rounded-full border border-white/12 px-5 py-3 text-white/78">{t.footer.call}</a>
          <a href={mapsUrl} target="_blank" className="rounded-full border border-white/12 px-5 py-3 text-white/78">{t.footer.maps}</a>
          <a href={`/${locale === "ar" ? "en" : "ar"}`} className="rounded-full border border-hexa-red/40 px-5 py-3 text-white/78">{t.nav.english}</a>
        </div>
      </div>
    </footer>
  );
}
