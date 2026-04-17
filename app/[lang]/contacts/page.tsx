import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { withBasePath } from "@/lib/assets";
import { isValidLanguage, type Language } from "@/lib/i18n";

import styles from "./page.module.css";

const contactsContent: Record<
  Language,
  {
    title: string;
    subtitle: string;
    methodsTitle: string;
    methods: Array<{ label: string; value: string; href?: string }>;
    message: string;
    note: string;
  }
> = {
  en: {
    title: "Get in touch",
    subtitle: "We’re happy to help you choose the perfect plush companion.",
    methodsTitle: "How to reach us",
    methods: [
      {
        label: "Email",
        value: "contact@mayasplushies.com",
        href: "mailto:contact@mayasplushies.com",
      },
      {
        label: "WhatsApp",
        value: "+382 67 123 456",
        href: "https://wa.me/38267123456",
      },
      {
        label: "Telegram",
        value: "@mayasplushies",
        href: "https://t.me/mayasplushies",
      },
      {
        label: "Instagram",
        value: "@mayasplushies",
        href: "https://instagram.com/mayasplushies",
      },
    ],
    message:
      "Feel free to reach out — we’ll respond thoughtfully and as quickly as possible.",
    note:
      "We’re always happy to help you find the right plush toy for a gift or a special moment.",
  },
  ru: {
    title: "Связаться с нами",
    subtitle: "Мы с радостью поможем вам выбрать идеального плюшевого спутника.",
    methodsTitle: "Как с нами связаться",
    methods: [
      {
        label: "Email",
        value: "contact@mayasplushies.com",
        href: "mailto:contact@mayasplushies.com",
      },
      {
        label: "WhatsApp",
        value: "+382 67 123 456",
        href: "https://wa.me/38267123456",
      },
      {
        label: "Telegram",
        value: "@mayasplushies",
        href: "https://t.me/mayasplushies",
      },
      {
        label: "Instagram",
        value: "@mayasplushies",
        href: "https://instagram.com/mayasplushies",
      },
    ],
    message:
      "Пишите нам в любое время — мы ответим внимательно и так быстро, как только сможем.",
    note:
      "Мы всегда рады помочь вам подобрать подходящую плюшевую игрушку для подарка или особенного момента.",
  },
  me: {
    title: "Kontaktirajte nas",
    subtitle: "Rado ćemo vam pomoći da izaberete savršenog plišanog saputnika.",
    methodsTitle: "Kako da nas kontaktirate",
    methods: [
      {
        label: "Email",
        value: "contact@mayasplushies.com",
        href: "mailto:contact@mayasplushies.com",
      },
      {
        label: "WhatsApp",
        value: "+382 67 123 456",
        href: "https://wa.me/38267123456",
      },
      {
        label: "Telegram",
        value: "@mayasplushies",
        href: "https://t.me/mayasplushies",
      },
      {
        label: "Instagram",
        value: "@mayasplushies",
        href: "https://instagram.com/mayasplushies",
      },
    ],
    message:
      "Slobodno nam pišite — odgovorićemo pažljivo i što je brže moguće.",
    note:
      "Uvijek nam je drago da pomognemo da pronađete pravu plišanu igračku za poklon ili poseban trenutak.",
  },
};

type ContactsPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const content = contactsContent[lang];
  const heroBackgroundImage = `url("${withBasePath("/images/bg-about.jpg")}")`;

  return (
    <div className={styles.page}>
      <section
        className={styles.hero}
        style={{ "--hero-background-image": heroBackgroundImage } as CSSProperties}
      >
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Maya&apos;s plushies</p>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.intro}>{content.subtitle}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>{content.methodsTitle}</p>
        </div>
        <div className={styles.methodsGrid}>
          {content.methods.map((method) => (
            <div key={method.label} className={styles.methodItem}>
              <p className={styles.methodLabel}>{method.label}</p>
              {method.href ? (
                <Link className={styles.methodLink} href={method.href}>
                  {method.value}
                </Link>
              ) : (
                <p className={styles.methodValue}>{method.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.messageBlock}>
          <p className={styles.messageText}>{content.message}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.noteBlock}>
          <p className={styles.noteText}>{content.note}</p>
        </div>
      </section>
    </div>
  );
}
