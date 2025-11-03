import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#5d4037] text-white fixed top-0 w-full z-50 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Coffee Haven</Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-[var(--color-yellow-300)] transition-colors">Home</Link></li>
          <li><Link href="/menu" className="hover:text-[var(--color-yellow-300)] transition-colors">Menu</Link></li>
          <li><Link href="/about" className="hover:text-[var(--color-yellow-300)] transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-[var(--color-yellow-300)] transition-colors">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}