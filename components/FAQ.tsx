import type { Dictionary } from "@/data/dictionaries";
import { SectionHeading } from "@/components/SectionHeading";

export function FAQ({ t }: { t: Dictionary }) {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-6 open:border-hexa-red/45">
              <summary className="cursor-pointer list-none text-lg font-black text-white marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-2xl text-hexa-red transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-8 text-white/68">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
