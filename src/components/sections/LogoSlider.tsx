import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { referanslar } from '@/content/site';

/**
 * Referans logoları — kesintisiz kayan şerit.
 *
 * Liste iki kez basılır ve şerit tam yarısı kadar kaydırılır; böylece
 * başa dönüş görünmez ve akış kesintisiz okunur. Üzerine gelince akış
 * durur ve sunumdaki gibi firma adı görünür.
 */
function Row({
  logos,
  reverse = false,
}: {
  logos: readonly { name: string; src: string }[];
  reverse?: boolean;
}) {
  const doubled = [...logos, ...logos];
  return (
    <div className="group/row relative flex overflow-hidden py-3">
      <ul
        className={`marquee flex shrink-0 items-center gap-4 pr-4 ${
          reverse ? 'marquee-reverse' : ''
        }`}
      >
        {doubled.map((logo, i) => (
          <li key={`${logo.name}-${i}`} className="group/logo relative shrink-0">
            <span className="flex h-20 w-40 items-center justify-center rounded-lg border border-line bg-white px-5 transition-colors duration-300 hover:border-accent-300">
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={64}
                // Şerit süslemesidir; ekran okuyucu için ad zaten tooltipte.
                aria-hidden="true"
                className="h-auto max-h-11 w-auto max-w-[7rem] object-contain opacity-80 transition-opacity duration-300 group-hover/logo:opacity-100"
              />
            </span>
            {/* Hover etiketi — sunumdaki data-tip davranışının karşılığı */}
            <span className="pointer-events-none absolute -top-2 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-brand-900 px-3 py-1.5 text-sm text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/logo:opacity-100">
              {logo.name}
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

  const half = Math.ceil(logos.length / 2);

  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-28">
      <div className="blueprint-light absolute inset-0" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Referanslarımız"
            title="Birlikte çalıştığımız kurumlar ve uyguladığımız sistemler"
          />
        </Reveal>
      </Container>

      {/* Şerit kenarlarda yumuşasın diye maskeli tam genişlik alanı */}
      <div className="logo-marquee relative mt-14">
        <Reveal>
          <Row logos={logos.slice(0, half)} />
          <Row logos={logos.slice(half)} reverse />
        </Reveal>
      </div>
    </section>
  );
}
