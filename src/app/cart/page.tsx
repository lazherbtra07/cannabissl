"use client";

import Link from "next/link";
import { useProductContext } from "@/context/ProductContext";
import { Button } from "@/Components/ui/button";

export default function CartPage() {
  const { items } = useProductContext();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <header className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold tracking-wide">Your cart</h1>
          <Link href="/" className="text-white/70 hover:text-white tracking-wide">
            Continue shopping
          </Link>
        </header>

        {items.length === 0 ? (
          <div className="text-white/60 text-xl tracking-wide">Your cart is empty.</div>
        ) : (
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border border-white/20 rounded-md px-5 py-4">
                <div>
                  <div className="text-xl font-semibold tracking-wide">{item.name}</div>
                  <div className="text-white/60 tracking-wide text-sm">€{item.price.toFixed(2)} each</div>
                </div>
                <div className="text-white/80 tracking-wide">x {item.quantity}</div>
                <div className="font-semibold tracking-wide">€{(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}

            <div className="flex items-center justify-between border-t border-white/20 pt-6">
              <div className="text-white/70 tracking-wide">Total</div>
              <div className="text-2xl font-bold tracking-wide">€{total}</div>
            </div>

            {/* Checkout Button (non-functional) */}
            <div className="flex justify-end pt-2">
              <Button type="button" className="bg-white hover:bg-gray-300 cursor-pointer  text-black rounded-md px-8 py-3 tracking-wide">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
