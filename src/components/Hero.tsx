'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="bg-white w-full">
      <div className="container px-0 md:px-4">
        <Image
          src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_1100/v1742758735/startbild-2025_fw9nzv.jpg"
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