'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/cn';
import { nav, site } from '@/content/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sayfa değişince mobil menüyü kapat
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-slate-200/70 bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-white/0',
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="relative z-10 flex items-center" aria-label="Fabrika Doktoru anasayfa">
          <Image
            src="/images/logo.png"
            alt="Fabrika Doktoru"
            width={150}
            height={55}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'text-brand-700'
                    : 'text-slate-600 hover:text-brand-700',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-brand-700"
          >
            <Phone className="h-4 w-4 text-accent-400" />
            {site.phone}
          </a>
          <Button href="/bize-ulasin" variant="accent">
            Bize Ulaşın
          </Button>
        </div>

        {/* Mobil menü butonu */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 rounded-lg p-2 text-brand-700 lg:hidden"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobil menü paneli */}
      <div
        className={cn(
          'overflow-hidden border-t border-slate-100 bg-white lg:hidden',
          'transition-[max-height,opacity] duration-300 ease-out',
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 px-4 text-sm font-semibold text-brand-700"
            >
              <Phone className="h-4 w-4 text-accent-400" />
              {site.phone}
            </a>
            <Button href="/bize-ulasin" variant="accent" className="w-full">
              Bize Ulaşın
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
