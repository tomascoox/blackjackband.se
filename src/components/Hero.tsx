'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="bg-white w-full">
      <Image
        src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto:best,w_2560/v1774603872/BJ_17_jhvfgl.jpg"
        alt="BlackJack Band"
        width={2560}
        height={1167}
        priority
        className="w-full h-auto"
        style={{ height: 'auto' }}
      />
    </section>
  );
};

export default Hero; 