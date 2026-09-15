import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Brackets } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { RandevuButton } from '@/components/randevu/Randevu';
import { ekibimiz, type TeamMember } from '@/content/site';

export const metadata: Metadata = {
  title: 'Ekibimiz',
  description: ekibimiz.lead,
};

/** "M. Caner Akıncı" → "CA": kısaltılmış (noktalı) adlar atlanır. */
function initials(name: string) {
  const parts = name.split(' ').filter((w) => !w.endsWith('.'));
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toLocaleUpperCase('tr-TR');
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <article className="group h-full bg-white">
      {/* Tek tip portre alanı — fotoğraf yokken monogram */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-950">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 26rem"
            className="object-cover grayscale-[20%] transition-[filter] duration-500 group-hover:grayscale-0"
          />
        ) : (
          <>
            <div className="blueprint absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-7xl font-bold tracking-tight text-white/90">
                {initials(member.name)}
              </span>
            </div>
          </>
        )}
        <Brackets className="inset-5" size="sm" />
        <span className="font-mono absolute left-5 top-5 text-[0.625rem] text-accent-400 tabular">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-7">
        <h3 className="font-display text-xl font-bold text-brand-900">{member.name}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {member.tags.map((tag) => (
            <li
              key={tag}
              className={
                tag === 'Mentor'
                  ? 'rounded-md bg-accent-50 px-2.5 py-1 text-xs font-semibold text-accent-700'
                  : 'rounded-md border border-line px-2.5 py-1 text-xs font-medium text-brand-700'
              }
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function EkibimizPage() {
  return (
    <>
      <PageHero
        eyebrow="Ekibimiz"
        titleTop={ekibimiz.titleTop}
        titleBottom={ekibimiz.titleBottom}
        lead={ekibimiz.lead}
      />

      {/* Yapıtaşları */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Yapıtaşlarımız" title={ekibimiz.foundationsLead} />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {ekibimiz.foundations.map((f, i) => (
              <Reveal key={f.code} delay={i * 60}>
                <div className="group relative h-full bg-white p-7">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-400 transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="font-mono text-[0.625rem] text-brand-300 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display mt-6 text-4xl font-bold tracking-tight text-brand-900">
                    {f.code}
                  </p>
                  <p className="mt-3 text-sm leading-snug text-slate-600">{f.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mentorlar */}
      <section className="relative bg-paper py-24 sm:py-32">
        <div className="blueprint-light absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <SectionHeading align="center" eyebrow="Mentorlarınız" title="Fabrika Doktorları" />
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-6xl gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {ekibimiz.members.map((member, i) => (
              <Reveal key={member.name} delay={i * 90}>
                <MemberCard member={member} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-16 text-center">
            <RandevuButton size="lg">Randevunuzu Oluşturun</RandevuButton>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
