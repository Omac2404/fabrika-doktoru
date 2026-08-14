import { Container } from '@/components/ui/Container';
import { Reveal, Eyebrow } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

/**
 * İç sayfaların üst bölümü — derin lacivert zemin, mavikopya ızgarası.
 * Üst boşluk sabit (fixed) header'ın altında kalmayacak şekilde ayarlı.
 */
export function PageHero({
  eyebrow,
  titleTop,
  titleBottom,
  lead,
  className,
}: {
  eyebrow?: string;
  titleTop: string;
  titleBottom?: string;
  lead?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-brand-950 pt-32 pb-20 sm:pt-40 sm:pb-28',
        className,
      )}
    >
      {/* Zemin: lacivert derinlik + mavikopya ızgarası */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900" />
      <div className="blueprint absolute inset-0" />
      {/* Sağ üstten sıcak ışık — turuncuyu zeminde hissettirir */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent-400/10 blur-[100px]" />

      <Container className="relative">
        <Reveal className="max-w-4xl">
          {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
          <h1
            className={cn(
              'font-display text-display font-bold text-white text-balance',
              eyebrow ? 'mt-6' : 'mt-0',
            )}
          >
            {titleTop}
            {titleBottom && (
              <>
                <br />
                <span className="text-accent-400">{titleBottom}</span>
              </>
            )}
          </h1>
          {lead && (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-200">
              {lead}
            </p>
          )}
        </Reveal>
      </Container>

      {/* Alt kenarda ölçüm skalası */}
      <div className="tick-rule absolute inset-x-0 bottom-0 text-white" />
    </section>
  );
}
