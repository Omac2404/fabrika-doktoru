import type { Metadata } from 'next';
import { Handshake, Target, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { referanslar } from '@/content/site';

export const metadata: Metadata = {
  title: 'Referanslar',
  description: referanslar.lead,
};

const values = [
  { Icon: ShieldCheck, label: 'Güven', desc: 'Şeffaf ve dürüst iş birliğiyle uzun vadeli ortaklıklar kurarız.' },
  { Icon: Handshake, label: 'İşbirliği', desc: 'Ekiplerinizle birlikte, sahada uygulayarak ilerleriz.' },
  { Icon: Target, label: 'Sonuç Odaklılık', desc: 'Ölçülebilir, kalıcı iyileştirmelerle değer üretiriz.' },
];

export default function ReferanslarPage() {
  return (
    <>
      <PageHero
        titleTop={referanslar.titleTop}
        titleBottom={referanslar.titleBottom}
        lead={referanslar.lead}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="font-display mt-6 text-xl font-bold text-brand-900">
                  {label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-10 text-center sm:p-14">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Bir sonraki başarı hikâyesi sizinki olsun
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-100">
              Fabrika Doktoru ile yola çıkan işletmelerin arasına katılın.
              İhtiyaçlarınızı konuşmak için bizimle iletişime geçin.
            </p>
            <Button href="/bize-ulasin" variant="accent" size="lg" className="mt-8">
              Bize Ulaşın
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
