'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="bg-white w-full relative" style={{ aspectRatio: '2560 / 1167' }}>
      <Image
        src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto:best,w_2560/v1774603872/BJ_17_jhvfgl.jpg"
        alt="BlackJack Band"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
};

export default Hero; 