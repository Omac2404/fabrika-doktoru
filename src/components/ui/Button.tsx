import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none';

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5',
  accent:
    'bg-accent-400 text-white shadow-lg shadow-accent-400/30 hover:bg-accent-500 hover:-translate-y-0.5',
  outline:
    'border border-brand-200 text-brand-700 hover:border-brand-600 hover:bg-brand-50',
  ghost: 'text-brand-700 hover:bg-brand-50',
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
    const external = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (external) {
      return (
        <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
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
