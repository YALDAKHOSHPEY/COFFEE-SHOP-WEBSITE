import Link from 'next/link';

export default function CTAButton() {
  return (
    <Link 
      href="/reservation" 
      className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
    >
      رزرو میز
    </Link>
  );
}
