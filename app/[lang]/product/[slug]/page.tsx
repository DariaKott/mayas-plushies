import Image from "next/image";
import { notFound } from "next/navigation";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { products } from "@/lib/data/products";
import { isValidLanguage, type Language } from "@/lib/i18n";

import styles from "./page.module.css";

const productContent: Record<
  Language,
  {
    addToCart: string;
    addedToCart: string;
    descriptionLabel: string;
    detailsTitle: string;
    size: string;
    material: string;
  }
> = {
  en: {
    addToCart: "Add to cart",
    addedToCart: "Added",
    descriptionLabel: "Description",
    detailsTitle: "Product details",
    size: "Size",
    material: "Material",
  },
  ru: {
    addToCart: "Добавить в корзину",
    addedToCart: "Добавлено",
    descriptionLabel: "Описание",
    detailsTitle: "Информация о товаре",
    size: "Размер",
    material: "Материал",
  },
  me: {
    addToCart: "Dodaj u korpu",
    addedToCart: "Dodato",
    descriptionLabel: "Opis",
    detailsTitle: "Detalji proizvoda",
    size: "Veličina",
    material: "Materijal",
  },
};

type ProductPageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.flatMap((product) =>
    ["en", "ru", "me"].map((lang) => ({
      lang,
      slug: product.slug,
    })),
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { lang, slug } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.gallery}>
          <div className={styles.mainImageWrap}>
            <Image
              alt={product.title[lang]}
              className={styles.mainImage}
              height={920}
              src={product.images[0]}
              width={920}
            />
          </div>
          {product.images.length > 1 ? (
            <div className={styles.thumbnailGrid}>
              {product.images.slice(1).map((image) => (
                <div key={image} className={styles.thumbnailWrap}>
                  <Image
                    alt=""
                    className={styles.thumbnail}
                    height={320}
                    src={image}
                    width={320}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{product.title[lang]}</h1>
          <p className={styles.price}>€{product.price.toFixed(2)}</p>

          <div className={styles.copyBlock}>
            <p className={styles.label}>{productContent[lang].descriptionLabel}</p>
            <p className={styles.description}>{product.description[lang]}</p>
          </div>

          <AddToCartButton
            addedLabel={productContent[lang].addedToCart}
            className={styles.button}
            idleLabel={productContent[lang].addToCart}
            productId={product.id}
          />

          <div className={styles.details}>
            <p className={styles.label}>{productContent[lang].detailsTitle}</p>
            <dl className={styles.detailList}>
              <div className={styles.detailRow}>
                <dt>{productContent[lang].size}</dt>
                <dd>{product.size}</dd>
              </div>
              <div className={styles.detailRow}>
                <dt>{productContent[lang].material}</dt>
                <dd>{product.material}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
