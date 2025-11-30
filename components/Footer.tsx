export default function Footer() {
  return (
    <footer className="bg-[#5d4037] text-white py-12 mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Coffee Haven
            </h3>
            <p className="text-lg mb-4 text-gray-300">
              طعم لوکس در هر فنجان
            </p>
            <p className="text-sm text-gray-400">
               2025 | خیابان بروستر شماره 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-yellow-300 transition-colors">خانه</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-yellow-300 transition-colors">منو</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-yellow-300 transition-colors">درباره ما</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-yellow-300 transition-colors">تماس</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">تماس با ما</h4>
            <div className="space-y-2 text-gray-300">
              <p> -</p>
              <p> info@coffeehaven.com</p>
              <p> : صبح تا : شب</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400">
          <p>ساخته شده با  برای عاشقان قهوه</p>
        </div>
      </div>
    </footer>
  );
}
