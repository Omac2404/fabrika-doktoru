import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'light';

/*
 * Tam yuvarlak (pill) form yerine küçük yarıçap: endüstriyel/editöryel
 * dilde daha ciddi ve keskin okunuyor. Hover'da yükselme yok — bunun
 * yerine renk derinleşmesi ve gölge yayılımı; daha az "oyuncak" hissi.
 */
const base =
  'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-md font-display font-semibold tracking-tight transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none';

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-900/15 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-900/25',
  accent:
    'bg-accent-400 text-brand-950 shadow-lg shadow-accent-500/25 hover:bg-accent-300 hover:shadow-xl hover:shadow-accent-500/35',
  outline:
    'border border-line text-brand-700 hover:border-brand-600 hover:bg-brand-50',
  ghost: 'text-brand-700 hover:bg-brand-50',
  light:
    'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10',
};

type Props = {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
  children,
  ...rest
}: Props) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    const external =
      href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
