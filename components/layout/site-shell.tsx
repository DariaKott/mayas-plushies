import type { ReactNode } from "react";

import { CartProvider } from "@/components/cart/cart-provider";
import type { Language } from "@/lib/i18n";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  children: ReactNode;
  currentLang: Language;
};

export function SiteShell({ children, currentLang }: SiteShellProps) {
  return (
    <CartProvider>
      <SiteHeader currentLang={currentLang} />
      <main>{children}</main>
      <SiteFooter currentLang={currentLang} />
    </CartProvider>
  );
}
