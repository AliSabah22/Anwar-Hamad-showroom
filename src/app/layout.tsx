// This file will be moved to src/app/[locale]/layout.tsx for locale-based routing with next-intl.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from './components/StarBackground';

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
                  <select className="ml-4 px-2 py-1 rounded bg-[#D1CAA1] text-[#190B28] border border-[#B4A7D6] focus:outline-none focus:ring-2 focus:ring-[#B4A7D6]" defaultValue="en">
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>
            </div>
          </nav>
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
