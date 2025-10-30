import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-[#a9eeff] py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <a
            href="#"
            className="font-['Mona_Sans',_sans-serif] hover:opacity-70 transition-opacity"
          >
            Visit Youtube
          </a>
          <div className="flex gap-6">
            <a
              href="#home"
              className="font-['Mona_Sans',_sans-serif] hover:opacity-70 transition-opacity"
            >
              Home
            </a>
            <a
              href="#features"
              className="font-['Mona_Sans',_sans-serif] hover:opacity-70 transition-opacity"
            >
              Features
            </a>
          </div>
        </div>

        <div className="border-t border-black/20 pt-8">
          <p className="font-['Mona_Sans',_sans-serif] text-center">
            © 2025 ScoutHub.All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
