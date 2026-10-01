import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Foundations } from '@/components/sections/Foundations';
import { CTASection } from '@/components/sections/CTASection';
import { RandevuButton } from '@/components/randevu/Randevu';
import { ekibimiz } from '@/content/site';

export const metadata: Metadata = {
  title: 'Ekibimiz',
  description: ekibimiz.lead,
};

/*
 * "Mentorlarınız — Fabrika Doktorları" bölümü (üç mentor kartı) siteden
 * kaldırıldı. Kişi bilgileri ve portreler src/content/site.ts içinde
 * (ekibimiz.members) duruyor; sayfa basmadığı için kaynak koda da düşmez.
 * Geri açmak gerekirse kartlar git geçmişinde mevcut.
 */
export default function EkibimizPage() {
  return (
    <>
      <PageHero
        eyebrow="Ekibimiz"
        titleTop={ekibimiz.titleTop}
        titleBottom={ekibimiz.titleBottom}
        lead={ekibimiz.lead}
      >
        <RandevuButton size="lg">Randevunuzu Oluşturun</RandevuButton>
      </PageHero>

      <Foundations />

      <CTASection />
    </>
  );
}
