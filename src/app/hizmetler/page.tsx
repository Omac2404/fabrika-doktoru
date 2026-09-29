import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Roadmap } from '@/components/sections/Roadmap';
import { RandevuButton } from '@/components/randevu/Randevu';
import { hizmetler } from '@/content/site';

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Adım adım firmanızın Üretim ve Yönetim Sistemini inşa edin. 20 yılı aşkın üretim tecrübesiyle Fabrika Doktoru = Mentorunuz yanınızda.',
};

/*
 * Kapsamlı Görüntüleme (01) ve Check-Up (02) blokları siteden kaldırıldı:
 * başlıklar rakiplerce kopyalanıyordu. İçerikleri src/content/site.ts
 * içinde duruyor (hizmetler.kapsamliGoruntuleme / hizmetler.checkUp);
 * müşteri ziyaretinde şifreli bir sayfada gösterilmek üzere saklanıyor.
 * Sayfaya hiç basılmadıkları için kaynak koddan da okunamazlar.
 */
export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        titleTop={hizmetler.hero.title}
        lead={hizmetler.hero.lead}
      >
        <RandevuButton size="lg">Randevunuzu Oluşturun</RandevuButton>
      </PageHero>

      <Roadmap />

      <CTASection />
    </>
  );
}
