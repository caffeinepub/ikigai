import { SiX, SiInstagram } from 'react-icons/si';
import { Mail, Phone } from 'lucide-react';
import { copy } from '../../data/copy';

export default function SiteFooter() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'ikigai-fitness';

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">IKIGAI</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {copy.footer.about}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Connect</h4>
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com/ikigai._.67"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <SiInstagram className="h-5 w-5" />
                <span className="text-sm">ikigai._.67</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Contact Support</h4>
            <div className="space-y-3 text-sm">
              <p className="font-medium text-foreground">Zoheb Ansari</p>
              <div className="space-y-2">
                <a 
                  href="tel:+919324400398"
                  className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 9324400398</span>
                </a>
                <a 
                  href="mailto:ikigai076@gmail.com"
                  className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>ikigai076@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">{copy.footer.copyright}</p>
          <p className="text-sm text-muted-foreground">
            Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
