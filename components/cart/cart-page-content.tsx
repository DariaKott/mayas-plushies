"use client";

import Image from "next/image";
import Link from "next/link";

import { products } from "@/lib/data/products";
import type { Language } from "@/lib/i18n";

import { useCart } from "./cart-provider";

import styles from "./cart-page-content.module.css";

type CartContent = {
  title: string;
  total: string;
  continue: string;
  emptyTitle: string;
  emptyDescription: string;
  browse: string;
  subtotal: string;
  quantity: string;
  remove: string;
};

const cartContent: Record<Language, CartContent> = {
  en: {
    title: "Cart",
    total: "Total",
    continue: "Continue to checkout",
    emptyTitle: "Your cart is empty",
    emptyDescription: "Add a few soft companions to begin your order.",
    browse: "Go to catalog",
    subtotal: "Subtotal",
    quantity: "Quantity",
    remove: "Remove",
  },
  ru: {
    title: "Корзина",
    total: "Итого",
    continue: "Перейти к оформлению",
    emptyTitle: "Корзина пуста",
    emptyDescription: "Добавьте несколько мягких спутников, чтобы начать заказ.",
    browse: "Перейти в каталог",
    subtotal: "Сумма",
    quantity: "Количество",
    remove: "Удалить",
  },
  me: {
    title: "Korpa",
    total: "Ukupno",
    continue: "Nastavi na poručivanje",
    emptyTitle: "Korpa je prazna",
    emptyDescription: "Dodajte nekoliko mekanih saputnika da započnete porudžbinu.",
    browse: "Idi na katalog",
    subtotal: "Zbir",
    quantity: "Količina",
    remove: "Ukloni",
  },
};

type CartPageContentProps = {
  lang: Language;
};

type ResolvedCartItem = {
  product: (typeof products)[number];
  productId: string;
  quantity: number;
  subtotal: number;
};

export function CartPageContent({ lang }: CartPageContentProps) {
  const { items, increaseItem, decreaseItem, removeItem } = useCart();

  const cartItems = items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);

      if (!product) {
        return null;
      }

      return {
        ...item,
        product,
        subtotal: item.quantity * product.price,
      };
    })
    .filter((item): item is ResolvedCartItem => item !== null);

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  if (cartItems.length === 0) {
    return (
      <section className={styles.page}>
        <h1 className={styles.title}>{cartContent[lang].title}</h1>
        <div className={styles.emptyState}>
          <p className={styles.emptyTitle}>{cartContent[lang].emptyTitle}</p>
          <p className={styles.emptyDescription}>{cartContent[lang].emptyDescription}</p>
          <Link className={styles.secondaryButton} href={`/${lang}/catalog`}>
            {cartContent[lang].browse}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{cartContent[lang].title}</h1>
      <div className={styles.layout}>
        <div className={styles.items}>
          {cartItems.map((item) => (
            <article key={item.product.id} className={styles.item}>
              <div className={styles.imageWrap}>
                <Image
                  alt={item.product.title[lang]}
                  className={styles.image}
                  height={220}
                  src={item.product.images[0]}
                  width={220}
                />
              </div>
              <div className={styles.itemInfo}>
                <div>
                  <h2 className={styles.itemTitle}>{item.product.title[lang]}</h2>
                  <p className={styles.price}>€{item.product.price.toFixed(2)}</p>
                </div>

                <div className={styles.controls}>
                  <p className={styles.label}>{cartContent[lang].quantity}</p>
                  <div className={styles.quantityRow}>
                    <button
                      className={styles.quantityButton}
                      type="button"
                      onClick={() => decreaseItem(item.product.id)}
                    >
                      −
                    </button>
                    <span className={styles.quantityValue}>{item.quantity}</span>
                    <button
                      className={styles.quantityButton}
                      type="button"
                      onClick={() => increaseItem(item.product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.itemMeta}>
                <p className={styles.label}>{cartContent[lang].subtotal}</p>
                <p className={styles.subtotal}>€{item.subtotal.toFixed(2)}</p>
                <button
                  className={styles.removeButton}
                  type="button"
                  onClick={() => removeItem(item.product.id)}
                >
                  {cartContent[lang].remove}
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.summary}>
          <div className={styles.summaryRow}>
            <span>{cartContent[lang].total}</span>
            <strong>€{total.toFixed(2)}</strong>
          </div>
          <Link className={styles.primaryButton} href={`/${lang}/checkout`}>
            {cartContent[lang].continue}
          </Link>
        </aside>
      </div>
    </section>
  );
}
