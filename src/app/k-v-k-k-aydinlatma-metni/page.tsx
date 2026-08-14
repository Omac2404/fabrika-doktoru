import type { Metadata } from 'next';
import { LegalContent } from '@/components/LegalContent';
import { kvkk } from '@/content/site';

export const metadata: Metadata = {
  title: 'K.V.K.K. Aydınlatma Metni',
  description:
    '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Fabrika Doktoru aydınlatma metni.',
};

export default function KvkkPage() {
  return <LegalContent title={kvkk.title} sections={kvkk.sections} />;
}
