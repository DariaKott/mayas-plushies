import Link from "next/link";

import type { Language } from "@/lib/i18n";

import styles from "./site-footer.module.css";

const footerContent: Record<
  Language,
  {
    about: string;
    catalog: string;
    contacts: string;
    privacy: string;
    terms: string;
  }
> = {
  en: {
    about: "About",
    catalog: "Catalog",
    contacts: "Contacts",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
  ru: {
    about: "О нас",
    catalog: "Каталог",
    contacts: "Контакты",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
  },
  me: {
    about: "O nama",
    catalog: "Katalog",
    contacts: "Kontakt",
    privacy: "Politika privatnosti",
    terms: "Uslovi korišćenja",
  },
};

type SiteFooterProps = {
  currentLang: Language;
};

export function SiteFooter({ currentLang }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.title}>Maya&apos;s plushies</p>
        <p className={styles.copy}>
          Realistic plush animals with soft textures, grounded palettes, and a quiet sense of wonder.
        </p>
        <nav aria-label="Footer" className={styles.nav}>
          <Link href={`/${currentLang}/catalog`}>{footerContent[currentLang].catalog}</Link>
          <Link href={`/${currentLang}/about`}>{footerContent[currentLang].about}</Link>
          <Link href={`/${currentLang}/contacts`}>{footerContent[currentLang].contacts}</Link>
          <Link href={`/${currentLang}/privacy-policy`}>
            {footerContent[currentLang].privacy}
          </Link>
          <Link href={`/${currentLang}/terms-and-conditions`}>
            {footerContent[currentLang].terms}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
