import type { Dictionary } from "@/data/dictionaries";

export function TrustBar({ t }: { t: Dictionary }) {
  return (
    <section className="relative -mt-8 z-20">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-[1.7rem] border border-hexa-red/35 bg-black/80 shadow-redGlow backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.map((item) => (
            <div key={item.label} className="border-b border-white/10 p-6 text-center last:border-b-0 sm:border-e lg:border-b-0">
              <div className="metal-text text-4xl font-black">{item.value}</div>
              <p className="mt-2 text-sm font-bold text-white/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
