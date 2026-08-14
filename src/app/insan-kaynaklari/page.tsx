import type { Metadata } from 'next';
import { Mail, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal, Eyebrow } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { insanKaynaklari, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'İnsan Kaynakları',
  description: insanKaynaklari.sections[0].description,
};

export default function InsanKaynaklariPage() {
  return (
    <>
      <PageHero
        eyebrow="İnsan Kaynakları"
        titleTop={insanKaynaklari.titleTop}
        titleBottom={insanKaynaklari.titleBottom}
        lead={insanKaynaklari.lead}
      />

      <section className="py-24 sm:py-32">
        <Container className="max-w-4xl">
          <div className="divide-y divide-line border-y border-line">
            {insanKaynaklari.sections.map((section, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="grid gap-6 py-12 sm:grid-cols-12 sm:gap-10">
                  <span className="font-mono text-xs text-accent-500 sm:col-span-2 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="sm:col-span-10">
                    <h2 className="font-display text-2xl font-bold text-brand-900 sm:text-3xl">
                      {section.title}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-slate-600">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Başvuru */}
          <Reveal delay={120}>
            <div className="relative mt-16 overflow-hidden rounded-xl bg-brand-950 p-10 sm:p-14">
              <div className="blueprint absolute inset-0" />
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-accent-400/15 blur-[90px]" />

              <div className="relative flex w-full flex-col items-start gap-9 lg:flex-row lg:items-end lg:justify-between">
                <div className="min-w-0">
                  <Eyebrow light>{insanKaynaklari.basvuru.title}</Eyebrow>
                  <h2 className="font-display mt-5 text-3xl font-bold text-white">
                    Bize katılmak için ilk adım
                  </h2>
                  <p className="mt-5 max-w-md leading-relaxed text-brand-200">
                    {insanKaynaklari.basvuru.description}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-3">
                    {['CV', 'Kısa ön yazı'].map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3.5 py-2 text-sm text-brand-200"
                      >
                        <FileText className="h-4 w-4 text-accent-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href={`mailto:${site.email}?subject=İş Başvurusu`}
                  variant="accent"
                  size="lg"
                  className="w-full max-w-full justify-center text-sm sm:w-auto sm:text-base"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="truncate">{site.email}</span>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
