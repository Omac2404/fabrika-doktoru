import Image from 'next/image';
import {
  ScanSearch,
  Stethoscope,
  MonitorSmartphone,
  GraduationCap,
  RefreshCw,
  Target,
  Users,
  ArrowRight,
  Gauge,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { home } from '@/content/site';

const serviceIcons = [ScanSearch, Stethoscope, MonitorSmartphone, GraduationCap];

export default function HomePage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
        {/* ince grid dokusu */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-accent-300">
              <Sparkles className="h-4 w-4" />
              {home.hero.brand}
            </span>
            <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {home.hero.titleTop}{' '}
              <span className="text-accent-400">{home.hero.titleBottom}</span>
            </h1>
            <p className="mt-6 text-lg font-medium text-brand-100">
              {home.hero.subtitle}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-brand-200">
              {home.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/hizmetler" variant="accent" size="lg">
                Hizmetleri İncele
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href="/bize-ulasin"
                size="lg"
                className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Bize Ulaşın
              </Button>
            </div>
          </div>

          <div className="reveal relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 m-auto h-56 w-56 rounded-full bg-accent-400/20 blur-2xl sm:h-80 sm:w-80" />
            <Image
              src="/images/doktor-hero.png"
              alt="Fabrika Doktoru — üretim mentorunuz"
              width={520}
              height={780}
              priority
              className="relative h-auto max-h-[24rem] w-auto max-w-full object-contain drop-shadow-2xl sm:max-h-[34rem]"
            />
          </div>
        </Container>
      </section>

      {/* ───────────── HİZMET KARTLARI ───────────── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Hizmetlerimiz"
            title="Üretiminizi Bütünsel Bir Bakışla Geliştiriyoruz"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={service.title}
                  className="group relative flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/5"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display mt-6 text-xl font-bold text-brand-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <a
                    href="/hizmetler"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-accent-500"
                  >
                    Hizmetleri İncele
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────── BANNER ───────────── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/gorsel-100.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/90 to-brand-700/80" />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              {home.banner.title}
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {home.banner.subtitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-100">
              {home.banner.description}
            </p>
          </div>
        </Container>
      </section>

      {/* ───────────── PÜKO DÖNGÜSÜ ───────────── */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Sürekli İyileştirme"
              title={home.puko.title}
              description={home.puko.description}
            />
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-brand-50 px-5 py-4">
              <RefreshCw className="h-6 w-6 text-brand-600" />
              <span className="font-display font-bold tracking-wide text-brand-700">
                Planla → Uygula → Kontrol Et → Önlem Al
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {home.puko.items.map((item, i) => {
              const Icon = i === 0 ? Target : Users;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────── EKİBİMİZ ───────────── */}
      <section className="bg-brand-900 py-20 text-white sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/images/gorsel-104.jpg"
                alt="Fabrika Doktoru ekibi"
                width={960}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              light
              eyebrow="Ekibimiz"
              title={home.team.title}
              description={home.team.description}
            />
            <p className="mt-5 leading-relaxed text-brand-200">
              {home.team.description2}
            </p>
            <Button href="/ekibimiz" variant="accent" className="mt-8">
              Ekibimizi Tanıyın
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* ───────────── VİZYON ───────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
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
              <p className="mt-5 leading-relaxed text-slate-600">
                {home.vision.description}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { Icon: Gauge, label: 'Verimlilik', desc: 'İsrafı azaltır, kaynakları etkin kullanırız.' },
                { Icon: ShieldCheck, label: 'Güvenlik', desc: 'İş kazalarını azaltan sistemler kurarız.' },
                { Icon: Sparkles, label: 'Kalite', desc: 'Süreçleri sadeleştirip standartlaştırırız.' },
                { Icon: Target, label: 'Ölçülebilir Sonuç', desc: 'Sahada ölçülebilir iyileştirmeler sağlarız.' },
              ].map(({ Icon, label, desc }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
                >
                  <Icon className="h-8 w-8 text-brand-600" />
                  <h3 className="font-display mt-4 font-bold text-brand-900">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
