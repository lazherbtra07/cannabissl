// app/components/ProductHero.tsx
"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductHero() {
  const [quantity, setQuantity] = useState(1);
  const [thcLevel, setThcLevel] = useState("-0.2%");

  return (
    <section className="w-full bg-black text-white py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center  px-6">
        {/* Left side - Product Image */}
        <div className="flex justify-center md:w-1/2">
          <div className="relative w-[700px] h-[800px]">
            <Image
              src="/product.png" // your product image
              alt="CBD Oil"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2 space-y-8">
          {/* Title */}
          <h1 className="text-5xl font-bold tracking-wide text-white uppercase">
            Dharma CBD Oil
          </h1>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-2xl tracking-wide w-[800px]">
            As above, so below; as within, so without. Born from the heart of
            Greece, 369 Peace Oil is more than a CBD product—it's a journey of
            transformation, forgiveness, and love. Crafted by a soul who has
            danced with every emotion—hate, love, madness, and everything in
            between—this THC/CBD oil is an invitation to embrace your inner
            duality and find peace in the chaos.
          </p>

          {/* Read More Button */}
          <button className="px-8 py-3 border border-white rounded-md text-white hover:bg-white hover:text-black transition-colors">
            Read more
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6  border-t border-white/20"></div>

          {/* THC Level */}
          <div className=" flex items-center gap-6">
            <span className="text-xl tracking-wide text-gray/400 uppercase text-white font-medium whitespace-nowrap">
              Select THC level
            </span>
            <div className="flex gap-4">
              {["~0.2%", "0%"].map((level) => (
                <button
                  key={level}
                  onClick={() => setThcLevel(level)}
                  className={`px-6 py-3 rounded-md border transition-colors ${
                    thcLevel === level
                      ? "border-white text-white"
                      : "border-white/40 text-gray-300 hover:border-white"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Price + Quantity + Add to Cart */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-white/20">
            {/* Price */}
            <span className="text-3xl font-bold text-white">€36.9</span>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 bg-transparent border border-white rounded-md px-4 py-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-white text-3xl hover:text-gray-300 transition-colors px-4"
              >
                −
              </button>
              <span className="text-white px-3">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-white text-3xl hover:text-gray-300 transition-colors px-2"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button className="flex items-center text-xl gap-3 px-12 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-thin">
              <ShoppingCart className="h-5 w-5" />
              Feel it now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
