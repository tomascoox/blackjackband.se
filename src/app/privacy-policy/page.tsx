import React from 'react';
import CookieSettings from '@/components/CookieSettings';

export default function PrivacyPolicy() {
  const headingStyle = {
    fontFamily: "Arial, Helvetica, sans-serif !important",
    fontWeight: "bold !important"
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-beige">
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
        <h1 className="mb-10 text-center text-3xl" style={headingStyle}>Integritetspolicy för Black Jack</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="mb-6" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>
          
          <CookieSettings />
          
          <h3 className="text-xl mb-4 mt-8" style={headingStyle}>1. Introduktion</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Välkommen till Black Jacks webbplats. Vi respekterar din integritet och är engagerade i att skydda 
            dina personuppgifter. Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar information 
            när du besöker vår webbplats.
          </p>
          
          <h3 className="text-xl mb-4 mt-8" style={headingStyle}>2. Information vi samlar in</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            <strong>Information som du ger oss:</strong> Vi samlar inte aktivt in personuppgifter från besökare på vår webbplats.
          </p>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            <strong>Automatiskt insamlad information:</strong> När du besöker vår webbplats kan vi automatiskt samla in viss information 
            om din enhet, inklusive information om din webbläsare, IP-adress, tidszon och cookies som är installerade på din enhet.
          </p>
          
          <h3 className="text-xl mb-4 mt-8" style={headingStyle}>3. Facebook-integration</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Vår webbplats visar inlägg från vår Facebook-sida. Dessa inlägg hämtas direkt från Facebook via deras API. 
            Vi följer Facebooks datapolicy och villkor för utvecklare.
          </p>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            <strong>Viktig information om Facebook-integration:</strong>
          </p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Vi använder Facebook Graph API för att visa offentliga inlägg från vår Facebook-sida.</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Vi samlar inte in personuppgifter om dig från Facebook.</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>När du klickar på ett Facebook-inlägg på vår webbplats, kommer du att omdirigeras till Facebook där Facebooks egen integritetspolicy gäller.</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Vi delar inte dina personuppgifter med Facebook genom vår webbplats.</li>
          </ul>
          
          <h3 className="text-xl mb-4 mt-8" style={headingStyle}>4. Cookies och spårningsteknologier</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Vi använder cookies och liknande spårningsteknologier för att spåra aktiviteten på vår webbplats och lagra viss information. 
            Dessa används främst för att förbättra användarupplevelsen och webbplatsens funktionalitet.
          </p>
          
          <h3 className="text-xl mb-4 mt-8" style={headingStyle}>5. Hur vi använder din information</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Information som samlas in används endast för att:
          </p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Förbättra, driva och underhålla vår webbplats</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Förstå och analysera hur du använder vår webbplats</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Utveckla nya produkter, tjänster och funktioner</li>
          </ul>
          
          <h3 className="text-xl mb-4 mt-8" style={headingStyle}>6. Delning av information</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Vi säljer inte, handlar inte med, eller överför på annat sätt dina personuppgifter till tredje part.
          </p>
          
          <h3 id="data-deletion" className="text-xl mb-4 mt-8" style={headingStyle}>7. Databorttagning</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Vi respekterar din rätt att få dina personuppgifter raderade. Eftersom vi samlar in minimalt med data, 
            finns det vanligtvis begränsad information att radera.
          </p>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            <strong>Hur du begär radering av dina uppgifter:</strong>
          </p>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Du kan begära radering av all din personliga information genom att:
          </p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Skicka ett e-postmeddelande till <a href="mailto:peder.matz@gmail.com" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>peder.matz@gmail.com</a> med ämnesraden &quot;Begäran om databorttagning&quot;</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>I e-postmeddelandet, vänligen inkludera information som hjälper oss att identifiera dig, såsom ditt namn och vilket sammanhang du har interagerat med vår webbplats</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Vi strävar efter att svara på alla legitima förfrågningar inom 30 dagar</li>
          </ul>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            När vi tar emot din begäran kommer vi att:
          </p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Verifiera din identitet</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Leta efter eventuella personuppgifter vi kan ha lagrat</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Radera dessa uppgifter från våra system</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Meddela dig när processen är slutförd</li>
          </ul>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Observera att vissa uppgifter kan behållas av juridiska skäl eller för att förhindra bedrägerier.
          </p>
          
          <h3 className="text-xl mb-4 mt-8" style={headingStyle}>8. Dina rättigheter</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Om du är bosatt i EU har du följande rättigheter relaterade till dina personuppgifter:
          </p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Rätten att bli informerad</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Rätten till åtkomst</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Rätten till rättelse</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Rätten till radering</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Rätten att begränsa behandling</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Rätten till dataportabilitet</li>
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>Rätten att göra invändningar</li>
          </ul>
          
          <h3 className="text-xl mb-4 mt-8" style={headingStyle}>9. Ändringar av denna integritetspolicy</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Vi kan uppdatera vår integritetspolicy från tid till annan. Vi meddelar dig om väsentliga 
            ändringar genom att placera ett meddelande på vår webbplats.
          </p>
          
          <h3 className="text-xl mb-4 mt-8" style={headingStyle}>10. Kontakta oss</h3>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>
            Om du har några frågor om denna integritetspolicy, vänligen kontakta oss via:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>E-post: <a href="mailto:peder.matz@gmail.com" style={{ fontFamily: "Arial, Helvetica, sans-serif !important" }}>peder.matz@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 