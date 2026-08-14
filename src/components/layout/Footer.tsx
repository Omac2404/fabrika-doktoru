import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { nav, site } from '@/content/site';

const year = 2026;

/** Mono, harf aralıklı sütun başlığı — teknik etiket dili. */
function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.22em] text-accent-400">
      {children}
    </h3>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-200">
      <div className="blueprint absolute inset-0" />

      <Container className="relative">
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marka */}
          <div className="lg:col-span-4">
            <Image
              src="/images/logo.png"
              alt="Fabrika Doktoru"
              width={170}
              height={62}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-brand-300">
              {site.tagline}. Yüksek maliyetli danışmanlık yerine sahada uygulayan
              mentorluk çözümü.
            </p>
            <div className="tick-rule mt-8 max-w-[10rem] text-white" />
          </div>

          {/* Menü */}
          <div className="lg:col-span-3">
            <ColumnTitle>Menü</ColumnTitle>
            <ul className="mt-6 space-y-3.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-300 transition-colors hover:text-accent-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div className="lg:col-span-2">
            <ColumnTitle>Kurumsal</ColumnTitle>
            <ul className="mt-6 space-y-3.5 text-sm">
              <li>
                <Link
                  href="/k-v-k-k-aydinlatma-metni"
                  className="text-brand-300 transition-colors hover:text-accent-300"
                >
                  K.V.K.K. Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link
                  href="/site-kullanimi-ve-cerezler-politikasi"
                  className="text-brand-300 transition-colors hover:text-accent-300"
                >
                  Site Kullanımı ve Çerezler
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="lg:col-span-3">
            <ColumnTitle>İletişim</ColumnTitle>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 text-brand-300 transition-colors hover:text-accent-300"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  <span className="font-mono tabular">{site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-brand-300 transition-colors hover:text-accent-300"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span className="leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="font-mono text-[0.6875rem] tracking-wide text-brand-400">
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p className="font-mono text-[0.6875rem] tracking-wide text-brand-400">
            {site.domain}
          </p>
        </Container>
      </div>
    </footer>
  );
}
