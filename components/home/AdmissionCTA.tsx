'use client';

import Link from 'next/link';

export default function AdmissionCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div 
              className="h-80 lg:h-auto bg-cover bg-center"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Happy%20Japanese%20children%20playing%20together%20in%20bright%20kindergarten%20classroom%2C%20colorful%20toys%20and%20learning%20materials%2C%20natural%20wood%20furniture%2C%20warm%20sunlight%20through%20windows%2C%20joyful%20atmosphere%2C%20professional%20photography%2C%20diverse%20group%20of%20kids&width=700&height=600&seq=admission-img&orientation=portrait')`
              }}
            ></div>
            
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                入園・園見学について
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                お子さまが毎日行きたがる園を目指しています。<br />
                安心して預けられる環境を、ぜひ一度ご見学ください。
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
                    <i className="ri-calendar-line text-2xl text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">園見学随時受付中</h3>
                    <p className="text-gray-600">平日10:00〜16:00でご案内しています</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
                    <i className="ri-question-answer-line text-2xl text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">個別相談も可能</h3>
                    <p className="text-gray-600">入園に関する疑問にお答えします</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/admission" 
                  className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors text-center font-medium whitespace-nowrap"
                >
                  入園案内を見る
                </Link>
                <Link 
                  href="/faq" 
                  className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-full hover:bg-teal-50 transition-colors text-center font-medium whitespace-nowrap"
                >
                  よくある質問
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}