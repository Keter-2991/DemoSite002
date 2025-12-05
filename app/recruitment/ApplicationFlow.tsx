export default function ApplicationFlow() {
  const steps = [
    {
      number: '01',
      title: 'エントリー',
      description: 'お電話またはメールにてご連絡ください'
    },
    {
      number: '02',
      title: '園見学',
      description: '実際の保育の様子をご覧いただけます'
    },
    {
      number: '03',
      title: '書類選考',
      description: '履歴書・職務経歴書をご提出ください'
    },
    {
      number: '04',
      title: '面接',
      description: '園長との面接を実施します'
    },
    {
      number: '05',
      title: '内定',
      description: '合否のご連絡をいたします'
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">応募の流れ</h2>
          <p className="text-xl text-gray-600">エントリーから内定までのステップ</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 text-center">
                <div className="bg-teal-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-700">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <i className="ri-arrow-right-line text-3xl text-teal-500 w-6 h-6 flex items-center justify-center"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">まずはお気軽にお問い合わせください</h3>
          <p className="text-xl mb-8">園見学も随時受け付けております</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:03-1234-5678"
              className="inline-flex items-center justify-center bg-white text-teal-500 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line mr-2 w-6 h-6 flex items-center justify-center"></i>
              03-1234-5678
            </a>
            <a 
              href="mailto:recruit@mirai-hoiku.jp"
              className="inline-flex items-center justify-center bg-white text-teal-500 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line mr-2 w-6 h-6 flex items-center justify-center"></i>
              メールで問い合わせ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
