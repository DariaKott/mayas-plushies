import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/product/product-card";
import { homeContent } from "@/lib/content/home";
import { isValidLanguage } from "@/lib/i18n";
import { products } from "@/lib/data/products";

import styles from "./page.module.css";

type HomePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const featuredProducts = products.filter((product) => product.featured === true);

  return (
    <div className={styles.page}>
      <div className={styles.homeCanvas}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>{homeContent.heroKicker[lang]}</p>
              <h1 className={styles.heroTitle}>{homeContent.heroTitle[lang]}</h1>
              <p className={styles.heroDescription}>
                {homeContent.heroDescription[lang]}
              </p>
              <Link className={styles.primaryButton} href={`/${lang}/catalog`}>
                {homeContent.heroCta[lang]}
              </Link>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.featuredSection}`}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>{homeContent.productsTitle[lang]}</h2>
            <p className={styles.sectionIntro}>{homeContent.productsIntro[lang]}</p>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} lang={lang} product={product} />
            ))}
          </div>
          <div className={styles.centeredAction}>
            <Link className={styles.secondaryButton} href={`/${lang}/catalog`}>
              {homeContent.viewAll[lang]}
            </Link>
          </div>
        </section>

        <section className={`${styles.section} ${styles.benefitsSection}`}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>{homeContent.benefitsTitle[lang]}</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {homeContent.benefits[lang].map((benefit, index) => (
              <div key={benefit} className={styles.benefitItem}>
                <span className={styles.benefitDot} aria-hidden="true" />
                <span className={styles.benefitCount}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.aboutBlock}>
            <div className={styles.aboutCopy}>
              <h3 className={styles.eyebrow}>{homeContent.deliveryTitle[lang]}</h3>
              <div className={styles.aboutText}>
                {homeContent.deliveryText[lang].map((paragraph, index, paragraphs) => (
                  <p key={paragraph}>
                    {paragraph}
                    {index === paragraphs.length - 1 ? (
                      <Image
                        alt=""
                        aria-hidden="true"
                        className={styles.inlineIcon}
                        height={20}
                        src="/images/heart-icon.svg"
                        width={20}
                      />
                    ) : null}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.aboutFigure} aria-hidden="true">
              <Image
                alt=""
                className={styles.aboutImage}
                height={440}
                src="/images/monte_map.webp"
                width={440}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
