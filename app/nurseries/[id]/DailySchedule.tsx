'use client';

interface DailyScheduleProps {
  nurseryId: string;
}

export default function DailySchedule({ nurseryId }: DailyScheduleProps) {
  const schedule = [
    { time: '7:00', activity: '順次登園・自由遊び' },
    { time: '9:30', activity: '朝の会・おやつ' },
    { time: '10:00', activity: '主活動（製作・外遊び・散歩など）' },
    { time: '11:30', activity: '給食' },
    { time: '12:30', activity: 'お昼寝' },
    { time: '15:00', activity: 'おやつ' },
    { time: '15:30', activity: '帰りの会・自由遊び' },
    { time: '16:00', activity: '順次降園' },
    { time: '18:00', activity: '延長保育' },
    { time: '20:00', activity: '閉園' }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">一日の流れ</h2>
          <p className="text-xl text-gray-600">子どもたちの一日をご紹介します</p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10">
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-teal-500 text-white rounded-2xl px-6 py-3 font-bold text-lg whitespace-nowrap mr-6">
                  {item.time}
                </div>
                <div className="flex-1 bg-white rounded-2xl px-6 py-3 shadow-sm">
                  <p className="text-gray-900 text-lg">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-8">
          <div className="flex items-start">
            <i className="ri-information-line text-3xl text-amber-600 mr-4 w-8 h-8 flex items-center justify-center"></i>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ご注意</h3>
              <p className="text-gray-700 leading-relaxed">
                上記は基本的な一日の流れです。年齢やクラスによって多少異なります。また、季節や天候、行事などにより変更する場合があります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
