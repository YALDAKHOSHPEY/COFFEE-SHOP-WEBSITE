'use client';

import { useState } from 'react';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('رزرو شما با موفقیت ثبت شد! با شما تماس میگیریم.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">رزرو میز</h2>
        <p className="text-xl text-center mb-12 text-gray-600">میز خود را از قبل رزرو کنید</p>
        
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">نام کامل</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="نام شما"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">ایمیل</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">شماره تماس</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder=""
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">تعداد مهمانها</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="1"> نفر</option>
                <option value="2"> نفر</option>
                <option value="3"> نفر</option>
                <option value="4"> نفر</option>
                <option value="5"> نفر</option>
                <option value="6">+ نفر</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">تاریخ</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">ساعت</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            رزرو میز
          </button>
        </form>
      </div>
    </section>
  );
}
