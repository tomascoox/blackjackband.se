'use client';

import React from 'react';
import Image from 'next/image';

interface AlbumProps {
  title: string;
  imageSrc: string;
  spotifyUri: string;
}

const Album = ({ title, imageSrc, spotifyUri }: AlbumProps) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="w-full">
        <Image 
          src={imageSrc} 
          alt={`${title} album cover`}
          width={345} 
          height={345} 
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-full">
        <iframe 
          src={`https://embed.spotify.com/?uri=${spotifyUri}`} 
          width="100%" 
          height="400" 
          frameBorder="0" 
          className="rounded-none"
        ></iframe>
      </div>
    </div>
  );
};

const Musik = () => {
  const albums = [
    { 
      title: 'En, två kanske tre', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto/BlackJack-En-tva-kanske-tre-album_tkzyz2.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A6Hh3YDyPrko4t2gbNYiUCh'
    },
    { 
      title: 'Rosalie', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto/v1742757907/rosalie_spotify_album_jrmuuy.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A6aMsrCTpcQav50Y2R8LFjK'
    },
    { 
      title: 'I Natt I Natt', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto/v1742758297/I-Natt-I-Natt_cc27fx.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A5AVST0GePltPs0p6f82wRK'
    },
    { 
      title: '445644', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto/v1742758398/445644_dqqzsc.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A0AhEyvsv7l4a6wTmhwzrb9'
    },
    { 
      title: 'Casino', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto/v1742758386/Casino_atmhyx.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A6jHXFWyM4ecQfZKeuuXUll'
    },
    { 
      title: 'Festival', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto/v1742758533/Festival_kh9hkh.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A0Uzqzp7vDomyreKunkP5HD'
    },
  ];

  return (
    <section id="musik" className="w-full bg-white">
      <div className="container py-16">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl">Musik</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {albums.map((album, index) => (
            <Album key={index} {...album} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Musik; 