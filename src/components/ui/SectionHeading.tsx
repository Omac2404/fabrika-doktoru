import { cn } from '@/lib/cn';

/** Bölüm üst başlığı — küçük etiket + ana başlık + opsiyonel açıklama. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
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
        <span
          className={cn(
            'inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider',
            light ? 'text-accent-300' : 'text-accent-500',
          )}
        >
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl',
          light ? 'text-white' : 'text-brand-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            light ? 'text-brand-100' : 'text-slate-600',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
