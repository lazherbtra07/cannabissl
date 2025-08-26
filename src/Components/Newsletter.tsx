"use client";

import { FaYoutube, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Newsletter() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="w-[80%] mx-auto">
        {/* Main Container */}
        <div className=" border border-4 border-gray-600 rounded-md p-20 text-center">
          {/* Main Heading */}
          <h2 className="text-6xl font-bold text-gray-300  text-center mb-10 font-orbitron tracking-wide">
            Daily activity is here. Stay updated.
          </h2>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-10 mb-10">
            {/* YouTube */}
            <div className="w-24 h-24  rounded-md flex items-center justify-center">
              <FaYoutube className="w-24 h-24 text-red-600" />
              </div>

            {/* Instagram */}
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-md flex items-center justify-center">
              <FaInstagram className="w-20 h-20 text-white" />
            </div>

            {/* TikTok */}
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <FaTiktok className="w-20 h-20 text-black" />
            </div>

            {/* X (Twitter) */}
            <div className="w-24 h-24 bg-white rounded-md flex items-center justify-center">
              <FaXTwitter className="w-20 h-20 text-black" />
            </div>
          </div>

          {/* Subscription Prompt */}
          <p className="text-white text-4xl mb-10 font-orbitron">
            subscribe for daily news
          </p>

          {/* Email Input Field */}
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="email"
              className="w-full max-w-lg px-10 py-4 text-gray-300 text-3xl border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors font-orbitron"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
