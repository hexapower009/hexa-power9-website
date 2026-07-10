import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[.28em] text-hexa-red">{eyebrow}</p>
      <h2 className="metal-text text-3xl font-black leading-tight md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
