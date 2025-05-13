'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import InteractiveGallery from './components/InteractiveGallery';
import { useScroll, useTransform } from 'framer-motion';
import AbstractSculpture from './components/AbstractSculpture';

export default function Home() {
  useEffect(() => {
    // Initialize any required animations or effects
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#190B28]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div 
            className="max-w-3xl"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-white"
            >
              Anwar Hamad
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 drop-shadow-md text-white"
            >
              Sculpture & Painting in Raw Emotion and Form
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link 
                href="#gallery"
                className="inline-block bg-[#ADBDFF] text-[#190B28] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#190B28] hover:text-white transition-colors shadow-lg hover:shadow-xl"
              >
                Explore the Collection
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Works with Interactive Gallery */}
      <section id="gallery" className="relative py-20">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div 
            className="bg-white/10 backdrop-blur rounded-2xl shadow-xl border border-white/20 p-8 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured Works
            </motion.h2>
            <InteractiveGallery />
          </motion.div>
        </div>
      </section>

      {/* About Artist with Scroll-Based Storytelling */}
      <section id="about" className="relative py-12 px-4">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-[#D1CAA1]/80 to-[#B4A7D6]/80 border border-[#B4A7D6]/40 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 relative z-10 max-w-6xl mx-auto -mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold mb-6 text-white"
                >
                  About the Artist
                </motion.h2>
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg text-[#ADBDFF] leading-relaxed"
                >
                  Anwar Hamad is a contemporary artist whose work explores the intersection of form, emotion, and cultural heritage. Through his sculptures and paintings, he creates a dialogue between traditional techniques and modern expression.
                </motion.p>
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg text-[#ADBDFF] leading-relaxed"
                >
                  With over two decades of experience, Anwar has developed a unique style that captures the raw essence of human emotion through abstract forms and bold compositions.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <button 
                    className="inline-block bg-[#ADBDFF] text-[#190B28] px-6 py-2 rounded-full hover:bg-[#D1CAA1] hover:text-[#190B28] transition-colors shadow-md hover:shadow-lg"
                  >
                    Why I Create
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collector's Lounge Section */}
      <section className="relative py-12">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-[#D1CAA1]/80 to-[#B4A7D6]/80 border-l-8 border-[#B4A7D6] backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 relative z-10 max-w-6xl mx-auto -mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#B4A7D6] h-1 w-16 mx-auto mb-6 rounded" />
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-6 text-[#ADBDFF]"
              >
                Collector's Lounge
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-white mb-8"
              >
                Join the Collector's Lounge — Early access to originals, private commissions, and first looks.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link 
                  href="/collectors-lounge"
                  className="inline-block bg-[#ADBDFF] text-[#190B28] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D1CAA1] hover:text-[#190B28] transition-colors shadow-lg hover:shadow-xl"
                >
                  Join Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Online Shop */}
      <section id="shop" className="relative py-12">
        <AbstractSculpture className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div 
            className="bg-[#B4A7D6]/80 border-4 border-[#B4A7D6] backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 relative z-10 -mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#D1CAA1] h-1 w-16 mx-auto mb-6 rounded" />
            <motion.h2 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#190B28] tracking-tight"
            >
              <span className="text-[#B4A7D6]">Online</span> Shop
            </motion.h2>
            
            {/* Filters */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex justify-center gap-4 mb-8"
            >
              {['All Works', 'Sculptures', 'Paintings', 'Prints'].map((filter, index) => (
                <motion.button
                  key={filter}
                  variants={fadeInUp}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    index === 0 ? 'bg-[#D1CAA1] text-[#190B28] hover:bg-[#B4A7D6]' :
                    index === 1 ? 'bg-[#B4A7D6] text-[#190B28] hover:bg-[#D1CAA1]' :
                    index === 2 ? 'bg-[#190B28] text-[#D1CAA1] hover:bg-[#B4A7D6]' :
                    'bg-[#B4A7D6] text-[#190B28] hover:bg-[#190B28] hover:text-[#D1CAA1]'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
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
              ].map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur rounded-xl overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-[#ADBDFF] mb-2">{item.medium}</p>
                    <p className="text-[#D1CAA1] mb-4">{item.dimensions}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-white">${item.price.toLocaleString()}</span>
                      <button className="bg-[#ADBDFF] text-[#190B28] px-4 py-2 rounded-full hover:bg-[#D1CAA1] transition-colors">
                        {item.available ? 'Add to Cart' : 'Sold'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#190B28] border-t border-[#B4A7D6]/20">
        <AbstractSculpture className="absolute inset-0 opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-[#ADBDFF] mb-4">Contact</h3>
              <p className="text-[#D1CAA1]">Email: contact@anwarhamad.com</p>
              <p className="text-[#D1CAA1]">Phone: +1 (555) 123-4567</p>
              <p className="text-[#D1CAA1]">Studio: Dubai, UAE</p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-[#ADBDFF] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#gallery" className="text-[#D1CAA1] hover:text-[#ADBDFF] transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-[#D1CAA1] hover:text-[#ADBDFF] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#shop" className="text-[#D1CAA1] hover:text-[#ADBDFF] transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/collectors-lounge" className="text-[#D1CAA1] hover:text-[#ADBDFF] transition-colors">
                    Collector's Lounge
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-[#ADBDFF] mb-4">Follow</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D1CAA1] hover:text-[#ADBDFF] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D1CAA1] hover:text-[#ADBDFF] transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D1CAA1] hover:text-[#ADBDFF] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-[#B4A7D6]/20 text-center"
          >
            <p className="text-[#D1CAA1]">
              © {new Date().getFullYear()} Anwar Hamad. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
