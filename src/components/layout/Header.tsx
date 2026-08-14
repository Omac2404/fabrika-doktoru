'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { nav, site } from '@/content/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

/**
 * Sabit (fixed) üst bar. Sayfaların tamamı koyu bir hero ile başladığı
 * için üstteyken şeffaf ve açık renkli; kaydırınca beyaza katılaşır.
 * Mobil panel açıkken bar da koyulaşır, ikisi tek yüzey gibi okunur.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sayfa değişince mobil menüyü kapat
  useEffect(() => setOpen(false), [pathname]);

  // Menü açıkken arka planın kaymasını engelle
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500',
        solid
          ? 'border-b border-line bg-white/85 shadow-sm backdrop-blur-xl'
          : 'border-b border-transparent',
        open && 'bg-brand-950',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="relative z-10 flex items-center"
          aria-label="Fabrika Doktoru anasayfa"
        >
          <Image
            src="/images/logo.png"
            alt="Fabrika Doktoru"
            width={150}
            height={55}
            priority
            className={cn(
              'h-10 w-auto transition-[filter] duration-500',
              !solid && 'brightness-0 invert',
            )}
          />
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'group relative px-4 py-2 text-sm font-medium transition-colors',
                  solid
                    ? active
                      ? 'text-brand-800'
                      : 'text-slate-600 hover:text-brand-800'
                    : active
                      ? 'text-white'
                      : 'text-brand-200 hover:text-white',
                )}
              >
                {item.label}
                {/* Aktif sayfa göstergesi — turuncu ölçü çizgisi */}
                <span
                  className={cn(
                    'absolute inset-x-4 -bottom-0.5 h-px origin-left bg-accent-400 transition-transform duration-300',
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className={cn(
              'font-mono text-xs tracking-tight transition-colors tabular',
              solid
                ? 'text-brand-700 hover:text-accent-500'
                : 'text-brand-200 hover:text-accent-300',
            )}
          >
            <Phone className="mr-2 inline h-3.5 w-3.5 text-accent-400" />
            {site.phone}
          </a>
          <Button href="/bize-ulasin" variant="accent">
            Bize Ulaşın
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </div>

        {/* Mobil menü butonu */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'relative z-10 -mr-2 rounded-md p-2 transition-colors lg:hidden',
            solid ? 'text-brand-800' : 'text-white',
          )}
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobil menü paneli */}
      <div
        className={cn(
          'overflow-hidden bg-brand-950 lg:hidden',
          'transition-[max-height,opacity] duration-500 ease-out',
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <Container className="flex flex-col pb-8 pt-2">
          {nav.map((item, i) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-baseline gap-4 border-b border-white/10 py-4 text-lg font-medium transition-colors',
                  active ? 'text-accent-400' : 'text-white hover:text-accent-300',
                )}
              >
                <span className="font-mono text-[0.625rem] text-brand-400 tabular">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </Link>
            );
          })}

          <div className="mt-7 flex flex-col gap-4">
            <a
              href={site.phoneHref}
              className="font-mono text-sm text-brand-200 tabular"
            >
              <Phone className="mr-2 inline h-4 w-4 text-accent-400" />
              {site.phone}
            </a>
            <Button href="/bize-ulasin" variant="accent" className="w-full">
              Bize Ulaşın
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
