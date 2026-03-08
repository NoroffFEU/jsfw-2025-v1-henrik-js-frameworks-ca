import { create } from "zustand";
import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";

type CartStore = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const exists = state.items.find((i) => i.productId === product.id);

      if (exists) {
        return {
          items: state.items.map((i) =>
            i.productId === product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            productId: product.id,
            title: product.title,
            price: product.discountedPrice,
            image: product.image,
            quantity: 1,
          } satisfies CartItem,
        ],
      };
    }),

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.productId !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((i) => i.productId !== productId)
          : state.items.map((i) =>
              i.productId === productId ? { ...i, quantity } : i
            ),
    })),

  clearCart: () => set({ items: [] }),
}));