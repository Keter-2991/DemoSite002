export default function PositionsSection() {
  const positions = [
    {
      title: '保育士（正社員）',
      requirements: [
        '保育士資格をお持ちの方',
        '経験者優遇（未経験者も歓迎）',
        '子どもが好きで、明るく元気な方'
      ],
      conditions: [
        '月給：230,000円〜300,000円',
        '賞与：年2回（計4ヶ月分）',
        '昇給：年1回',
        '各種手当：住宅手当、通勤手当、処遇改善手当など'
      ]
    },
    {
      title: '保育士（パート）',
      requirements: [
        '保育士資格をお持ちの方',
        '週2日〜勤務可能な方',
        'ブランクのある方も歓迎'
      ],
      conditions: [
        '時給：1,300円〜1,600円',
        '勤務時間：応相談',
        '交通費：全額支給',
        '社会保険：勤務時間により加入'
      ]
    },
    {
      title: '栄養士・調理師',
      requirements: [
        '栄養士または調理師資格をお持ちの方',
        '集団給食の経験がある方歓迎',
        '子どもの食に興味のある方'
      ],
      conditions: [
        '月給：210,000円〜270,000円',
        '賞与：年2回',
        '昇給：年1回',
        '各種手当：通勤手当など'
      ]
    }
  ];

  return (
    <div id="positions" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">募集要項</h2>
          <p className="text-xl text-gray-600">現在募集中の職種</p>
        </div>

        <div className="space-y-8">
          {positions.map((position, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">{position.title}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-user-search-line text-teal-500 mr-2 w-6 h-6 flex items-center justify-center"></i>
                    応募資格
                  </h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <i className="ri-checkbox-circle-fill text-teal-500 mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-file-list-3-line text-teal-500 mr-2 w-6 h-6 flex items-center justify-center"></i>
                    待遇・条件
                  </h4>
                  <ul className="space-y-2">
                    {position.conditions.map((cond, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <i className="ri-checkbox-circle-fill text-teal-500 mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                        {cond}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
