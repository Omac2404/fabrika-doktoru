import type { Metadata } from 'next';
import {
  ScanSearch,
  Stethoscope,
  MonitorSmartphone,
  GraduationCap,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHero } from '@/components/ui/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { ServiceAccordion } from '@/components/ServiceAccordion';
import { hizmetler } from '@/content/site';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Kapsamlı Görüntüleme, Check-Up, Yazılım ve Eğitim hizmetleri ile üretim süreçlerinizi sahada uygulayarak geliştirin.',
};

type Item = { title: string; description: string };

function ServiceBlock({
  id,
  eyebrow,
  title,
  lead,
  items,
  Icon,
  tinted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  items: readonly Item[];
  Icon: React.ElementType;
  tinted?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-16 sm:py-20', tinted && 'bg-slate-50')}
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/20">
            <Icon className="h-8 w-8" />
          </span>
          <SectionHeading
            align="center"
            eyebrow={eyebrow}
            title={title}
            description={lead}
            className="mt-6"
          />
        </div>

        <div className="mt-12">
          <ServiceAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        titleTop={hizmetler.intro.title}
        lead={hizmetler.intro.lead}
      />

      {/* Giriş metni */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            {hizmetler.intro.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </div>

          {/* Hızlı gezinme */}
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
            {[
              { label: 'Kapsamlı Görüntüleme', href: '#kapsamli-goruntuleme' },
              { label: 'Check-Up', href: '#check-up' },
              { label: 'Yazılım', href: '#yazilim' },
              { label: 'Eğitim', href: '#egitim' },
            ].map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="rounded-full border border-brand-200 px-5 py-2 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-600 hover:bg-brand-50"
              >
                {nav.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <ServiceBlock
        id="kapsamli-goruntuleme"
        eyebrow="01 — Analiz"
        title={hizmetler.kapsamliGoruntuleme.title}
        lead={hizmetler.kapsamliGoruntuleme.lead}
        items={hizmetler.kapsamliGoruntuleme.items}
        Icon={ScanSearch}
        tinted
      />

      <ServiceBlock
        id="check-up"
        eyebrow="02 — Teşhis"
        title={hizmetler.checkUp.title}
        lead={hizmetler.checkUp.lead}
        items={hizmetler.checkUp.items}
        Icon={Stethoscope}
      />

      <ServiceBlock
        id="yazilim"
        eyebrow="03 — Dijitalleşme"
        title={hizmetler.yazilim.title}
        lead={hizmetler.yazilim.lead}
        items={hizmetler.yazilim.items}
        Icon={MonitorSmartphone}
        tinted
      />

      <ServiceBlock
        id="egitim"
        eyebrow="04 — Gelişim"
        title={hizmetler.egitim.title}
        lead={hizmetler.egitim.lead}
        items={hizmetler.egitim.items}
        Icon={GraduationCap}
      />

      <CTASection />
    </>
  );
}
