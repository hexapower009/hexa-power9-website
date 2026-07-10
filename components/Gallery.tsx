import Image from "next/image";
import type { Dictionary } from "@/data/dictionaries";
import { SectionHeading } from "@/components/SectionHeading";

const photos = [
  { src: "/images/gallery/showroom-rear.webp", className: "md:col-span-2 md:row-span-2", alt: "Hexa Power showroom rear car view" },
  { src: "/images/gallery/interior-console.webp", className: "", alt: "Luxury car interior detailing" },
  { src: "/images/gallery/engine-detail.webp", className: "", alt: "Engine bay detailing" },
  { src: "/images/gallery/front-detail.webp", className: "", alt: "Front car detail at Hexa Power" },
  { src: "/images/gallery/rear-side.webp", className: "", alt: "Rear side car view inside branch" }
];

export function Gallery({ t }: { t: Dictionary }) {
  return (
    <section id="gallery" className="py-24">
      <div className="container-page">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        <div className="mt-14 grid auto-rows-[280px] gap-4 md:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo.src} className={`group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 ${photo.className}`}>
              <Image src={photo.src} alt={photo.alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 768px) 25vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
