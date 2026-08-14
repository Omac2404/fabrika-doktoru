import Link from 'next/link';
import { ArrowUpRight, Home, Wrench, MessageCircle, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

const links = [
  { label: 'Anasayfaya Dönün', href: '/', Icon: Home },
  { label: 'Hizmetlerimizi İnceleyin', href: '/hizmetler', Icon: Wrench },
  { label: 'Bize Ulaşın', href: '/bize-ulasin', Icon: MessageCircle },
  { label: 'Bizi Daha Yakından Tanıyın', href: '/ekibimiz', Icon: Users },
];

/**
 * Her sayfanın altında tekrar eden yönlendirme bandı.
 * Footer'dan (brand-950) daha açık bir lacivertte durur; iki koyu blok
 * üst üste binerken ayrım kaybolmasın diye.
 */
export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900">
      <div className="blueprint absolute inset-0" />
      <div className="tick-rule absolute inset-x-0 top-0 rotate-180 text-white" />

      <Container className="relative py-20">
        <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ label, href, Icon }, i) => (
            <Reveal key={href} delay={i * 60}>
              <Link
                href={href}
                className="group flex h-full flex-col justify-between gap-10 bg-brand-900/70 p-7 transition-colors duration-300 hover:bg-brand-950"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className="h-6 w-6 text-accent-400"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-[0.625rem] text-brand-400 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="flex items-end justify-between gap-3">
                  <span className="font-display text-sm font-semibold leading-snug text-white">
                    {label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-400" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
