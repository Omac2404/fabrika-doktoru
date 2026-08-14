'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/cn';

type Item = { title: string; description: string };

/**
 * Hizmet listesi akordeonu.
 * Numaralı, hairline ayraçlı satırlar — teknik föy hissi. Açık satır
 * solundaki turuncu ölçü çubuğuyla işaretlenir.
 * İçerik her zaman DOM'da bulunur (SEO dostu), yalnızca yüksekliği
 * 0fr→1fr grid geçişiyle açılır.
 */
export function ServiceAccordion({
  items,
  defaultOpen = 0,
}: {
  items: readonly Item[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="mx-auto max-w-4xl border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className={cn(
              'relative transition-colors duration-300',
              i !== 0 && 'border-t border-line',
              isOpen && 'bg-paper',
            )}
          >
            {/* Açık satırın sol kenar işareti */}
            <span
              className={cn(
                'absolute inset-y-0 left-0 w-0.5 origin-top bg-accent-400 transition-transform duration-300',
                isOpen ? 'scale-y-100' : 'scale-y-0',
              )}
            />

            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-center gap-5 px-5 py-6 text-left sm:gap-7 sm:px-8"
              >
                <span
                  className={cn(
                    'font-mono shrink-0 text-xs transition-colors tabular',
                    isOpen
                      ? 'text-accent-500'
                      : 'text-brand-300 group-hover:text-accent-500',
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span
                  className={cn(
                    'font-display flex-1 text-base font-bold leading-snug transition-colors sm:text-lg',
                    isOpen
                      ? 'text-brand-900'
                      : 'text-brand-800 group-hover:text-brand-600',
                  )}
                >
                  {item.title}
                </span>

                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-all duration-300',
                    isOpen
                      ? 'rotate-45 border-accent-400 bg-accent-400 text-white'
                      : 'border-line text-brand-500 group-hover:border-brand-300',
                  )}
                >
                  <Plus className="h-4 w-4" strokeWidth={2} />
                </span>
              </button>
            </h3>

            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-7 pl-[3.25rem] pr-5 text-sm leading-relaxed text-slate-600 sm:pl-[4.5rem] sm:pr-16">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
