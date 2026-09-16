import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { RandevuButton } from '@/components/randevu/Randevu';
import { hizmetler } from '@/content/site';
import { cn } from '@/lib/cn';

/**
 * "İlk adımı atın" yol haritası — iki etap, kesintisiz numaralanan altı adım.
 * Hem Hizmetler hem Anasayfa hem de Referanslar sayfasında kullanılıyor;
 * içerik tek yerden (hizmetler.roadmap) besleniyor.
 */
export function Roadmap({
  className,
  showCta = false,
}: {
  className?: string;
  /** Anasayfa gibi kapanışı olmayan yerlerde randevu butonu göster. */
  showCta?: boolean;
}) {
  return (
    <section className={cn('py-24 sm:py-32', className)}>
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {hizmetler.roadmap.map((phase, p) => (
            <Reveal key={phase.title} delay={p * 120}>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.1em] text-accent-600">
                  Etap {p + 1}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h2 className="font-display mt-5 text-3xl text-brand-900 sm:text-4xl">
                {phase.title}
              </h2>

              <ol className="relative mt-10">
                {/* Adımları bağlayan dikey hat */}
                <span className="absolute bottom-6 left-6 top-6 w-px bg-line" aria-hidden="true" />
                {phase.steps.map((step, i) => {
                  // Önceki etapların adım sayısı kadar ileriden başla.
                  const n =
                    hizmetler.roadmap
                      .slice(0, p)
                      .reduce((sum, ph) => sum + ph.steps.length, 0) +
                    i +
                    1;
                  return (
                    <li key={step} className="relative flex gap-6 pb-8 last:pb-0">
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line bg-white text-base font-semibold text-accent-600 tabular">
                        {String(n).padStart(2, '0')}
                      </span>
                      <p className="pt-2.5 text-lg leading-relaxed text-brand-900">{step}</p>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal delay={200} className="mt-16 text-center">
            <RandevuButton size="lg">Randevunuzu Oluşturun</RandevuButton>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
