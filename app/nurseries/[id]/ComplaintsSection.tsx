const complaintsData: Record<string, any[]> = {
  facility1: [
    {
      date: '2024年2月',
      content: '園庭の遊具の安全性について',
      response: '専門業者による点検を実施し、必要な修繕を完了いたしました。今後も定期的な点検を継続してまいります。',
      status: '解決済み'
    },
    {
      date: '2024年1月',
      content: '連絡帳の記入内容について',
      response: '保育士間で情報共有を強化し、より詳細な記録を心がけるよう改善いたしました。',
      status: '解決済み'
    },
  ],
  facility2: [
    {
      date: '2024年2月',
      content: '給食の温度管理について',
      response: '配膳時の温度チェックを徹底し、適温での提供を実現いたしました。',
      status: '解決済み'
    },
    {
      date: '2024年1月',
      content: 'お迎え時の混雑について',
      response: '時間帯別の動線を見直し、スムーズな受け渡しができるよう改善いたしました。',
      status: '解決済み'
    },
  ],
  facility3: [
    {
      date: '2024年2月',
      content: '英語教室の内容について',
      response: 'カリキュラムを見直し、年齢に応じた内容に改善いたしました。',
      status: '解決済み'
    },
    {
      date: '2024年1月',
      content: '保護者会の開催時間について',
      response: '平日夕方と土曜日の選択制を導入し、参加しやすい環境を整えました。',
      status: '解決済み'
    },
  ],
  facility4: [
    {
      date: '2024年2月',
      content: 'アプリの操作方法について',
      response: '操作マニュアルを作成し、個別サポートも実施いたしました。',
      status: '解決済み'
    },
    {
      date: '2024年1月',
      content: '写真販売の頻度について',
      response: '撮影回数を増やし、月2回の販売を実施することといたしました。',
      status: '解決済み'
    },
  ],
  facility5: [
    {
      date: '2024年2月',
      content: '個別対応の時間について',
      response: '面談時間を延長し、じっくりお話しできる環境を整えました。',
      status: '解決済み'
    },
    {
      date: '2024年1月',
      content: '園だよりの内容について',
      response: '写真を増やし、より分かりやすい内容に改善いたしました。',
      status: '解決済み'
    },
  ],
  facility6: [
    {
      date: '2024年2月',
      content: '新施設の設備について',
      response: 'ご要望を踏まえ、追加の収納スペースを設置いたしました。',
      status: '解決済み'
    },
    {
      date: '2024年1月',
      content: 'プールの水温管理について',
      response: '温度管理システムを導入し、常に適温を保てるようにいたしました。',
      status: '解決済み'
    },
  ],
};

export default function ComplaintsSection({ nurseryId }: { nurseryId: string }) {
  const complaints = complaintsData[nurseryId] || [];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">意見・要望解決報告</h2>
        <p className="text-gray-600 text-center mb-16">保護者の皆様からいただいたご意見・ご要望への対応状況をご報告いたします</p>

        <div className="space-y-6">
          {complaints.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-chat-3-line text-2xl text-teal-500"></i>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                </div>
                <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold whitespace-nowrap">
                  {item.status}
                </span>
              </div>
              
              <div className="ml-11 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">ご意見・ご要望</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{item.content}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">対応内容</h3>
                  <p className="text-gray-700 bg-teal-50 p-4 rounded-lg">{item.response}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-teal-100 rounded-full">
            <i className="ri-mail-line text-4xl text-teal-600"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">ご意見・ご要望をお聞かせください</h3>
          <p className="text-gray-600 mb-6">
            より良い保育環境づくりのため、保護者の皆様のご意見・ご要望をお待ちしております。<br />
            園内の意見箱、または連絡帳にてお気軽にお寄せください。
          </p>
        </div>
      </div>
    </section>
  );
}
