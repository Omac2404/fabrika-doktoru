import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/*
 * tailwind-merge, tanımadığı `text-*` sınıflarını renk sanıyor. Bu yüzden
 * `cn('text-headline', 'text-brand-900')` çağrısında ikisini aynı gruba
 * koyup yazı boyutunu sessizce siliyordu. @theme içinde tanımladığımız
 * özel boyutları burada açıkça font-size grubuna kaydediyoruz.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['display', 'headline'] }],
    },
  },
});

/** Tailwind sınıflarını çakışmasız birleştirir. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
