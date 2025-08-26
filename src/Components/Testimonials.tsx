"use client";

import Image from "next/image";
import { Card } from "./ui/card";


interface Testimonial {
  id: number;
  name: string;
  profileImage: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jacob Omn",
    profileImage: "/jacob.png", // You'll need to add this image
    text: "the story of the product explains why it opens my pineal gland in a couple of minutes, this is by far the most significant product i ever tried, what a story 🤘",
  },
  {
    id: 2,
    name: "Melina Athanasiou",
    profileImage: "/melina.png", // You'll need to add this image
    text: "It took me a while to realize that my heart dreams, and my mind constructs my dreams, and this must be the ultimate explanation why this products does what it does to me. the love you withhold is the pain that you carry ❤️",
  },
  {
    id: 3,
    name: "Marc Vonach",
    profileImage: "/marc.png", // You'll need to add this image
    text: "I made this product with every emotion i could feel, I connect my mind and heart, I hated, loved, hurt and got hurt, it was always an endless loop until I added one more drop of love, and it's all resolved. 639 ☯️",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-[95%] mx-auto">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-5xl font-extrabold text-white/80 text-center mb-16 font-orbitron tracking-wide">
          How you felt...
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`card-surface p-6 ${
                index === 1 
                  ? 'md:col-span-1 md:scale-105 md:transform md:z-10 bg-black/30' 
                  : 'bg-black/20'
              } backdrop-blur-sm`}
            >
              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`rounded-full overflow-hidden border border-gray-600 flex-shrink-0 ${
                  index === 1 ? 'w-16 h-16' : 'w-14 h-14'
                }`}>
                  <Image
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    width={index === 1 ? 64 : 56}
                    height={index === 1 ? 64 : 56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium font-orbitron text-xl">
                    {testimonial.name}
                  </h3>
                </div>
              </div>

              {/* Testimonial Text Section */}
              <div className="">
                <p className="text-white/50  font-extralight text-2xl">
                  {testimonial.text}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-white/60 text-lg mb-6 font-orbitron">
            Have you tried it already?
          </p>
          <button className="px-7 py-3 border border-white/70 text-white rounded-full hover:bg-white hover:text-black transition-colors font-medium font-orbitron">
            Add your feeling
          </button>
        </div>
      </div>
    </section>
  );
}
