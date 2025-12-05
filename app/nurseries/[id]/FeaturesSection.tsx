'use client';

interface FeaturesSectionProps {
  nurseryId: string;
}

export default function FeaturesSection({ nurseryId }: FeaturesSectionProps) {
  const featuresData: Record<string, any> = {
    sakura: [
      {
        icon: 'ri-plant-line',
        title: '広々とした園庭',
        description: '桜の木に囲まれた広い園庭で、四季の変化を感じながら思いっきり体を動かせます。'
      },
      {
        icon: 'ri-restaurant-line',
        title: '自園調理の給食',
        description: '栄養士が考えた献立を、園内の調理室で毎日手作り。温かい給食を提供しています。'
      },
      {
        icon: 'ri-book-open-line',
        title: '充実した絵本コーナー',
        description: '1000冊以上の絵本を揃え、読み聞かせの時間を大切にしています。'
      },
      {
        icon: 'ri-music-line',
        title: 'リトミック教室',
        description: '専門講師による音楽教育で、リズム感や表現力を育みます。'
      }
    ],
    himawari: [
      {
        icon: 'ri-train-line',
        title: '駅近の好立地',
        description: '駅から徒歩3分。お仕事前後の送迎がスムーズです。'
      },
      {
        icon: 'ri-sun-line',
        title: '屋上園庭',
        description: '都心にいながら、屋上の広々とした園庭で外遊びを楽しめます。'
      },
      {
        icon: 'ri-palette-line',
        title: '造形活動',
        description: '様々な素材に触れ、自由な発想で創作活動を楽しみます。'
      },
      {
        icon: 'ri-time-line',
        title: '延長保育充実',
        description: '朝7時から夜8時まで対応。働く保護者をサポートします。'
      }
    ],
    mori: [
      {
        icon: 'ri-leaf-line',
        title: '自然体験',
        description: '森のような園庭で、虫探しや木登りなど自然と触れ合う体験が豊富です。'
      },
      {
        icon: 'ri-seedling-line',
        title: '野菜栽培',
        description: '園庭の畑で季節の野菜を育て、収穫の喜びを体験します。'
      },
      {
        icon: 'ri-group-2-line',
        title: '少人数制保育',
        description: '一人ひとりに寄り添った、きめ細やかな保育を実践しています。'
      },
      {
        icon: 'ri-home-heart-line',
        title: '家庭的な雰囲気',
        description: '木のぬくもりを感じる保育室で、安心して過ごせる環境です。'
      }
    ],
    tsukushi: [
      {
        icon: 'ri-heart-line',
        title: '愛情いっぱいの保育',
        description: '一人ひとりの個性を大切に、温かい愛情で包み込む保育を心がけています。'
      },
      {
        icon: 'ri-hand-heart-line',
        title: '手作り保育',
        description: '手作りのおもちゃや教材で、創造力と感性を育みます。'
      },
      {
        icon: 'ri-parent-line',
        title: '保護者との連携',
        description: '日々の連絡帳や面談を通じて、保護者との信頼関係を大切にしています。'
      },
      {
        icon: 'ri-shield-check-line',
        title: '安全な環境',
        description: '安全対策を徹底し、安心して過ごせる環境を整えています。'
      }
    ],
    cosmos: [
      {
        icon: 'ri-star-line',
        title: '個性を伸ばす保育',
        description: '子ども一人ひとりの個性と可能性を大切に育てます。'
      },
      {
        icon: 'ri-team-line',
        title: '異年齢交流',
        description: '異なる年齢の子どもたちが一緒に遊び、学び合う環境を提供します。'
      },
      {
        icon: 'ri-lightbulb-line',
        title: '探究心を育む',
        description: '子どもたちの「なぜ?」「どうして?」を大切に、探究心を育みます。'
      },
      {
        icon: 'ri-emotion-happy-line',
        title: '笑顔あふれる毎日',
        description: '明るく楽しい雰囲気の中で、笑顔いっぱいの毎日を過ごします。'
      }
    ],
    donguri: [
      {
        icon: 'ri-tree-line',
        title: '自然との共生',
        description: 'どんぐりの木に囲まれた環境で、自然の大切さを学びます。'
      },
      {
        icon: 'ri-run-line',
        title: '体力づくり',
        description: '広い園庭で思いっきり体を動かし、健康な体づくりを目指します。'
      },
      {
        icon: 'ri-community-line',
        title: '地域との交流',
        description: '地域の方々との交流を通じて、社会性を育みます。'
      },
      {
        icon: 'ri-calendar-check-line',
        title: '充実した行事',
        description: '季節ごとの行事を通じて、日本の伝統文化に触れる機会を提供します。'
      }
    ]
  };

  const features = featuresData[nurseryId];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">保育の特色</h2>
          <p className="text-xl text-gray-600">私たちの園ならではの取り組み</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature: any, index: number) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-teal-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-3xl w-8 h-8 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
