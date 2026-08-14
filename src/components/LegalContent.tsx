import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';

type Section = {
  title: string;
  body: string;
  list?: readonly string[];
};

/**
 * KVKK / Çerezler gibi hukuki metin sayfaları için ortak şablon.
 * Numaralı, hairline ayraçlı okuma düzeni — uzun metinlerde tarama kolaylığı.
 */
export function LegalContent({
  title,
  sections,
}: {
  title: string;
  sections: readonly Section[];
}) {
  return (
    <>
      <PageHero eyebrow="Hukuki Metin" titleTop={title} />

      <section className="py-24 sm:py-32">
        <Container className="max-w-3xl">
          <div className="divide-y divide-line border-y border-line">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 50}>
                <div className="py-10">
                  <h2 className="font-display flex items-baseline gap-4 text-lg font-bold text-brand-900 sm:text-xl">
                    <span className="font-mono shrink-0 text-xs text-accent-500 tabular">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.title}
                  </h2>

                  {section.body && (
                    <p className="mt-4 pl-9 leading-relaxed text-slate-600">
                      {section.body}
                    </p>
                  )}

                  {section.list && (
                    <ul className="mt-5 space-y-2.5 pl-9">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3 text-slate-600">
                          <span className="mt-2.5 h-px w-3 shrink-0 bg-accent-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
