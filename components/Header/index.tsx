import Logo from './Logo';
import Navigation from './Navigation';
import CTAButton from './CTAButton';

export default function Header() {
  return (
    <nav className="bg-[#5d4037] text-white fixed top-0 w-full z-50 shadow-2xl py-4">
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <Logo />
        <Navigation />
        <CTAButton />
      </div>
    </nav>
  );
}
