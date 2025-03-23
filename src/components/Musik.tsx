'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AlbumProps {
  title: string;
  imageSrc: string;
  spotifyUri: string;
}

const Album = ({ title, imageSrc, spotifyUri }: AlbumProps) => {
  const [loadIframe, setLoadIframe] = useState(false);
  
  return (
    <div className="flex flex-col mb-8">
      <div className="w-full">
        <Image 
          src={imageSrc} 
          alt={`${title} album cover`}
          width={345} 
          height={345}
          loading="lazy"
          className="w-full h-auto rounded-lg cursor-pointer"
          onClick={() => setLoadIframe(true)}
        />
      </div>
      <div className="w-full">
        {loadIframe ? (
          <iframe 
            src={`https://embed.spotify.com/?uri=${spotifyUri}`} 
            width="100%" 
            height="400" 
            frameBorder="0" 
            className="rounded-none"
          ></iframe>
        ) : (
          <div 
            className="w-full h-[400px] bg-black flex flex-col items-center justify-center cursor-pointer rounded" 
            onClick={() => setLoadIframe(true)}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5576 16.6356C16.3666 16.9423 15.9686 17.0338 15.6619 16.8428C13.5048 15.5521 10.7828 15.309 7.62821 16.1252C7.27698 16.2218 6.92413 16.0002 6.82752 15.649C6.73092 15.2977 6.95256 14.9449 7.30379 14.8483C10.7488 13.9551 13.7756 14.2424 16.2097 15.7077C16.5164 15.8987 16.6079 16.2967 16.4169 16.6034V16.6356ZM17.7559 13.788C17.5123 14.1694 17.015 14.2826 16.6336 14.039C14.1556 12.5454 10.5077 12.0722 7.50518 13.1718C7.07822 13.3218 6.62275 13.0854 6.47272 12.6585C6.32268 12.2315 6.55908 11.776 6.98603 11.626C10.4492 10.3562 14.5123 10.8899 17.4048 12.6657C17.7862 12.9093 17.8994 13.4066 17.6559 13.788ZM17.8626 10.8673C14.8512 9.13265 9.7226 8.9248 6.76047 9.86853C6.25521 10.0447 5.71618 9.76208 5.54003 9.25682C5.36389 8.75155 5.64648 8.21253 6.15174 8.03638C9.56005 6.9465 15.2414 7.19308 18.7544 9.20994C19.2047 9.48977 19.3584 10.0725 19.0786 10.5228C18.7988 10.9731 18.216 11.1267 17.7657 10.8469L17.8626 10.8673Z"/>
            </svg>
            <p className="text-lg text-white mt-4">Klicka för att ladda Spotify-spelare</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Musik = () => {
  const albums = [
    { 
      title: 'En, två kanske tre', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_345/BlackJack-En-tva-kanske-tre-album_tkzyz2.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A6Hh3YDyPrko4t2gbNYiUCh'
    },
    { 
      title: 'Rosalie', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_345/v1742757907/rosalie_spotify_album_jrmuuy.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A6aMsrCTpcQav50Y2R8LFjK'
    },
    { 
      title: 'I Natt I Natt', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_345/v1742758297/I-Natt-I-Natt_cc27fx.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A5AVST0GePltPs0p6f82wRK'
    },
    { 
      title: '445644', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_345/v1742758398/445644_dqqzsc.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A0AhEyvsv7l4a6wTmhwzrb9'
    },
    { 
      title: 'Casino', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_345/v1742758386/Casino_atmhyx.jpg', 
      spotifyUri: 'spotify%3Aalbum%3A6jHXFWyM4ecQfZKeuuXUll'
    },
    { 
      title: 'Festival', 
      imageSrc: 'https://res.cloudinary.com/dlcfxe19d/image/upload/f_auto,q_auto,w_345/v1742758533/Festival_kh9hkh.jpg', 
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