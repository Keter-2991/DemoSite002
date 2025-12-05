export default function AboutHero() {
  return (
    <div 
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20Japanese%20nursery%20school%20building%20exterior%20with%20green%20trees%2C%20professional%20architecture%20photography%2C%20welcoming%20entrance%2C%20clean%20design%2C%20peaceful%20atmosphere%2C%20sunny%20day%2C%20educational%20facility&width=1920&height=1080&seq=about-hero&orientation=landscape')`
      }}
    >
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          法人について
        </h1>
        <p className="text-2xl md:text-3xl leading-relaxed">
          子どもたちの未来を創る<br />
          社会福祉法人みらい
        </p>
      </div>
    </div>
  );
}
