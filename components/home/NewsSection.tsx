'use client';

import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    date: '2024.01.15',
    category: 'お知らせ',
    title: '令和6年度 入園説明会のご案内',
    link: '/news/1'
  },
  {
    id: 2,
    date: '2024.01.10',
    category: '採用',
    title: '保育士募集：ブランクOK・残業ほぼなし',
    link: '/news/2'
  },
  {
    id: 3,
    date: '2024.01.05',
    category: 'イベント',
    title: '第6こども園 新春もちつき大会を開催しました',
    link: '/news/3'
  },
  {
    id: 4,
    date: '2023.12.20',
    category: 'お知らせ',
    title: '年末年始の休園日について',
    link: '/news/4'
  },
  {
    id: 5,
    date: '2023.12.15',
    category: 'イベント',
    title: '第1こども園 クリスマス発表会のお知らせ',
    link: '/news/5'
  }
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">お知らせ</h2>
          <p className="text-gray-600">最新情報をお届けします</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {newsItems.map((item, index) => (
            <Link 
              key={item.id}
              href={item.link}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 hover:bg-gray-50 transition-colors border-b last:border-b-0"
            >
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-gray-500 font-medium whitespace-nowrap">{item.date}</span>
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-900 flex-1">{item.title}</p>
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <i className="ri-arrow-right-line text-xl text-gray-400"></i>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
          >
            お知らせ一覧を見る
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-arrow-right-line text-lg"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}