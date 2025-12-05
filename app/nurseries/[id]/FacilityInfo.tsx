const nurseryData: Record<string, any> = {
  sakura: {
    name: 'さくら保育園',
    address: '東京都世田谷区桜新町1-2-3',
    phone: '03-1234-5678',
    capacity: {
      '0歳児': '12名',
      '1歳児': '18名',
      '2歳児': '20名',
      '3歳児': '25名',
      '4歳児': '25名',
      '5歳児': '20名',
    },
    hours: '7:00～19:00',
    closedDays: '日曜日、祝日、年末年始（12月29日～1月3日）',
    extendedCare: '19:00～20:00（30分あたり500円）',
  },
  himawari: {
    name: 'ひまわり保育園',
    address: '東京都世田谷区三軒茶屋2-3-4',
    phone: '03-2345-6789',
    capacity: {
      '0歳児': '9名',
      '1歳児': '15名',
      '2歳児': '18名',
      '3歳児': '18名',
      '4歳児': '18名',
      '5歳児': '12名',
    },
    hours: '7:30～19:00',
    closedDays: '日曜日、祝日、年末年始（12月29日～1月3日）',
    extendedCare: '19:00～20:00（30分あたり500円）',
  },
  mori: {
    name: 'もりのこ保育園',
    address: '東京都世田谷区成城5-6-7',
    phone: '03-3456-7890',
    capacity: {
      '0歳児': '6名',
      '1歳児': '12名',
      '2歳児': '15名',
      '3歳児': '17名',
      '4歳児': '17名',
      '5歳児': '13名',
    },
    hours: '7:00～18:30',
    closedDays: '日曜日、祝日、年末年始（12月29日～1月3日）',
    extendedCare: '18:30～20:00（30分あたり500円）',
  },
  tsukushi: {
    name: 'つくし保育園',
    address: '東京都世田谷区駒沢8-9-10',
    phone: '03-4567-8901',
    capacity: {
      '0歳児': '10名',
      '1歳児': '16名',
      '2歳児': '20名',
      '3歳児': '20名',
      '4歳児': '20名',
      '5歳児': '14名',
    },
    hours: '7:00～19:00',
    closedDays: '日曜日、祝日、年末年始（12月29日～1月3日）',
    extendedCare: '19:00～20:00（30分あたり500円）',
  },
  cosmos: {
    name: 'コスモス保育園',
    address: '東京都世田谷区用賀11-12-13',
    phone: '03-5678-9012',
    capacity: {
      '0歳児': '6名',
      '1歳児': '9名',
      '2歳児': '12名',
      '3歳児': '12名',
      '4歳児': '12名',
      '5歳児': '9名',
    },
    hours: '7:30～18:30',
    closedDays: '日曜日、祝日、年末年始（12月29日～1月3日）',
    extendedCare: '18:30～20:00（30分あたり500円）',
  },
  donguri: {
    name: 'どんぐり保育園',
    address: '東京都世田谷区二子玉川14-15-16',
    phone: '03-6789-0123',
    capacity: {
      '0歳児': '12名',
      '1歳児': '18名',
      '2歳児': '20名',
      '3歳児': '22名',
      '4歳児': '22名',
      '5歳児': '16名',
    },
    hours: '7:00～19:00',
    closedDays: '日曜日、祝日、年末年始（12月29日～1月3日）',
    extendedCare: '19:00～20:00（30分あたり500円）',
  },
};

export default function FacilityInfo({ nurseryId }: { nurseryId: string }) {
  const data = nurseryData[nurseryId];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">施設情報</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-information-line text-3xl text-teal-500"></i>
              </div>
              基本情報
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-map-pin-line text-2xl text-teal-500"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">住所</p>
                  <p className="text-gray-900">{data.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-phone-line text-2xl text-teal-500"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">電話番号</p>
                  <p className="text-gray-900">{data.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-time-line text-2xl text-teal-500"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">開所時間</p>
                  <p className="text-gray-900">{data.hours}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-calendar-close-line text-2xl text-teal-500"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">休園日</p>
                  <p className="text-gray-900">{data.closedDays}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-3 mt-1">
                  <i className="ri-time-fill text-2xl text-teal-500"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">延長保育</p>
                  <p className="text-gray-900">{data.extendedCare}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-group-line text-3xl text-teal-500"></i>
              </div>
              定員数
            </h3>
            <div className="space-y-3">
              {Object.entries(data.capacity).map(([age, count]) => (
                <div key={age} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 font-medium">{age}</span>
                  <span className="text-teal-600 font-bold text-lg">{count as string}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t-2 border-teal-500">
                <span className="text-gray-900 font-bold text-lg">合計</span>
                <span className="text-teal-600 font-bold text-2xl">
                  {Object.values(data.capacity).reduce((sum: number, val: any) => sum + parseInt(val), 0)}名
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <i className="ri-map-2-line text-3xl text-teal-500"></i>
            </div>
            アクセスマップ
          </h3>
          <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(data.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
