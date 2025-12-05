export default function AdmissionProcess() {
  const steps = [
    {
      number: '01',
      title: '園見学',
      description: '実際の保育の様子をご覧いただけます。お気軽にお問い合わせください。',
      icon: 'ri-eye-line'
    },
    {
      number: '02',
      title: '入園申込',
      description: '世田谷区役所の保育課にて入園申込の手続きを行ってください。',
      icon: 'ri-file-text-line'
    },
    {
      number: '03',
      title: '選考・内定',
      description: '区による選考が行われ、入園が決定します。',
      icon: 'ri-checkbox-circle-line'
    },
    {
      number: '04',
      title: '入園面談',
      description: 'お子様の様子や健康状態などについて面談を行います。',
      icon: 'ri-chat-3-line'
    },
    {
      number: '05',
      title: '入園準備',
      description: '必要な持ち物などをご案内します。',
      icon: 'ri-shopping-bag-line'
    },
    {
      number: '06',
      title: '入園',
      description: '新しい生活のスタートです。一緒に成長を見守りましょう。',
      icon: 'ri-door-open-line'
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">入園までの流れ</h2>
          <p className="text-xl text-gray-600">見学から入園までのステップ</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <i className={`${step.icon} text-4xl w-10 h-10 flex items-center justify-center`}></i>
              </div>
              <div className="text-center mb-4">
                <span className="inline-block bg-teal-100 text-teal-600 font-bold px-4 py-1 rounded-full text-sm mb-2">
                  STEP {step.number}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-8">
          <div className="flex items-start">
            <i className="ri-information-line text-3xl text-amber-600 mr-4 w-8 h-8 flex items-center justify-center"></i>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">入園申込について</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                当園は認可保育園のため、入園申込は世田谷区役所保育課にて行っていただきます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                申込時期や必要書類については、世田谷区のホームページをご確認いただくか、保育課までお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
