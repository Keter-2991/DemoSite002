'use client';

import Link from 'next/link';

export default function PhilosophySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">保育理念・目標</h2>
          <p className="text-gray-600">私たちが大切にしていること</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-600 rounded-full mb-6">
              <i className="ri-heart-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">元気な子</h3>
            <p className="text-gray-700 leading-relaxed">
              裸足保育で丈夫な体を育てます。自然の中でのびのびと遊び、健康的な心と体を作ります。
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center bg-orange-500 rounded-full mb-6">
              <i className="ri-group-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">優しい子</h3>
            <p className="text-gray-700 leading-relaxed">
              異年齢保育で思いやりの心を育みます。お互いを尊重し、助け合う気持ちを大切にします。
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full mb-6">
              <i className="ri-lightbulb-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">考える子</h3>
            <p className="text-gray-700 leading-relaxed">
              遊びの中から学ぶ力を育てます。自分で考え、工夫し、創造する喜びを体験します。
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/philosophy" 
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors font-medium whitespace-nowrap"
          >
            保育理念・目標について詳しく見る
          </Link>
        </div>
      </div>
    </section>
  );
}