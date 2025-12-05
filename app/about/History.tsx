export default function History() {
  const timeline = [
    {
      year: '2010年',
      month: '4月',
      event: '社会福祉法人みらい設立',
      description: 'さくら保育園を開園'
    },
    {
      year: '2013年',
      month: '4月',
      event: 'ひまわり保育園開園',
      description: '駅近の好立地に2園目を開園'
    },
    {
      year: '2015年',
      month: '10月',
      event: '東京都優良保育施設認定',
      description: '保育の質が評価される'
    },
    {
      year: '2017年',
      month: '4月',
      event: 'もりのこ保育園開園',
      description: '自然豊かな環境に3園目を開園'
    },
    {
      year: '2019年',
      month: '6月',
      event: '地域子育て支援事業開始',
      description: '地域の子育て家庭への支援を拡充'
    },
    {
      year: '2021年',
      month: '4月',
      event: '全園でICTシステム導入',
      description: '保育の質向上と業務効率化を実現'
    },
    {
      year: '2023年',
      month: '10月',
      event: '創立13周年',
      description: '延べ1,000名以上の卒園児を送り出す'
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">沿革</h2>
          <p className="text-xl text-gray-600">社会福祉法人みらいの歩み</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-teal-200"></div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-0 top-0 bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg">
                  <i className="ri-calendar-check-line text-2xl w-8 h-8 flex items-center justify-center"></i>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl font-bold text-teal-600">{item.year}</span>
                    <span className="text-lg text-gray-600">{item.month}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.event}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
