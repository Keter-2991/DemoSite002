export default function RecruitmentHero() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Happy%20diverse%20nursery%20teachers%20playing%20with%20children%20in%20bright%20modern%20Japanese%20daycare%20center%2C%20warm%20atmosphere%2C%20professional%20photography%2C%20joyful%20interaction%2C%20colorful%20classroom%20environment%2C%20natural%20lighting%2C%20teamwork%2C%20caring%20educators&width=1920&height=1080&seq=recruitment-hero&orientation=landscape')`
      }}
    >
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          一緒に働きませんか
        </h1>
        <p className="text-2xl md:text-3xl mb-12 leading-relaxed">
          子どもたちの笑顔と成長を<br />
          共に見守る仲間を募集しています
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#positions"
            className="inline-flex items-center justify-center bg-teal-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-teal-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            募集要項を見る
            <i className="ri-arrow-down-line ml-2 w-6 h-6 flex items-center justify-center"></i>
          </a>
          <a 
            href="#voices"
            className="inline-flex items-center justify-center bg-white text-teal-500 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            先輩の声を聞く
            <i className="ri-user-voice-line ml-2 w-6 h-6 flex items-center justify-center"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
