import Link from 'next/link';
import MenuSection from '../components/Menu/MenuSection';
import ReservationSection from '../components/Reservation/ReservationSection';

export default function Home() {
  return (
    <div className="font-vazir">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/cofe.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white z-10 px-6">
          <h1 className="text-6xl font-bold mb-6 font-playfair">
            به Coffee Haven خوش آمدید
          </h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            مکانی دنج برای بهترین قهوه و شیرینیها
          </p>
          <div className="space-x-4">
            <Link 
              href="#menu" 
              className="bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded-lg text-white text-lg font-semibold transition-colors inline-block"
            >
              مشاهده منو
            </Link>
            <Link 
              href="#reservation" 
              className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-white text-lg font-semibold transition-colors inline-block"
            >
              رزرو میز
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 font-playfair">
            چرا ما را انتخاب میکنید
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl"></span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">قهوه تازه</h3>
              <p className="text-gray-600 text-lg">دانههای برشته شده روزانه برای بهترین طعم</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl"></span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">محیطی دنج</h3>
              <p className="text-gray-600 text-lg">استراحت کنید و با دوستانتان لذت ببرید</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl"></span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">شیرینیهای خوشمزه</h3>
              <p className="text-gray-600 text-lg">تازه پخته شده هر صبح</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Reservation Section */}
      <ReservationSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#5d4037] to-[#8d6e63] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair">
            آماده تجربهای فوقالعاده هستید
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            همین امروز به ما بپیوندید و طعم قهوه واقعی را کشف کنید
          </p>
          <Link 
            href="#reservation" 
            className="bg-yellow-600 hover:bg-yellow-700 px-10 py-4 rounded-lg text-white text-xl font-semibold transition-colors inline-block"
          >
            همین حالا رزرو کنید
          </Link>
        </div>
      </section>
    </div>
  );
}
