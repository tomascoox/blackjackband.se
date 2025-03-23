'use client';

import React from 'react';
import Image from 'next/image';

interface AlbumProps {
  title: string;
  imageSrc: string;
  spotifyUri: string;
}

const Album = ({ imageSrc, spotifyUri }: AlbumProps) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="w-full">
        <Image 
          src={imageSrc} 
          alt="Album cover" 
          width={345} 
          height={345} 
          className="w-full rounded-lg"
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
      imageSrc: '/images/BlackJack-En-tva-kanske-tre-album.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A6Hh3YDyPrko4t2gbNYiUCh'
    },
    { 
      title: 'Rosalie', 
      imageSrc: '/images/rosalie_spotify_album.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A6aMsrCTpcQav50Y2R8LFjK'
    },
    { 
      title: 'I Natt I Natt', 
      imageSrc: '/images/I-Natt-I-Natt.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A5AVST0GePltPs0p6f82wRK'
    },
    { 
      title: '445644', 
      imageSrc: '/images/445644.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A0AhEyvsv7l4a6wTmhwzrb9'
    },
    { 
      title: 'Casino', 
      imageSrc: '/images/Casino.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A6jHXFWyM4ecQfZKeuuXUll'
    },
    { 
      title: 'Festival', 
      imageSrc: '/images/Festival.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A0Uzqzp7vDomyreKunkP5HD'
    },
  ];

  return (
    <section id="musik" className="w-full bg-white">
      <div className="w-[1100px] mx-auto py-16">
        <h2 className="text-center">Musik</h2>
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