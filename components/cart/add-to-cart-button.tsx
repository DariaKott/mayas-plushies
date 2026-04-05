"use client";

import { useState } from "react";

import { useCart } from "./cart-provider";

type AddToCartButtonProps = {
  className: string;
  idleLabel: string;
  addedLabel: string;
  productId: string;
};

export function AddToCartButton({
  className,
  idleLabel,
  addedLabel,
  productId,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  return (
    <button
      className={className}
      type="button"
      onClick={() => {
        addItem(productId);
        setIsAdded(true);
        window.setTimeout(() => setIsAdded(false), 1200);
      }}
    >
      {isAdded ? addedLabel : idleLabel}
    </button>
  );
}
