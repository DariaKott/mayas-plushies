import type { Language, LocalizedText } from "@/lib/i18n";
import type { LocalizedProductField, Product } from "@/lib/types/product";

export const PRODUCT_IMAGE_PLACEHOLDER = "/images/reference.png";

function isLocalizedText(value: LocalizedProductField): value is LocalizedText {
  return typeof value !== "string";
}

export function getLocalizedProductField(
  value: LocalizedProductField | undefined,
  lang: Language,
) {
  if (!value) {
    return "";
  }

  if (isLocalizedText(value)) {
    return value[lang] ?? value.en ?? value.ru ?? value.me ?? "";
  }

  return value;
}

export function getProductPrimaryImage(product: Product) {
  return product.images?.[0] || PRODUCT_IMAGE_PLACEHOLDER;
}

export function getProductGalleryImages(product: Product) {
  return product.images?.length ? product.images : [PRODUCT_IMAGE_PLACEHOLDER];
}

export function getProductSize(product: Product) {
  return product.size || product.dimensions || "";
}
