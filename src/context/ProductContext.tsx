"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type ProductContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  totalQuantity: number;
};

const ProductContext = createContext<ProductContextValue | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem: ProductContextValue["addItem"] = (item) => {
    setItems((prev) => {
      const quantityToAdd = item.quantity ?? 1;
      const existingIndex = prev.findIndex((i) => i.id === item.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantityToAdd,
        };
        return updated;
      }
      return [
        ...prev,
        { id: item.id, name: item.name, price: item.price, quantity: quantityToAdd },
      ];
    });
  };

  const totalQuantity = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const value = useMemo(() => ({ items, addItem, totalQuantity }), [items, totalQuantity]);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProductContext(): ProductContextValue {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProductContext must be used within a ProductProvider");
  return ctx;
}
