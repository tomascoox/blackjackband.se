'use client';

import React from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 shadow-md z-50 w-full navbar-font">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
              <Image 
                src="/images/logo-268x63.png" 
                alt="BlackJack Logo" 
                width={200}
                height={47} 
                priority
              />
            </ScrollLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <ScrollLink
                to="nyheter"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-dark hover:text-gray-600 cursor-pointer px-3 py-2 text-2xl"
              >
                Nyheter
              </ScrollLink>
              <ScrollLink
                to="musik"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-dark hover:text-gray-600 cursor-pointer px-3 py-2 text-2xl"
              >
                Musik
              </ScrollLink>
              <ScrollLink
                to="turne"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-dark hover:text-gray-600 cursor-pointer px-3 py-2 text-2xl"
              >
                Turné
              </ScrollLink>
              <ScrollLink
                to="kontakt"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-dark hover:text-gray-600 cursor-pointer px-3 py-2 text-2xl"
              >
                Kontakt
              </ScrollLink>
              <ScrollLink
                to="press"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-dark hover:text-gray-600 cursor-pointer px-3 py-2 text-2xl"
              >
                Press
              </ScrollLink>
              <ScrollLink
                to="nyhetsarkiv"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-dark hover:text-gray-600 cursor-pointer px-3 py-2 text-2xl"
              >
                Nyhetsarkiv
              </ScrollLink>
              <ScrollLink
                to="webshop"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-dark hover:text-gray-600 cursor-pointer px-3 py-2 text-2xl"
              >
                Webshop
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 