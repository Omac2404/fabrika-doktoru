import Link from 'next/link';
import { ArrowRight, Home, Wrench, MessageCircle, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const links = [
  { label: 'Anasayfaya Dönün', href: '/', Icon: Home },
  { label: 'Hizmetlerimizi İnceleyin', href: '/hizmetler', Icon: Wrench },
  { label: 'Bize Ulaşın', href: '/bize-ulasin', Icon: MessageCircle },
  { label: 'Bizi Daha Yakından Tanıyın', href: '/ekibimiz', Icon: Users },
];

/** Her sayfanın altında tekrar eden yönlendirme bandı (orijinal sitedeki gibi). */
export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800">
      <Container className="py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ label, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-accent-400/50 hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-white">{label}</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-brand-200 transition-transform group-hover:translate-x-1 group-hover:text-accent-300" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
