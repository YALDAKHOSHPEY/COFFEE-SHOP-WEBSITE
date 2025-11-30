import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold hover:text-yellow-300 transition-colors" style={{ fontFamily: 'Playfair Display' }}>
      Coffee Haven
    </Link>
  );
}
