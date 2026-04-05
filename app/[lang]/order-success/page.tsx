import Link from "next/link";
import { notFound } from "next/navigation";

import { isValidLanguage, type Language } from "@/lib/i18n";

import styles from "./page.module.css";

const orderSuccessContent: Record<
  Language,
  {
    title: string;
    message: string;
    note: string;
    continueShopping: string;
    backHome: string;
  }
> = {
  en: {
    title: "Thank you for your order",
    message:
      "We’ve received your order and will contact you soon with the next steps.",
    note: "A confirmation email will follow shortly.",
    continueShopping: "Continue shopping",
    backHome: "Back to home",
  },
  ru: {
    title: "Спасибо за ваш заказ",
    message:
      "Мы получили ваш заказ и скоро свяжемся с вами, чтобы уточнить дальнейшие шаги.",
    note: "Письмо с подтверждением придёт в ближайшее время.",
    continueShopping: "Продолжить покупки",
    backHome: "На главную",
  },
  me: {
    title: "Hvala na vašoj porudžbini",
    message:
      "Primili smo vašu porudžbinu i uskoro ćemo vas kontaktirati sa narednim koracima.",
    note: "Potvrdni email će stići uskoro.",
    continueShopping: "Nastavi kupovinu",
    backHome: "Nazad na početnu",
  },
};

type OrderSuccessPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function OrderSuccessPage({
  params,
}: OrderSuccessPageProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconWrap} aria-hidden="true">
          <div className={styles.iconCircle}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            >
              <path d="M5 12.5L9.2 16.5L19 7.5" />
            </svg>
          </div>
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title}>{orderSuccessContent[lang].title}</h1>
          <p className={styles.message}>{orderSuccessContent[lang].message}</p>
          <p className={styles.note}>{orderSuccessContent[lang].note}</p>
        </div>

        <div className={styles.actions}>
          <Link className={styles.primaryButton} href={`/${lang}/catalog`}>
            {orderSuccessContent[lang].continueShopping}
          </Link>
          <Link className={styles.secondaryButton} href={`/${lang}`}>
            {orderSuccessContent[lang].backHome}
          </Link>
        </div>
      </div>
    </section>
  );
}
