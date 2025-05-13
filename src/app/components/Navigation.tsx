'use client';

import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b-2 border-[#D1CAA1]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold text-[#2C3E50]">Anwar Hamad</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/gallery" className="text-[#190B28] hover:text-[#B4A7D6] transition-colors">Gallery</a>
            <a href="/shop" className="text-[#190B28] hover:text-[#B4A7D6] transition-colors">Shop</a>
            <a href="/about" className="text-[#190B28] hover:text-[#B4A7D6] transition-colors">About</a>
            <a href="/contact" className="text-[#190B28] hover:text-[#B4A7D6] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 