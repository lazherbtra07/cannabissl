"use client";

import { FaYoutube, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Card } from "./ui/card";

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-black" aria-labelledby="newsletter-heading">
      <div className="w-full sm:w-[80%] mx-auto">
        {/* Main Container */}
        <Card className="  border-white/10  border-4 care rounded-md p-8 sm:p-20 text-center bg-transparent">
          {/* Main Heading */}
          <h2 id="newsletter-heading" className="text-3xl sm:text-6xl font-bold text-gray-300  text-center mb-8 sm:mb-10 font-orbitron tracking-wide">
            Daily activity is here. Stay updated.
          </h2>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-8 sm:mb-10" aria-label="Social media links">
            {/* YouTube */}
            <a href="https://youtube.com" className="w-16 h-16 sm:w-24 sm:h-24  rounded-md flex items-center justify-center" aria-label="Visit our YouTube channel">
              <FaYoutube className="w-16 h-16 sm:w-24 sm:h-24 text-red-600" />
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-md flex items-center justify-center" aria-label="Visit our Instagram profile">
              <FaInstagram className="w-12 h-12 sm:w-20 sm:h-20 text-white" />
            </a>

            {/* TikTok */}
            <a href="https://tiktok.com" className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center" aria-label="Visit our TikTok profile">
              <FaTiktok className="w-12 h-12 sm:w-20 sm:h-20 text-black" />
            </a>

            {/* X (Twitter) */}
            <a href="https://twitter.com" className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-md flex items-center justify-center" aria-label="Visit our X (Twitter) profile">
              <FaXTwitter className="w-12 h-12 sm:w-20 sm:h-20 text-black" />
            </a>
          </div>

          {/* Subscription Prompt */}
          <p className="text-2xl sm:text-4xl text-center text-white mb-6 sm:mb-10 font-orbitron">
            subscribe for daily news
          </p>

          {/* Email Input Field */}
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              placeholder="email"
              required
              aria-label="Enter your email address"
              className="w-full max-w-lg px-6 sm:px-10 py-3 sm:py-4  text-2xl sm:text-3xl border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors font-orbitron"
            />
          </form>
        </Card>
      </div>
    </section>
  );
}
