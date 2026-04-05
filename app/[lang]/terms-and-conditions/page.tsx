import { notFound } from "next/navigation";

import { isValidLanguage, type Language } from "@/lib/i18n";

import styles from "./page.module.css";

const termsContent: Record<
  Language,
  {
    title: string;
    intro: string;
    sections: Array<{
      heading: string;
      paragraphs: string[];
    }>;
  }
> = {
  en: {
    title: "Terms & Conditions",
    intro:
      "These terms describe the basic conditions for using Maya’s plushies and placing an order through the website.",
    sections: [
      {
        heading: "Orders",
        paragraphs: [
          "By placing an order, you confirm that the information you provide is accurate and complete.",
          "Orders are subject to confirmation and availability.",
        ],
      },
      {
        heading: "Products",
        paragraphs: [
          "We aim to describe products as clearly and accurately as possible, including images, materials, and sizes.",
          "Because of screen settings and product photography, colors may appear slightly different in real life.",
        ],
      },
      {
        heading: "Pricing",
        paragraphs: [
          "All prices shown on the website are listed in euros unless stated otherwise.",
          "Prices may be updated from time to time, but confirmed orders will follow the price shown at the time of checkout.",
        ],
      },
      {
        heading: "Contact and support",
        paragraphs: [
          "If you need help with an order, a product question, or general support, please contact us at contact@mayasplushies.com.",
        ],
      },
    ],
  },
  ru: {
    title: "Условия использования",
    intro:
      "Эти условия описывают основные правила использования сайта Maya’s plushies и оформления заказа через него.",
    sections: [
      {
        heading: "Заказы",
        paragraphs: [
          "Оформляя заказ, вы подтверждаете, что предоставленные вами данные являются точными и полными.",
          "Все заказы зависят от подтверждения и наличия товара.",
        ],
      },
      {
        heading: "Товары",
        paragraphs: [
          "Мы стараемся описывать товары максимально точно и понятно, включая изображения, материалы и размеры.",
          "Из-за настроек экрана и особенностей предметной съёмки оттенки могут немного отличаться в реальности.",
        ],
      },
      {
        heading: "Цены",
        paragraphs: [
          "Все цены на сайте указаны в евро, если не указано иное.",
          "Цены могут обновляться со временем, но подтверждённый заказ оформляется по цене, указанной на момент checkout.",
        ],
      },
      {
        heading: "Контакты и поддержка",
        paragraphs: [
          "Если вам нужна помощь по заказу, товару или общим вопросам, напишите нам на contact@mayasplushies.com.",
        ],
      },
    ],
  },
  me: {
    title: "Uslovi korišćenja",
    intro:
      "Ovi uslovi opisuju osnovna pravila korišćenja sajta Maya’s plushies i slanja porudžbine putem njega.",
    sections: [
      {
        heading: "Porudžbine",
        paragraphs: [
          "Slanjem porudžbine potvrđujete da su podaci koje ste unijeli tačni i potpuni.",
          "Sve porudžbine zavise od potvrde i dostupnosti proizvoda.",
        ],
      },
      {
        heading: "Proizvodi",
        paragraphs: [
          "Trudimo se da proizvode opišemo jasno i precizno, uključujući fotografije, materijale i dimenzije.",
          "Zbog podešavanja ekrana i fotografije proizvoda, boje mogu neznatno odstupati u stvarnosti.",
        ],
      },
      {
        heading: "Cijene",
        paragraphs: [
          "Sve cijene na sajtu iskazane su u eurima, osim ako nije drugačije navedeno.",
          "Cijene se mogu mijenjati s vremenom, ali potvrđene porudžbine važe po cijeni prikazanoj u trenutku poručivanja.",
        ],
      },
      {
        heading: "Kontakt i podrška",
        paragraphs: [
          "Ako vam je potrebna pomoć oko porudžbine, proizvoda ili opšte podrške, pišite nam na contact@mayasplushies.com.",
        ],
      },
    ],
  },
};

type TermsPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function TermsPage({ params }: TermsPageProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const content = termsContent[lang];

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.intro}>{content.intro}</p>
        </header>

        <div className={styles.sections}>
          {content.sections.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.heading}</h2>
              <div className={styles.textBlock}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
