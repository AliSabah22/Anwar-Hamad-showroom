'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StarBackground from '../components/StarBackground';

const artStyles = [
  'Abstract',
  'Contemporary',
  'Minimalist',
  'Expressionist',
  'Mixed Media',
  'Sculpture',
  'Digital Art',
  'Traditional'
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+'
];

export default function CollectorsLounge() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    artStyles: [] as string[],
    budgetRange: ''
  });

  const handleStyleToggle = (style: string) => {
    setFormData(prev => ({
      ...prev,
      artStyles: prev.artStyles.includes(style)
        ? prev.artStyles.filter(s => s !== style)
        : [...prev.artStyles, style]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setStep(4); // Move to thank you page
  };

  return (
    <div className="min-h-screen relative">
      <StarBackground 
        count={2000}
        speed={0.2}
        size={0.2}
        color="#D1CAA1"
        opacity={0.4}
        radius={3}
        className="absolute inset-0"
      />
      <div className="relative z-10">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-[#ADBDFF]/20">
          <motion.div
            className="h-full bg-[#ADBDFF]"
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="max-w-2xl mx-auto px-4 py-20">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-8 text-[#ADBDFF]">Welcome to the Collector's Lounge</h1>
              <p className="text-xl mb-12 text-gray-300">
                Join our exclusive community of art collectors and get early access to new works.
              </p>
              <button
                onClick={() => setStep(2)}
                className="bg-[#ADBDFF] text-[#190B28] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D1CAA1] transition-colors"
              >
                Begin Your Journey
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <label className="block text-lg mb-2">What's your name?</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-[#ADBDFF]/10 border border-[#ADBDFF]/20 text-white focus:outline-none focus:border-[#ADBDFF]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-lg mb-2">And your email?</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-[#ADBDFF]/10 border border-[#ADBDFF]/20 text-white focus:outline-none focus:border-[#ADBDFF]"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-full bg-[#ADBDFF] text-[#190B28] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D1CAA1] transition-colors"
              >
                Continue
              </button>
            </motion.form>
          )}

          {step === 3 && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div>
                <label className="block text-lg mb-4">What art styles interest you?</label>
                <div className="grid grid-cols-2 gap-4">
                  {artStyles.map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => handleStyleToggle(style)}
                      className={`px-4 py-3 rounded-lg border transition-colors ${
                        formData.artStyles.includes(style)
                          ? 'bg-[#ADBDFF] text-[#190B28] border-[#ADBDFF]'
                          : 'bg-[#ADBDFF]/10 border-[#ADBDFF]/20 hover:bg-[#ADBDFF]/20'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-lg mb-4">What's your typical budget range?</label>
                <div className="space-y-2">
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, budgetRange: range }))}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        formData.budgetRange === range
                          ? 'bg-[#ADBDFF] text-[#190B28] border-[#ADBDFF]'
                          : 'bg-[#ADBDFF]/10 border-[#ADBDFF]/20 hover:bg-[#ADBDFF]/20'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ADBDFF] text-[#190B28] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D1CAA1] transition-colors"
              >
                Join the Lounge
              </button>
            </motion.form>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl font-bold text-[#ADBDFF]">Welcome to the Family!</h2>
              <p className="text-xl text-gray-300">
                Thank you for joining the Collector's Lounge. We're excited to share our world with you.
              </p>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/studio-tour.jpg"
                  alt="Studio Tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#190B28] to-transparent" />
              </div>
              <p className="text-lg text-gray-300">
                Check your email for exclusive access to our private studio tour and upcoming releases.
              </p>
              <Link
                href="/"
                className="inline-block bg-[#ADBDFF] text-[#190B28] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D1CAA1] transition-colors"
              >
                Return to Gallery
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
} 