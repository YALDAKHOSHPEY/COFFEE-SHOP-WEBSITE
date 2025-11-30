import Link from 'next/link';

export default function Navigation() {
  return (
    <ul className="flex space-x-8 space-x-reverse">
      <li>
        <Link href="/" className="hover:text-yellow-300 transition-colors text-lg font-medium">
          خانه
        </Link>
      </li>
      <li>
        <Link href="/menu" className="hover:text-yellow-300 transition-colors text-lg font-medium">
          منو
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-yellow-300 transition-colors text-lg font-medium">
          درباره ما
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-yellow-300 transition-colors text-lg font-medium">
          تماس
        </Link>
      </li>
    </ul>
  );
}
