import Image from 'next/image';
import Link from 'next/link';
import {
  ScanSearch,
  Stethoscope,
  MonitorSmartphone,
  GraduationCap,
  Target,
  Users,
  ArrowRight,
  ArrowUpRight,
  Gauge,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Brackets, Eyebrow } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { PukoCycle } from '@/components/sections/PukoCycle';
import { home } from '@/content/site';

const serviceIcons = [ScanSearch, Stethoscope, MonitorSmartphone, GraduationCap];

const visionPillars = [
  {
    Icon: Gauge,
    label: 'Verimlilik',
    desc: 'İsrafı azaltır, kaynakları etkin kullanırız.',
  },
  {
    Icon: ShieldCheck,
    label: 'Güvenlik',
    desc: 'İş kazalarını azaltan sistemler kurarız.',
  },
  {
    Icon: Sparkles,
    label: 'Kalite',
    desc: 'Süreçleri sadeleştirip standartlaştırırız.',
  },
  {
    Icon: Target,
    label: 'Ölçülebilir Sonuç',
    desc: 'Sahada ölçülebilir iyileştirmeler sağlarız.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-brand-950 pt-32 sm:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900" />
        <div className="blueprint absolute inset-0" />
        <div className="pointer-events-none absolute -right-52 -top-40 h-[38rem] w-[38rem] rounded-full bg-accent-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-brand-500/20 blur-[100px]" />

        <Container className="relative">
          <div className="grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
            {/* Metin */}
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow light>{home.hero.brand}</Eyebrow>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="font-display text-display mt-7 font-bold text-white text-balance">
                  {home.hero.titleTop}{' '}
                  <span className="relative inline-block text-accent-400">
                    {home.hero.titleBottom}
                    {/* Başlığın altını çizen ölçü hattı */}
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-accent-400/35" />
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-9 max-w-xl text-lg font-medium leading-relaxed text-brand-100 sm:text-xl">
                  {home.hero.subtitle}
                </p>
                <p className="mt-5 max-w-xl leading-relaxed text-brand-300">
                  {home.hero.description}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-11 flex flex-wrap gap-4">
                  <Button href="/hizmetler" variant="accent" size="lg">
                    Hizmetleri İncele
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                  <Button href="/bize-ulasin" variant="light" size="lg">
                    Bize Ulaşın
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Görsel */}
            <div className="lg:col-span-5">
              <Reveal delay={200} className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Arkadaki sıcak hale */}
                <div className="pointer-events-none absolute inset-x-8 bottom-8 top-16 rounded-full bg-accent-400/15 blur-3xl" />
                <div className="relative">
                  <Image
                    src="/images/doktor-hero.png"
                    alt="Fabrika Doktoru — üretim mentorunuz"
                    width={520}
                    height={780}
                    priority
                    sizes="(max-width: 1024px) 24rem, 30rem"
                    className="relative mx-auto h-auto w-full max-w-[22rem] object-contain drop-shadow-2xl lg:max-w-none"
                  />
                  {/* Teknik hizalama köşeleri */}
                  <Brackets className="inset-x-2 inset-y-6" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>

        {/* Yetkinlik şeridi — hero'yu kapatan veri bandı */}
        <div className="relative border-t border-white/10 bg-brand-950/60 backdrop-blur-sm">
          <Container>
            <ul className="grid grid-cols-2 divide-white/10 lg:grid-cols-4 lg:divide-x">
              {home.services.map((service, i) => (
                <li
                  key={service.title}
                  className="flex items-center gap-3 border-b border-white/10 px-1 py-5 lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <span className="font-mono text-[0.625rem] text-accent-400 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-sm font-semibold text-brand-100">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* ═══════════════ HİZMETLER ═══════════════ */}
      <section className="relative bg-paper py-24 sm:py-32">
        <div className="blueprint-light absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Hizmetlerimiz"
              title="Üretiminizi Bütünsel Bir Bakışla Geliştiriyoruz"
            />
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {home.services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <Reveal key={service.title} delay={i * 70}>
                  <Link
                    href="/hizmetler"
                    className="group relative flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-brand-50/40"
                  >
                    {/* Üst kenarda beliren turuncu ölçü hattı */}
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-400 transition-transform duration-500 group-hover:scale-x-100" />

                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-accent-500 tabular">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <Icon
                        className="h-7 w-7 text-brand-400 transition-colors duration-300 group-hover:text-brand-600"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="font-display mt-10 text-xl font-bold leading-tight text-brand-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors group-hover:text-accent-500">
                      İncele
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════════ BANNER ═══════════════ */}
      <section className="relative overflow-hidden bg-brand-950">
        <Image
          src="/images/gorsel-100.jpg"
          alt=""
          fill
          sizes="100vw"
          className="duotone object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/50" />
        <div className="blueprint absolute inset-0" />

        <Container className="relative py-24 sm:py-32">
          <Reveal className="max-w-3xl">
            <Eyebrow light>{home.banner.title}</Eyebrow>
            <h2 className="font-display text-headline mt-6 font-bold text-white text-balance">
              {home.banner.subtitle}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-brand-200">
              {home.banner.description}
            </p>
          </Reveal>
        </Container>

        <div className="tick-rule absolute inset-x-0 bottom-0 text-white" />
      </section>

      {/* ═══════════════ PUKÖ DÖNGÜSÜ ═══════════════ */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <SectionHeading
                eyebrow="Sürekli İyileştirme"
                title={home.puko.title}
                description={home.puko.description}
              />
            </Reveal>

            <Reveal delay={120} className="order-first lg:order-none">
              <PukoCycle />
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {home.puko.items.map((item, i) => {
              const Icon = i === 0 ? Target : Users;
              return (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="flex h-full gap-6 bg-white p-8 sm:p-10">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line text-brand-600">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-brand-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════════ EKİBİMİZ ═══════════════ */}
      <section className="relative overflow-hidden bg-brand-950 py-24 sm:py-32">
        <div className="blueprint absolute inset-0" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-500/15 blur-[110px]" />

        <Container className="relative">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/gorsel-104.jpg"
                  alt="Fabrika Doktoru ekibi"
                  width={960}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 44rem"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-950/20" />
              </div>
              <Brackets className="-inset-3" />
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <SectionHeading
                  light
                  eyebrow="Mentorlarınız"
                  title={home.team.title}
                  description={home.team.description}
                />
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 leading-relaxed text-brand-300">
                  {home.team.description2}
                </p>
                <Button href="/ekibimiz" variant="light" className="mt-10">
                  Ekibimizi Tanıyın
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════ VİZYON ═══════════════ */}
      <section className="relative bg-paper py-24 sm:py-32">
        <div className="blueprint-light absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <SectionHeading
                eyebrow="Yeni Bir Bakış Açısı"
                title={
                  <>
                    {home.vision.titleTop}{' '}
                    <span className="text-accent-500">
                      {home.vision.titleBottom}
                    </span>
                  </>
                }
                description={home.vision.subtitle}
              />
              <p className="mt-6 max-w-xl leading-relaxed text-slate-600">
                {home.vision.description}
              </p>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
              {visionPillars.map(({ Icon, label, desc }, i) => (
                <Reveal key={label} delay={i * 70}>
                  <div className="group h-full bg-white p-8">
                    <div className="flex items-center justify-between">
                      <Icon
                        className="h-7 w-7 text-brand-500"
                        strokeWidth={1.5}
                      />
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
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
