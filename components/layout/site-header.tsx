import Link from "next/link";

import { CartLink } from "@/components/cart/cart-link";
import { LANGUAGES, type Language } from "@/lib/i18n";

import styles from "./site-header.module.css";

const headerContent: Record<Language, { about: string; contacts: string }> = {
  en: { about: "About", contacts: "Contacts" },
  ru: { about: "О нас", contacts: "Контакты" },
  me: { about: "O nama", contacts: "Kontakt" },
};

type SiteHeaderProps = {
  currentLang: Language;
};

export function SiteHeader({ currentLang }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <div className={styles.brandRow}>
            <Link className={styles.brand} href={`/${currentLang}`}>
              Maya&apos;s plushies
            </Link>
            <nav aria-label="Primary" className={styles.primaryNav}>
              <Link className={styles.primaryLink} href={`/${currentLang}/about`}>
                {headerContent[currentLang].about}
              </Link>
              <Link className={styles.primaryLink} href={`/${currentLang}/contacts`}>
                {headerContent[currentLang].contacts}
              </Link>
            </nav>
          </div>
          <nav aria-label="Language switcher" className={styles.languageSwitcher}>
            {LANGUAGES.map((language) => (
              <Link
                key={language}
                className={language === currentLang ? styles.activeLanguage : styles.languageLink}
                href={`/${language}`}
              >
                {language.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.actions}>
          <CartLink
            className={styles.iconButton}
            currentLang={currentLang}
            iconClassName={styles.icon}
          />
          <button
            aria-label="Open menu"
            className={styles.iconButton}
            type="button"
          >
            <svg
              aria-hidden="true"
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.7"
            >
              <path d="M5 8H19" />
              <path d="M8 12H19" />
              <path d="M11 16H19" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
