'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="bg-white w-full">
      <div className="container px-0 md:px-4">
        <Image
          src="/images/startbild-2025.webp"
          alt="BlackJack Band"
          width={1100}
          height={500}
          priority
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero; 