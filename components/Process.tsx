import { Wrench } from "lucide-react";
import type { Dictionary } from "@/data/dictionaries";
import { SectionHeading } from "@/components/SectionHeading";

export function Process({ t }: { t: Dictionary }) {
  return (
    <section id="process" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,.12),transparent_45%)]" />
      <div className="container-page relative">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.process.steps.map((step, index) => (
            <div key={step} className="card-border rounded-[1.4rem] p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hexa-red text-lg font-black text-white shadow-redGlow">{index + 1}</span>
                <Wrench className="text-white/24" size={26} />
              </div>
              <h3 className="text-xl font-black text-white">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
