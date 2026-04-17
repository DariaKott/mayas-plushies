import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { withBasePath } from "@/lib/assets";
import { isValidLanguage, type Language } from "@/lib/i18n";

import styles from "./page.module.css";

const aboutContent: Record<
  Language,
  {
    title: string;
    intro: string;
    storyTitle: string;
    storyFirst: string;
    storySecond: string;
    valuesTitle: string;
    values: string[];
    emotionalText: string;
    closing: string;
  }
> = {
  en: {
    title: "About Maya's plushies",
    intro:
      "Maya’s plushies is a quiet little collection of soft companions inspired by nature, gentle childhood moments, and thoughtful gifting.",
    storyTitle: "A small story",
    storyFirst:
      "Maya’s plushies began with a simple idea — to find toys that feel calm, soft, and close to nature.",
    storySecond:
      "Not loud, not overly bright, but quiet companions for slow days, bedtime stories, and meaningful gifts.",
    valuesTitle: "What matters here",
    values: [
      "Natural materials",
      "Soft, earthy colors",
      "Gentle design",
      "Made for calm moments",
    ],
    emotionalText:
      "Each toy is chosen not just for how it looks, but for how it feels — soft, comforting, and quietly magical.",
    closing:
      "Maya’s plushies is a small collection made for warm homes, gentle childhoods, and meaningful gifts.",
  },
  ru: {
    title: "О Maya's plushies",
    intro:
      "Maya’s plushies — это небольшая спокойная коллекция мягких спутников, вдохновлённых природой, нежными моментами детства и продуманными подарками.",
    storyTitle: "Небольшая история",
    storyFirst:
      "Maya’s plushies начался с простой идеи — находить игрушки, которые ощущаются спокойными, мягкими и близкими к природе.",
    storySecond:
      "Не шумные и не слишком яркие, а тихие спутники для медленных дней, сказок перед сном и подарков со смыслом.",
    valuesTitle: "Что здесь важно",
    values: [
      "Натуральные материалы",
      "Мягкие природные оттенки",
      "Деликатный дизайн",
      "Создано для спокойных моментов",
    ],
    emotionalText:
      "Каждая игрушка выбирается не только за внешний вид, но и за ощущение — мягкое, уютное и по-своему тихо волшебное.",
    closing:
      "Maya’s plushies — это небольшая коллекция для тёплых домов, нежного детства и подарков со смыслом.",
  },
  me: {
    title: "O Maya's plushies",
    intro:
      "Maya’s plushies je mala mirna kolekcija mekanih saputnika nadahnutih prirodom, nježnim trenucima djetinjstva i pažljivo biranim poklonima.",
    storyTitle: "Mala priča",
    storyFirst:
      "Maya’s plushies je nastao iz jednostavne ideje — pronaći igračke koje djeluju mirno, mekano i blisko prirodi.",
    storySecond:
      "Ne glasne i ne previše jarke, već tihi saputnici za spore dane, priče pred spavanje i poklone sa značenjem.",
    valuesTitle: "Šta nam je važno",
    values: [
      "Prirodni materijali",
      "Meke, zemljane boje",
      "Nježan dizajn",
      "Stvoreno za mirne trenutke",
    ],
    emotionalText:
      "Svaka igračka se bira ne samo po izgledu, već i po osjećaju koji donosi — mekom, utješnom i tiho magičnom.",
    closing:
      "Maya’s plushies je mala kolekcija stvorena za tople domove, nježno djetinjstvo i poklone sa pažnjom.",
  },
};

type AboutPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const content = aboutContent[lang];
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
            <p className={styles.intro}>{content.intro}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.storyBlock}>
          <p className={styles.sectionLabel}>{content.storyTitle}</p>
          <p className={styles.storyText}>{content.storyFirst}</p>
          <p className={styles.storyText}>{content.storySecond}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>{content.valuesTitle}</p>
        </div>
        <div className={styles.valuesGrid}>
          {content.values.map((value) => (
            <div key={value} className={styles.valueItem}>
              <span className={styles.valueDot} aria-hidden="true" />
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.emotionalBlock}>
          <p className={styles.emotionalText}>{content.emotionalText}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.closingBlock}>
          <p className={styles.closingText}>{content.closing}</p>
        </div>
      </section>
    </div>
  );
}
