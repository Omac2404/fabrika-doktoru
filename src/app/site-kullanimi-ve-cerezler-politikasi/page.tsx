import type { Metadata } from 'next';
import { LegalContent } from '@/components/LegalContent';
import { cerezler } from '@/content/site';

export const metadata: Metadata = {
  title: 'Site Kullanımı ve Çerezler Politikası',
  description:
    'Fabrika Doktoru web sitesinde kullanılan çerez türleri ve kullanım amaçları hakkında bilgilendirme.',
};

export default function CerezlerPage() {
  return <LegalContent title={cerezler.title} sections={cerezler.sections} />;
}
