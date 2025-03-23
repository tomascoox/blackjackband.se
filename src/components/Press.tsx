import Image from 'next/image';
import Link from 'next/link';

const Press = () => {
  return (
    <section id="press" className="w-full bg-beige">
      <div className="w-[1100px] mx-auto py-16">
        <h2 className="text-center">Press</h2>
        
        {/* Logo Images */}
        <div className="mt-8 mb-12 flex flex-col items-center">
          <div className="mb-8">
            <Link href="/images/press/logo-color-1600x600.png" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/logo-color-lowres.png" 
                alt="BlackJack logo" 
                width={400}
                height={150}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/pressbild_blackjack_logo_04-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/pressbild_blackjack_logo_04-1280x854.jpg" 
                alt="BlackJack logo with band" 
                width={400}
                height={267}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/pressbild_blackjack_logo_03_alt2-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/pressbild_blackjack_logo_03_alt2-1280x1816.jpg" 
                alt="BlackJack logo vertical" 
                width={282}
                height={400}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/pressbild_blackjack_logo_01-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/pressbild_blackjack_logo_01-1280x854.jpg" 
                alt="BlackJack logo" 
                width={400}
                height={267}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/pressbild_blackjack_logo_02_alt2-1-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/pressbild_blackjack_logo_02_alt2-1-1280x853.jpg" 
                alt="BlackJack logo" 
                width={400}
                height={267}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/1-image00017-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/1-image00017-1280x854.jpg" 
                alt="BlackJack" 
                width={400}
                height={267}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/2-image00006-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/2-image00006-1280x853.jpg" 
                alt="BlackJack" 
                width={400}
                height={267}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/3-image00014-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/3-image00014-1280x1920.jpg" 
                alt="BlackJack" 
                width={267}
                height={400}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/image00003-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/image00003-1280x1920.jpg" 
                alt="BlackJack" 
                width={267}
                height={400}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/image00015-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/image00015-1280x1920.jpg" 
                alt="BlackJack" 
                width={267}
                height={400}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/image00013-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/image00013-1280x1921.jpg" 
                alt="BlackJack" 
                width={267}
                height={400}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/image00012-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/image00012-1280x1920.jpg" 
                alt="BlackJack" 
                width={267}
                height={400}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/images/press/image00018-scaled.jpg" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/press/image00018-1280x1920.jpg" 
                alt="BlackJack" 
                width={267}
                height={400}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press; 