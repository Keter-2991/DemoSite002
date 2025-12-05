const eventsData: Record<string, any> = {
  facility1: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: '保護者会' },
      { month: '5月', event: '子どもの日の集い' },
      { month: '5月', event: '春の遠足' },
    ],
    summer: [
      { month: '6月', event: '歯科検診' },
      { month: '6月', event: '保育参観' },
      { month: '7月', event: '七夕まつり' },
      { month: '7月', event: 'プール開き' },
      { month: '8月', event: '夏まつり' },
    ],
    autumn: [
      { month: '9月', event: '敬老の日の集い' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '内科検診' },
      { month: '11月', event: '七五三' },
    ],
    winter: [
      { month: '12月', event: '生活発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: '新年お楽しみ会' },
      { month: '2月', event: '節分' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: 'お別れ会・卒園式' },
    ],
  },
  facility2: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: '保護者会総会' },
      { month: '5月', event: 'こどもの日集会' },
      { month: '5月', event: '親子遠足' },
    ],
    summer: [
      { month: '6月', event: '健康診断' },
      { month: '6月', event: '保育参観週間' },
      { month: '7月', event: '七夕飾り' },
      { month: '7月', event: '水遊び開始' },
      { month: '8月', event: '夏祭り' },
    ],
    autumn: [
      { month: '9月', event: '祖父母参観' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: 'ハロウィンパーティー' },
      { month: '11月', event: '秋の遠足' },
      { month: '11月', event: '勤労感謝訪問' },
    ],
    winter: [
      { month: '12月', event: '発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: 'お正月遊び' },
      { month: '2月', event: '豆まき' },
      { month: '3月', event: 'ひなまつり会' },
      { month: '3月', event: '卒園式' },
    ],
  },
  facility3: {
    spring: [
      { month: '4月', event: '入園・進級式' },
      { month: '4月', event: '英語教室開始' },
      { month: '5月', event: 'こどもの日' },
      { month: '5月', event: '春の遠足' },
    ],
    summer: [
      { month: '6月', event: '歯科・内科検診' },
      { month: '6月', event: '保育参観' },
      { month: '7月', event: '七夕会' },
      { month: '7月', event: 'プール開き' },
      { month: '8月', event: 'サマーフェスティバル' },
    ],
    autumn: [
      { month: '9月', event: '敬老の日イベント' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '国際交流イベント' },
      { month: '11月', event: '七五三' },
    ],
    winter: [
      { month: '12月', event: '生活発表会' },
      { month: '12月', event: 'クリスマスパーティー' },
      { month: '1月', event: '新年会' },
      { month: '2月', event: '節分' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: '卒園式' },
    ],
  },
  facility4: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: 'ICT説明会' },
      { month: '5月', event: 'こどもの日集会' },
      { month: '5月', event: '親子遠足' },
    ],
    summer: [
      { month: '6月', event: '健康診断' },
      { month: '6月', event: 'オンライン保育参観' },
      { month: '7月', event: '七夕まつり' },
      { month: '7月', event: 'プール開き' },
      { month: '8月', event: '夏まつり' },
    ],
    autumn: [
      { month: '9月', event: '敬老の日' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '内科検診' },
      { month: '11月', event: '勤労感謝' },
    ],
    winter: [
      { month: '12月', event: '発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: 'お正月遊び' },
      { month: '2月', event: '節分' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: '卒園式' },
    ],
  },
  facility5: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: '個人面談週間' },
      { month: '5月', event: 'こどもの日' },
      { month: '5月', event: '春の遠足' },
    ],
    summer: [
      { month: '6月', event: '健康診断' },
      { month: '6月', event: '保育参観' },
      { month: '7月', event: '七夕会' },
      { month: '7月', event: '水遊び開始' },
      { month: '8月', event: '夏まつり' },
    ],
    autumn: [
      { month: '9月', event: '祖父母参観' },
      { month: '10月', event: 'ミニ運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '内科検診' },
      { month: '11月', event: '七五三' },
    ],
    winter: [
      { month: '12月', event: '生活発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: 'お正月遊び' },
      { month: '2月', event: '豆まき' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: 'お別れ会・卒園式' },
    ],
  },
  facility6: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: '施設見学会' },
      { month: '5月', event: 'こどもの日集会' },
      { month: '5月', event: '春の遠足' },
    ],
    summer: [
      { month: '6月', event: '健康診断' },
      { month: '6月', event: '保育参観' },
      { month: '7月', event: '七夕まつり' },
      { month: '7月', event: 'プール開き' },
      { month: '8月', event: 'サマーフェスティバル' },
    ],
    autumn: [
      { month: '9月', event: '敬老の日' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '内科検診' },
      { month: '11月', event: '七五三' },
    ],
    winter: [
      { month: '12月', event: '生活発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: '新年お楽しみ会' },
      { month: '2月', event: '節分' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: '卒園式' },
    ],
  },
  himawari: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: '保護者会' },
      { month: '5月', event: '子どもの日の集い' },
      { month: '5月', event: '春の遠足' },
    ],
    summer: [
      { month: '6月', event: '歯科検診' },
      { month: '6月', event: '保育参観' },
      { month: '7月', event: '七夕まつり' },
      { month: '7月', event: 'プール開き' },
      { month: '8月', event: '夏まつり' },
    ],
    autumn: [
      { month: '9月', event: '敬老の日の集い' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '内科検診' },
      { month: '11月', event: '七五三' },
    ],
    winter: [
      { month: '12月', event: '生活発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: '新年お楽しみ会' },
      { month: '2月', event: '節分' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: 'お別れ会・卒園式' },
    ],
  },
  sakura: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: '保護者会総会' },
      { month: '5月', event: 'こどもの日集会' },
      { month: '5月', event: '親子遠足' },
    ],
    summer: [
      { month: '6月', event: '健康診断' },
      { month: '6月', event: '保育参観週間' },
      { month: '7月', event: '七夕飾り' },
      { month: '7月', event: '水遊び開始' },
      { month: '8月', event: '夏祭り' },
    ],
    autumn: [
      { month: '9月', event: '祖父母参観' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: 'ハロウィンパーティー' },
      { month: '11月', event: '秋の遠足' },
      { month: '11月', event: '勤労感謝訪問' },
    ],
    winter: [
      { month: '12月', event: '発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: 'お正月遊び' },
      { month: '2月', event: '豆まき' },
      { month: '3月', event: 'ひなまつり会' },
      { month: '3月', event: '卒園式' },
    ],
  },
  mori: {
    spring: [
      { month: '4月', event: '入園・進級式' },
      { month: '4月', event: '英語教室開始' },
      { month: '5月', event: 'こどもの日' },
      { month: '5月', event: '春の遠足' },
    ],
    summer: [
      { month: '6月', event: '歯科・内科検診' },
      { month: '6月', event: '保育参観' },
      { month: '7月', event: '七夕会' },
      { month: '7月', event: 'プール開き' },
      { month: '8月', event: 'サマーフェスティバル' },
    ],
    autumn: [
      { month: '9月', event: '敬老の日イベント' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '国際交流イベント' },
      { month: '11月', event: '七五三' },
    ],
    winter: [
      { month: '12月', event: '生活発表会' },
      { month: '12月', event: 'クリスマスパーティー' },
      { month: '1月', event: '新年会' },
      { month: '2月', event: '節分' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: '卒園式' },
    ],
  },
  tsukushi: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: 'ICT説明会' },
      { month: '5月', event: 'こどもの日集会' },
      { month: '5月', event: '親子遠足' },
    ],
    summer: [
      { month: '6月', event: '健康診断' },
      { month: '6月', event: 'オンライン保育参観' },
      { month: '7月', event: '七夕まつり' },
      { month: '7月', event: 'プール開き' },
      { month: '8月', event: '夏まつり' },
    ],
    autumn: [
      { month: '9月', event: '敬老の日' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '内科検診' },
      { month: '11月', event: '勤労感謝' },
    ],
    winter: [
      { month: '12月', event: '発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: 'お正月遊び' },
      { month: '2月', event: '節分' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: '卒園式' },
    ],
  },
  cosmos: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: '個人面談週間' },
      { month: '5月', event: 'こどもの日' },
      { month: '5月', event: '春の遠足' },
    ],
    summer: [
      { month: '6月', event: '健康診断' },
      { month: '6月', event: '保育参観' },
      { month: '7月', event: '七夕会' },
      { month: '7月', event: '水遊び開始' },
      { month: '8月', event: '夏まつり' },
    ],
    autumn: [
      { month: '9月', event: '祖父母参観' },
      { month: '10月', event: 'ミニ運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '内科検診' },
      { month: '11月', event: '七五三' },
    ],
    winter: [
      { month: '12月', event: '生活発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: 'お正月遊び' },
      { month: '2月', event: '豆まき' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: 'お別れ会・卒園式' },
    ],
  },
  donguri: {
    spring: [
      { month: '4月', event: '入園式・進級式' },
      { month: '4月', event: '施設見学会' },
      { month: '5月', event: 'こどもの日集会' },
      { month: '5月', event: '春の遠足' },
    ],
    summer: [
      { month: '6月', event: '健康診断' },
      { month: '6月', event: '保育参観' },
      { month: '7月', event: '七夕まつり' },
      { month: '7月', event: 'プール開き' },
      { month: '8月', event: 'サマーフェスティバル' },
    ],
    autumn: [
      { month: '9月', event: '敬老の日' },
      { month: '10月', event: '運動会' },
      { month: '10月', event: '秋の遠足' },
      { month: '11月', event: '内科検診' },
      { month: '11月', event: '七五三' },
    ],
    winter: [
      { month: '12月', event: '生活発表会' },
      { month: '12月', event: 'クリスマス会' },
      { month: '1月', event: '新年お楽しみ会' },
      { month: '2月', event: '節分' },
      { month: '3月', event: 'ひなまつり' },
      { month: '3月', event: '卒園式' },
    ],
  },
};

export default function AnnualEvents({ nurseryId }: { nurseryId: string }) {
  const events = eventsData[nurseryId];

  const seasons = [
    { name: '春', key: 'spring', color: 'bg-pink-500', icon: 'ri-flower-line' },
    { name: '夏', key: 'summer', color: 'bg-orange-500', icon: 'ri-sun-line' },
    { name: '秋', key: 'autumn', color: 'bg-amber-600', icon: 'ri-leaf-line' },
    { name: '冬', key: 'winter', color: 'bg-blue-500', icon: 'ri-snowy-line' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">年間行事</h2>
        <p className="text-gray-600 text-center mb-16">一年を通じて、様々な行事を行っています</p>

        <div className="grid md:grid-cols-2 gap-8">
          {seasons.map((season) => (
            <div key={season.key} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 flex items-center justify-center ${season.color} rounded-full mr-4`}>
                  <i className={`${season.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{season.name}</h3>
              </div>
              
              <div className="space-y-3">
                {events[season.key].map((event: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-4 flex items-center">
                    <span className="text-teal-600 font-bold text-sm mr-4 whitespace-nowrap">{event.month}</span>
                    <span className="text-gray-900">{event.event}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-teal-50 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-teal-500 rounded-full">
            <i className="ri-calendar-event-line text-4xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">毎月の定例行事</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium whitespace-nowrap">お誕生日会</span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium whitespace-nowrap">身体測定</span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium whitespace-nowrap">避難訓練</span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium whitespace-nowrap">お弁当の日</span>
          </div>
        </div>
      </div>
    </section>
  );
}
