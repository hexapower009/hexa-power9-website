"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const CONVERSION_ID =
  "AW-17990425966/qjNbCIufy84cEO66wIJD";

export default function GoogleAdsWhatsAppTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // نتعامل فقط مع الضغط العادي بالماوس
      if (event.button !== 0) return;

      const target = event.target as HTMLElement | null;

      if (!target) return;

      const anchor = target.closest(
        "a"
      ) as HTMLAnchorElement | null;

      if (!anchor) return;

      const href =
        anchor.getAttribute("href") || "";

      const isWhatsApp =
        href.includes("wa.me/") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp.com/send");

      if (!isWhatsApp) return;

      event.preventDefault();

      const whatsappUrl = anchor.href;

      let finished = false;

      const goToWhatsApp = () => {
        if (finished) return;

        finished = true;

        window.location.href = whatsappUrl;
      };

      // لو Google Tag لم يكن جاهزًا
      // لا نمنع العميل من فتح واتساب
      if (typeof window.gtag !== "function") {
        goToWhatsApp();
        return;
      }

      window.gtag("event", "conversion", {
        send_to: CONVERSION_ID,

        event_callback: () => {
          goToWhatsApp();
        },

        event_timeout: 1200,
      });

      // احتياطي في حالة callback لم يعمل
      window.setTimeout(() => {
        goToWhatsApp();
      }, 1200);
    };

    document.addEventListener(
      "click",
      handleClick,
      true
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClick,
        true
      );
    };
  }, []);

  return null;
}