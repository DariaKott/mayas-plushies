import type { Language, LocalizedText } from "@/lib/i18n";

type HomeContent = {
  heroKicker: LocalizedText;
  heroTitle: LocalizedText;
  heroDescription: LocalizedText;
  heroCta: LocalizedText;
  productsTitle: LocalizedText;
  productsIntro: LocalizedText;
  viewAll: LocalizedText;
  benefitsTitle: LocalizedText;
  benefits: Record<Language, string[]>;
  aboutTitle: LocalizedText;
  aboutText: LocalizedText;
  deliveryTitle: LocalizedText;
  deliveryText: Record<Language, string[]>;
};

export const homeContent: HomeContent = {
  heroKicker: {
    en: "Realistic plush animals",
    ru: "Реалистичные плюшевые животные",
    me: "Realistične plišane životinje",
  },
  heroTitle: {
    en: "Nature-Inspired Plush Toys in Montenegro",
    ru: "Плюшевые игрушки, вдохновлённые природой, в Черногории",
    me: "Plišane igračke inspirisane prirodom u Crnoj Gori",
  },
  heroDescription: {
    en: "A calm collection of realistic plush animals with natural palettes, tactile fabrics, and a quietly magical presence.",
    ru: "Спокойная коллекция реалистичных плюшевых животных с природной палитрой, приятными фактурами и лёгким ощущением тихого волшебства.",
    me: "Mirna kolekcija realističnih plišanih životinja sa prirodnom paletom, prijatnim teksturama i tihom dozom čarolije.",
  },
  heroCta: {
    en: "Shop now",
    ru: "Перейти в каталог",
    me: "Pogledaj ponudu",
  },
  productsTitle: {
    en: "Our toys",
    ru: "Наши игрушки",
    me: "Naše igračke",
  },
  productsIntro: {
    en: "Soft silhouettes, grounded colors, and a natural shelf presence.",
    ru: "Мягкие силуэты, спокойные оттенки и естественное присутствие в интерьере.",
    me: "Meke siluete, smirene boje i prirodno prisustvo u prostoru.",
  },
  viewAll: {
    en: "View all",
    ru: "Смотреть все",
    me: "Pogledaj sve",
  },
  benefitsTitle: {
    en: "Made for calm gifting",
    ru: "Создано для спокойных и продуманных подарков",
    me: "Stvoreno za mirne i pažljive poklone",
  },
  benefits: {
    en: [
      "Natural-feel materials and tactile finishes",
      "Soft, safe forms for everyday play",
      "Gift-worthy pieces with a quiet personality",
      "Fast delivery with simple local ordering",
    ],
    ru: [
      "Материалы с натуральным ощущением и приятной фактурой",
      "Мягкие и безопасные формы для повседневной игры",
      "Игрушки с характером, которые приятно дарить",
      "Быстрая доставка и простой локальный заказ",
    ],
    me: [
      "Materijali prirodnog osjećaja i prijatne završne teksture",
      "Meki i sigurni oblici za svakodnevnu igru",
      "Pokloni sa tihim karakterom i toplinom",
      "Brza dostava i jednostavno lokalno poručivanje",
    ],
  },
  aboutTitle: {
    en: "A small collection with landscape in mind",
    ru: "Небольшая коллекция, вдохновлённая природным пейзажем",
    me: "Mala kolekcija nadahnuta pejzažom",
  },
  aboutText: {
    en: "We choose plush animals that feel close to nature: soft, realistic, quietly imaginative, and made to live well in a thoughtful home.",
    ru: "Мы выбираем плюшевых животных, близких к природе: мягких, реалистичных, деликатно воображаемых и созданных для красивой жизни в доме.",
    me: "Biramo plišane životinje koje su bliske prirodi: mekane, realistične, tiho maštovite i stvorene da lijepo žive u pažljivo uređenom domu.",
  },
  deliveryTitle: {
    en: "Delivery",
    ru: "Доставка",
    me: "Dostava",
  },
  deliveryText: {
    en: [
      "We deliver across Montenegro within 2–4 working days.",
      "If you need your plush sooner or for a special moment, just write to us — we’ll do our best to make it happen.",
    ],
    ru: [
      "Мы доставляем по всей Черногории в течение 2–4 рабочих дней.",
      "Если вам нужна игрушка быстрее или к особому моменту, просто напишите нам — мы постараемся всё организовать.",
    ],
    me: [
      "Dostavljamo širom Crne Gore u roku od 2–4 radna dana.",
      "Ako vam je plišana igračka potrebna ranije ili za poseban trenutak, samo nam pišite — potrudićemo se da to omogućimo.",
    ],
  },
};
