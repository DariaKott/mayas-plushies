"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { products } from "@/lib/data/products";
import type { Language } from "@/lib/i18n";

import { useCart } from "./cart-provider";

import styles from "./checkout-page-content.module.css";

type CheckoutContent = {
  title: string;
  summary: string;
  emptyTitle: string;
  emptyDescription: string;
  browse: string;
  submit: string;
  total: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    address: string;
    comment: string;
  };
};

const checkoutContent: Record<Language, CheckoutContent> = {
  en: {
    title: "Checkout",
    summary: "Order summary",
    emptyTitle: "Your cart is empty",
    emptyDescription: "Add products before moving to checkout.",
    browse: "Go to catalog",
    submit: "Place order",
    total: "Total",
    fields: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      address: "Address",
      comment: "Comment (optional)",
    },
  },
  ru: {
    title: "Оформление заказа",
    summary: "Состав заказа",
    emptyTitle: "Корзина пуста",
    emptyDescription: "Добавьте товары перед оформлением заказа.",
    browse: "Перейти в каталог",
    submit: "Оформить заказ",
    total: "Итого",
    fields: {
      name: "Полное имя",
      email: "Email",
      phone: "Телефон",
      address: "Адрес",
      comment: "Комментарий (необязательно)",
    },
  },
  me: {
    title: "Poručivanje",
    summary: "Pregled porudžbine",
    emptyTitle: "Korpa je prazna",
    emptyDescription: "Dodajte proizvode prije nego nastavite na poručivanje.",
    browse: "Idi na katalog",
    submit: "Pošalji porudžbinu",
    total: "Ukupno",
    fields: {
      name: "Ime i prezime",
      email: "Email",
      phone: "Telefon",
      address: "Adresa",
      comment: "Komentar (opciono)",
    },
  },
};

type CheckoutPageContentProps = {
  lang: Language;
};

type ResolvedCartItem = {
  product: (typeof products)[number];
  productId: string;
  quantity: number;
  subtotal: number;
};

export function CheckoutPageContent({ lang }: CheckoutPageContentProps) {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    comment: "",
  });

  const cartItems = items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);

      if (!product) {
        return null;
      }

      return {
        ...item,
        product,
        subtotal: product.price * item.quantity,
      };
    })
    .filter((item): item is ResolvedCartItem => item !== null);

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  if (cartItems.length === 0) {
    return (
      <section className={styles.page}>
        <h1 className={styles.title}>{checkoutContent[lang].title}</h1>
        <div className={styles.emptyState}>
          <p className={styles.emptyTitle}>{checkoutContent[lang].emptyTitle}</p>
          <p className={styles.emptyDescription}>
            {checkoutContent[lang].emptyDescription}
          </p>
          <Link className={styles.secondaryButton} href={`/${lang}/catalog`}>
            {checkoutContent[lang].browse}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{checkoutContent[lang].title}</h1>
      <div className={styles.layout}>
        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            clearCart();
            router.push(`/${lang}/order-success`);
          }}
        >
          <label className={styles.field}>
            <span>{checkoutContent[lang].fields.name}</span>
            <input
              required
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
            />
          </label>
          <label className={styles.field}>
            <span>{checkoutContent[lang].fields.email}</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
            />
          </label>
          <label className={styles.field}>
            <span>{checkoutContent[lang].fields.phone}</span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({ ...current, phone: event.target.value }))
              }
            />
          </label>
          <label className={styles.field}>
            <span>{checkoutContent[lang].fields.address}</span>
            <textarea
              required
              rows={4}
              value={form.address}
              onChange={(event) =>
                setForm((current) => ({ ...current, address: event.target.value }))
              }
            />
          </label>
          <label className={styles.field}>
            <span>{checkoutContent[lang].fields.comment}</span>
            <textarea
              rows={3}
              value={form.comment}
              onChange={(event) =>
                setForm((current) => ({ ...current, comment: event.target.value }))
              }
            />
          </label>
          <button className={styles.primaryButton} type="submit">
            {checkoutContent[lang].submit}
          </button>
        </form>

        <aside className={styles.summary}>
          <p className={styles.summaryTitle}>{checkoutContent[lang].summary}</p>
          <div className={styles.summaryItems}>
            {cartItems.map((item) => (
              <div key={item.product.id} className={styles.summaryRow}>
                <div>
                  <p className={styles.summaryName}>{item.product.title[lang]}</p>
                  <p className={styles.summaryMeta}>× {item.quantity}</p>
                </div>
                <p className={styles.summaryPrice}>€{item.subtotal.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className={styles.totalRow}>
            <span>{checkoutContent[lang].total}</span>
            <strong>€{total.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
