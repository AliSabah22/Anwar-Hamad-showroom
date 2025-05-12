import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import StarBackground from '../components/StarBackground';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anwar Hamad Art Showroom",
  description: "Explore and purchase unique sculptures and paintings by Anwar Hamad",
};

function Navigation({ locale }: { locale: string }) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  // Remove the locale prefix from the current path
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b-2 border-[#D1CAA1]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <a href={`/${locale}`} className="text-xl font-semibold text-[#2C3E50]">Anwar Hamad</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`/${locale}/gallery`} className="text-[#190B28] hover:text-[#B4A7D6] transition-colors">{t('nav.gallery')}</a>
            <a href={`/${locale}/shop`} className="text-[#190B28] hover:text-[#B4A7D6] transition-colors">{t('nav.shop')}</a>
            <a href={`/${locale}/about`} className="text-[#190B28] hover:text-[#B4A7D6] transition-colors">{t('nav.about')}</a>
            <a href={`/${locale}/contact`} className="text-[#190B28] hover:text-[#B4A7D6] transition-colors">{t('nav.contact')}</a>
            <select
              className="ml-4 px-2 py-1 rounded bg-[#D1CAA1] text-[#190B28] border border-[#B4A7D6] focus:outline-none focus:ring-2 focus:ring-[#B4A7D6]"
              value={locale}
              onChange={handleLocaleChange}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const messages = useMessages();
  const isRTL = params.locale === 'ar';
  return (
    <html lang={params.locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={`${inter.className} relative min-h-screen bg-gradient-to-b from-[#190B28] to-[#2C1B47]`}>
        <StarBackground 
          count={4000}
          speed={0.3}
          size={0.12}
          color="#ADBDFF"
          opacity={0.6}
          radius={4}
        />
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <div className="relative z-10">
            <Navigation locale={params.locale} />
            <main className="pt-12">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 