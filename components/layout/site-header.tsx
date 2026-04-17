"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { CartLink } from "@/components/cart/cart-link";
import { LANGUAGES, type Language } from "@/lib/i18n";

import styles from "./site-header.module.css";

const headerContent: Record<
  Language,
  { catalog: string; about: string; contacts: string; menu: string; closeMenu: string }
> = {
  en: {
    catalog: "Catalog",
    about: "About",
    contacts: "Contacts",
    menu: "Open menu",
    closeMenu: "Close menu",
  },
  ru: {
    catalog: "Каталог",
    about: "О нас",
    contacts: "Контакты",
    menu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },
  me: {
    catalog: "Katalog",
    about: "O nama",
    contacts: "Kontakt",
    menu: "Otvori meni",
    closeMenu: "Zatvori meni",
  },
};

type SiteHeaderProps = {
  currentLang: Language;
};

export function SiteHeader({ currentLang }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const navigationItems = [
    { href: `/${currentLang}/catalog`, label: headerContent[currentLang].catalog },
    { href: `/${currentLang}/about`, label: headerContent[currentLang].about },
    { href: `/${currentLang}/contacts`, label: headerContent[currentLang].contacts },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuMounted(true);
      return;
    }

    if (!isMenuMounted) {
      return;
    }

    const timeoutId = window.setTimeout(() => setIsMenuMounted(false), 300);
    return () => window.clearTimeout(timeoutId);
  }, [isMenuMounted, isMenuOpen]);

  useEffect(() => {
    if (!isMenuMounted) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMenuMounted]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <button
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen
                ? headerContent[currentLang].closeMenu
                : headerContent[currentLang].menu
            }
            className={`${styles.iconButton} ${styles.menuButton}`}
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
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

          <div className={styles.brandBlock}>
            <div className={styles.brandRow}>
              <Link className={styles.brand} href={`/${currentLang}`}>
                Maya&apos;s plushies
              </Link>
            </div>
          </div>

          <div className={styles.actions}>
            <CartLink
              className={styles.iconButton}
              currentLang={currentLang}
              iconClassName={styles.icon}
            />
          </div>
        </div>

        <div className={styles.bottomRow}>
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

          <nav aria-label="Primary" className={styles.primaryNav}>
            {navigationItems.map((item) => (
              <Link key={item.href} className={styles.primaryLink} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {isMenuMounted ? (
          <nav
            aria-label="Mobile navigation"
            className={`${styles.mobileMenu} ${
              isMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
            }`}
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                className={styles.mobileMenuLink}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
