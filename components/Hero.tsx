import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import type { Dictionary, Locale } from "@/data/dictionaries";
import { callUrl, mapsUrl, whatsappUrl } from "@/lib/contact";

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const wa = whatsappUrl(t.hero.whatsappMessage);

  return (
    <section className="noise relative min-h-screen overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/showroom-rear.webp"
          alt="Hexa Power Al Nakheel premium car protection showroom"
          fill
          priority
          className="object-cover opacity-42"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-hexa-black" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-black/90" />
      </div>

      <div className="container-page relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hexa-red/40 bg-hexa-red/10 px-4 py-2 text-sm font-bold text-white shadow-redGlow">
            <MapPin size={17} className="text-hexa-red" /> {t.hero.eyebrow}
          </div>

          <h1 className="metal-text max-w-4xl text-5xl font-black leading-[1.12] md:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/76 md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={wa} target="_blank" className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-hexa-red px-7 py-4 text-base font-black text-white shadow-redGlow transition hover:-translate-y-1 hover:bg-red-600">
              <MessageCircle size={22} /> {t.hero.primary} <Arrow size={18} className="transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
            <a href={mapsUrl} target="_blank" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-7 py-4 text-base font-black text-white backdrop-blur transition hover:border-hexa-red hover:bg-white/12">
              <MapPin size={22} /> {t.hero.secondary}
            </a>
            <a href={callUrl} className="inline-flex items-center justify-center gap-3 rounded-2xl border border-hexa-red/35 px-7 py-4 text-base font-black text-white transition hover:bg-hexa-red">
              <Phone size={21} /> {t.hero.call}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[t.hero.badgeOne, t.hero.badgeTwo, t.hero.badgeThree].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/42 p-4 text-sm font-bold text-white/82 backdrop-blur">
                <ShieldCheck className="mb-2 text-hexa-red" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 rounded-full bg-hexa-red/20 blur-3xl" />
          <div className="card-border red-border relative overflow-hidden rounded-[2rem] p-4 float-soft">
            <Image
              src="/images/gallery/front-detail.webp"
              alt="Premium car protection detail"
              width={760}
              height={1040}
              className="h-[620px] w-full rounded-[1.5rem] object-cover"
              priority
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/62 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Sparkles className="text-hexa-red" />
                <p className="text-lg font-black">PPF • Window Film • Ceramic</p>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-hexa-red to-transparent pulse-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
