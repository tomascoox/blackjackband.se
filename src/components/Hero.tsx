'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="bg-white w-full">
      <Image
        src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_1920/v1774603872/BJ_17_jhvfgl.jpg"
        alt="BlackJack Band"
        width={1920}
        height={875}
        priority
        className="w-full h-auto"
      />
    </section>
  );
};

export default Hero; 