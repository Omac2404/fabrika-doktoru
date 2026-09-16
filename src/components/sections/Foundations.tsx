import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ekibimiz } from '@/content/site';
import { cn } from '@/lib/cn';

/**
 * "Yapıtaşlarımız" — TPS / WCM / Y6S / MIT / PMI.
 * Hem Ekibimiz hem Anasayfa kullanıyor; içerik tek yerden besleniyor.
 */
export function Foundations({
  className,
  tinted = false,
}: {
  className?: string;
  /** Açık mavi zemin (bölüm ritmini bozmamak için). */
  tinted?: boolean;
}) {
  return (
    <section
      className={cn('relative py-24 sm:py-32', tinted && 'bg-paper', className)}
    >
      {tinted && <div className="blueprint-light absolute inset-0" />}
      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow="Yapıtaşlarımız" title={ekibimiz.foundationsLead} />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ekibimiz.foundations.map((f, i) => (
            <Reveal key={f.code} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-lg border border-line bg-white p-7">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="text-sm font-medium text-brand-400 tabular">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-display mt-6 text-4xl tracking-tight text-brand-600">
                  {f.code}
                </p>
                <p className="mt-3 leading-snug text-slate-600">{f.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
