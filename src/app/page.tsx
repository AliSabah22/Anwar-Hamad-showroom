'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import 'animate.css';
import InteractiveGallery from './components/InteractiveGallery';
import { useScroll, useTransform } from 'framer-motion';
import AbstractSculpture from './components/AbstractSculpture';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  useEffect(() => {
    // Initialize any required animations or effects
  }, []);

  return (
    <div className="min-h-screen bg-[#190B28]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-white"
            >
              Anwar Hamad
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 drop-shadow-md text-white"
            >
              Sculpture & Painting in Raw Emotion and Form
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="#gallery"
                className="inline-block bg-[#ADBDFF] text-[#190B28] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#190B28] hover:text-white transition-colors shadow-lg hover:shadow-xl"
              >
                Explore the Collection
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Works with Interactive Gallery */}
      <section id="gallery" className="relative py-20">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur rounded-2xl shadow-xl border border-white/20 p-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Featured Works</h2>
            <InteractiveGallery />
          </div>
        </div>
      </section>

      {/* About Artist with Scroll-Based Storytelling */}
      <section id="about" className="relative py-12 px-4">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#D1CAA1]/80 to-[#B4A7D6]/80 border border-[#B4A7D6]/40 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 relative z-10 max-w-6xl mx-auto -mt-8">
            <div className="bg-[#B4A7D6] h-1 w-16 mx-auto mb-6 rounded" />
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-square shadow-xl rounded-lg overflow-hidden border-4 border-[#B4A7D6]"
              >
                <Image
                  src="/artist-at-work.jpg"
                  alt="Anwar Hamad painting in studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#190B28]/20 to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('about.title')}</h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#ADBDFF] leading-relaxed"
                >
                  {t('about.description')}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#ADBDFF] leading-relaxed"
                >
                  {t('about.experience')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button 
                    className="inline-block bg-[#ADBDFF] text-[#190B28] px-6 py-2 rounded-full hover:bg-[#D1CAA1] hover:text-[#190B28] transition-colors shadow-md hover:shadow-lg"
                  >
                    Why I Create
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Collector's Lounge Section */}
      <section className="relative py-12">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#D1CAA1]/80 to-[#B4A7D6]/80 border-l-8 border-[#B4A7D6] backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 relative z-10 max-w-6xl mx-auto -mt-8">
            <div className="bg-[#B4A7D6] h-1 w-16 mx-auto mb-6 rounded" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ADBDFF]">Collector's Lounge</h2>
              <p className="text-xl text-white mb-8">
                Join the Collector's Lounge — Early access to originals, private commissions, and first looks.
              </p>
              <Link 
                href="/collectors-lounge"
                className="inline-block bg-[#ADBDFF] text-[#190B28] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D1CAA1] hover:text-[#190B28] transition-colors shadow-lg hover:shadow-xl animate__animated animate__pulse animate__infinite"
              >
                Join Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Shop */}
      <section id="shop" className="relative py-12">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="bg-[#B4A7D6]/80 border-4 border-[#B4A7D6] backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 relative z-10 -mt-8">
            <div className="bg-[#D1CAA1] h-1 w-16 mx-auto mb-6 rounded" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#190B28] tracking-tight">
              <span className="text-[#B4A7D6]">Online</span> Shop
            </h2>
            
            {/* Filters */}
            <div className="flex justify-center gap-4 mb-8">
              <button className="px-6 py-2 rounded-full bg-[#D1CAA1] text-[#190B28] hover:bg-[#B4A7D6] hover:text-[#190B28] transition-colors font-semibold">
                All Works
              </button>
              <button className="px-6 py-2 rounded-full bg-[#B4A7D6] text-[#190B28] hover:bg-[#D1CAA1] hover:text-[#190B28] transition-colors font-semibold">
                Sculptures
              </button>
              <button className="px-6 py-2 rounded-full bg-[#190B28] text-[#D1CAA1] hover:bg-[#B4A7D6] hover:text-[#190B28] transition-colors font-semibold">
                Paintings
              </button>
              <button className="px-6 py-2 rounded-full bg-[#B4A7D6] text-[#190B28] hover:bg-[#190B28] hover:text-[#D1CAA1] transition-colors font-semibold">
                Prints
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: 1,
                  title: "Whispers of Time",
                  price: 4500,
                  medium: "Bronze Sculpture",
                  dimensions: "80 x 60 x 40 cm",
                  image: "/shop-1.jpg",
                  available: true
                },
                {
                  id: 2,
                  title: "Urban Dreams",
                  price: 3200,
                  medium: "Mixed Media on Canvas",
                  dimensions: "120 x 90 cm",
                  image: "/shop-2.jpg",
                  available: true
                },
                {
                  id: 3,
                  title: "Eternal Balance",
                  price: 2800,
                  medium: "Marble Sculpture",
                  dimensions: "70 x 50 x 30 cm",
                  image: "/shop-3.jpg",
                  available: true
                }
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#190B28]">{item.title}</h3>
                    <p className="text-gray-700 mb-1">{item.medium}</p>
                    <p className="text-gray-600 text-sm mb-4">{item.dimensions}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-[#190B28]">${item.price.toLocaleString()}</p>
                      {item.available ? (
                        <button className="bg-[#190B28] text-white px-6 py-2 rounded-full hover:bg-[#ADBDFF] hover:text-[#190B28] transition-colors shadow-md hover:shadow-lg">
                          Add to Cart
                        </button>
                      ) : (
                        <span className="text-[#190B28] font-medium">Sold</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-12">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#D1CAA1]/80 to-[#B4A7D6]/80 border border-[#B4A7D6]/40 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 relative z-10 -mt-8">
            <div className="bg-[#B4A7D6] h-1 w-16 mx-auto mb-6 rounded" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#190B28] tracking-tight">
              Collector <span className="text-[#B4A7D6]">Stories</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-[#D1CAA1] p-8 rounded-lg shadow-lg relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ADBDFF]/10 to-transparent" />
                  <p className="text-xl italic text-gray-700 mb-4 relative z-10">
                    "Anwar's work transforms our space. Each piece tells a story that evolves with time."
                  </p>
                  <p className="font-semibold text-[#190B28] relative z-10">- Sarah & James, New York</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#D1CAA1] p-8 rounded-lg shadow-lg relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ADBDFF]/10 to-transparent" />
                  <p className="text-xl italic text-gray-700 mb-4 relative z-10">
                    "The emotional depth in these sculptures is extraordinary. A true conversation piece."
                  </p>
                  <p className="font-semibold text-[#190B28] relative z-10">- Michael Chen, London</p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/process-video.jpg"
                  alt="Artist process video"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-12">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <div className="bg-[#190B28]/90 border border-[#B4A7D6]/40 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 relative z-10 max-w-6xl mx-auto -mt-8">
            <div className="bg-[#D1CAA1] h-1 w-16 mx-auto mb-6 rounded" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 text-white"
            >
              Art that moves you — Own a piece today
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#shop"
                className="inline-block bg-[#190B28] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#ADBDFF] hover:text-[#190B28] transition-colors shadow-lg hover:shadow-xl animate__animated animate__pulse animate__infinite"
              >
                Shop Now
              </Link>
              <Link 
                href="#contact"
                className="inline-block bg-[#ADBDFF] text-[#190B28] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#190B28] hover:text-white transition-colors shadow-lg hover:shadow-xl animate__animated animate__pulse animate__infinite"
              >
                Commission a Piece
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#190B28] py-12 border-t border-[#ADBDFF]/20">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#ADBDFF] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#shop" className="text-gray-600 hover:text-[#ADBDFF]">Shop</Link></li>
                <li><Link href="#about" className="text-gray-600 hover:text-[#ADBDFF]">About</Link></li>
                <li><Link href="#contact" className="text-gray-600 hover:text-[#ADBDFF]">Contact</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-[#ADBDFF]">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#ADBDFF] mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#ADBDFF]">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#ADBDFF]">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#ADBDFF]">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-[#ADBDFF] mb-4">Be first to know about new drops</h3>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ADBDFF] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#190B28] text-white px-6 py-2 rounded-lg hover:bg-[#ADBDFF] hover:text-[#190B28] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
