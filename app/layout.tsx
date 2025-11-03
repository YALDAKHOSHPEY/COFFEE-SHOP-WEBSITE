import './globals.css';
import Navbar from '../components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coffee Haven | لوکس کافی‌شاپ',
  description: 'طعم طلایی و آرامش یاقوتی',
};

export default function RootLayout({ children }: { children: React.React.Node }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#fdfcfb] text-[#3f2a1f] min-h-screen">
        <Navbar />
        <main className="pt-32 container mx-auto px-6 max-w-7xl">{children}</main>
        <footer className="bg-[#5d4037] text-white py-16 mt-24">
          <div className="container mx-auto text-center">
            <p className="text-3xl font-bold mb-4 hover-glow" style={{ fontFamily: 'Playfair Display' }}>Coffee Haven</p>
            <p className="text-lg mb-6">طعم لوکس در هر فنجان</p>
            <p className="text-sm">© 2025 | 123 Brew Street</p>
          </div>
        </footer>
      </body>
    </html>
  );
}