import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

interface CookieConsent {
  status: 'accepted' | 'declined';
  timestamp: string;
  version: '1.0';
}

const CONSENT_KEY = 'cookie-consent';
const CONSENT_EXPIRY_DAYS = 365;

const getConsent = (): CookieConsent | null => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const consent: CookieConsent = JSON.parse(raw);
    // Check expiry (12 months)
    const consentDate = new Date(consent.timestamp);
    const now = new Date();
    const diffDays = (now.getTime() - consentDate.getTime()) / (1000 * 60 * 60 * 24);
    if (diffDays > CONSENT_EXPIRY_DAYS) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return consent;
  } catch {
    localStorage.removeItem(CONSENT_KEY);
    return null;
  }
};

const setConsent = (status: 'accepted' | 'declined') => {
  const consent: CookieConsent = {
    status,
    timestamp: new Date().toISOString(),
    version: '1.0',
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
};

/** Expose a global function so users can re-open the banner from the privacy policy */
export const resetCookieConsent = () => {
  localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new Event('cookie-consent-reset'));
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) setVisible(true);

    const handleReset = () => setVisible(true);
    window.addEventListener('cookie-consent-reset', handleReset);
    return () => window.removeEventListener('cookie-consent-reset', handleReset);
  }, []);

  const accept = () => {
    setConsent('accepted');
    setVisible(false);
  };

  const decline = () => {
    setConsent('declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-xl p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Cookie className="w-6 h-6 text-primary shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-sm text-muted-foreground font-body flex-1">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <a href="/privacy-policy" className="text-primary hover:underline">Learn more</a>
          </p>
          <div className="flex gap-3 shrink-0">
            <Button variant="outline" size="sm" onClick={decline}>
              Decline
            </Button>
            <Button size="sm" onClick={accept}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
