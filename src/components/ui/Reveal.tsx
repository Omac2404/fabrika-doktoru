'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

/**
 * Görünür alana girince içeriği ortaya çıkarır (IntersectionObserver).
 * Bir kez tetiklenir, sonra gözlemi bırakır — geri kaydırınca tekrar
 * gizlenmez, bu kurumsal bir sitede yorucu olurdu.
 *
 * JS çalışmazsa layout'taki <noscript> kuralı içeriği görünür kılar,
 * içerik her hâlükârda DOM'da olduğu için SEO etkilenmez.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  /** Kademeli giriş için ms cinsinden gecikme. */
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span';
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  // Union tipli etiketin JSX prop'larını gevşetmek için: tek bir ref
  // tipi div/section/li/span'in tamamını karşılamıyor.
  const Element = Tag as React.ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Observer desteklenmiyorsa içeriği doğrudan göster.
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Element
      ref={ref}
      data-reveal={shown ? 'in' : undefined}
      style={
        delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined
      }
      className={className}
    >
      {children}
    </Element>
  );
}

/**
 * Teknik hizalama köşeleri — fotoğraf ve panellerin çevresine
 * "vizör / kesim işareti" hissi verir. Tasarım dilinin imzası.
 */
export function Brackets({
  className,
  size = 'md',
}: {
  className?: string;
  size?: 'sm' | 'md';
}) {
  const s = size === 'sm' ? 'h-4 w-4' : 'h-7 w-7';
  const corner = cn('absolute', s, 'border-accent-400');
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0', className)}
    >
      <span className={cn(corner, '-left-px -top-px border-l-2 border-t-2')} />
      <span className={cn(corner, '-right-px -top-px border-r-2 border-t-2')} />
      <span className={cn(corner, '-bottom-px -left-px border-b-2 border-l-2')} />
      <span className={cn(corner, '-bottom-px -right-px border-b-2 border-r-2')} />
    </div>
  );
}

/**
 * Monospace bölüm etiketi — ölçü işareti + büyük harf veri etiketi.
 * Teknik çizim dilinin tipografik karşılığı.
 */
export function Eyebrow({
  children,
  light = false,
  className,
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'font-mono inline-flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em]',
        light ? 'text-accent-300' : 'text-accent-500',
        className,
      )}
    >
      <span className="tick-mark" />
      {children}
    </span>
  );
}
