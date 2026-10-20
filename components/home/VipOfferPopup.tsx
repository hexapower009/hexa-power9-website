"use client";

import { useEffect, useState } from "react";
import { type Locale } from "@/data/site";

type VipOfferPopupProps = {
  locale: Locale;
};

export default function VipOfferPopup({ locale }: VipOfferPopupProps) {
  const isArabic = locale === "ar";
  const [showPopup, setShowPopup] = useState(false);

  const image = isArabic
  ? "/images/gallery/vip-offer-6690-ar.png"
  : "/images/gallery/vip-offer-6690-en.png";

  const message = isArabic
    ? "السلام عليكم، وصلت لكم من عرض VIP على الموقع وأبغى أحجز باقة الحماية الكاملة بسعر 6,690 ريال مع الداش كام المجانية"
    : "Hello, I came from the VIP offer on the website and I’d like to book the full protection package for SAR 6,690 with the free dash cam";

  const whatsappUrl = `https://wa.me/966597359130?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("vipOffer6690Shown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("vipOffer6690Shown", "true");
      }, 900);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <style>
        {`
          .vip-offer-bar {
            width: 100%;
            background:
              linear-gradient(90deg, #7d0006 0%, #e50914 50%, #7d0006 100%);
            border-top: 1px solid rgba(255,255,255,0.08);
            border-bottom: 1px solid rgba(255,255,255,0.12);
            position: relative;
            z-index: 20;
          }

          .vip-offer-bar-inner {
            width: min(1200px, calc(100% - 28px));
            min-height: 48px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .vip-offer-bar a {
            color: #fff;
            text-decoration: none;
            font-size: 15px;
            font-weight: 900;
            text-align: center;
            line-height: 1.5;
          }

          .vip-offer-popup-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.78);
            backdrop-filter: blur(7px);
            z-index: 9998;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .vip-offer-popup {
            width: min(440px, 94vw);
            max-height: 90vh;
            position: relative;
            border-radius: 24px;
            background: #080808;
            border: 1px solid rgba(255,255,255,0.15);
            box-shadow:
              0 35px 120px rgba(0,0,0,0.75),
              0 0 60px rgba(229,9,20,0.18);
            overflow: hidden;
          }

          .vip-offer-popup-image-link {
            display: block;
            text-decoration: none;
          }

          .vip-offer-popup-image {
            width: 100%;
            max-height: 72vh;
            object-fit: contain;
            display: block;
            background: #050505;
          }

          .vip-offer-close {
            position: absolute;
            top: 12px;
            right: 12px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.25);
            background: rgba(0,0,0,0.75);
            color: #fff;
            font-size: 25px;
            cursor: pointer;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .vip-offer-popup[dir="rtl"] .vip-offer-close {
            right: auto;
            left: 12px;
          }

          .vip-offer-cta {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 14px;
            min-height: 52px;
            border-radius: 999px;
            background: linear-gradient(135deg, #e50914, #b70008);
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            font-weight: 900;
            box-shadow: 0 12px 35px rgba(229,9,20,0.3);
          }

          @media (max-width: 600px) {
            .vip-offer-bar-inner {
              min-height: 52px;
            }

            .vip-offer-bar a {
              font-size: 13px;
            }

            .vip-offer-popup {
              width: min(390px, 94vw);
              border-radius: 20px;
            }

            .vip-offer-popup-image {
              max-height: 68vh;
            }
          }
        `}
      </style>

      <div
        className="vip-offer-bar"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="vip-offer-bar-inner">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isArabic
              ? "عرض VIP الحماية الكاملة 6,690 ريال + داش كام مجانًا — احجز الآن"
              : "VIP Full Protection — SAR 6,690 + Free Dash Cam — Book Now"}
          </a>
        </div>
      </div>

      {showPopup && (
        <div
          className="vip-offer-popup-overlay"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="vip-offer-popup"
            dir={isArabic ? "rtl" : "ltr"}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="vip-offer-close"
              onClick={() => setShowPopup(false)}
              aria-label={isArabic ? "إغلاق العرض" : "Close offer"}
            >
              ×
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vip-offer-popup-image-link"
            >
              <img
                src={image}
                alt={
                  isArabic
                    ? "عرض VIP الحماية الكاملة 6690 ريال مع داش كام مجانًا"
                    : "VIP Full Protection Offer SAR 6690 with Free Dash Cam"
                }
                className="vip-offer-popup-image"
              />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vip-offer-cta"
            >
              {isArabic
                ? "احجز العرض عبر واتساب"
                : "Book Offer on WhatsApp"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}