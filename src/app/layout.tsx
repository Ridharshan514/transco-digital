import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast/Toast';
import { SmoothScroll } from '@/components/ui/SmoothScroll/SmoothScroll';
import { EasterEggEngine } from '@/components/ui/EasterEggEngine/EasterEggEngine';
import { PageTransition } from '@/components/ui/PageTransition/PageTransition';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://transcodigital.com'),
  title: 'Transco Digital — International Digital Marketing Agency Network',
  description:
    'Transco Digital is an international digital marketing agency network founded in Sri Lanka in 2020. Powering 200+ clients worldwide through digital consultation, branding, content marketing, and paid campaigns.',
  keywords: [
    'digital marketing agency',
    'Sri Lanka digital agency',
    'content marketing',
    'social media marketing',
    'YouTube growth',
    'TikTok marketing',
    'brand strategy',
    'Transco Digital',
    'PSC',
    'Premium Social Content',
  ],
  authors: [{ name: 'Transco Digital', url: 'https://transcodigital.com' }],
  creator: 'Transco Digital',
  publisher: 'Transco Digital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://transcodigital.com',
    siteName: 'Transco Digital',
    title: 'Transco Digital — International Digital Marketing Agency Network',
    description:
      'Powering 200+ clients worldwide. Your premier international digital marketing agency network — strategy, branding, content, and paid campaigns.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Transco Digital — Move forward your brand.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transco Digital — Move forward your brand.',
    description:
      'Powering 200+ clients worldwide. International digital marketing agency network founded in Sri Lanka.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/transco-icon.png',
    apple: '/transco-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAFA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ToastProvider>
          <SmoothScroll>
            <EasterEggEngine>
              <Navbar />
              <PageTransition>{children}</PageTransition>
              <Footer />
            </EasterEggEngine>
          </SmoothScroll>
        </ToastProvider>
      </body>
    </html>
  );
}
