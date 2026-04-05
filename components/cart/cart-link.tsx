"use client";

import Link from "next/link";

import type { Language } from "@/lib/i18n";

import { useCart } from "./cart-provider";

import styles from "./cart-link.module.css";

type CartLinkProps = {
  currentLang: Language;
  className: string;
  iconClassName: string;
};

export function CartLink({
  currentLang,
  className,
  iconClassName,
}: CartLinkProps) {
  const { itemCount } = useCart();

  return (
    <Link aria-label="Cart" className={className} href={`/${currentLang}/cart`}>
      <svg
        aria-hidden="true"
        className={iconClassName}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        <circle cx="9" cy="20" r="1.35" />
        <circle cx="18" cy="20" r="1.35" />
        <path d="M3.5 4.5H5.6L7.8 15.2H18.2L20.5 8H8.4" />
      </svg>
      {itemCount > 0 ? <span className={styles.badge}>{itemCount}</span> : null}
    </Link>
  );
}
