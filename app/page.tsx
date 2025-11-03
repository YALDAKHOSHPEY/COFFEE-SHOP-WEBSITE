import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/cofe.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center pt-32 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Coffee Haven</h1>
          <p className="text-xl">Your cozy spot for the best coffee and pastries</p>
          <Link href="/menu" className="mt-6 inline-block bg-[var(--color-yellow-600)] px-6 py-3 rounded hover:bg-[#b45309] text-white">View Menu</Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-semibold mb-2">Fresh Beans</h3>
            <p>Roasted daily for the perfect brew.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-semibold mb-2">Cozy Atmosphere</h3>
            <p>Relax and enjoy with friends.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-semibold mb-2">Delicious Pastries</h3>
            <p>Baked fresh every morning.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
<div className="fixed bottom-4 right-4 bg-[var(--color-gold-500)] text-[var(--color-text-900)] p-6 rounded-full shadow-2xl text-2xl font-bold hover-glow z-50">
</div>