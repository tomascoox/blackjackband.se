import Image from 'next/image';
import Link from 'next/link';

const Press = () => {
  const images = [
    { id: 'poster2026', url: 'https://res.cloudinary.com/dlcfxe19d/image/upload/v1775060784/bj_poster_2026_fb2_zmdskp.jpg' },
    { id: '17', url: 'https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603872/BJ_17_jhvfgl.jpg' },
    { id: '18', url: 'https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603880/BJ_18_wbjsyj.jpg' },
    { id: '07', url: 'https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603874/GRUPP-BJ_07_hjz7kz.jpg' },
    { id: '10', url: 'https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603871/BJ_10_ek0d4y.jpg', topFocus: true },
    { id: '13', url: 'https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603874/BJ_13_ssnvox.jpg', topFocus: true },
    { id: '12', url: 'https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603870/BJ_12_zmdeu3.jpg', topFocus: true },
    { id: '11', url: 'https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603873/BJ_11_oudya3.jpg', topFocus: true },
    { id: '14', url: 'https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603874/BJ_14_lj3zdv.jpg', topFocus: true },
  ];

  return (
    <section id="press" className="w-full bg-beige">
      <div className="container py-16">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl text-brown mb-12">Press</h2>

        {/* Logo Image */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-[400px]">
            <Link href="/images/press/logo-color-1600x600.png" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/press/logo-color-lowres.png"
                alt="BlackJack logo"
                width={400}
                height={150}
                className="cursor-pointer w-full h-auto drop-shadow-sm hover:drop-shadow-md transition-shadow"
              />
            </Link>
          </div>
        </div>

        {/* Image Grid (Pure Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.id} className="group relative transition-all duration-300 transform hover:-translate-y-2">
              <Link href={img.url} target="_blank" rel="noopener noreferrer">
                <div className="aspect-[3/2] relative overflow-hidden rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={img.url.replace('/upload/', '/upload/f_auto,q_auto,w_800/')}
                    alt={`BlackJack Band Photo`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110 ${img.topFocus ? 'object-[center_15%]' : 'object-center'}`}
                  />
                  {/* Subtle dark overlay on hover to indicate interactivity */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-brown/40 text-sm font-medium italic">
          Foto: Mats Oscarsson
        </div>
      </div>
    </section>
  );
};

export default Press;