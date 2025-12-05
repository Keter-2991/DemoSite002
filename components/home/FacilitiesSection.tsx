'use client';

import Link from 'next/link';
import Image from 'next/image';

const facilities = [
  {
    id: 'sakura',
    name: 'さくら保育園',
    description: '広々とした園庭で自然と触れ合える環境',
    capacity: '定員120名',
    image: 'https://readdy.ai/api/search-image?query=Modern%20Japanese%20kindergarten%20building%20exterior%20with%20wooden%20architecture%20elements%2C%20spacious%20green%20playground%2C%20bright%20sunny%20day%2C%20children%20playing%20area%20visible%2C%20clean%20and%20welcoming%20atmosphere%2C%20professional%20architectural%20photography%2C%20natural%20wood%20facade&width=600&height=400&seq=facility-1&orientation=landscape'
  },
  {
    id: 'himawari',
    name: 'ひまわり保育園',
    description: '食育に力を入れた自園調理の給食',
    capacity: '定員90名',
    image: 'https://readdy.ai/api/search-image?query=Contemporary%20Japanese%20kindergarten%20building%20with%20natural%20wood%20design%2C%20beautiful%20garden%20with%20trees%2C%20modern%20clean%20architecture%2C%20warm%20inviting%20entrance%2C%20professional%20photography%2C%20bright%20daylight%2C%20eco-friendly%20design&width=600&height=400&seq=facility-2&orientation=landscape'
  },
  {
    id: 'mori',
    name: 'もりのこ保育園',
    description: '英語教育と国際交流を重視',
    capacity: '定員80名',
    image: 'https://readdy.ai/api/search-image?query=Stylish%20Japanese%20nursery%20school%20building%20with%20wooden%20elements%2C%20colorful%20playground%20equipment%2C%20green%20lawn%2C%20modern%20minimalist%20design%2C%20welcoming%20atmosphere%2C%20professional%20architectural%20photo%2C%20natural%20lighting&width=600&height=400&seq=facility-3&orientation=landscape'
  },
  {
    id: 'tsukushi',
    name: 'つくし保育園',
    description: 'ICT活用で保護者との連携を強化',
    capacity: '定員100名',
    image: 'https://readdy.ai/api/search-image?query=Modern%20Japanese%20daycare%20center%20with%20natural%20wood%20architecture%2C%20spacious%20outdoor%20play%20area%2C%20contemporary%20design%2C%20bright%20and%20clean%20environment%2C%20professional%20photography%2C%20sunny%20weather%2C%20child-friendly%20space&width=600&height=400&seq=facility-4&orientation=landscape'
  },
  {
    id: 'cosmos',
    name: 'コスモス保育園',
    description: '少人数制できめ細やかな保育',
    capacity: '定員60名',
    image: 'https://readdy.ai/api/search-image?query=Cozy%20Japanese%20nursery%20school%20building%20with%20warm%20wooden%20design%2C%20small%20intimate%20playground%2C%20natural%20environment%2C%20modern%20architecture%2C%20welcoming%20entrance%2C%20professional%20photo%2C%20bright%20atmosphere&width=600&height=400&seq=facility-5&orientation=landscape'
  },
  {
    id: 'donguri',
    name: 'どんぐり保育園',
    description: '最新設備と充実した保育環境',
    capacity: '定員110名',
    image: 'https://readdy.ai/api/search-image?query=New%20modern%20Japanese%20kindergarten%20building%20with%20contemporary%20wooden%20architecture%2C%20large%20playground%20with%20natural%20elements%2C%20state-of-art%20facilities%2C%20bright%20clean%20design%2C%20professional%20architectural%20photography%2C%20sunny%20day&width=600&height=400&seq=facility-6&orientation=landscape'
  }
];

export default function FacilitiesSection() {
  return (
    <section id="facilities-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">各園紹介</h2>
          <p className="text-gray-600">それぞれの園の特色をご紹介します</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <Link 
              key={facility.id}
              href={`/nurseries/${facility.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-sm text-teal-600 mb-3">{facility.capacity}</p>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <div className="flex items-center text-teal-600 font-medium">
                  詳しく見る
                  <div className="w-5 h-5 flex items-center justify-center ml-2">
                    <i className="ri-arrow-right-line text-lg"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
