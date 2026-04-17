import type { LocalizedText } from "@/lib/i18n";

export type LocalizedProductField = LocalizedText | string;

export interface Product {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  price: number;
  images?: string[];
  size?: string;
  dimensions?: string;
  weight?: string;
  material?: LocalizedProductField;
  category?: string;
  featured?: boolean;
  inStock?: boolean;
}
