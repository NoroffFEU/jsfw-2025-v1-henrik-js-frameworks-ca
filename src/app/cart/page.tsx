/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useCartStore } from "../stores/cartStore";
import ContinueShopping from "../components/ContinueShopping";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <main className="p-4 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <p className="mt-4">Your cart is currently empty.</p>
        <Link
          href="/"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          <ContinueShopping />
        </Link>
      </main>
    );
  }

  return (
    <main className="p-4 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <ul className="mt-4">
        {items.map((item) => (
          <li
            key={item.productId}
            className="border-b py-2 flex gap-4 items-center justify-between"
          >
            <div className="flex gap-5">
              <div>
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                  className="w-16 h-16 object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-white">
                  {item.price} kr x {item.quantity}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() =>
                  updateQuantity(item.productId, item.quantity - 1)
                }
                className="border px-2 text-yellow-500"
              >
                -
              </button>

              <span className="font-bold text-2xl">{item.quantity}</span>

              <button
                onClick={() =>
                  updateQuantity(item.productId, item.quantity + 1)
                }
                className="border px-2 text-green-500"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.productId)}
                className="border px-2 text-red-500"
              >
                Remove Item
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="text-xl font-bold">Total: {total.toFixed(2)} kr</p>
        <Link
          href="/checkout-success"
          className="bg-green-500 text-white px-4 py-2 rounded mt-2 inline-block"
        >
          Checkout
        </Link>
      </div>
    </main>
  );
}
