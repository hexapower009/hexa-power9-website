import { Star } from "lucide-react";
import type { Dictionary } from "@/data/dictionaries";
import { mapsUrl } from "@/lib/contact";
import { SectionHeading } from "@/components/SectionHeading";

export function Reviews({ t }: { t: Dictionary }) {
  return (
    <section id="reviews" className="py-24">
      <div className="container-page">
        <div className="card-border red-border overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
            <SectionHeading eyebrow={t.reviews.eyebrow} title={t.reviews.title} subtitle={t.reviews.subtitle} center={false} />
            <div className="rounded-[1.6rem] border border-hexa-red/35 bg-black/60 p-8 text-center shadow-redGlow">
              <div className="flex justify-center gap-2 text-hexa-red">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={32} fill="currentColor" />)}
              </div>
              <div className="metal-text mt-5 text-7xl font-black">5.0</div>
              <a href={mapsUrl} target="_blank" className="mt-6 inline-flex rounded-2xl bg-hexa-red px-6 py-3 text-sm font-black text-white transition hover:bg-red-600">
                {t.reviews.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
