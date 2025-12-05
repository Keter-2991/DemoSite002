export default function ChairmanMessage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">理事長挨拶</h2>
          <p className="text-xl text-gray-600">社会福祉法人みらい 理事長より</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20male%20chairman%20in%20his%2060s%2C%20warm%20confident%20smile%2C%20standing%20in%20modern%20office%20with%20plants%2C%20natural%20lighting%2C%20professional%20portrait%20photography%2C%20trustworthy%20atmosphere%2C%20wearing%20business%20suit&width=600&height=800&seq=chairman&orientation=portrait" 
                alt="理事長 山田 太郎"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6">
              <p className="text-sm text-gray-600 mb-1">理事長</p>
              <p className="text-2xl font-bold text-gray-900">山田 太郎</p>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10">
              <div className="flex items-start mb-6">
                <i className="ri-double-quotes-l text-5xl text-teal-500 mr-4 w-12 h-12 flex items-center justify-center"></i>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  社会福祉法人みらいは、2010年の設立以来、「子どもたち一人ひとりの個性を大切にする」という理念のもと、保育事業に取り組んでまいりました。
                </p>
                <p>
                  子どもたちは無限の可能性を秘めています。その可能性を最大限に引き出し、健やかな成長を支えることが私たちの使命です。
                </p>
                <p>
                  また、働く保護者の皆様が安心してお子様を預けられる環境づくりにも力を入れています。保護者の皆様と共に、お子様の成長を見守り、喜びを分かち合いたいと考えています。
                </p>
                <p>
                  これからも地域に根ざした保育園として、子どもたちの笑顔と未来のために尽力してまいります。
                </p>
              </div>
              <div className="flex items-end justify-end mt-6">
                <i className="ri-double-quotes-r text-5xl text-teal-500 w-12 h-12 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
