export default function VoicesSection() {
  const voices = [
    {
      name: '佐々木 美咲',
      position: '保育士（3年目）',
      age: '25歳',
      image: 'https://readdy.ai/api/search-image?query=Young%20Japanese%20female%20nursery%20teacher%20in%20her%2020s%2C%20warm%20smile%2C%20standing%20in%20bright%20colorful%20classroom%2C%20professional%20portrait%2C%20friendly%20atmosphere%2C%20wearing%20casual%20work%20attire%2C%20natural%20lighting&width=400&height=500&seq=voice-1&orientation=portrait',
      message: '新人の頃から先輩方が丁寧に指導してくださり、安心して成長できました。子どもたちの「できた！」という瞬間に立ち会えることが何よりの喜びです。残業も少なく、プライベートも充実しています。'
    },
    {
      name: '高橋 健太',
      position: '保育士（5年目）',
      age: '28歳',
      image: 'https://readdy.ai/api/search-image?query=Young%20Japanese%20male%20nursery%20teacher%20in%20his%20late%2020s%2C%20cheerful%20expression%2C%20standing%20in%20modern%20daycare%20center%2C%20professional%20portrait%2C%20energetic%20atmosphere%2C%20wearing%20casual%20professional%20clothes%2C%20bright%20lighting&width=400&height=500&seq=voice-2&orientation=portrait',
      message: '男性保育士としても働きやすい環境です。チームワークが良く、困ったときはすぐに相談できます。研修制度も充実していて、スキルアップの機会がたくさんあります。やりがいを持って働けています。'
    },
    {
      name: '中村 由美',
      position: '保育士（パート・2年目）',
      age: '35歳',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20female%20nursery%20teacher%20in%20her%2030s%2C%20gentle%20smile%2C%20standing%20in%20cozy%20classroom%2C%20professional%20portrait%2C%20warm%20atmosphere%2C%20wearing%20comfortable%20work%20clothes%2C%20soft%20natural%20lighting&width=400&height=500&seq=voice-3&orientation=portrait',
      message: '子育てが落ち着いてから、ブランクを経て復帰しました。パートでも働きやすく、勤務時間の相談にも柔軟に対応していただけます。久しぶりの保育でしたが、温かく迎えていただき感謝しています。'
    }
  ];

  return (
    <div id="voices" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">先輩の声</h2>
          <p className="text-xl text-gray-600">実際に働いている職員の声をお届けします</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {voices.map((voice, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-80">
                <img 
                  src={voice.image} 
                  alt={voice.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{voice.name}</h3>
                  <p className="text-teal-600 font-semibold">{voice.position}</p>
                  <p className="text-gray-600 text-sm">{voice.age}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{voice.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
