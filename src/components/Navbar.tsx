'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dynamic offset based on device
  const scrollOffset = isMobile ? -400 : -60;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <ScrollLink
                to="nyheter"
                smooth={true}
                duration={500}
                offset={scrollOffset}
                className="text-dark hover:text-gray-600 cursor-pointer px-2 py-2 text-lg md:text-xl lg:text-2xl"
              >
                Nyheter
              </ScrollLink>
              <ScrollLink
                to="musik"
                smooth={true}
                duration={500}
                offset={scrollOffset}
                className="text-dark hover:text-gray-600 cursor-pointer px-2 py-2 text-lg md:text-xl lg:text-2xl"
              >
                Musik
              </ScrollLink>
              <ScrollLink
                to="turne"
                smooth={true}
                duration={500}
                offset={scrollOffset}
                className="text-dark hover:text-gray-600 cursor-pointer px-2 py-2 text-lg md:text-xl lg:text-2xl"
              >
                Turné
              </ScrollLink>
              <ScrollLink
                to="kontakt"
                smooth={true}
                duration={500}
                offset={scrollOffset}
                className="text-dark hover:text-gray-600 cursor-pointer px-2 py-2 text-lg md:text-xl lg:text-2xl"
              >
                Kontakt
              </ScrollLink>
              <ScrollLink
                to="press"
                smooth={true}
                duration={500}
                offset={scrollOffset}
                className="text-dark hover:text-gray-600 cursor-pointer px-2 py-2 text-lg md:text-xl lg:text-2xl"
              >
                Press
              </ScrollLink>
              <ScrollLink
                to="nyhetsarkiv"
                smooth={true}
                duration={500}
                offset={scrollOffset}
                className="text-dark hover:text-gray-600 cursor-pointer px-2 py-2 text-lg md:text-xl lg:text-2xl"
              >
                Nyhetsarkiv
              </ScrollLink>
              <Link
                href="https://www.teamgrahn.com/merchandise/black-jack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-gray-600 cursor-pointer px-2 py-2 text-lg md:text-xl lg:text-2xl"
              >
                Webshop
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <ScrollLink
              to="nyheter"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="text-dark block px-3 py-2 text-xl"
              onClick={closeMenu}
            >
              Nyheter
            </ScrollLink>
            <ScrollLink
              to="musik"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="text-dark block px-3 py-2 text-xl"
              onClick={closeMenu}
            >
              Musik
            </ScrollLink>
            <ScrollLink
              to="turne"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="text-dark block px-3 py-2 text-xl"
              onClick={closeMenu}
            >
              Turné
            </ScrollLink>
            <ScrollLink
              to="kontakt"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="text-dark block px-3 py-2 text-xl"
              onClick={closeMenu}
            >
              Kontakt
            </ScrollLink>
            <ScrollLink
              to="press"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="text-dark block px-3 py-2 text-xl"
              onClick={closeMenu}
            >
              Press
            </ScrollLink>
            <ScrollLink
              to="nyhetsarkiv"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="text-dark block px-3 py-2 text-xl"
              onClick={closeMenu}
            >
              Nyhetsarkiv
            </ScrollLink>
            <Link
              href="https://www.teamgrahn.com/merchandise/black-jack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark block px-3 py-2 text-xl"
              onClick={closeMenu}
            >
              Webshop
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 