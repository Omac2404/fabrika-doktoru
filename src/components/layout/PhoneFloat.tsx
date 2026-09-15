import { Phone } from 'lucide-react';
import { site } from '@/content/site';

/** Sağ altta sabit duran telefon numarası (0850 hattı). */
export function PhoneFloat() {
  return (
    <a
      href={site.phoneHref}
      aria-label={`Bizi arayın: ${site.phone}`}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-accent-400 py-3 pl-4 pr-5 text-brand-950 shadow-xl shadow-black/20 transition-transform hover:scale-105"
    >
      <Phone className="h-5 w-5" />
      <span className="font-mono text-sm font-medium tabular">{site.phone}</span>
    </a>
  );
}
