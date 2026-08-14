import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/sections/CTASection';

type Section = {
  title: string;
  body: string;
  list?: readonly string[];
};

/** KVKK / Çerezler gibi hukuki metin sayfaları için ortak şablon. */
export function LegalContent({
  title,
  sections,
}: {
  title: string;
  sections: readonly Section[];
}) {
  return (
    <>
      <PageHero titleTop={title} />
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold text-brand-900">
                  {section.title}
                </h2>
                {section.body && (
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {section.body}
                  </p>
                )}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
