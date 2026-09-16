import type { Metadata } from 'next';
import { ScanSearch, Stethoscope, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal, Eyebrow } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { Roadmap } from '@/components/sections/Roadmap';
import { RandevuButton, RandevuLink } from '@/components/randevu/Randevu';
import { hizmetler } from '@/content/site';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Kapsamlı Görüntüleme ve Check-Up hizmetleriyle adım adım Üretim ve Yönetim Sisteminizi inşa edin. 20 yılı aşkın üretim tecrübesiyle Fabrika Doktoru = Mentorunuz yanınızda.',
};

/**
 * Hizmet başlıkları. Açıklama yok ve açılmıyor — her başlık ön
 * değerlendirme penceresini açar.
 */
function ServiceBlock({
  id,
  n,
  title,
  lead,
  items,
  Icon,
  tinted = false,
}: {
  id: string;
  n: string;
  title: string;
  lead: string;
  items: readonly string[];
  Icon: React.ElementType;
  tinted?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-28 py-24 sm:py-28', tinted && 'bg-paper')}
    >
      {tinted && <div className="blueprint-light absolute inset-0" />}
      <Container className="relative">
        <Reveal>
          <div className="flex items-start justify-between gap-8 border-b border-line pb-8">
            <div className="max-w-2xl">
              <Eyebrow>{n} — Hizmet</Eyebrow>
              <h2 className="font-display text-headline mt-5 text-brand-900 text-balance">
                {title}
              </h2>
            </div>
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-brand-500 sm:flex">
              <Icon className="h-7 w-7" strokeWidth={1.5} />
            </span>
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">{lead}</p>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-mono mt-12 text-[0.8125rem] uppercase tracking-[0.1em] text-slate-400">
            Ön değerlendirme için başlığa tıklayın
          </p>
          <ul className="mt-4 grid gap-px overflow-hidden rounded-lg border border-line bg-line">
            {items.map((item, i) => (
              <li key={item} className="bg-white">
                <RandevuLink className="group relative flex h-full items-center gap-5 px-6 py-6 transition-colors duration-300 hover:bg-brand-50/50 sm:px-8">
                  <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-accent-400 transition-transform duration-300 group-hover:scale-y-100" />
                  <span className="font-mono shrink-0 text-xs text-brand-300 transition-colors group-hover:text-accent-500 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display flex-1 text-base leading-snug text-brand-900 sm:text-lg">
                    {item}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-500" />
                </RandevuLink>
              </li>
            ))}
          </ul>
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
        titleTop={hizmetler.hero.title}
        lead={hizmetler.hero.lead}
      >
        <RandevuButton size="lg">Randevunuzu Oluşturun</RandevuButton>
      </PageHero>

      <Roadmap />

      <ServiceBlock
        id="kapsamli-goruntuleme"
        n="01"
        title={hizmetler.kapsamliGoruntuleme.title}
        lead={hizmetler.kapsamliGoruntuleme.lead}
        items={hizmetler.kapsamliGoruntuleme.items}
        Icon={ScanSearch}
        tinted
      />

      <ServiceBlock
        id="check-up"
        n="02"
        title={hizmetler.checkUp.title}
        lead={hizmetler.checkUp.lead}
        items={hizmetler.checkUp.items}
        Icon={Stethoscope}
      />

      <CTASection />
    </>
  );
}
