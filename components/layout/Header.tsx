"use client";
import { useState } from "react";
import Link from "next/link";
import { getWhatsAppUrl, type Locale } from "@/data/site";

type HeaderProps = {
  locale: Locale;
};

export default function Header({ locale }: HeaderProps) {
  const isArabic = locale === "ar";
  const nextLocale = isArabic ? "en" : "ar";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "#packages", label: isArabic ? "الباقات" : "Packages" },
    { href: "#services", label: isArabic ? "الخدمات" : "Services" },
    { href: "#process", label: isArabic ? "طريقة التركيب" : "Process" },
    { href: "#about", label: isArabic ? "من نحن" : "About" },
    { href: "#gallery", label: isArabic ? "أعمالنا" : "Gallery" },
  ];

  return (
    <>
      <style>
        {`
          .site-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            height: 82px;
            border-bottom: 1px solid rgba(255,255,255,0.12);
            background: rgba(5,5,5,0.88);
            backdrop-filter: blur(18px);
          }

          .header-inner {
            width: min(1200px, calc(100% - 32px));
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            color: white;
            text-decoration: none;
            min-width: 0;
          }

          .brand img {
            width: 50px;
            height: 50px;
            object-fit: contain;
            border-radius: 14px;
            border: 1px solid rgba(229,9,20,0.45);
            box-shadow: 0 0 30px rgba(229,9,20,0.35);
            flex-shrink: 0;
          }

          .brand-title {
            margin: 0;
            font-size: 18px;
            font-weight: 950;
            line-height: 1.1;
            white-space: nowrap;
          }

          .brand-subtitle {
            margin: 5px 0 0;
            font-size: 12px;
            color: #c9c9c9;
            line-height: 1.3;
          }

          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 22px;
            color: #c9c9c9;
            font-size: 14px;
            font-weight: 800;
          }

          .desktop-nav a {
            color: inherit;
            text-decoration: none;
          }

          .header-actions {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-shrink: 0;
          }

          .lang-btn {
            border: 1px solid rgba(255,255,255,0.16);
            border-radius: 999px;
            padding: 9px 14px;
            color: white;
            text-decoration: none;
            font-size: 13px;
            font-weight: 900;
            flex-shrink: 0;
          }

          .whatsapp-btn {
            border-radius: 999px;
            padding: 12px 20px;
            background: #E50914;
            color: white;
            text-decoration: none;
            font-size: 14px;
            font-weight: 950;
            box-shadow: 0 0 30px rgba(229,9,20,0.35);
            white-space: nowrap;
            flex-shrink: 0;
          }

          .mobile-menu {
            display: none;
          }

      

          .menu-btn {
            width: 46px;
            height: 46px;
            border-radius: 14px;
            border: 1px solid rgba(255,255,255,0.14);
            background: rgba(255,255,255,0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .menu-lines {
            width: 22px;
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .menu-lines span {
            height: 3px;
            border-radius: 999px;
            background: white;
            display: block;
          }

          .mobile-panel {
            display: none;
          }

          .whatsapp-short {
            display: none;
          }

          @media (max-width: 900px) {
            .site-header {
              height: 92px;
            }

            .header-inner {
              width: calc(100% - 18px);
              gap: 7px;
              overflow: visible;
            }

            .desktop-nav {
              display: none !important;
            }

            .mobile-menu {
              display: block;
              flex-shrink: 0;
            }

            .brand {
              gap: 8px;
              flex: 1;
              min-width: 0;
            }

            .brand img {
              width: 46px;
              height: 46px;
            }

            .brand-title {
              font-size: 15px;
              max-width: 190px;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .brand-subtitle {
              font-size: 11px;
              max-width: 190px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .header-actions {
              gap: 7px;
            }

            .menu-btn {
              width: 44px;
              height: 44px;
              border-radius: 14px;
            }

            .lang-btn {
              width: 44px;
              height: 44px;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 13px;
            }

            .whatsapp-btn {
              height: 48px;
              padding: 0 14px;
              font-size: 13px;
              display: flex;
              align-items: center;
              justify-content: center;
              max-width: 82px;
            }

            .whatsapp-full {
              display: none;
            }

            .whatsapp-short {
              display: inline;
            }

            .mobile-menu-open .mobile-panel {
  display: grid;
}

.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 998;
  background: transparent;
  border: 0;
  padding: 0;
}

            .mobile-panel {
              position: fixed;
              top: 104px;
              left: 14px;
              right: 14px;
              width: auto;
              padding: 14px;
              border-radius: 26px;
              border: 1px solid rgba(255,255,255,0.12);
              background: rgba(8,8,8,0.96);
              box-shadow: 0 24px 80px rgba(0,0,0,0.65);
              gap: 10px;
              z-index: 999;
            }

            .mobile-panel a {
              min-height: 54px;
              border-radius: 999px;
              border: 1px solid rgba(255,255,255,0.12);
              background: rgba(255,255,255,0.055);
              color: white;
              text-decoration: none;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 17px;
              font-weight: 950;
            }
          }

          @media (max-width: 380px) {
            .brand-title {
              font-size: 14px;
              max-width: 160px;
            }

            .brand-subtitle {
              max-width: 160px;
            }

            .whatsapp-btn {
              max-width: 72px;
              padding: 0 11px;
            }
          }
        `}
      </style>

      <header className="site-header" dir={isArabic ? "rtl" : "ltr"}>
        <div className="header-inner">
          <Link href={`/${locale}`} className="brand">
            <img src="/images/brand/icon.png" alt="Hexa Power Logo" />

            <div>
              <p className="brand-title">HEXA POWER 9</p>
              <p className="brand-subtitle">
                {isArabic
                  ? "فرع حي النخيل - الرياض"
                  : "Al Nakheel District - Riyadh"}
              </p>
            </div>
          </Link>

          <nav className="desktop-nav">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
  {isMenuOpen && (
    <button
      className="menu-backdrop"
      aria-label="Close menu"
      onClick={() => setIsMenuOpen(false)}
    />
  )}

  <button
    type="button"
    className="menu-btn"
    aria-label="Open menu"
    onClick={() => setIsMenuOpen((value) => !value)}
  >
    <span className="menu-lines">
      <span />
      <span />
      <span />
    </span>
  </button>

  <div className="mobile-panel">
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={() => setIsMenuOpen(false)}
      >
        {link.label}
      </a>
    ))}
  </div>
</div>

            <Link href={`/${nextLocale}`} className="lang-btn">
              {isArabic ? "EN" : "AR"}
            </Link>

            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <span className="whatsapp-full">
                {isArabic ? "واتساب" : "WhatsApp"}
              </span>
              <span className="whatsapp-short">
                {isArabic ? "واتساب" : "WA"}
              </span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}