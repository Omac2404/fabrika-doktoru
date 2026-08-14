import type { Metadata } from 'next';
import Image from 'next/image';
import { Factory, Globe2, Wrench, Lightbulb } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { ekibimiz, home } from '@/content/site';

export const metadata: Metadata = {
  title: 'Ekibimiz',
  description: ekibimiz.lead,
};

const strengths = [
  { Icon: Factory, label: 'Saha Tecrübesi', desc: 'Üretim alanı yönetimi ve yalın araçlarda uygulayarak öğrenmiş kadro.' },
  { Icon: Wrench, label: 'Geniş Uzmanlık', desc: 'Destek süreçleri, strateji yayılımı, insan kaynağı ve yetenek yönetimi.' },
  { Icon: Lightbulb, label: 'AR-GE & Belgelendirme', desc: 'Teknik belgelendirmeden AR-GE merkezi kurulumuna kadar deneyim.' },
  { Icon: Globe2, label: 'Global Know-How', desc: 'Uzakdoğu, Avrupa ve Türkiye otomotiv devlerinin bilgi birikimi.' },
];

export default function EkibimizPage() {
  return (
    <>
      <PageHero
        titleTop={ekibimiz.titleTop}
        titleBottom={ekibimiz.titleBottom}
        lead={ekibimiz.lead}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/gorsel-101.jpg"
              alt="Fabrika Doktoru ekibi sahada"
              width={960}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-slate-700">
              {home.team.description}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              {home.team.description2}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-brand-900">
                  {label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button href="/bize-ulasin" variant="accent" size="lg">
              Bizimle Çalışın
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
