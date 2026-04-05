import Image from "next/image";
import Link from "next/link";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import type { Product } from "@/lib/types/product";
import type { Language } from "@/lib/i18n";

import styles from "./product-card.module.css";

const addToCartLabels: Record<
  Language,
  {
    idle: string;
    added: string;
  }
> = {
  en: {
    idle: "Add to cart",
    added: "Added",
  },
  ru: {
    idle: "Добавить",
    added: "Добавлено",
  },
  me: {
    idle: "Dodaj",
    added: "Dodato",
  },
};

type ProductCardProps = {
  lang: Language;
  product: Product;
  showAddToCart?: boolean;
};

export function ProductCard({
  lang,
  product,
  showAddToCart = false,
}: ProductCardProps) {
  return (
    <article className={styles.card}>
      <Link className={styles.imageLink} href={`/${lang}/product/${product.slug}`}>
        <div className={styles.imageWrap}>
          <Image
            alt={product.title[lang]}
            className={styles.image}
            src={product.images[0]}
            width={720}
            height={820}
          />
        </div>
      </Link>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link href={`/${lang}/product/${product.slug}`}>{product.title[lang]}</Link>
        </h3>
        <p className={styles.price}>€{product.price.toFixed(2)}</p>
        {showAddToCart ? (
          <AddToCartButton
            addedLabel={addToCartLabels[lang].added}
            className={styles.addButton}
            idleLabel={addToCartLabels[lang].idle}
            productId={product.id}
          />
        ) : null}
      </div>
    </article>
  );
}
