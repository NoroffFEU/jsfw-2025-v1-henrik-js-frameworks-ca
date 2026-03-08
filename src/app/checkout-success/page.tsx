"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "../stores/cartStore";
import ContinueShopping from "../components/ContinueShopping";

export default function CheckoutSuccess() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="p-4 max-w-3xl mx-auto text-center min-h-screen">
      <h1 className="text-2xl font-bold">Checkout Successful!</h1>
      <p className="mt-4">Thank you for your purchase!</p>
      <p className="mt-4">You will receive a confirmation email shortly.</p>
      <Link
        href="/"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        <ContinueShopping />
      </Link>
    </main>
  );
}
