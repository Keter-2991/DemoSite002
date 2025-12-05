export default function MessageSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">理事長メッセージ</h2>
          <p className="text-xl text-gray-600">私たちが大切にしていること</p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-12">
          <div className="flex items-start mb-6">
            <i className="ri-double-quotes-l text-5xl text-teal-500 mr-4 w-12 h-12 flex items-center justify-center"></i>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              私たちの法人では、「子どもたち一人ひとりの個性を大切にする」という理念のもと、保育に取り組んでいます。
            </p>
            <p>
              そのためには、職員一人ひとりが働きやすい環境で、やりがいを持って保育に専念できることが何より重要だと考えています。
            </p>
            <p>
              充実した研修制度、働きやすい勤務体制、そして何より温かいチームワーク。これらすべてが揃った環境で、あなたの保育への想いを実現してください。
            </p>
            <p>
              子どもたちの成長を共に喜び、保護者の皆様と共に歩んでいける、そんな仲間をお待ちしています。
            </p>
          </div>
          <div className="flex items-end justify-end mt-6">
            <i className="ri-double-quotes-r text-5xl text-teal-500 w-12 h-12 flex items-center justify-center"></i>
          </div>
          <div className="text-right mt-8">
            <p className="text-sm text-gray-600">社会福祉法人みらい 理事長</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">山田 太郎</p>
          </div>
        </div>
      </div>
    </div>
  );
}
