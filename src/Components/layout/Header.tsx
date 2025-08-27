"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useProductContext } from "@/context/ProductContext";

export default function Header() {
  const { totalQuantity } = useProductContext();

  return (
    <header className="absolute top-12 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] flex items-center justify-between px-6 py-6 rounded-full bg-white/5 backdrop-blur-md ">
      {/* Logo */}
      <span className="text-2xl font-semibold tracking-wide font-orbitron text-white flex items-center gap-1">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span>annabissl</span>
      </span>

      {/* Cart Icon */}
      <Link href="/cart" className="p-2 rounded-full hover:bg-white/10 transition" aria-label="Open cart">
        <div className="relative">
          <ShoppingCart className="h-8 w-8   text-white" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center rounded-full bg-white text-black text-xs min-w-5 h-5 px-1">
              {totalQuantity}
            </span>
          )}
        </div>
      </Link>
    </header>
  );
}
