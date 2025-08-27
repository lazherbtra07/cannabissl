// app/components/Hero.tsx
"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { useProductContext } from "@/context/ProductContext";
import Header from "@/Components/layout/Header";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const { totalQuantity } = useProductContext();

  const handlePlay = () => {
    setShowVideo(true);
  };

  const videoId = "dhg1ercz6vM";

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start text-white overflow-hidden pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/greece flage1.webp"
          alt="Greek flag background"
          fill
          priority
        />
        {/* Base Overlay */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Dark Linear Gradient from Bottom to Top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70 to-transparent" />
        {/* Dark Linear Gradient from Right to Left with transparent middle */}

      </div>

      {/* Top Navigation */}
      <Header />

      {/* Hero Content */}
      <div className="w-full px-6 mt-60">
        <h1 className="text-[110px] leading-tight font-bold text-left max-w-[70%] mx-auto tracking-wide">
          The power to love
        </h1>
        <p className="text-[70px] leading-tight text-right max-w-[75%] mx-auto text-gray-400 font-light tracking-wide">
          is the answer
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full px-6 pb-24 mt-62">
        <div className="flex justify-center">
          <div className="relative w-[90%] h-[90vh] border border-2 border-white/10 rounded-lg overflow-hidden bg-black text-white">
            {!showVideo ? (
              <>
                <Image
                  src="/explain video.jpg"
                  alt="Video cover"
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={100}
                  priority
                />

                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4">
                  {/* Top Gradient for Better Text Readability */}
                  <div className="absolute top-0 left-0 right-0 h-52 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
                  
                  <h1 className="text-2xl md:text-4xl font-light absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    New earth, The shift has begun, be part of the ascension
                  </h1>

                  <button
                    onClick={handlePlay}
                    aria-label="Play video"
                    type="button"
                  >
                    <FaYoutube className="h-44 w-44 text-white cursor-pointer" />
                  </button>
                </div>
              </>
            ) : (
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
