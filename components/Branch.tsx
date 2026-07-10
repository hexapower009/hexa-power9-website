import Image from "next/image";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import type { Dictionary } from "@/data/dictionaries";
import { callUrl, mapsUrl, phoneDisplay } from "@/lib/contact";
import { SectionHeading } from "@/components/SectionHeading";

export function Branch({ t }: { t: Dictionary }) {
  return (
    <section id="location" className="py-24">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10">
          <Image src="/images/gallery/branch-side.webp" alt="Hexa Power Al Nakheel branch" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/62 p-5 backdrop-blur-xl">
            <p className="flex items-center gap-2 text-lg font-black"><MapPin className="text-hexa-red" /> {t.branch.location}</p>
          </div>
        </div>
        <div className="card-border rounded-[2rem] p-8 md:p-10">
          <SectionHeading eyebrow={t.branch.eyebrow} title={t.branch.title} subtitle={t.branch.subtitle} center={false} />
          <div className="mt-9 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-4 flex items-center gap-3 text-xl font-black"><Clock className="text-hexa-red" /> {t.branch.hoursTitle}</h3>
              {t.branch.hours.map((h) => <p key={h} className="mt-2 text-white/70">{h}</p>)}
            </div>
            <a href={mapsUrl} target="_blank" className="flex items-center justify-between gap-4 rounded-2xl bg-hexa-red px-6 py-4 font-black text-white transition hover:bg-red-600">
              <span className="flex items-center gap-3"><Navigation /> {t.branch.directions}</span>
              <span className="text-white/75">↗</span>
            </a>
            <a href={callUrl} className="flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/5 px-6 py-4 font-black text-white transition hover:border-hexa-red">
              <span className="flex items-center gap-3"><Phone className="text-hexa-red" /> {phoneDisplay}</span>
              <span className="text-white/75">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
