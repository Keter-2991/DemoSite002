'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '見学はいつでもできますか？',
      answer: '平日の10:00～11:00、14:00～15:00の時間帯で見学を受け付けております。事前にお電話またはメールでご予約ください。'
    },
    {
      question: '入園できる年齢は？',
      answer: '生後57日目から就学前までのお子様をお預かりしています。0歳児クラスから5歳児クラスまでございます。'
    },
    {
      question: '保育料はいくらですか？',
      answer: '認可保育園のため、保育料は世田谷区が定める基準に基づき、保護者の所得に応じて決定されます。詳しくは世田谷区役所保育課にお問い合わせください。'
    },
    {
      question: '給食はありますか？',
      answer: 'はい、自園調理の給食を提供しています。栄養士が献立を作成し、園内の調理室で毎日手作りしています。アレルギー対応も行っております。'
    },
    {
      question: '延長保育は利用できますか？',
      answer: 'はい、延長保育を実施しています。利用には事前の申込と別途料金が必要です。詳しくは各園にお問い合わせください。'
    },
    {
      question: '慣らし保育はありますか？',
      answer: 'はい、お子様が無理なく園生活に慣れていけるよう、1～2週間程度の慣らし保育期間を設けています。お子様の様子を見ながら、保護者の方と相談して進めていきます。'
    },
    {
      question: '駐車場はありますか？',
      answer: '申し訳ございませんが、駐車場のご用意はございません。送迎の際は、公共交通機関または自転車をご利用ください。'
    },
    {
      question: '保護者参加の行事はどのくらいありますか？',
      answer: '運動会、発表会、保育参観など、年に数回保護者参加の行事がございます。お仕事をされている方も参加しやすいよう、土曜日に開催することが多いです。'
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">よくあるご質問</h2>
          <p className="text-xl text-gray-600">入園に関するよくある質問</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center flex-1 text-left">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold whitespace-nowrap">
                    Q
                  </div>
                  <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                </div>
                <i className={`${openIndex === index ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'} text-3xl text-gray-600 w-8 h-8 flex items-center justify-center`}></i>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="flex items-start bg-white rounded-xl p-6">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold whitespace-nowrap">
                      A
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">その他のご質問は</h3>
          <p className="text-gray-700 mb-6">お気軽にお問い合わせください</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:03-1234-5678"
              className="inline-flex items-center justify-center bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              03-1234-5678
            </a>
            <a 
              href="mailto:info@mirai-hoiku.jp"
              className="inline-flex items-center justify-center bg-white text-teal-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              メールで問い合わせ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
