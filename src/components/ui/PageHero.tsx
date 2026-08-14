import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

/** İç sayfaların üst başlık bölümü — lacivert degrade arka plan. */
export function PageHero({
  titleTop,
  titleBottom,
  lead,
  className,
}: {
  titleTop: string;
  titleBottom?: string;
  lead?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900',
        className,
      )}
    >
      {/* Dekoratif ışıklar */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <div className="reveal max-w-3xl">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {titleTop}
            {titleBottom && (
              <>
                <br />
                <span className="text-accent-400">{titleBottom}</span>
              </>
            )}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">
              {lead}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
