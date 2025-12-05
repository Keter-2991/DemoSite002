'use client';

import { useState } from 'react';

export default function NewsList() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'event', name: '行事' },
    { id: 'notice', name: 'お知らせ' },
    { id: 'recruitment', name: '採用' }
  ];

  const news = [
    {
      id: 1,
      category: 'event',
      date: '2024.01.15',
      title: '2024年度 入園説明会のお知らせ',
      description: '2024年度の入園説明会を2月10日（土）に開催いたします。各園にて実施予定です。',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20nursery%20school%20information%20session%2C%20parents%20sitting%20in%20bright%20room%2C%20presentation%20screen%2C%20welcoming%20atmosphere%2C%20professional%20event%20photography%2C%20organized%20meeting%20space&width=600&height=400&seq=news-1&orientation=landscape'
    },
    {
      id: 2,
      category: 'event',
      date: '2024.01.10',
      title: '節分の豆まき会を開催しました',
      description: '各園で節分の豆まき会を開催しました。子どもたちは元気いっぱいに「鬼は外！福は内！」と豆まきを楽しみました。',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20children%20celebrating%20Setsubun%20bean%20throwing%20festival%20in%20nursery%2C%20colorful%20decorations%2C%20happy%20children%2C%20traditional%20event%2C%20joyful%20atmosphere%2C%20indoor%20celebration&width=600&height=400&seq=news-2&orientation=landscape'
    },
    {
      id: 3,
      category: 'notice',
      date: '2024.01.05',
      title: '冬季の感染症対策について',
      description: 'インフルエンザやノロウイルスなどの感染症が流行する時期です。手洗い・うがいの徹底にご協力ください。',
      image: 'https://readdy.ai/api/search-image?query=Children%20washing%20hands%20at%20nursery%20school%2C%20hygiene%20education%2C%20clean%20sink%20area%2C%20health%20safety%20measures%2C%20bright%20clean%20environment%2C%20educational%20moment&width=600&height=400&seq=news-3&orientation=landscape'
    },
    {
      id: 4,
      category: 'recruitment',
      date: '2023.12.20',
      title: '2024年度 保育士募集のお知らせ',
      description: '2024年4月入職の保育士を募集しています。新卒・既卒問わず、ご応募お待ちしております。',
      image: 'https://readdy.ai/api/search-image?query=Cheerful%20nursery%20teachers%20working%20together%20in%20modern%20daycare%2C%20teamwork%2C%20professional%20environment%2C%20bright%20classroom%2C%20collaborative%20atmosphere%2C%20diverse%20staff&width=600&height=400&seq=news-4&orientation=landscape'
    },
    {
      id: 5,
      category: 'event',
      date: '2023.12.15',
      title: 'クリスマス会を開催しました',
      description: '各園でクリスマス会を開催しました。サンタクロースの登場に子どもたちは大喜びでした。',
      image: 'https://readdy.ai/api/search-image?query=Christmas%20celebration%20at%20Japanese%20nursery%20school%2C%20decorated%20classroom%2C%20children%20with%20Santa%20Claus%2C%20festive%20atmosphere%2C%20joyful%20event%2C%20colorful%20decorations&width=600&height=400&seq=news-5&orientation=landscape'
    },
    {
      id: 6,
      category: 'notice',
      date: '2023.12.01',
      title: '年末年始の休園日について',
      description: '12月29日（金）から1月3日（水）まで休園とさせていただきます。',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20New%20Year%20decorations%20at%20nursery%20entrance%2C%20traditional%20kadomatsu%2C%20clean%20modern%20building%2C%20welcoming%20entrance%2C%20seasonal%20celebration%2C%20peaceful%20atmosphere&width=600&height=400&seq=news-6&orientation=landscape'
    },
    {
      id: 7,
      category: 'event',
      date: '2023.11.20',
      title: '秋の遠足に行ってきました',
      description: '秋晴れの中、近くの公園へ遠足に行きました。どんぐり拾いや落ち葉遊びを楽しみました。',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20children%20on%20autumn%20field%20trip%20in%20park%2C%20collecting%20acorns%2C%20playing%20with%20fallen%20leaves%2C%20outdoor%20activity%2C%20happy%20children%2C%20nature%20exploration&width=600&height=400&seq=news-7&orientation=landscape'
    },
    {
      id: 8,
      category: 'event',
      date: '2023.11.10',
      title: '運動会を開催しました',
      description: '各園で運動会を開催しました。子どもたちの成長した姿に、保護者の皆様も感動されていました。',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20nursery%20school%20sports%20day%2C%20children%20running%20race%2C%20outdoor%20playground%2C%20parents%20watching%2C%20energetic%20atmosphere%2C%20sunny%20day%2C%20joyful%20event&width=600&height=400&seq=news-8&orientation=landscape'
    },
    {
      id: 9,
      category: 'notice',
      date: '2023.10.25',
      title: '園だよりを更新しました',
      description: '11月号の園だよりを配布いたしました。今月の行事予定をご確認ください。',
      image: 'https://readdy.ai/api/search-image?query=Nursery%20school%20newsletter%20and%20calendar%2C%20colorful%20printed%20materials%2C%20organized%20information%2C%20professional%20design%2C%20educational%20content%2C%20bright%20clean%20background&width=600&height=400&seq=news-9&orientation=landscape'
    },
    {
      id: 10,
      category: 'recruitment',
      date: '2023.10.15',
      title: '栄養士・調理師募集のお知らせ',
      description: '給食室で働く栄養士・調理師を募集しています。子どもたちの成長を食で支えるお仕事です。',
      image: 'https://readdy.ai/api/search-image?query=Professional%20nutritionist%20preparing%20healthy%20meals%20in%20nursery%20kitchen%2C%20clean%20modern%20kitchen%2C%20fresh%20ingredients%2C%20organized%20workspace%2C%20caring%20food%20preparation&width=600&height=400&seq=news-10&orientation=landscape'
    },
    {
      id: 11,
      category: 'event',
      date: '2023.10.05',
      title: 'ハロウィンパーティーを開催しました',
      description: '各園でハロウィンパーティーを開催しました。仮装した子どもたちの笑顔が溢れる楽しい一日でした。',
      image: 'https://readdy.ai/api/search-image?query=Children%20in%20Halloween%20costumes%20at%20Japanese%20nursery%20party%2C%20colorful%20decorations%2C%20happy%20children%2C%20festive%20atmosphere%2C%20indoor%20celebration%2C%20cute%20costumes&width=600&height=400&seq=news-11&orientation=landscape'
    },
    {
      id: 12,
      category: 'notice',
      date: '2023.09.20',
      title: '台風接近時の対応について',
      description: '台風接近時の登降園や休園の判断基準についてお知らせいたします。',
      image: 'https://readdy.ai/api/search-image?query=Safe%20indoor%20nursery%20environment%20during%20rainy%20weather%2C%20children%20playing%20safely%20inside%2C%20bright%20classroom%2C%20secure%20atmosphere%2C%20weather%20safety%20measures&width=600&height=400&seq=news-12&orientation=landscape'
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'event': return 'bg-teal-100 text-teal-700';
      case 'notice': return 'bg-amber-100 text-amber-700';
      case 'recruitment': return 'bg-cyan-100 text-cyan-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryName = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : '';
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-56">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${getCategoryColor(item.category)}`}>
                    {getCategoryName(item.category)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2 flex items-center">
                  <i className="ri-calendar-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                  {item.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
