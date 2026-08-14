import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ScanSearch,
  Stethoscope,
  MonitorSmartphone,
  GraduationCap,
  ArrowRight,
  MonitorPlay,
  UsersRound,
  Award,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { Reveal, Brackets, Eyebrow } from '@/components/ui/Reveal';
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

const sections = [
  { n: '01', label: 'Kapsamlı Görüntüleme', href: '#kapsamli-goruntuleme' },
  { n: '02', label: 'Check-Up', href: '#check-up' },
  { n: '03', label: 'Yazılım', href: '#yazilim' },
  { n: '04', label: 'Eğitim', href: '#egitim' },
];

/** Numaralı bölüm başlığı — mono indeks, ölçü hattı, ikon. */
function BlockHeading({
  n,
  eyebrow,
  title,
  lead,
  Icon,
}: {
  n: string;
  eyebrow: string;
  title: string;
  lead: string;
  Icon: React.ElementType;
}) {
  return (
    <Reveal>
      <div className="flex items-start justify-between gap-8 border-b border-line pb-8">
        <div className="max-w-2xl">
          <Eyebrow>
            {n} — {eyebrow}
          </Eyebrow>
          <h2 className="font-display text-headline mt-5 font-bold text-brand-900 text-balance">
            {title}
          </h2>
        </div>
        <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-brand-500 sm:flex">
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </span>
      </div>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
        {lead}
      </p>
    </Reveal>
  );
}

function ServiceBlock({
  id,
  n,
  eyebrow,
  title,
  lead,
  items,
  Icon,
  tinted = false,
}: {
  id: string;
  n: string;
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
      className={cn(
        'relative scroll-mt-40 py-20 sm:py-28',
        tinted && 'bg-paper',
      )}
    >
      {tinted && <div className="blueprint-light absolute inset-0" />}
      <Container className="relative">
        <BlockHeading n={n} eyebrow={eyebrow} title={title} lead={lead} Icon={Icon} />
        <Reveal delay={80} className="mt-14 block">
          <ServiceAccordion items={items} />
        </Reveal>
      </Container>
    </section>
  );
}

/* Fabrika Okulu programının işleyişi — içerikteki tanımın adımlara ayrılmışı. */
const okulSteps = [
  {
    Icon: MonitorPlay,
    title: 'Online Modüller',
    desc: 'Kendinize uygun saatlerde eğitim modüllerini izleyin, ilgili çalışmaları tamamlayın.',
  },
  {
    Icon: UsersRound,
    title: 'Grup ve 1-1 Eğitim',
    desc: 'Eğitmen ile haftalık gözden geçirmelere katılın, uygulamayı sahada pekiştirin.',
  },
  {
    Icon: Award,
    title: 'Sertifika',
    desc: 'Eğitiminizi tamamlayın, sertifikanıza ulaşın.',
  },
];

/**
 * Eğitim bölümü — Fabrika Okulu tek bir akordeon satırı olarak değil,
 * kendi başına bir program vitrini olarak sunuluyor.
 */
function EgitimBlock() {
  const okul = hizmetler.egitim.items[0];

  return (
    <section id="egitim" className="scroll-mt-40 py-20 sm:py-28">
      <Container>
        <BlockHeading
          n="04"
          eyebrow="Gelişim"
          title={hizmetler.egitim.title}
          lead={hizmetler.egitim.lead}
          Icon={GraduationCap}
        />

        <Reveal delay={80}>
          <div className="relative mt-14 overflow-hidden rounded-xl bg-brand-950">
            <div className="blueprint absolute inset-0" />
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-400/15 blur-[90px]" />

            <div className="relative grid gap-12 p-9 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
              {/* Program kimliği */}
              <div className="lg:col-span-5">
                <div className="relative inline-block">
                  <Image
                    src="/images/fabrika-okulu.png"
                    alt="Fabrika Okulu"
                    width={300}
                    height={300}
                    sizes="9rem"
                    className="h-32 w-32 rounded-lg object-cover sm:h-36 sm:w-36"
                  />
                  <Brackets className="-inset-2" size="sm" />
                </div>

                <Eyebrow light className="mt-9">
                  Program
                </Eyebrow>
                <h3 className="font-display mt-5 text-3xl font-bold text-white sm:text-4xl">
                  {okul.title}
                </h3>
                <p className="mt-6 leading-relaxed text-brand-200">
                  {okul.description}
                </p>

                <Button href="/bize-ulasin" variant="accent" className="mt-9">
                  Program Hakkında Bilgi Alın
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>

              {/* İşleyiş adımları */}
              <div className="lg:col-span-7">
                <div className="tick-rule mb-10 text-white" />
                <ol className="space-y-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
                  {okulSteps.map(({ Icon, title, desc }, i) => (
                    <li
                      key={title}
                      className="flex gap-6 bg-brand-950/80 p-7 sm:gap-8 sm:p-8"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <span className="font-mono text-[0.625rem] text-accent-400 tabular">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <Icon
                          className="h-6 w-6 text-brand-300"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-white">
                          {title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-brand-300">
                          {desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        titleTop={hizmetler.intro.title}
        lead={hizmetler.intro.lead}
      />

      {/* Giriş */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl space-y-6">
            {hizmetler.intro.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Bölüm rayı — sayfa boyunca yapışkan */}
      <nav
        aria-label="Hizmet bölümleri"
        className="sticky top-20 z-30 border-y border-line bg-white/85 backdrop-blur-xl"
      >
        <Container>
          <ul className="-mx-1 flex snap-x gap-1 overflow-x-auto py-3">
            {sections.map((s) => (
              <li key={s.href} className="snap-start">
                <a
                  href={s.href}
                  className="group flex items-center gap-2.5 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-paper hover:text-brand-800"
                >
                  <span className="font-mono text-[0.625rem] text-accent-500 tabular">
                    {s.n}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <ServiceBlock
        id="kapsamli-goruntuleme"
        n="01"
        eyebrow="Analiz"
        title={hizmetler.kapsamliGoruntuleme.title}
        lead={hizmetler.kapsamliGoruntuleme.lead}
        items={hizmetler.kapsamliGoruntuleme.items}
        Icon={ScanSearch}
        tinted
      />

      <ServiceBlock
        id="check-up"
        n="02"
        eyebrow="Teşhis"
        title={hizmetler.checkUp.title}
        lead={hizmetler.checkUp.lead}
        items={hizmetler.checkUp.items}
        Icon={Stethoscope}
      />

      <ServiceBlock
        id="yazilim"
        n="03"
        eyebrow="Dijitalleşme"
        title={hizmetler.yazilim.title}
        lead={hizmetler.yazilim.lead}
        items={hizmetler.yazilim.items}
        Icon={MonitorSmartphone}
        tinted
      />

      <EgitimBlock />

      <CTASection />
    </>
  );
}
