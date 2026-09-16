import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { LogoSlider } from '@/components/sections/LogoSlider';
import { Roadmap } from '@/components/sections/Roadmap';
import { RandevuButton } from '@/components/randevu/Randevu';
import { referanslar } from '@/content/site';

export const metadata: Metadata = {
  title: 'Referanslar',
  description: referanslar.lead,
};

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

      {/* Hizmetler sayfasındaki yol haritasının aynısı */}
      <Roadmap className="bg-paper" showCta />

      <CTASection />
    </>
  );
}
