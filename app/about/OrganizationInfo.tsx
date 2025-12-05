export default function OrganizationInfo() {
  const info = [
    { label: '法人名', value: '社会福祉法人みらい' },
    { label: '設立', value: '2010年4月1日' },
    { label: '理事長', value: '山田 太郎' },
    { label: '所在地', value: '〒154-0015 東京都世田谷区桜新町1-2-3' },
    { label: '電話番号', value: '03-1234-5678' },
    { label: 'メール', value: 'info@mirai-hoiku.jp' },
    { label: '事業内容', value: '認可保育園の運営' },
    { label: '運営施設', value: 'さくら保育園、ひまわり保育園、もりのこ保育園' }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">法人概要</h2>
          <p className="text-xl text-gray-600">社会福祉法人みらいの基本情報</p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10">
          <div className="space-y-6">
            {info.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center bg-white rounded-2xl p-6 shadow-sm">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <p className="text-gray-600 font-bold">{item.label}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-900 text-lg">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
