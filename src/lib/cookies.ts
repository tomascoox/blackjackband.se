// Cookie consent types
export type ConsentType = 'all' | 'necessary' | null;

// Set cookie with expiration date
export const setCookie = (name: string, value: string, days: number): void => {
  if (typeof document === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

// Get cookie value
export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

// Check if user has consented to cookies
export const getConsentStatus = (): ConsentType => {
  const consent = getCookie('cookieConsent');
  if (consent === 'all' || consent === 'necessary') {
    return consent as ConsentType;
  }
  return null;
};

// Set cookie consent status
export const setConsentStatus = (status: 'all' | 'necessary'): void => {
  // Store consent for 6 months (180 days)
  setCookie('cookieConsent', status, 180);
  
  // If user only consents to necessary cookies, disable analytics
  if (status === 'necessary' && typeof window !== 'undefined') {
    // Disable Google Analytics if present
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }
  }
  
  // If user consents to all cookies, enable analytics
  if (status === 'all' && typeof window !== 'undefined') {
    // Enable Google Analytics if present
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      });
    }
  }
};

// Check if a specific cookie type is allowed
export const isCookieAllowed = (type: 'analytics' | 'functional' | 'necessary'): boolean => {
  const consent = getConsentStatus();
  
  // Necessary cookies are always allowed
  if (type === 'necessary') return true;
  
  // If user consented to all cookies, all types are allowed
  if (consent === 'all') return true;
  
  // If user only consented to necessary cookies, only necessary cookies are allowed
  return false;
};

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, config: Record<string, string>) => void;
  }
} 