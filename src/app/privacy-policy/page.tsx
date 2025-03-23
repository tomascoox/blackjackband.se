import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-beige">
      <h1 className="text-4xl font-bold mb-8 text-center">Integritetspolicy för Black Jack</h1>
      
      <div className="prose prose-lg mx-auto">
        <p className="text-lg mb-4">Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>
        
        <h3>1. Introduktion</h3>
        <p>
          Välkommen till Black Jacks webbplats. Vi respekterar din integritet och är engagerade i att skydda 
          dina personuppgifter. Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar information 
          när du besöker vår webbplats.
        </p>
        
        <h3>2. Information vi samlar in</h3>
        <p>
          <strong>Information som du ger oss:</strong> Vi samlar inte aktivt in personuppgifter från besökare på vår webbplats.
        </p>
        <p>
          <strong>Automatiskt insamlad information:</strong> När du besöker vår webbplats kan vi automatiskt samla in viss information 
          om din enhet, inklusive information om din webbläsare, IP-adress, tidszon och cookies som är installerade på din enhet.
        </p>
        
        <h3>3. Facebook-integration</h3>
        <p>
          Vår webbplats visar inlägg från vår Facebook-sida. Dessa inlägg hämtas direkt från Facebook via deras API. 
          Vi följer Facebooks datapolicy och villkor för utvecklare.
        </p>
        <p>
          <strong>Viktig information om Facebook-integration:</strong>
        </p>
        <ul>
          <li>Vi använder Facebook Graph API för att visa offentliga inlägg från vår Facebook-sida.</li>
          <li>Vi samlar inte in personuppgifter om dig från Facebook.</li>
          <li>När du klickar på ett Facebook-inlägg på vår webbplats, kommer du att omdirigeras till Facebook där Facebooks egen integritetspolicy gäller.</li>
          <li>Vi delar inte dina personuppgifter med Facebook genom vår webbplats.</li>
        </ul>
        
        <h3>4. Cookies och spårningsteknologier</h3>
        <p>
          Vi använder cookies och liknande spårningsteknologier för att spåra aktiviteten på vår webbplats och lagra viss information. 
          Dessa används främst för att förbättra användarupplevelsen och webbplatsens funktionalitet.
        </p>
        
        <h3>5. Hur vi använder din information</h3>
        <p>
          Information som samlas in används endast för att:
        </p>
        <ul>
          <li>Förbättra, driva och underhålla vår webbplats</li>
          <li>Förstå och analysera hur du använder vår webbplats</li>
          <li>Utveckla nya produkter, tjänster och funktioner</li>
        </ul>
        
        <h3>6. Delning av information</h3>
        <p>
          Vi säljer inte, handlar inte med, eller överför på annat sätt dina personuppgifter till tredje part.
        </p>
        
        <h3>7. Dina rättigheter</h3>
        <p>
          Om du är bosatt i EU har du följande rättigheter relaterade till dina personuppgifter:
        </p>
        <ul>
          <li>Rätten att bli informerad</li>
          <li>Rätten till åtkomst</li>
          <li>Rätten till rättelse</li>
          <li>Rätten till radering</li>
          <li>Rätten att begränsa behandling</li>
          <li>Rätten till dataportabilitet</li>
          <li>Rätten att göra invändningar</li>
        </ul>
        
        <h3>8. Ändringar av denna integritetspolicy</h3>
        <p>
          Vi kan uppdatera vår integritetspolicy från tid till annan. Vi meddelar dig om väsentliga 
          ändringar genom att placera ett meddelande på vår webbplats.
        </p>
        
        <h3>9. Kontakta oss</h3>
        <p>
          Om du har några frågor om denna integritetspolicy, vänligen kontakta oss via:
        </p>
        <ul>
          <li>E-post: peder.matz@gmail.com</li>
        </ul>
      </div>
    </div>
  );
} 