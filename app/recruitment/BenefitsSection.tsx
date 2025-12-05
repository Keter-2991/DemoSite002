export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'ri-money-dollar-circle-line',
      title: '充実の待遇',
      description: '経験・能力に応じた給与体系。各種手当も充実しています。'
    },
    {
      icon: 'ri-time-line',
      title: 'ワークライフバランス',
      description: '残業少なめ、有給取得率90%以上。プライベートも大切にできます。'
    },
    {
      icon: 'ri-book-2-line',
      title: '充実の研修制度',
      description: '新人研修から専門研修まで、スキルアップをサポートします。'
    },
    {
      icon: 'ri-team-line',
      title: 'チームワーク',
      description: '先輩職員が丁寧にサポート。困ったときは相談しやすい環境です。'
    },
    {
      icon: 'ri-home-heart-line',
      title: '住宅手当',
      description: '借上げ社宅制度あり。通勤しやすい環境を整えています。'
    },
    {
      icon: 'ri-gift-line',
      title: '福利厚生',
      description: '社会保険完備、退職金制度、慶弔見舞金など充実の福利厚生。'
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">働きやすい環境</h2>
          <p className="text-xl text-gray-600">充実の待遇と福利厚生</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <i className={`${benefit.icon} text-3xl w-8 h-8 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
