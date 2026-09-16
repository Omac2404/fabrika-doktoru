import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal, Eyebrow } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { RandevuButton } from '@/components/randevu/Randevu';
import { bizeUlasin, home, randevu, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Bize Ulaşın',
  description: `${randevu.slogan} ${randevu.cta}`,
};

const mapsQuery = encodeURIComponent(
  'İZQ Girişimcilik Merkezi, Akdeniz Mah. Cumhuriyet Blv. No:120, Konak/İzmir',
);

const channels = [
  { Icon: Phone, label: 'Telefon', value: site.phone, href: site.phoneHref, mono: true },
  { Icon: Mail, label: 'E-posta', value: site.email, href: `mailto:${site.email}`, mono: false },
];

export default function BizeUlasinPage() {
  return (
    <>
      {/*
        Anasayfa banner'ının sade hali: aynı başlık ve çağrı, madde listesi
        ve portre olmadan, tam genişlikte.
      */}
      <section className="relative overflow-hidden bg-brand-950 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900" />
        <div className="blueprint absolute inset-0" />
        <div className="pointer-events-none absolute -right-52 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent-600/20 blur-[120px]" />

        <Container className="relative">
          <Reveal className="max-w-4xl">
            <h1 className="font-display text-display text-white text-balance">
              <span className="text-accent-300">{home.hero.titleBrand}</span>{" "}
              {home.hero.titleRest}
            </h1>
            <p className="mt-8 max-w-2xl leading-relaxed text-brand-200">
              {home.hero.experience}
            </p>
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="font-display text-xl text-white">{randevu.slogan}</p>
              <p className="mt-1.5 text-brand-200">{randevu.cta}</p>
              <div className="mt-6">
                <RandevuButton size="lg">Randevunuzu Oluşturun</RandevuButton>
              </div>
            </div>
          </Reveal>
        </Container>

        <div className="tick-rule absolute inset-x-0 bottom-0 text-white" />
      </section>

      <section className="py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Sol: iletişim bilgileri */}
          <div>
            <Reveal>
              <Eyebrow>{bizeUlasin.infoTitle}</Eyebrow>
              <h2 className="font-display mt-5 text-3xl text-brand-900 text-balance">
                {bizeUlasin.infoHeading}
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">{bizeUlasin.infoLead}</p>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-10 divide-y divide-line border-y border-line">
                {channels.map(({ Icon, label, value, href, mono }) => (
                  <a key={label} href={href} className="group flex items-center gap-5 py-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line text-brand-600 transition-colors duration-300 group-hover:border-accent-300 group-hover:text-accent-500">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0">
                      <span className="font-mono block text-[0.8125rem] uppercase tracking-[0.1em] text-slate-400">
                        {label}
                      </span>
                      <span
                        className={`mt-1.5 block truncate font-semibold text-brand-900 transition-colors group-hover:text-accent-500 ${
                          mono ? 'font-mono tabular' : ''
                        }`}
                      >
                        {value}
                      </span>
                    </span>
                  </a>
                ))}

                <div className="flex items-start gap-5 py-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line text-brand-600">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="font-mono block text-[0.8125rem] uppercase tracking-[0.1em] text-slate-400">
                      Adres
                    </span>
                    <span className="mt-1.5 block leading-relaxed text-brand-900">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                      <br />
                      {site.address.line3}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sağ: harita */}
          <Reveal delay={120} className="h-full">
            <div className="h-full min-h-[22rem] overflow-hidden rounded-lg border border-line">
              <iframe
                title="Fabrika Doktoru konum"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full min-h-[22rem] w-full grayscale-[35%]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection showRandevu={false} />
    </>
  );
}
