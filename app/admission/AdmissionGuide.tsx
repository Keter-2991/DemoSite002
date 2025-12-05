export default function AdmissionGuide() {
  const nurseries = [
    {
      name: 'さくら保育園',
      capacity: '定員90名',
      ages: [
        { age: '0歳児', count: '12名' },
        { age: '1歳児', count: '15名' },
        { age: '2歳児', count: '15名' },
        { age: '3歳児', count: '16名' },
        { age: '4歳児', count: '16名' },
        { age: '5歳児', count: '16名' }
      ],
      hours: '7:00～20:00',
      extended: '18:00～20:00'
    },
    {
      name: 'ひまわり保育園',
      capacity: '定員80名',
      ages: [
        { age: '0歳児', count: '10名' },
        { age: '1歳児', count: '12名' },
        { age: '2歳児', count: '14名' },
        { age: '3歳児', count: '14名' },
        { age: '4歳児', count: '15名' },
        { age: '5歳児', count: '15名' }
      ],
      hours: '7:00～20:00',
      extended: '18:00～20:00'
    },
    {
      name: 'もりのこ保育園',
      capacity: '定員70名',
      ages: [
        { age: '0歳児', count: '9名' },
        { age: '1歳児', count: '10名' },
        { age: '2歳児', count: '12名' },
        { age: '3歳児', count: '13名' },
        { age: '4歳児', count: '13名' },
        { age: '5歳児', count: '13名' }
      ],
      hours: '7:00～19:00',
      extended: '18:00～19:00'
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">園の概要</h2>
          <p className="text-xl text-gray-600">各園の定員と保育時間</p>
        </div>

        <div className="space-y-12">
          {nurseries.map((nursery, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">{nursery.name}</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-group-line text-teal-500 mr-2 w-6 h-6 flex items-center justify-center"></i>
                    定員
                  </h4>
                  <p className="text-2xl font-bold text-teal-600 mb-4">{nursery.capacity}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {nursery.ages.map((age, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2">
                        <span className="text-gray-700">{age.age}</span>
                        <span className="font-bold text-gray-900">{age.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-time-line text-teal-500 mr-2 w-6 h-6 flex items-center justify-center"></i>
                    保育時間
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">開園時間</p>
                      <p className="text-2xl font-bold text-gray-900">{nursery.hours}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">延長保育</p>
                      <p className="text-xl font-bold text-teal-600">{nursery.extended}</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4 mt-4">
                      <p className="text-sm text-gray-700">
                        <i className="ri-information-line text-amber-600 mr-1 w-4 h-4 inline-flex items-center justify-center"></i>
                        延長保育は別途料金が必要です
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
