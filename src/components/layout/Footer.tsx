import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { nav, site } from '@/content/site';

const year = 2026;

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Marka */}
        <div className="lg:col-span-1">
          <Image
            src="/images/logo.png"
            alt="Fabrika Doktoru"
            width={170}
            height={62}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-200">
            {site.tagline}. Yüksek maliyetli danışmanlık yerine sahada uygulayan
            mentorluk çözümü.
          </p>
        </div>

        {/* Menü */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Menü
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-brand-200 transition-colors hover:text-accent-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kurumsal */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Kurumsal
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/k-v-k-k-aydinlatma-metni" className="text-brand-200 transition-colors hover:text-accent-300">
                K.V.K.K. Aydınlatma Metni
              </Link>
            </li>
            <li>
              <Link href="/site-kullanimi-ve-cerezler-politikasi" className="text-brand-200 transition-colors hover:text-accent-300">
                Site Kullanımı ve Çerezler
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            İletişim
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-start gap-3 text-brand-200 hover:text-accent-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-brand-200 hover:text-accent-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-brand-200">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-brand-300 sm:flex-row">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p>{site.domain}</p>
        </Container>
      </div>
    </footer>
  );
}
