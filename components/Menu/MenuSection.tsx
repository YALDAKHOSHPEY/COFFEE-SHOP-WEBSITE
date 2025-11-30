export default function MenuSection() {
  const menuItems = [
    {
      name: 'اسپرسو',
      description: 'قهوه خالص و غلیظ',
      price: ',',
      image: '/espresso.jpg'
    },
    {
      name: 'لاته',
      description: 'اسپرسو با شیر بخارپز',
      price: ',',
      image: '/latte.jpg'
    },
    {
      name: 'کاپوچینو',
      description: 'تعادل کامل اسپرسو و شیر',
      price: ',',
      image: '/cappuccino.jpg'
    },
    {
      name: 'موکا',
      description: 'ترکیب قهوه و شکلات',
      price: ',',
      image: '/mocha.jpg'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">منوی ما</h2>
        <p className="text-xl text-center mb-12 text-gray-600">طعمهای فوقالعاده در انتظار شماست</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-4xl"></span>
                {/* بعدا عکس واقعی اضافه میشه */}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-yellow-600 font-bold">{item.price} تومان</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <button className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg transition-colors">
                  افزودن به سبد
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
