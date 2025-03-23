import React from 'react';
import Link from 'next/link';

export default function DataDeletion() {
  const headingStyle = {
    fontFamily: "Arial, Helvetica, sans-serif !important",
    fontWeight: "bold !important"
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-beige">
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
        <h1 className="mb-10 text-center text-3xl" style={headingStyle}>Databorttagning</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="mb-8" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            I enlighet med Facebooks krav och dataskyddslagstiftningen (GDPR) erbjuder vi möjligheten att begära radering av eventuella personuppgifter vi kan ha lagrat om dig.
          </p>
          
          <h2 className="text-xl mb-4 mt-8" style={headingStyle}>Hur du begär radering av dina uppgifter</h2>
          
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            För att begära radering av dina personuppgifter, vänligen skicka ett e-postmeddelande till:{' '}
            <a href="mailto:peder.matz@gmail.com" className="text-blue-600 hover:underline" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
              peder.matz@gmail.com
            </a>
          </p>
          
          <p className="mt-4" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>I din begäran, vänligen inkludera:</p>
          <ul className="list-disc ml-6 mt-2">
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Ditt fullständiga namn</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Din e-postadress</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Specifik information om vilken typ av data du vill ska raderas</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Eventuell annan information som kan hjälpa oss att identifiera dig i våra system</li>
          </ul>
          
          <p className="mt-6" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Vi förbinder oss att behandla alla begäranden om databorttagning så snabbt som möjligt och senast inom 30 dagar från mottagandet av en verifierad begäran.
          </p>
          
          <h2 className="text-xl mb-4 mt-8" style={headingStyle}>Vår databehandling</h2>
          
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Blackjack samlar in minimalt med personuppgifter. De uppgifter vi kan behandla inkluderar:
          </p>
          
          <ul className="list-disc ml-6 mt-2">
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Information från webbläsarcookies (för att förbättra användarupplevelsen)</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>IP-adresser och grundläggande analytisk information (för webbplatsens funktion)</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Kontaktinformation som du frivilligt tillhandahåller (t.ex. via kontaktformulär)</li>
          </ul>
          
          <p className="mt-6" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            För mer detaljerad information om vår behandling av personuppgifter, se vår{' '}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
              fullständiga integritetspolicy
            </Link>.
          </p>
          
          <div className="mt-10 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg mb-3" style={headingStyle}>Kontaktinformation för databorttagning</h3>
            <p className="mt-2" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>E-post: <a href="mailto:peder.matz@gmail.com" className="text-blue-600 hover:underline" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>peder.matz@gmail.com</a></p>
            <p className="mt-1" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Svårstid: Vi strävar efter att svara inom 30 dagar</p>
          </div>
        </div>
      </div>
    </div>
  );
} 