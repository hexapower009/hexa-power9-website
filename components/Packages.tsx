import { CheckCircle2, Crown, MessageCircle } from "lucide-react";
import type { Dictionary, Locale } from "@/data/dictionaries";
import { whatsappUrl } from "@/lib/contact";
import { SectionHeading } from "@/components/SectionHeading";

export function Packages({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section id="packages" className="py-24">
      <div className="container-page">
        <SectionHeading eyebrow={t.packagesIntro.eyebrow} title={t.packagesIntro.title} subtitle={t.packagesIntro.subtitle} />

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {t.packages.map((pkg, index) => {
            const message = locale === "ar"
              ? `السلام عليكم، وصلت لكم من موقع فرع النخيل وأبغى تفاصيل ${pkg.name}.`
              : `Hello, I came from Hexa Power Al Nakheel website and I would like details about ${pkg.name}.`;
            return (
              <article key={pkg.name} className={`card-border group relative overflow-hidden rounded-[1.6rem] p-6 transition duration-300 hover:-translate-y-2 ${index === 0 ? "red-border lg:-mt-5" : ""}`}>
                <div className="absolute -top-20 start-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-hexa-red/18 blur-3xl transition group-hover:bg-hexa-red/28" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-hexa-red/35 bg-hexa-red/12 px-3 py-1 text-xs font-black text-hexa-red">{pkg.tag}</span>
                    {index === 0 ? <Crown className="text-hexa-red" size={24} /> : <span className="text-2xl font-black text-white/20">0{index + 1}</span>}
                  </div>
                  <h3 className="text-2xl font-black text-white">{pkg.name}</h3>
                  <p className="mt-4 min-h-[96px] text-sm leading-7 text-white/66">{pkg.description}</p>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-white/78">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-hexa-red" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappUrl(message)} target="_blank" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-hexa-red hover:text-white">
                    <MessageCircle size={18} /> {pkg.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
