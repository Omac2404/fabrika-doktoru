import type { Metadata } from 'next';
import Image from 'next/image';
import { Factory, Globe2, Wrench, Lightbulb, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Brackets } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { ekibimiz, home } from '@/content/site';

export const metadata: Metadata = {
  title: 'Ekibimiz',
  description: ekibimiz.lead,
};

const strengths = [
  {
    Icon: Factory,
    label: 'Saha Tecrübesi',
    desc: 'Üretim alanı yönetimi ve yalın araçlarda uygulayarak öğrenmiş kadro.',
  },
  {
    Icon: Wrench,
    label: 'Geniş Uzmanlık',
    desc: 'Destek süreçleri, strateji yayılımı, insan kaynağı ve yetenek yönetimi.',
  },
  {
    Icon: Lightbulb,
    label: 'AR-GE & Belgelendirme',
    desc: 'Teknik belgelendirmeden AR-GE merkezi kurulumuna kadar deneyim.',
  },
  {
    Icon: Globe2,
    label: 'Global Know-How',
    desc: 'Uzakdoğu, Avrupa ve Türkiye otomotiv devlerinin bilgi birikimi.',
  },
];

export default function EkibimizPage() {
  return (
    <>
      <PageHero
        eyebrow="Ekibimiz"
        titleTop={ekibimiz.titleTop}
        titleBottom={ekibimiz.titleBottom}
        lead={ekibimiz.lead}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/gorsel-101.jpg"
                  alt="Fabrika Doktoru ekibi sahada"
                  width={960}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 40rem"
                  className="h-full w-full object-cover"
                />
              </div>
              <Brackets className="-inset-3" />
            </Reveal>

            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-slate-700">
                {home.team.description}
              </p>
              <div className="tick-rule my-8 max-w-[8rem] text-brand-600" />
              <p className="text-lg leading-relaxed text-slate-700">
                {home.team.description2}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative bg-paper py-24 sm:py-32">
        <div className="blueprint-light absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Güçlü Yanlarımız"
              title="Uygulayarak Öğrenmiş, Uygulatarak Öğreten Bir Ekip"
            />
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ Icon, label, desc }, i) => (
              <Reveal key={label} delay={i * 70}>
                <div className="h-full bg-white p-8">
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-brand-500" strokeWidth={1.5} />
                    <span className="font-mono text-[0.625rem] text-brand-300 tabular">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display mt-8 text-base font-bold text-brand-900">
                    {label}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-16 text-center">
            <Button href="/bize-ulasin" variant="accent" size="lg">
              Bizimle Çalışın
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
