'use client';

import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

type Item = { title: string; description: string };

/**
 * Hizmet listesi akordeonu — her satır eşit yükseklikte başlık,
 * tıklanınca açıklama açılır. Metin uzunluğu farkı görsel düzeni bozmaz.
 * İçerik her zaman DOM'da bulunur (SEO dostu).
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
    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className={cn(
              'border-slate-100',
              i !== 0 && 'border-t',
            )}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={cn(
                  'flex w-full items-center gap-4 px-5 py-5 text-left transition-colors sm:px-7',
                  isOpen ? 'bg-brand-50/60' : 'hover:bg-slate-50',
                )}
              >
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors',
                    isOpen
                      ? 'bg-accent-400 text-white'
                      : 'bg-accent-50 text-accent-500',
                  )}
                >
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-display flex-1 text-base font-bold text-brand-900 sm:text-lg">
                  {item.title}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-brand-400 transition-transform duration-300',
                    isOpen && 'rotate-180 text-accent-500',
                  )}
                />
              </button>
            </h3>

            {/* grid-rows 0fr→1fr ile yükseklik bilmeden yumuşak açılım */}
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pl-[4.25rem] pr-5 text-sm leading-relaxed text-slate-600 sm:pl-[4.75rem] sm:pr-7">
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
