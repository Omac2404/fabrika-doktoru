'use client';

import { useCallback, useEffect, useRef } from 'react';
import { X, Phone, Mail, ArrowUpRight, CalendarCheck } from 'lucide-react';
import { buttonClasses, type ButtonVariant } from '@/components/ui/Button';
import { Brackets, Eyebrow } from '@/components/ui/Reveal';
import { randevu, site } from '@/content/site';
import { cn } from '@/lib/cn';

/**
 * Ücretsiz ön değerlendirme penceresi.
 *
 * Sitenin her yerindeki çağrılar tek bir <dialog> açar. Tetikleyiciler
 * birbirinden ve pencereden habersizdir: yalnızca bir pencere olayı
 * yayınlarlar. Böylece sunucu bileşenlerinin içine de rahatça konabilirler.
 *
 * `/#randevu` gibi bir bağlantı pencereyi doğrudan açar — müşteriye
 * link ile iletmek için.
 */

const OPEN_EVENT = 'randevu:open';
const HASH = '#randevu';

export function openRandevu() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/** Görünümü dışarıdan verilen, pencereyi açan bağlantı. */
export function RandevuLink({
  children,
  className,
  onOpen,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  /** Açılmadan hemen önce çalışır (ör. mobil menüyü kapatmak). */
  onOpen?: () => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'>) {
  return (
    <a
      href={HASH}
      aria-haspopup="dialog"
      className={className}
      onClick={(e) => {
        // Yeni sekme / orta tık gibi durumlarda tarayıcıya bırak.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        onOpen?.();
        openRandevu();
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Buton görünümlü tetikleyici. */
export function RandevuButton({
  children = randevu.buttonLabel,
  variant = 'accent',
  size = 'md',
  className,
  onOpen,
  icon = true,
}: {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'md' | 'lg';
  className?: string;
  onOpen?: () => void;
  icon?: boolean;
}) {
  return (
    <RandevuLink onOpen={onOpen} className={buttonClasses(variant, size, className)}>
      {children}
      {icon && (
        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
      )}
    </RandevuLink>
  );
}

export function RandevuDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    const dialog = ref.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    // Modal dialog sayfa kaydırmasını kendisi kilitlemiyor.
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    ref.current?.close();
  }, []);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === HASH) open();
    };
    window.addEventListener(OPEN_EVENT, open);
    window.addEventListener('hashchange', onHash);
    onHash(); // Sayfaya /#randevu ile gelinmişse
    return () => {
      window.removeEventListener(OPEN_EVENT, open);
      window.removeEventListener('hashchange', onHash);
    };
  }, [open]);

  // Esc, kapat butonu veya arka plan — hepsi 'close' olayından geçer.
  const onClose = () => {
    document.documentElement.style.overflow = '';
    if (window.location.hash === HASH) {
      // Adres çubuğunu temizle; aynı bağlantıya tekrar basınca yine açılsın.
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search,
      );
    }
  };

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    'Ücretsiz Ön Değerlendirme Talebi',
  )}`;

  return (
    <dialog
      ref={ref}
      aria-labelledby="randevu-baslik"
      onClose={onClose}
      onClick={(e) => {
        // Yalnızca arka plana (kutunun dışına) tıklanınca kapat.
        if (e.target === e.currentTarget) close();
      }}
      className="randevu m-auto max-h-[calc(100dvh-2rem)] w-[min(100%-2rem,36rem)] overflow-visible bg-transparent p-0 text-left backdrop:bg-brand-950/75 backdrop:backdrop-blur-sm"
    >
      <div className="relative overflow-hidden rounded-xl bg-brand-950 text-white shadow-2xl">
        <div className="blueprint absolute inset-0" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-400/15 blur-[80px]" />

        <button
          type="button"
          onClick={close}
          aria-label="Pencereyi kapat"
          autoFocus
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-brand-200 transition-colors hover:border-white/40 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative max-h-[calc(100dvh-2rem)] overflow-y-auto p-8 sm:p-10">
          <span className="relative mb-8 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-white/15 text-accent-400">
            <CalendarCheck className="h-6 w-6" strokeWidth={1.5} />
            <Brackets size="sm" className="-inset-1.5" />
          </span>

          <Eyebrow light>Ücretsiz Ön Değerlendirme</Eyebrow>
          <h2
            id="randevu-baslik"
            className="font-display mt-5 text-3xl leading-tight text-balance sm:text-4xl"
          >
            {randevu.slogan}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-200">{randevu.cta}</p>

          {randevu.url ? (
            <a
              href={randevu.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses('accent', 'lg', 'mt-9 w-full')}
            >
              Randevunuzu Oluşturun
              <ArrowUpRight className="h-5 w-5" />
            </a>
          ) : null}

          {/*
            Anket ve randevu bağlantısı gelene kadar talep telefon/e-posta ile
            alınıyor. Bağlantı eklendiğinde bu bölüm ikincil seçenek olur.
          */}
          <div className={cn(randevu.url ? 'mt-8' : 'mt-9')}>
            <p className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-brand-400">
              {randevu.url ? 'veya doğrudan ulaşın' : 'Randevu için bize ulaşın'}
            </p>
            <div className="mt-4 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 bg-brand-950/80 p-5 transition-colors hover:bg-brand-900"
              >
                <Phone className="h-5 w-5 shrink-0 text-accent-400" strokeWidth={1.5} />
                <span className="min-w-0">
                  <span className="block text-xs text-brand-400">Telefon</span>
                  <span className="font-mono mt-0.5 block truncate text-sm text-white tabular">
                    {site.phone}
                  </span>
                </span>
              </a>
              <a
                href={mailto}
                className="flex items-center gap-4 bg-brand-950/80 p-5 transition-colors hover:bg-brand-900"
              >
                <Mail className="h-5 w-5 shrink-0 text-accent-400" strokeWidth={1.5} />
                <span className="min-w-0">
                  <span className="block text-xs text-brand-400">E-posta</span>
                  <span className="mt-0.5 block truncate text-sm text-white">
                    {site.email}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
