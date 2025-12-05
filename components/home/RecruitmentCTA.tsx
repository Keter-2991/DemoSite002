'use client';

import Link from 'next/link';

export default function RecruitmentCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Happy%20Japanese%20kindergarten%20teachers%20smiling%20with%20children%20in%20bright%20modern%20classroom%2C%20warm%20atmosphere%2C%20natural%20lighting%2C%20professional%20photography%2C%20diverse%20group%20of%20educators%2C%20joyful%20working%20environment%2C%20wooden%20interior%20elements&width=1400&height=500&seq=recruitment-bg&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 to-teal-800/85"></div>
          
          <div className="relative z-10 px-8 py-16 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                一緒に働きませんか？
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                ブランクがあっても大丈夫。残業ほぼなし、人間関係がフラットな職場で、<br />
                あなたらしく保育士として活躍できます。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-2xl text-teal-300"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium">ブランクOK</p>
                    <p className="text-white/80 text-sm">丁寧な研修制度</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-2xl text-teal-300"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium">残業ほぼなし</p>
                    <p className="text-white/80 text-sm">働きやすい環境</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-2xl text-teal-300"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium">フラットな関係</p>
                    <p className="text-white/80 text-sm">風通しの良い職場</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/recruitment" 
                className="inline-block bg-white text-teal-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-colors font-bold text-lg whitespace-nowrap"
              >
                採用情報を詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}