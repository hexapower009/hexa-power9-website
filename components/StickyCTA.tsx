import { MessageCircle, Phone } from "lucide-react";
import type { Dictionary } from "@/data/dictionaries";
import { callUrl, whatsappUrl } from "@/lib/contact";

export function StickyCTA({ t }: { t: Dictionary }) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
      <a href={whatsappUrl(t.hero.whatsappMessage)} target="_blank" className="flex items-center justify-center gap-2 rounded-2xl bg-hexa-red px-4 py-4 text-sm font-black text-white shadow-redGlow">
        <MessageCircle size={18} /> {t.footer.whatsapp}
      </a>
      <a href={callUrl} className="flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-black/78 px-4 py-4 text-sm font-black text-white backdrop-blur-xl">
        <Phone size={18} /> {t.footer.call}
      </a>
    </div>
  );
}
