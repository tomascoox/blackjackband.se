import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-0 items-center">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white hover:underline text-sm">
            Integritetspolicy
          </Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/data-deletion" className="text-gray-400 hover:text-white hover:underline text-sm">
            Databorttagning
          </Link>
        </div>
        
        <div className="flex justify-center items-center mb-2 md:mb-0">
          <div className="text-sm text-gray-400 flex flex-wrap justify-center text-center">
            <span>Hemsida tillverkad av</span> 
            <Link href="https://joox.se" className="text-white hover:underline mx-1" target="_blank">Studio Joox AB</Link>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end mb-1 md:mb-0">
          <Link href="https://www.facebook.com/people/Black-Jack/100063480400974/" target="_blank">
            <svg className="h-6 w-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 