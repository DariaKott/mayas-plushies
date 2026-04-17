"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./page.module.css";

type ProductGalleryProps = {
  alt: string;
  images: string[];
  previousLabel: string;
  nextLabel: string;
};

export function ProductGallery({
  alt,
  images,
  previousLabel,
  nextLabel,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const showControls = images.length > 1;
  const activeImage = images[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!showControls || touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 36 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goToNext();
      return;
    }

    goToPrevious();
  };

  return (
    <div className={styles.gallery}>
      <div
        className={styles.mainImageWrap}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <Image
          alt={alt}
          className={styles.mainImage}
          height={920}
          src={activeImage}
          width={920}
        />

        {showControls ? (
          <>
            <button
              aria-label={previousLabel}
              className={`${styles.galleryControlZone} ${styles.galleryControlZoneLeft}`}
              type="button"
              onClick={goToPrevious}
            >
              <span className={styles.galleryArrow}>‹</span>
            </button>
            <button
              aria-label={nextLabel}
              className={`${styles.galleryControlZone} ${styles.galleryControlZoneRight}`}
              type="button"
              onClick={goToNext}
            >
              <span className={styles.galleryArrow}>›</span>
            </button>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className={styles.thumbnailGrid}>
          {images.map((image, index) => (
            <button
              key={image}
              aria-label={`${alt} ${index + 1}`}
              className={`${styles.thumbnailButton} ${
                index === activeIndex ? styles.thumbnailButtonActive : ""
              }`}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.thumbnailWrap}>
                <Image
                  alt=""
                  className={styles.thumbnail}
                  height={320}
                  src={image}
                  width={320}
                />
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
