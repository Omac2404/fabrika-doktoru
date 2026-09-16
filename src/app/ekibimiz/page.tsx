import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Foundations } from '@/components/sections/Foundations';
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
    <article className="group h-full overflow-hidden rounded-lg border border-line bg-white">
      {/* Tek tip portre alanı — fotoğraf yokken monogram */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-950">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 26rem"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div className="blueprint absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-7xl tracking-tight text-white/90">
                {initials(member.name)}
              </span>
            </div>
          </>
        )}
        <Brackets className="inset-5" size="sm" />
        <span className="font-mono absolute left-5 top-5 text-[0.8125rem] text-accent-400 tabular">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-brand-900">{member.name}</h3>
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

      <Foundations />

            {/* Mentorlar */}
      <section className="relative bg-paper py-24 sm:py-32">
        <div className="blueprint-light absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <SectionHeading align="center" eyebrow="Mentorlarınız" title="Fabrika Doktorları" />
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
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
