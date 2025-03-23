'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="bg-white flex justify-center">
      <div className="w-[1100px]">
        <Image
          src="/images/startbild-2025.webp"
          alt="BlackJack Band"
          width={1100}
          height={500}
          priority
        />
      </div>
    </section>
  );
};

export default Hero; 