import { notFound } from "next/navigation";

import { CartPageContent } from "@/components/cart/cart-page-content";
import { isValidLanguage } from "@/lib/i18n";

type CartPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function CartPage({ params }: CartPageProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  return <CartPageContent lang={lang} />;
}
