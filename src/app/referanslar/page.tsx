import type { Metadata } from 'next';
import { Handshake, Target, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { LogoSlider } from '@/components/sections/LogoSlider';
import { Roadmap } from '@/components/sections/Roadmap';
import { RandevuButton } from '@/components/randevu/Randevu';
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
      >
        <RandevuButton size="lg">Randevunuzu Oluşturun</RandevuButton>
      </PageHero>

      {/* Logo şeridi */}
      <LogoSlider />

      {/* Çalışma değerlerimiz */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ Icon, label, desc }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div className="group h-full rounded-lg border border-line bg-white p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-line text-brand-600 transition-colors duration-300 group-hover:border-accent-300 group-hover:text-accent-600">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <span className="text-sm font-medium text-brand-400 tabular">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display mt-9 text-xl text-brand-900">{label}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Hizmetler sayfasındaki yol haritasının aynısı */}
      <Roadmap className="bg-paper" showCta />

      <CTASection />
    </>
  );
}
