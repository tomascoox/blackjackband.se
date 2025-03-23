import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-4">
      <div className="container flex justify-center items-center">
        <div className="text-sm text-gray-400 flex items-center">
          Hemsida tillverkad av <Link href="https://joox.se" className="text-white hover:underline ml-1 mr-2" target="_blank">Studio Joox AB</Link>
        </div>
        <Link href="https://www.facebook.com/people/Black-Jack/100063480400974/" target="_blank">
          <svg className="h-5 w-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer; 