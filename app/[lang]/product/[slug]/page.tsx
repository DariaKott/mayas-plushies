import Link from "next/link";
import { notFound } from "next/navigation";

import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { products } from "@/lib/data/products";
import { isValidLanguage, type Language } from "@/lib/i18n";
import {
  getLocalizedProductField,
  getProductGalleryImages,
  getProductSize,
} from "@/lib/products";

import { ProductGallery } from "./product-gallery";
import styles from "./page.module.css";

const productContent: Record<
  Language,
  {
    addToCart: string;
    addedToCart: string;
    previousImage: string;
    nextImage: string;
    backToCatalog: string;
    descriptionLabel: string;
    detailsTitle: string;
    size: string;
    dimensions: string;
    weight: string;
    material: string;
  }
> = {
  en: {
    addToCart: "Add to cart",
    addedToCart: "Added",
    previousImage: "Previous image",
    nextImage: "Next image",
    backToCatalog: "Back to catalog",
    descriptionLabel: "Description",
    detailsTitle: "Product details",
    size: "Size",
    dimensions: "Dimensions",
    weight: "Weight",
    material: "Material",
  },
  ru: {
    addToCart: "Добавить в корзину",
    addedToCart: "Добавлено",
    previousImage: "Предыдущее фото",
    nextImage: "Следующее фото",
    backToCatalog: "Назад в каталог",
    descriptionLabel: "Описание",
    detailsTitle: "Информация о товаре",
    size: "Размер",
    dimensions: "Габариты",
    weight: "Вес",
    material: "Материал",
  },
  me: {
    addToCart: "Dodaj u korpu",
    addedToCart: "Dodato",
    previousImage: "Prethodna fotografija",
    nextImage: "Sljedeća fotografija",
    backToCatalog: "Nazad na katalog",
    descriptionLabel: "Opis",
    detailsTitle: "Detalji proizvoda",
    size: "Veličina",
    dimensions: "Dimenzije",
    weight: "Težina",
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

  const galleryImages = getProductGalleryImages(product);
  const productSize = getProductSize(product);
  const material = getLocalizedProductField(product.material, lang);
  const dimensions = product.dimensions && product.dimensions !== productSize
    ? product.dimensions
    : "";

  return (
    <section className={styles.page}>
      <Link className={styles.backLink} href={`/${lang}/catalog`}>
        <span className={styles.backIcon} aria-hidden="true">
          <span>‹</span>
          <span>‹</span>
        </span>
        <span>{productContent[lang].backToCatalog}</span>
      </Link>
      <div className={styles.layout}>
        <ProductGallery
          alt={product.title[lang]}
          images={galleryImages}
          nextLabel={productContent[lang].nextImage}
          previousLabel={productContent[lang].previousImage}
        />

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
              {productSize ? (
                <div className={styles.detailRow}>
                  <dt>{productContent[lang].size}</dt>
                  <dd>{productSize}</dd>
                </div>
              ) : null}
              {dimensions ? (
                <div className={styles.detailRow}>
                  <dt>{productContent[lang].dimensions}</dt>
                  <dd>{dimensions}</dd>
                </div>
              ) : null}
              {product.weight ? (
                <div className={styles.detailRow}>
                  <dt>{productContent[lang].weight}</dt>
                  <dd>{product.weight}</dd>
                </div>
              ) : null}
              {material ? (
                <div className={styles.detailRow}>
                  <dt>{productContent[lang].material}</dt>
                  <dd>{material}</dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
