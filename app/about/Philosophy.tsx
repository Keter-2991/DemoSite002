export default function Philosophy() {
  const values = [
    {
      icon: 'ri-heart-line',
      title: '一人ひとりを大切に',
      description: '子どもたち一人ひとりの個性や発達段階を理解し、それぞれに合った保育を提供します。'
    },
    {
      icon: 'ri-parent-line',
      title: '保護者との連携',
      description: '保護者の皆様と密にコミュニケーションを取り、共に子どもの成長を見守ります。'
    },
    {
      icon: 'ri-community-line',
      title: '地域との繋がり',
      description: '地域社会との交流を大切にし、開かれた保育園を目指します。'
    },
    {
      icon: 'ri-seedling-line',
      title: '豊かな体験',
      description: '様々な体験を通じて、子どもたちの感性と創造力を育みます。'
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">保育理念</h2>
          <p className="text-xl text-gray-600">私たちが大切にしている4つの価値観</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <i className={`${value.icon} text-4xl w-10 h-10 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
