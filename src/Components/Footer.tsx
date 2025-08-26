"use client";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Navigation Links */}
        <nav className="flex justify-center items-center gap-12 mb-8">
          <a 
            href="/about" 
            className="text-gray-400 hover:text-white transition-colors font-orbitron text-lg tracking-wide uppercase"
          >
            about
          </a>
          <a 
            href="/contact" 
            className="text-gray-400 hover:text-white transition-colors font-orbitron text-lg tracking-wide uppercase"
          >
            contact
          </a>
          <a 
            href="/legal" 
            className="text-gray-400 hover:text-white transition-colors font-orbitron text-lg tracking-wide uppercase"
          >
            legal
          </a>
        </nav>

        {/* Separator Line */}
        <div className="w-full max-w-2xl mx-auto mb-8">
          <hr className="border-gray-600 border-t" />
        </div>

        {/* Copyright Notice */}
        <p className="text-gray-400 font-orbitron text-lg tracking-wide uppercase">
          NORIO IKE. all right reserved.
        </p>
      </div>
    </footer>
  );
}
