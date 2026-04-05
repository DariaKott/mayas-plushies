import { notFound } from "next/navigation";

import { isValidLanguage, type Language } from "@/lib/i18n";

import styles from "./page.module.css";

const privacyContent: Record<
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
    title: "Privacy Policy",
    intro:
      "This page explains how Maya’s plushies handles basic customer information when you browse the store or place an order.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "When you place an order, we may collect your name, email address, phone number, delivery address, and any optional comment you include during checkout.",
          "We may also use basic technical information such as browser and device data to keep the site working properly.",
        ],
      },
      {
        heading: "How we use your information",
        paragraphs: [
          "We use the information you provide to process your order, communicate with you about delivery or order details, and provide customer support.",
          "We do not collect payment information through this website at this stage.",
        ],
      },
      {
        heading: "How your information is stored",
        paragraphs: [
          "Order details are handled only for the purpose of fulfilling and supporting your purchase.",
          "We aim to keep customer information limited, relevant, and protected with reasonable care.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "If you have any questions about privacy or how your information is used, please contact us at contact@mayasplushies.com.",
        ],
      },
    ],
  },
  ru: {
    title: "Политика конфиденциальности",
    intro:
      "На этой странице описано, как Maya’s plushies обращается с основной информацией о клиентах при просмотре сайта и оформлении заказа.",
    sections: [
      {
        heading: "Какие данные мы собираем",
        paragraphs: [
          "При оформлении заказа мы можем получать ваше имя, email, номер телефона, адрес доставки и любой дополнительный комментарий, который вы укажете.",
          "Также может использоваться базовая техническая информация, например данные о браузере и устройстве, чтобы сайт работал корректно.",
        ],
      },
      {
        heading: "Как мы используем данные",
        paragraphs: [
          "Мы используем предоставленную информацию для обработки заказа, связи с вами по вопросам доставки или деталей заказа и для поддержки клиентов.",
          "На данном этапе сайт не собирает платёжные данные.",
        ],
      },
      {
        heading: "Как хранятся данные",
        paragraphs: [
          "Информация о заказе используется только для выполнения и сопровождения вашей покупки.",
          "Мы стараемся хранить только действительно нужные данные и обращаться с ними бережно и разумно.",
        ],
      },
      {
        heading: "Контакты",
        paragraphs: [
          "Если у вас есть вопросы о конфиденциальности или использовании данных, напишите нам на contact@mayasplushies.com.",
        ],
      },
    ],
  },
  me: {
    title: "Politika privatnosti",
    intro:
      "Na ovoj stranici objašnjeno je kako Maya’s plushies postupa sa osnovnim informacijama o kupcima kada pregledate prodavnicu ili pošaljete porudžbinu.",
    sections: [
      {
        heading: "Koje podatke prikupljamo",
        paragraphs: [
          "Kada pošaljete porudžbinu, možemo prikupiti vaše ime, email adresu, broj telefona, adresu dostave i opcioni komentar koji unesete tokom poručivanja.",
          "Možemo koristiti i osnovne tehničke informacije, kao što su podaci o pregledaču i uređaju, kako bi sajt radio ispravno.",
        ],
      },
      {
        heading: "Kako koristimo podatke",
        paragraphs: [
          "Podatke koje nam pošaljete koristimo za obradu porudžbine, komunikaciju o dostavi ili detaljima porudžbine i za korisničku podršku.",
          "U ovoj fazi sajt ne prikuplja podatke o plaćanju.",
        ],
      },
      {
        heading: "Kako se podaci čuvaju",
        paragraphs: [
          "Detalji porudžbine koriste se isključivo radi realizacije i podrške vašoj kupovini.",
          "Trudimo se da podatke kupaca zadržimo ograničenim, relevantnim i zaštićenim uz razumnu pažnju.",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [
          "Ako imate pitanja o privatnosti ili načinu korišćenja podataka, pišite nam na contact@mayasplushies.com.",
        ],
      },
    ],
  },
};

type PrivacyPolicyPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const content = privacyContent[lang];

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
