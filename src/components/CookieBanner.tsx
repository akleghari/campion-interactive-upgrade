import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
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
