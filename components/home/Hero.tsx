'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Bright%20and%20warm%20Japanese%20kindergarten%20outdoor%20playground%20with%20wooden%20structures%2C%20children%20playing%20happily%20in%20natural%20sunlight%2C%20green%20grass%20and%20trees%2C%20modern%20clean%20architecture%20with%20natural%20wood%20elements%2C%20joyful%20atmosphere%2C%20professional%20photography%2C%20soft%20natural%20lighting%2C%20wide%20angle%20view%20showing%20spacious%20play%20area&width=1920&height=600&seq=hero-main-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            未来を創る<br />
            子どもたちの、<br />
            根っこを育てる
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            一人ひとりの個性を大切に、<br />
            心も体も健やかに育つ保育を実践しています
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/admission" 
              className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors text-center font-medium whitespace-nowrap"
            >
              入園・園見学のご案内
            </Link>
            <Link 
              href="/recruitment" 
              className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-full hover:bg-teal-50 transition-colors text-center font-medium whitespace-nowrap"
            >
              採用情報を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}