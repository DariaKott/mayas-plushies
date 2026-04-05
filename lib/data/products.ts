import type { Product } from "@/lib/types/product";

export const products: Product[] = [
  {
    id: "bear-cloud",
    slug: "bear-cloud",
    title: {
      en: "Cloud Bear",
      ru: "Мишка Облако",
      me: "Medo Oblak",
    },
    description: {
      en: "A soft plush bear made for cozy bedtime routines.",
      ru: "Мягкий плюшевый мишка для уютных вечерних ритуалов перед сном.",
      me: "Mekana plisana igračka za prijatne večernje trenutke pred spavanje.",
    },
    price: 39.9,
    images: ["/images/bear-cloud-1.svg", "/images/bear-cloud-2.svg"],
    size: "32 cm",
    material: "Organic cotton, hypoallergenic filling",
  },
  {
    id: "bunny-mint",
    slug: "bunny-mint",
    title: {
      en: "Mint Bunny",
      ru: "Мятный Кролик",
      me: "Zeka Nana",
    },
    description: {
      en: "A long-eared bunny with a light mint palette and soft texture.",
      ru: "Длинноухий кролик в нежно-мятной палитре с мягкой текстурой.",
      me: "Zeka sa dugim ušima u nježnoj mint nijansi i mekoj teksturi.",
    },
    price: 34.5,
    images: ["/images/bunny-mint-1.svg", "/images/bunny-mint-2.svg"],
    size: "28 cm",
    material: "Velour, recycled polyester filling",
  },
  {
    id: "fox-sunrise",
    slug: "fox-sunrise",
    title: {
      en: "Sunrise Fox",
      ru: "Лисёнок Рассвет",
      me: "Lisica Zora",
    },
    description: {
      en: "A fox plush with warm tones and a compact, huggable shape.",
      ru: "Плюшевый лисёнок в тёплых оттенках и компактной форме для объятий.",
      me: "Plišana lisica u toplim tonovima i kompaktnom obliku za grljenje.",
    },
    price: 42,
    images: ["/images/fox-sunrise-1.svg", "/images/fox-sunrise-2.svg"],
    size: "30 cm",
    material: "Cotton plush, silicone fiber filling",
  },
];
