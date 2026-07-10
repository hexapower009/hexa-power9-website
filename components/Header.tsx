import Link from "next/link";
import { getWhatsAppUrl, type Locale } from "@/data/site";

type HeaderProps = {
  locale: Locale;
};

export default function Header({ locale }: HeaderProps) {
  const isArabic = locale === "ar";
  const nextLocale = isArabic ? "en" : "ar";

  const menuLinks = [
    {
      href: "#services",
      label: isArabic ? "خدماتنا" : "Services",
    },
    {
      href: "#packages",
      label: isArabic ? "الباقات" : "Packages",
    },
    {
      href: "#process",
      label: isArabic ? "طريقة التركيب" : "Process",
    },
    {
      href: "#about",
      label: isArabic ? "من نحن" : "About",
    },
    {
      href: "#gallery",
      label: isArabic ? "أعمالنا" : "Gallery",
    },
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
            background: rgba(5,5,5,0.86);
            backdrop-filter: blur(18px);
          }

          .header-inner {
            width: min(1200px, calc(100% - 32px));
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
          }

          .brand-link {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: white;
          }

          .brand-logo {
            width: 50px;
            height: 50px;
            object-fit: contain;
            border-radius: 14px;
            border: 1px solid rgba(229,9,20,0.45);
            box-shadow: 0 0 30px rgba(229,9,20,0.35);
          }

          .brand-title {
            margin: 0;
            font-size: 18px;
            font-weight: 900;
            line-height: 1.1;
          }

          .brand-subtitle {
            margin: 5px 0 0;
            font-size: 12px;
            color: #C9C9C9;
            line-height: 1.3;
          }

          .desktop-links {
            display: flex;
            align-items: center;
            gap: 24px;
            color: #C9C9C9;
            font-size: 14px;
            font-weight: 800;
          }

          .desktop-links a {
            color: inherit;
            text-decoration: none;
          }

          .header-actions {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .lang-button {
            border: 1px solid rgba(255,255,255,0.16);
            border-radius: 999px;
            padding: 9px 14px;
            color: white;
            text-decoration: none;
            font-size: 13px;
            font-weight: 900;
          }

          .header-whatsapp {
            border-radius: 999px;
            padding: 12px 20px;
            background: #E50914;
            color: white;
            text-decoration: none;
            font-size: 14px;
            font-weight: 950;
            box-shadow: 0 0 30px rgba(229,9,20,0.35);
          }

          .mobile-menu {
            display: none;
          }

          .mobile-menu summary {
            list-style: none;
          }

          .mobile-menu summary::-webkit-details-marker {
            display: none;
          }

          @media (max-width: 900px) {
            .site-header {
              height: 96px;
            }

            .header-inner {
              width: min(100%, calc(100% - 24px));
              gap: 10px;
            }

            .desktop-links {
              display: none !important;
            }

            .brand-link {
              gap: 9px;
            }

            .brand-logo {
              width: 52px;
              height: 52px;
            }

            .brand-title {
              font-size: 17px;
              white-space: nowrap;
            }

            .brand-subtitle {
              font-size: 11px;
            }

            .header-actions {
              gap: 8px;
            }

            .header-whatsapp {
              padding: 11px 17px;
              font-size: 14px;
            }

            .lang-button {
              padding: 9px 13px;
              font-size: 13px;
            }

            .mobile-menu {
              display: block;
              position: relative;
            }

            .menu-button {
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
              display: block;
              height: 3px;
              border-radius: 999px;
              background: white;
            }

            .mobile-menu-panel {
              position: absolute;
              top: 58px;
              inset-inline-start: 0;
              width: 230px;
              padding: 12px;
              border-radius: 22px;
              border: 1px solid rgba(255,255,255,0.12);
              background: rgba(8,8,8,0.96);
              box-shadow: 0 24px 80px rgba(0,0,0,0.55);
              display: grid;
              gap: 8px;
            }

            .mobile-menu-panel a {
              min-height: 44px;
              border-radius: 999px;
              border: 1px solid rgba(255,255,255,0.12);
              background: rgba(255,255,255,0.055);
              color: white;
              text-decoration: none;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
              font-weight: 900;
            }
          }
        `}
      </style>

      <header className="site-header" dir={isArabic ? "rtl" : "ltr"}>
        <div className="header-inner">
          <Link href={`/${locale}`} className="brand-link">
            <img
              src="/images/brand/icon.png"
              alt="Hexa Power Logo"
              className="brand-logo"
            />

            <div>
              <p className="brand-title">HEXA POWER 9</p>
              <p className="brand-subtitle">
                {isArabic
                  ? "فرع حي النخيل - الرياض"
                  : "Al Nakheel District - Riyadh"}
              </p>
            </div>
          </Link>

          <div className="desktop-links">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="header-actions">
            <details className="mobile-menu">
              <summary className="menu-button" aria-label="Open menu">
                <span className="menu-lines">
                  <span />
                  <span />
                  <span />
                </span>
              </summary>

              <div className="mobile-menu-panel">
                {menuLinks.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </details>

            <Link href={`/${nextLocale}`} className="lang-button">
              {isArabic ? "EN" : "AR"}
            </Link>

            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noreferrer"
              className="header-whatsapp"
            >
              {isArabic ? "واتساب" : "WhatsApp"}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}