export default function AdmissionHero() {
  return (
    <div 
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Happy%20Japanese%20children%20playing%20together%20in%20bright%20modern%20nursery%20classroom%2C%20colorful%20toys%2C%20warm%20welcoming%20atmosphere%2C%20natural%20lighting%2C%20joyful%20expressions%2C%20diverse%20activities%2C%20professional%20photography%2C%20safe%20environment&width=1920&height=1080&seq=admission-hero&orientation=landscape')`
      }}
    >
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          入園案内
        </h1>
        <p className="text-2xl md:text-3xl leading-relaxed">
          お子様の成長を共に見守らせてください<br />
          見学・入園のご相談はお気軽にどうぞ
        </p>
      </div>
    </div>
  );
}
