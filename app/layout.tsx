import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maya's plushies",
  description: "Localized plush toy e-commerce website for Maya's plushies.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
