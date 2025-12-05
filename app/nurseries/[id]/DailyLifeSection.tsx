'use client';

const dailyLifeData: Record<string, any> = {
  // ... existing code ...
  
  himawari: {
    images: [
      'https://readdy.ai/api/search-image?query=Happy%20Japanese%20preschool%20children%20playing%20together%20in%20a%20bright%20modern%20rooftop%20playground%20with%20colorful%20toys%20and%20equipment%2C%20natural%20sunlight%2C%20clean%20white%20background%2C%20joyful%20atmosphere%2C%20educational%20setting&width=800&height=600&seq=himawari1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20toddlers%20engaged%20in%20creative%20art%20activities%20with%20colorful%20paints%20and%20materials%20in%20a%20clean%20bright%20classroom%2C%20focused%20expressions%2C%20simple%20white%20background%2C%20educational%20environment&width=800&height=600&seq=himawari2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20preschool%20children%20enjoying%20healthy%20lunch%20together%20at%20a%20clean%20modern%20table%2C%20smiling%20faces%2C%20nutritious%20food%2C%20bright%20white%20background%2C%20warm%20atmosphere&width=800&height=600&seq=himawari3&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20children%20peacefully%20napping%20on%20comfortable%20futons%20in%20a%20quiet%20bright%20room%20with%20soft%20lighting%2C%20serene%20atmosphere%2C%20clean%20white%20background%2C%20restful%20environment&width=800&height=600&seq=himawari4&orientation=landscape'
    ]
  },
  
  sakura: {
    images: [
      'https://readdy.ai/api/search-image?query=Happy%20Japanese%20preschool%20children%20playing%20under%20cherry%20blossom%20trees%20in%20a%20spacious%20garden%20playground%2C%20bright%20sunny%20day%2C%20clean%20white%20background%2C%20joyful%20spring%20atmosphere&width=800&height=600&seq=sakura1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20toddlers%20reading%20picture%20books%20together%20in%20a%20cozy%20library%20corner%20with%20wooden%20shelves%2C%20concentrated%20expressions%2C%20simple%20white%20background%2C%20educational%20setting&width=800&height=600&seq=sakura2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20preschool%20children%20participating%20in%20music%20and%20rhythm%20activities%20with%20instruments%2C%20smiling%20faces%2C%20bright%20white%20background%2C%20creative%20atmosphere&width=800&height=600&seq=sakura3&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20children%20enjoying%20freshly%20prepared%20meals%20in%20a%20bright%20modern%20dining%20area%2C%20healthy%20food%2C%20clean%20white%20background%2C%20warm%20family-like%20atmosphere&width=800&height=600&seq=sakura4&orientation=landscape'
    ]
  },
  
  mori: {
    images: [
      'https://readdy.ai/api/search-image?query=Happy%20Japanese%20preschool%20children%20exploring%20nature%20in%20a%20forest-like%20garden%20with%20trees%20and%20plants%2C%20discovering%20insects%2C%20bright%20natural%20light%2C%20clean%20white%20background%2C%20adventurous%20atmosphere&width=800&height=600&seq=mori1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20toddlers%20planting%20and%20caring%20for%20vegetables%20in%20a%20small%20garden%20plot%2C%20focused%20expressions%2C%20simple%20white%20background%2C%20educational%20farming%20experience&width=800&height=600&seq=mori2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20preschool%20children%20playing%20in%20a%20warm%20wooden%20interior%20classroom%20with%20natural%20materials%2C%20smiling%20faces%2C%20bright%20white%20background%2C%20cozy%20home-like%20atmosphere&width=800&height=600&seq=mori3&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20children%20enjoying%20outdoor%20activities%20and%20nature%20observation%20in%20a%20green%20garden%20setting%2C%20curious%20expressions%2C%20clean%20white%20background%2C%20peaceful%20environment&width=800&height=600&seq=mori4&orientation=landscape'
    ]
  },

  tsukushi: {
    images: [
      'https://readdy.ai/api/search-image?query=Happy%20Japanese%20preschool%20children%20playing%20together%20in%20a%20bright%20modern%20playground%20with%20colorful%20toys%20and%20equipment%2C%20natural%20sunlight%2C%20clean%20white%20background%2C%20joyful%20atmosphere%2C%20educational%20setting&width=800&height=600&seq=tsukushi1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20toddlers%20engaged%20in%20creative%20art%20activities%20with%20colorful%20paints%20and%20materials%20in%20a%20clean%20bright%20classroom%2C%20focused%20expressions%2C%20simple%20white%20background%2C%20educational%20environment&width=800&height=600&seq=tsukushi2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20preschool%20children%20enjoying%20healthy%20lunch%20together%20at%20a%20clean%20modern%20table%2C%20smiling%20faces%2C%20nutritious%20food%2C%20bright%20white%20background%2C%20warm%20atmosphere&width=800&height=600&seq=tsukushi3&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20children%20peacefully%20napping%20on%20comfortable%20futons%20in%20a%20quiet%20bright%20room%20with%20soft%20lighting%2C%20serene%20atmosphere%2C%20clean%20white%20background%2C%20restful%20environment&width=800&height=600&seq=tsukushi4&orientation=landscape'
    ]
  },

  cosmos: {
    images: [
      'https://readdy.ai/api/search-image?query=Happy%20Japanese%20preschool%20children%20playing%20together%20in%20a%20bright%20modern%20playground%20with%20colorful%20toys%20and%20equipment%2C%20natural%20sunlight%2C%20clean%20white%20background%2C%20joyful%20atmosphere%2C%20educational%20setting&width=800&height=600&seq=cosmos1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20toddlers%20engaged%20in%20creative%20art%20activities%20with%20colorful%20paints%20and%20materials%20in%20a%20clean%20bright%20classroom%2C%20focused%20expressions%2C%20simple%20white%20background%2C%20educational%20environment&width=800&height=600&seq=cosmos2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20preschool%20children%20enjoying%20healthy%20lunch%20together%20at%20a%20clean%20modern%20table%2C%20smiling%20faces%2C%20nutritious%20food%2C%20bright%20white%20background%2C%20warm%20atmosphere&width=800&height=600&seq=cosmos3&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20children%20peacefully%20napping%20on%20comfortable%20futons%20in%20a%20quiet%20bright%20room%20with%20soft%20lighting%2C%20serene%20atmosphere%2C%20clean%20white%20background%2C%20restful%20environment&width=800&height=600&seq=cosmos4&orientation=landscape'
    ]
  },

  donguri: {
    images: [
      'https://readdy.ai/api/search-image?query=Happy%20Japanese%20preschool%20children%20playing%20together%20in%20a%20bright%20modern%20playground%20with%20colorful%20toys%20and%20equipment%2C%20natural%20sunlight%2C%20clean%20white%20background%2C%20joyful%20atmosphere%2C%20educational%20setting&width=800&height=600&seq=donguri1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20toddlers%20engaged%20in%20creative%20art%20activities%20with%20colorful%20paints%20and%20materials%20in%20a%20clean%20bright%20classroom%2C%20focused%20expressions%2C%20simple%20white%20background%2C%20educational%20environment&width=800&height=600&seq=donguri2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20preschool%20children%20enjoying%20healthy%20lunch%20together%20at%20a%20clean%20modern%20table%2C%20smiling%20faces%2C%20nutritious%20food%2C%20bright%20white%20background%2C%20warm%20atmosphere&width=800&height=600&seq=donguri3&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Japanese%20children%20peacefully%20napping%20on%20comfortable%20futons%20in%20a%20quiet%20bright%20room%20with%20soft%20lighting%2C%20serene%20atmosphere%2C%20clean%20white%20background%2C%20restful%20environment&width=800&height=600&seq=donguri4&orientation=landscape'
    ]
  },
};

export default function DailyLifeSection({ nurseryId }: { nurseryId: string }) {
  const data = dailyLifeData[nurseryId];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">保育の様子</h2>
        <p className="text-gray-600 text-center mb-16">日々の保育活動の様子をご紹介します</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.images.map((image: string, index: number) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={image} 
                alt={`保育の様子 ${index + 1}`}
                className="w-full h-80 object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
