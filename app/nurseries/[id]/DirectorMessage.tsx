'use client';

interface DirectorMessageProps {
  nurseryId: string;
}

export default function DirectorMessage({ nurseryId }: DirectorMessageProps) {
  const nurseryData: Record<string, any> = {
    sakura: {
      name: 'さくら保育園',
      director: '田中 花子',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20female%20nursery%20director%20in%20her%2040s%2C%20warm%20smile%2C%20standing%20in%20bright%20modern%20nursery%20classroom%2C%20natural%20lighting%2C%20professional%20portrait%20photography%2C%20friendly%20atmosphere%2C%20wearing%20casual%20professional%20attire&width=600&height=800&seq=director-sakura&orientation=portrait',
      message: '「一人ひとりの個性を大切に」をモットーに、子どもたちが安心して過ごせる環境づくりを心がけています。広々とした園庭で四季の変化を感じながら、のびのびと遊び、学ぶことができます。保護者の皆様と共に、お子様の成長を見守っていきたいと思います。'
    },
    himawari: {
      name: 'ひまわり保育園',
      director: '佐藤 陽子',
      image: 'https://readdy.ai/api/search-image?query=Cheerful%20Japanese%20female%20nursery%20director%20in%20her%2050s%2C%20warm%20welcoming%20expression%2C%20standing%20in%20colorful%20bright%20daycare%20center%2C%20natural%20window%20light%2C%20professional%20portrait%20photography%2C%20caring%20atmosphere%2C%20wearing%20professional%20casual%20clothing&width=600&height=800&seq=director-himawari&orientation=portrait',
      message: '駅から近く、働く保護者の皆様に寄り添った保育を実践しています。明るく開放的な保育室で、子どもたちの「やってみたい」という気持ちを大切にし、主体性を育む保育を行っています。屋上園庭では都心にいながら自然と触れ合う体験もできます。'
    },
    mori: {
      name: 'もりのこ保育園',
      director: '鈴木 緑',
      image: 'https://readdy.ai/api/search-image?query=Kind%20Japanese%20female%20nursery%20director%20in%20her%2040s%2C%20gentle%20smile%2C%20standing%20in%20natural%20wooden%20nursery%20room%20with%20plants%2C%20soft%20natural%20lighting%2C%20professional%20portrait%20photography%2C%20peaceful%20atmosphere%2C%20wearing%20earth%20tone%20professional%20attire&width=600&height=800&seq=director-mori&orientation=portrait',
      message: '自然豊かな環境の中で、子どもたちが五感を使って様々な体験ができる保育を大切にしています。森のような園庭では、虫探しや木登り、季節の草花との触れ合いなど、都会では貴重な自然体験が日常的にできます。少人数制ならではの温かい保育を実践しています。'
    },
    tsukushi: {
      name: 'つくし保育園',
      director: '山田 春美',
      image: 'https://readdy.ai/api/search-image?query=Warm%20Japanese%20female%20nursery%20director%20in%20her%2040s%2C%20gentle%20caring%20smile%2C%20standing%20in%20bright%20cheerful%20nursery%20classroom%2C%20natural%20lighting%2C%20professional%20portrait%20photography%2C%20welcoming%20atmosphere%2C%20wearing%20comfortable%20professional%20attire&width=600&height=800&seq=director-tsukushi&orientation=portrait',
      message: '小規模保育ならではの家庭的な雰囲気の中で、一人ひとりの子どもたちとじっくり向き合う保育を大切にしています。アットホームな環境で、子どもたちの「できた！」という喜びを共に分かち合い、自信を育んでいきます。'
    },
    cosmos: {
      name: 'コスモス保育園',
      director: '高橋 美咲',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20female%20nursery%20director%20in%20her%2050s%2C%20confident%20warm%20smile%2C%20standing%20in%20modern%20bright%20nursery%20facility%2C%20natural%20lighting%2C%20professional%20portrait%20photography%2C%20trustworthy%20atmosphere%2C%20wearing%20elegant%20professional%20attire&width=600&height=800&seq=director-cosmos&orientation=portrait',
      message: '「子どもたちの笑顔が輝く場所」を目指し、明るく楽しい保育環境を整えています。多様な活動を通じて、子どもたちの好奇心と創造力を育み、心身ともに健やかな成長をサポートしています。保護者の皆様との信頼関係を大切にしています。'
    },
    donguri: {
      name: 'どんぐり保育園',
      director: '伊藤 葉子',
      image: 'https://readdy.ai/api/search-image?query=Kind%20Japanese%20female%20nursery%20director%20in%20her%2040s%2C%20warm%20motherly%20smile%2C%20standing%20in%20cozy%20natural%20nursery%20room%20with%20wooden%20elements%2C%20soft%20natural%20lighting%2C%20professional%20portrait%20photography%2C%20nurturing%20atmosphere%2C%20wearing%20casual%20professional%20attire&width=600&height=800&seq=director-donguri&orientation=portrait',
      message: '自然との触れ合いを大切にし、四季折々の変化を感じながら、子どもたちの豊かな感性を育てています。木のぬくもりあふれる園舎で、のびのびと遊び、学び、成長できる環境を提供しています。一人ひとりの個性を尊重した保育を心がけています。'
    }
  };

  const data = nurseryData[nurseryId];

  if (!data) {
    return null;
  }

  return (
    <div className="bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{data.name}</h1>
          <p className="text-xl text-gray-600">園長からのご挨拶</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={data.image} 
                alt={`園長 ${data.director}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6">
              <p className="text-sm text-gray-600 mb-1">園長</p>
              <p className="text-2xl font-bold text-gray-900">{data.director}</p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-lg p-10">
              <div className="flex items-start mb-6">
                <i className="ri-double-quotes-l text-5xl text-teal-500 mr-4 w-12 h-12 flex items-center justify-center"></i>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {data.message}
              </p>
              <div className="flex items-end justify-end">
                <i className="ri-double-quotes-r text-5xl text-teal-500 w-12 h-12 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
