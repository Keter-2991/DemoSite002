'use client';

import { useState } from 'react';

export default function VisitForm() {
  const [formData, setFormData] = useState({
    nursery: '',
    name: '',
    phone: '',
    email: '',
    childAge: '',
    preferredDate1: '',
    preferredDate2: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4op581fcjnktac9qd3g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nursery: '',
          name: '',
          phone: '',
          email: '',
          childAge: '',
          preferredDate1: '',
          preferredDate2: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">園見学申込</h2>
          <p className="text-xl text-gray-600">下記フォームよりお申し込みください</p>
        </div>

        <form id="visit-form" data-readdy-form onSubmit={handleSubmit} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-900 font-bold mb-2">
                見学希望園 <span className="text-red-500">*</span>
              </label>
              <select
                name="nursery"
                value={formData.nursery}
                onChange={(e) => setFormData({...formData, nursery: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-gray-900 bg-white pr-8"
              >
                <option value="">選択してください</option>
                <option value="さくら保育園">さくら保育園</option>
                <option value="ひまわり保育園">ひまわり保育園</option>
                <option value="もりのこ保育園">もりのこ保育園</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-900 font-bold mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-gray-900"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-bold mb-2">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-gray-900"
                placeholder="090-1234-5678"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-bold mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-gray-900"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-bold mb-2">
                お子様の年齢 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="childAge"
                value={formData.childAge}
                onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-gray-900"
                placeholder="例：1歳6ヶ月"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-bold mb-2">
                見学希望日（第1希望） <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="preferredDate1"
                value={formData.preferredDate1}
                onChange={(e) => setFormData({...formData, preferredDate1: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-bold mb-2">
                見学希望日（第2希望）
              </label>
              <input
                type="date"
                name="preferredDate2"
                value={formData.preferredDate2}
                onChange={(e) => setFormData({...formData, preferredDate2: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-bold mb-2">
                ご質問・ご要望
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => {
                  if (e.target.value.length <= 500) {
                    setFormData({...formData, message: e.target.value});
                  }
                }}
                maxLength={500}
                rows={5}
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-gray-900 resize-none"
                placeholder="ご質問やご要望がございましたらご記入ください"
              />
              <p className="text-sm text-gray-600 mt-2 text-right">{formData.message.length}/500文字</p>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="mt-6 bg-green-50 border-l-4 border-green-500 rounded-2xl p-6">
              <div className="flex items-center">
                <i className="ri-checkbox-circle-fill text-3xl text-green-500 mr-3 w-8 h-8 flex items-center justify-center"></i>
                <p className="text-green-700 font-bold">お申し込みありがとうございます。担当者より折り返しご連絡いたします。</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 bg-red-50 border-l-4 border-red-500 rounded-2xl p-6">
              <div className="flex items-center">
                <i className="ri-error-warning-fill text-3xl text-red-500 mr-3 w-8 h-8 flex items-center justify-center"></i>
                <p className="text-red-700 font-bold">送信に失敗しました。お手数ですが、もう一度お試しください。</p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 bg-teal-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-teal-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
          >
            {isSubmitting ? '送信中...' : '申し込む'}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">お電話でのお問い合わせも受け付けております</p>
          <a 
            href="tel:03-1234-5678"
            className="inline-flex items-center justify-center text-teal-500 font-bold text-xl hover:text-teal-600 transition-colors cursor-pointer"
          >
            <i className="ri-phone-line mr-2 w-6 h-6 flex items-center justify-center"></i>
            03-1234-5678
          </a>
        </div>
      </div>
    </div>
  );
}
