import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { referanslar } from '@/content/site';

/**
 * Referans logoları — kesintisiz kayan şerit.
 *
 * Tek sıra. Liste iki kez basılır ve şerit tam yarısı kadar kaydırılır;
 * böylece başa dönüş görünmez. Üzerine gelince akış durur ve sunumdaki
 * gibi firma adı logonun altında belirir.
 */
function Row({ logos }: { logos: readonly { name: string; note: string; src: string }[] }) {
  /*
   * Kesintisiz akış için şeridin yarısı en az ekran genişliği kadar
   * olmalı. Liste kısa olduğundan önce çoğaltılıyor, sonra iki kez
   * basılıp %50 kaydırılıyor.
   */
  const base = logos.length < 12 ? [...logos, ...logos] : logos;
  const doubled = [...base, ...base];
  return (
    /*
     * Şerit yatayda kırpılmalı ama hover etiketi görünmeli. Bu yüzden
     * alta etiket kadar iç boşluk bırakılıyor; etiket kutunun içinde kalıyor.
     */
    <div className="group/row relative flex overflow-hidden pb-20 pt-3">
      <ul className="marquee flex shrink-0 items-center gap-4 pr-4">
        {doubled.map((logo, i) => (
          <li key={`${logo.name}-${i}`} className="group/logo relative shrink-0">
            <span className="flex h-20 w-40 items-center justify-center rounded-lg border border-line bg-white px-5 transition-colors duration-300 hover:border-accent-300">
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={64}
                aria-hidden="true"
                className="h-auto max-h-11 w-auto max-w-[7rem] object-contain opacity-80 transition-opacity duration-300 group-hover/logo:opacity-100"
              />
            </span>
            {/* Hover etiketi — logonun ALTINDA, sunumdaki iki satırlı metin */}
            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max max-w-[15rem] -translate-x-1/2 rounded-md bg-brand-900 px-3.5 py-2 text-center opacity-0 shadow-lg transition-opacity duration-200 group-hover/logo:opacity-100">
              <span className="block text-sm font-semibold text-white">{logo.name}</span>
              {logo.note && (
                <span className="mt-0.5 block text-sm leading-snug text-brand-200">
                  {logo.note}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LogoSlider() {
  const logos = referanslar.logos;
  if (logos.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-paper pb-10 pt-24 sm:pb-12 sm:pt-28">
      <div className="blueprint-light absolute inset-0" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Referanslarımız"
            title="Birlikte çalıştığımız kurumlar"
          />
        </Reveal>
      </Container>

      {/* Şerit kenarlarda yumuşasın diye maskeli tam genişlik alanı */}
      <div className="logo-marquee relative mt-14">
        <Reveal>
          <Row logos={logos} />
        </Reveal>
      </div>
    </section>
  );
}
