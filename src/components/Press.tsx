import Image from 'next/image';
import Link from 'next/link';

const Press = () => {
  return (
    <section id="press" className="w-full bg-beige">
      <div className="container py-16">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl text-brown mb-12">Press</h2>

        {/* Logo Images */}
        <div className="flex flex-col items-center">
          <div className="mb-8 w-full max-w-[400px]">
            <Link href="/images/press/logo-color-1600x600.png" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/press/logo-color-lowres.png"
                alt="BlackJack logo"
                width={400}
                height={150}
                className="cursor-pointer w-full h-auto"
              />
            </Link>
          </div>

          {/* Gruppbilder - 17, 18, 7 */}
          {/* BJ_17 */}
          <div className="mb-8 w-full max-w-[400px]">
            <Link href="https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603872/BJ_17_jhvfgl.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_400/v1774603872/BJ_17_jhvfgl.jpg"
                alt="BlackJack Band"
                width={400}
                height={267}
                loading="lazy"
                className="cursor-pointer w-full h-auto"
              />
            </Link>
          </div>

          {/* BJ_18 */}
          <div className="mb-8 w-full max-w-[400px]">
            <Link href="https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603880/BJ_18_wbjsyj.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_400/v1774603880/BJ_18_wbjsyj.jpg"
                alt="BlackJack Band"
                width={400}
                height={267}
                loading="lazy"
                className="cursor-pointer w-full h-auto"
              />
            </Link>
          </div>

          {/* BJ_07 */}
          <div className="mb-8 w-full max-w-[400px]">
            <Link href="https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603874/GRUPP-BJ_07_hjz7kz.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_400/v1774603874/GRUPP-BJ_07_hjz7kz.jpg"
                alt="BlackJack Band"
                width={400}
                height={267}
                loading="lazy"
                className="cursor-pointer w-full h-auto"
              />
            </Link>
          </div>

          {/* Individuella bilder - 10, 13, 12, 11, 14 */}
          {/* BJ_10 */}
          <div className="mb-8 w-full max-w-[400px]">
            <Link href="https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603871/BJ_10_ek0d4y.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_400/v1774603871/BJ_10_ek0d4y.jpg"
                alt="BlackJack Band"
                width={400}
                height={267}
                loading="lazy"
                className="cursor-pointer w-full h-auto"
              />
            </Link>
          </div>

          {/* BJ_13 */}
          <div className="mb-8 w-full max-w-[400px]">
            <Link href="https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603874/BJ_13_ssnvox.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_400/v1774603874/BJ_13_ssnvox.jpg"
                alt="BlackJack Band"
                width={400}
                height={267}
                loading="lazy"
                className="cursor-pointer w-full h-auto"
              />
            </Link>
          </div>

          {/* BJ_12 */}
          <div className="mb-8 w-full max-w-[400px]">
            <Link href="https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603870/BJ_12_zmdeu3.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_400/v1774603870/BJ_12_zmdeu3.jpg"
                alt="BlackJack Band"
                width={400}
                height={267}
                loading="lazy"
                className="cursor-pointer w-full h-auto"
              />
            </Link>
          </div>

          {/* BJ_11 */}
          <div className="mb-8 w-full max-w-[400px]">
            <Link href="https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603873/BJ_11_oudya3.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_400/v1774603873/BJ_11_oudya3.jpg"
                alt="BlackJack Band"
                width={400}
                height={267}
                loading="lazy"
                className="cursor-pointer w-full h-auto"
              />
            </Link>
          </div>

          {/* BJ_14 */}
          <div className="mb-8 w-full max-w-[400px]">
            <Link href="https://res.cloudinary.com/dlcfxe19d/image/upload/v1774603874/BJ_14_lj3zdv.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_400/v1774603874/BJ_14_lj3zdv.jpg"
                alt="BlackJack Band"
                width={400}
                height={267}
                loading="lazy"
                className="cursor-pointer w-full h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;