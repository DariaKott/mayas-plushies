"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "plushie-grove-cart";

export type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addItem: (productId: string, quantity?: number) => void;
  decreaseItem: (productId: string) => void;
  increaseItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem[];
        setItems(parsed);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [isLoaded, items]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (productId: string, quantity = 1) => {
      setItems((current) => {
        const existing = current.find((item) => item.productId === productId);

        if (!existing) {
          return [...current, { productId, quantity }];
        }

        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      });
    };

    const increaseItem = (productId: string) => {
      addItem(productId, 1);
    };

    const decreaseItem = (productId: string) => {
      setItems((current) =>
        current.flatMap((item) => {
          if (item.productId !== productId) {
            return [item];
          }

          if (item.quantity <= 1) {
            return [];
          }

          return [{ ...item, quantity: item.quantity - 1 }];
        }),
      );
    };

    const removeItem = (productId: string) => {
      setItems((current) => current.filter((item) => item.productId !== productId));
    };

    const clearCart = () => {
      setItems([]);
    };

    return {
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      addItem,
      decreaseItem,
      increaseItem,
      removeItem,
      clearCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
