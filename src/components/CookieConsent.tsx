"use client";

import { useState, useEffect } from "react";
import { 
  Sheet, 
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { getConsentStatus, setConsentStatus } from "@/lib/cookies";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = getConsentStatus();
    if (!hasConsented) {
      // Show the consent dialog if user hasn't consented
      setOpen(true);
    }
  }, []);

  const acceptAll = () => {
    setConsentStatus("all");
    setOpen(false);
  };

  const acceptNecessary = () => {
    setConsentStatus("necessary");
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="max-w-full sm:max-w-full rounded-t-lg border-t py-3">
        <SheetHeader className="sr-only">
          <SheetTitle>Cookie-inställningar</SheetTitle>
        </SheetHeader>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-8">
              <h3 className="text-lg font-medium mb-1">Cookieinställningar</h3>
              <p className="text-sm text-muted-foreground">
                Vi använder cookies för att förbättra din upplevelse. Läs mer i vår{" "}
                <a href="/privacy-policy" className="text-primary underline">integritetspolicy</a>.
              </p>
            </div>
            
            <SheetFooter className="sm:justify-end flex flex-col sm:flex-row gap-2 md:col-span-4">
              <Button onClick={acceptAll} className="w-full sm:w-auto" size="sm">
                Acceptera alla
              </Button>
              <Button onClick={acceptNecessary} variant="outline" className="w-full sm:w-auto" size="sm">
                Endast nödvändiga
              </Button>
            </SheetFooter>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 