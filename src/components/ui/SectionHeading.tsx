import { cn } from '@/lib/cn';
import { Eyebrow } from '@/components/ui/Reveal';

/**
 * Bölüm başlığı — mono veri etiketi + editöryel ölçekte ana başlık.
 * Etiketin başındaki ölçü çizgisi tasarım dilinin tekrar eden imzası.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  light = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow light={light} className={cn(align === 'center' && 'justify-center')}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag
        className={cn(
          'font-display text-headline mt-5 font-bold text-balance',
          light ? 'text-white' : 'text-brand-900',
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            'mt-6 text-base leading-relaxed sm:text-lg',
            align === 'center' && 'mx-auto',
            light ? 'text-brand-200' : 'text-slate-600',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
