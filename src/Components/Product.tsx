// app/components/ProductHero.tsx
"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useProductContext } from "@/context/ProductContext";

export default function ProductHero() {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 36.9;
  const totalPrice = (unitPrice * quantity).toFixed(1);
  const { addItem } = useProductContext();

  const handleAddToCart = () => {
    addItem({ id: "dharma-oil", name: "Dharma Oil", price: unitPrice, quantity });
  };

  return (
    <section className="w-full bg-black text-white py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center  px-6">
        {/* Left side - Product Image */}
        <div className="flex justify-center md:w-1/2">
          <div className="relative w-[700px] h-[800px]">
            <Image
              src="/product.png"
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
          <div>
            <h1 className="text-6xl font-bold tracking-wide text-white ">Dharma Oil</h1>
            <p className="mt-3 text-3xl font-Semibold  text-white/70 tracking-wide">8% CBD, 0.2% THC</p>
          </div>

          {/* Description */}
          <p className="text-white/60 leading-relaxed text-2xl tracking-wide max-w-3xl">
            As above, so below; as within, so without. Born from the heart of drama, Dharma Oil is more than a
            Cannabis product—it's a journey of transformation, forgiveness, and love. Crafted by a soul who has
            danced with every emotion—hate, love, madness, and everything in between—this oil is an invitation to
            embrace your inner duality and find peace in the chaos, the love you withhold is the pain you carry.
          </p>



          {/* Price + Quantity + Add to Cart */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-white/20">

            {/* Price */}
            <div className="min-w-[180px] text-center">
              <div className="text-3xl font-bold text-white">€{totalPrice}</div>
              <div className="text-white/70 text-md mt-1">[+ VAT]</div>
            </div>
            {/* Quantity Selector */}
            <div className="flex items-center gap-2 bg-transparent border border-white rounded-md px-4 py-2">
              
              <Button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-white cursor-pointer text-3xl hover:bg-transparent hover:text-white"
                variant="ghost"
                type="button"
              >
                −
              </Button>
              <span className="text-2xl">{quantity}</span>
              <Button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-white cursor-pointer  transition-colors  text-3xl hover:bg-transparent hover:text-white"
                variant="ghost"
                type="button"
              >
                +
              </Button>
            </div>


            {/* Add to Cart */}
            <Button onClick={handleAddToCart} className="flex items-center gap-4 px-12 py-7 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium text-lg tracking-wide" type="button" size={"lg"}>
              <ShoppingCart className="size-7" />
              Feel it now
            </Button>
          </div>

          {/* Bottom divider */}
          <div className="border-t border-white/20 " />

          {/* View all details */}
          <div>
            <Button
              className="px-10 py-6 tracking-wider rounded-full border border-white/40 text-white/70 hover:text-white hover:border-white bg-transparent text-lg font-light"

              type="button"
              size={"lg"}
            >
              View all details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
