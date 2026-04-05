import type { LocalizedText } from "@/lib/i18n";

export interface Product {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  price: number;
  images: string[];
  size: string;
  material: string;
}
