import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { isValidLanguage } from "@/lib/i18n";

type LanguageLayoutProps = {
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "me" }];
}

export default async function LanguageLayout({
  children,
  params,
}: LanguageLayoutProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  return <SiteShell currentLang={lang}>{children}</SiteShell>;
}
