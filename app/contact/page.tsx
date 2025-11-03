'use client'; // برای interactive بودن فرم

import { FormEvent } from 'react';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
  };

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded shadow">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input type="text" required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input type="email" required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Message</label>
          <textarea required className="w-full p-2 border border-gray-300 rounded" rows={5}></textarea>
        </div>
        <button type="submit" className="bg-[var(--color-yellow-600)] text-white px-6 py-3 rounded hover:bg-[#b45309] transition-colors">Send Message</button>
      </form>
    </div>
  );
}