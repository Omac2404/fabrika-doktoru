import type { Metadata } from 'next';
import { Mail, FileText, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
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
        titleTop={insanKaynaklari.titleTop}
        titleBottom={insanKaynaklari.titleBottom}
        lead={insanKaynaklari.lead}
      />

      <section className="py-20 sm:py-24">
        <Container className="max-w-4xl">
          <div className="space-y-10">
            {insanKaynaklari.sections.map((section, i) => (
              <div key={i} className="flex gap-5">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-500">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-900">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-slate-600">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Başvuru kutusu */}
          <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-10 sm:p-12">
            <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h2 className="font-display text-2xl font-bold text-white">
                  {insanKaynaklari.basvuru.title}
                </h2>
                <p className="mt-3 max-w-md text-brand-100">
                  {insanKaynaklari.basvuru.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-200">
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-accent-400" /> CV
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-accent-400" /> Kısa ön yazı
                  </li>
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
        </Container>
      </section>

      <CTASection />
    </>
  );
}
