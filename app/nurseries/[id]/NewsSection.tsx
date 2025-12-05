const nurseryNews: Record<string, any[]> = {
  facility1: [
    { date: '2024.03.15', title: '春の遠足のお知らせ', category: '行事' },
    { date: '2024.03.10', title: '卒園式について', category: '重要' },
    { date: '2024.03.05', title: '新年度の保育料について', category: 'お知らせ' },
    { date: '2024.02.28', title: '3月の献立表を掲載しました', category: '給食' },
    { date: '2024.02.20', title: '保護者会のご案内', category: 'お知らせ' },
  ],
  facility2: [
    { date: '2024.03.18', title: 'お別れ会のお知らせ', category: '行事' },
    { date: '2024.03.12', title: '新入園児説明会について', category: '重要' },
    { date: '2024.03.08', title: '園庭開放日のご案内', category: 'お知らせ' },
    { date: '2024.03.01', title: '3月の給食献立', category: '給食' },
    { date: '2024.02.25', title: 'ひな祭り会のお知らせ', category: '行事' },
  ],
  facility3: [
    { date: '2024.03.20', title: '英語教室の体験会開催', category: 'お知らせ' },
    { date: '2024.03.14', title: '卒園記念品について', category: '重要' },
    { date: '2024.03.07', title: '春の健康診断のお知らせ', category: 'お知らせ' },
    { date: '2024.03.03', title: '3月の行事予定', category: '行事' },
    { date: '2024.02.27', title: '保育参観のご案内', category: 'お知らせ' },
  ],
  facility4: [
    { date: '2024.03.19', title: 'ICTシステム更新のお知らせ', category: '重要' },
    { date: '2024.03.13', title: '新年度の持ち物について', category: 'お知らせ' },
    { date: '2024.03.09', title: '避難訓練実施報告', category: 'お知らせ' },
    { date: '2024.03.04', title: '3月の献立表', category: '給食' },
    { date: '2024.02.29', title: 'お誕生日会のお知らせ', category: '行事' },
  ],
  facility5: [
    { date: '2024.03.17', title: '個人面談のご案内', category: '重要' },
    { date: '2024.03.11', title: '園庭の遊具点検完了', category: 'お知らせ' },
    { date: '2024.03.06', title: '春の製作展示について', category: '行事' },
    { date: '2024.03.02', title: '3月の給食メニュー', category: '給食' },
    { date: '2024.02.26', title: '保護者アンケート結果', category: 'お知らせ' },
  ],
  facility6: [
    { date: '2024.03.21', title: '新施設見学会のお知らせ', category: '重要' },
    { date: '2024.03.16', title: '卒園式の詳細について', category: '行事' },
    { date: '2024.03.10', title: 'プール開き予定', category: 'お知らせ' },
    { date: '2024.03.05', title: '3月の献立表公開', category: '給食' },
    { date: '2024.02.28', title: '新年度説明会のご案内', category: '重要' },
  ],
};

export default function NewsSection({ nurseryId }: { nurseryId: string }) {
  const news = nurseryNews[nurseryId] || [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">園からのお知らせ</h2>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="space-y-4">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap">{item.date}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                      item.category === '重要' ? 'bg-red-100 text-red-600' :
                      item.category === '行事' ? 'bg-blue-100 text-blue-600' :
                      item.category === '給食' ? 'bg-green-100 text-green-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {item.category}
                    </span>
                    <h3 className="text-gray-900 font-medium">{item.title}</h3>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center ml-4">
                    <i className="ri-arrow-right-s-line text-2xl text-gray-400"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
