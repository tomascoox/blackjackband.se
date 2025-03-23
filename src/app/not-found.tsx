'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';

// This component won't use useSearchParams directly
const NotFoundContent = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Sidan hittades inte</h2>
      <p className="mb-8">Den sidan du söker finns inte eller har flyttats.</p>
      <Link href="/" className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300">
        Tillbaka till startsidan
      </Link>
    </div>
  );
};

// This component needs analytics, which uses useSearchParams
const AnalyticsWrapper = () => {
  // Any other components that use useSearchParams would go here
  return null;
};

export default function NotFound() {
  return (
    <>
      <NotFoundContent />
      <Suspense fallback={null}>
        <AnalyticsWrapper />
      </Suspense>
    </>
  );
} 