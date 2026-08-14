import type { Metadata } from 'next';
import { Handshake, Target, ShieldCheck, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal, Eyebrow } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { referanslar } from '@/content/site';

export const metadata: Metadata = {
  title: 'Referanslar',
  description: referanslar.lead,
};

const values = [
  {
    Icon: ShieldCheck,
    label: 'Güven',
    desc: 'Şeffaf ve dürüst iş birliğiyle uzun vadeli ortaklıklar kurarız.',
  },
  {
    Icon: Handshake,
    label: 'İşbirliği',
    desc: 'Ekiplerinizle birlikte, sahada uygulayarak ilerleriz.',
  },
  {
    Icon: Target,
    label: 'Sonuç Odaklılık',
    desc: 'Ölçülebilir, kalıcı iyileştirmelerle değer üretiriz.',
  },
];

export default function ReferanslarPage() {
  return (
    <>
      <PageHero
        eyebrow="Referanslar"
        titleTop={referanslar.titleTop}
        titleBottom={referanslar.titleBottom}
        lead={referanslar.lead}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {values.map(({ Icon, label, desc }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div className="group h-full bg-white p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-line text-brand-600 transition-colors duration-300 group-hover:border-accent-300 group-hover:text-accent-500">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-[0.625rem] text-brand-300 tabular">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display mt-9 text-xl font-bold text-brand-900">
                    {label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Kapanış çağrısı */}
          <Reveal delay={100}>
            <div className="relative mt-20 overflow-hidden rounded-xl bg-brand-950 p-12 text-center sm:p-16">
              <div className="blueprint absolute inset-0" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-400/15 blur-[90px]" />

              <div className="relative">
                <Eyebrow light className="justify-center">
                  Sıradaki Siz Olun
                </Eyebrow>
                <h2 className="font-display text-headline mx-auto mt-6 max-w-2xl font-bold text-white text-balance">
                  Bir sonraki başarı hikâyesi sizinki olsun
                </h2>
                <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-brand-200">
                  Fabrika Doktoru ile yola çıkan işletmelerin arasına katılın.
                  İhtiyaçlarınızı konuşmak için bizimle iletişime geçin.
                </p>
                <Button
                  href="/bize-ulasin"
                  variant="accent"
                  size="lg"
                  className="mt-10"
                >
                  Bize Ulaşın
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
