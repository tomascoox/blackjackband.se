"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getConsentStatus, setConsentStatus } from "@/lib/cookies";

export default function CookieSettings() {
  const [consentType, setConsentType] = useState<'all' | 'necessary' | null>(null);

  useEffect(() => {
    const currentConsent = getConsentStatus();
    setConsentType(currentConsent);
  }, []);

  const updateConsent = (type: 'all' | 'necessary') => {
    setConsentStatus(type);
    setConsentType(type);
  };

  if (!consentType) {
    return null; // Don't show anything until we have consent status
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-8 mb-8">
      <h3 className="text-xl mb-4 font-bold">Hantera cookieinställningar</h3>
      
      <p className="mb-4">
        Din nuvarande inställning: <strong>{consentType === 'all' ? 'Alla cookies' : 'Endast nödvändiga cookies'}</strong>
      </p>
      
      <div className="flex flex-wrap gap-3">
        <Button 
          onClick={() => updateConsent('all')}
          variant={consentType === 'all' ? 'default' : 'outline'}
          className="w-full sm:w-auto"
        >
          Acceptera alla cookies
        </Button>
        
        <Button 
          onClick={() => updateConsent('necessary')}
          variant={consentType === 'necessary' ? 'default' : 'outline'}
          className="w-full sm:w-auto"
        >
          Endast nödvändiga cookies
        </Button>
      </div>
      
      <p className="mt-4 text-sm text-muted-foreground">
        Du kan när som helst ändra dina inställningar genom att besöka denna sida.
      </p>
    </div>
  );
} 