"use client";

import { useEffect } from "react";
import { useCartStore } from "../stores/cartStore";
import type { CartItem } from "../types/cart";

const KEY = "cart_v1";

export default function CartPersist() {
  const items = useCartStore((s) => s.items);

  // load en gang
  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw) as CartItem[];
    if (Array.isArray(parsed)) {
      useCartStore.setState({ items: parsed });
    }
  }, []);

  // save hver gang items endrer seg
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  return null;
}