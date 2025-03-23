'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="bg-white w-full">
      <div className="container px-0 md:px-4">
        <Image
          src="https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto/v1742758735/startbild-2025_fw9nzv.jpg"
          alt="BlackJack Band"
          width={1100}
          height={500}
          loading="eager"
          priority={true}
          className="w-full h-auto"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwMCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
        />
      </div>
    </section>
  );
};

export default Hero; 