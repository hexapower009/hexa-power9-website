import { Car, Droplets, Shield, Sparkles } from "lucide-react";
import type { Dictionary } from "@/data/dictionaries";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [Shield, Car, Sparkles, Droplets];

export function Services({ t }: { t: Dictionary }) {
  return (
    <section className="py-24">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} center={false} />
        <div className="grid gap-4 sm:grid-cols-2">
          {t.services.items.map((item, index) => {
            const Icon = icons[index] ?? Shield;
            return (
              <div key={item.title} className="card-border rounded-[1.5rem] p-6 transition hover:border-hexa-red/45">
                <Icon className="mb-5 text-hexa-red" size={30} />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
