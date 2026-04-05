import { notFound } from "next/navigation";

import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/data/products";
import { isValidLanguage, type Language } from "@/lib/i18n";

import styles from "./page.module.css";

const catalogContent: Record<
  Language,
  {
    title: string;
    description: string;
  }
> = {
  en: {
    title: "All toys",
    description: "A complete collection of soft animal companions in calm, natural tones.",
  },
  ru: {
    title: "Все игрушки",
    description: "Полная коллекция мягких животных-компаньонов в спокойных природных оттенках.",
  },
  me: {
    title: "Sve igračke",
    description: "Cijela kolekcija mekanih životinjskih saputnika u mirnim prirodnim tonovima.",
  },
};

type CatalogPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function CatalogPage({ params }: CatalogPageProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{catalogContent[lang].title}</h1>
        <p className={styles.description}>{catalogContent[lang].description}</p>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            lang={lang}
            product={product}
            showAddToCart
          />
        ))}
      </div>
    </section>
  );
}
