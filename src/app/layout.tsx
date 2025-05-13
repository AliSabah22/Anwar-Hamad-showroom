// This file will be moved to src/app/[locale]/layout.tsx for locale-based routing with next-intl.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from './components/StarBackground';
import React from 'react';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anwar Hamad Art Showroom",
  description: "Explore and purchase unique sculptures and paintings by Anwar Hamad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen bg-gradient-to-b from-[#190B28] to-[#2C1B47]`}>
        <StarBackground 
          count={4000}
          speed={0.3}
          size={0.12}
          color="#ADBDFF"
          opacity={0.6}
          radius={4}
        />
        <div className="relative z-10">
          <Navigation />
          <main className="pt-12">
            {children}
          </main>
          <footer className="bg-white/90 backdrop-blur-sm mt-8 py-4 border-t-2 border-[#D1CAA1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-sm text-gray-600">
                <p>© {new Date().getFullYear()} Anwar Hamad. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
