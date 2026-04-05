import { notFound } from "next/navigation";

import { CheckoutPageContent } from "@/components/cart/checkout-page-content";
import { isValidLanguage } from "@/lib/i18n";

type CheckoutPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  return <CheckoutPageContent lang={lang} />;
}
