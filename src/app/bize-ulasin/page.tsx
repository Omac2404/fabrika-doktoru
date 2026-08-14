import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal, Eyebrow } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { ContactForm } from '@/components/ContactForm';
import { bizeUlasin, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Bize Ulaşın',
  description: bizeUlasin.lead,
};

const mapsQuery = encodeURIComponent(
  'İZQ Girişimcilik Merkezi, Akdeniz Mah. Cumhuriyet Blv. No:120, Konak/İzmir',
);

const channels = [
  {
    Icon: Phone,
    label: 'Telefon / Whatsapp',
    value: site.phone,
    href: site.phoneHref,
    mono: true,
  },
  {
    Icon: Mail,
    label: 'E-posta',
    value: site.email,
    href: `mailto:${site.email}`,
    mono: false,
  },
];

export default function BizeUlasinPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        titleTop={bizeUlasin.titleTop}
        titleBottom={bizeUlasin.titleBottom}
        lead={bizeUlasin.lead}
      />

      <section className="py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Sol: iletişim bilgileri */}
          <div>
            <Reveal>
              <Eyebrow>{bizeUlasin.infoTitle}</Eyebrow>
              <h2 className="font-display mt-5 text-3xl font-bold text-brand-900">
                Konuşarak başlayalım
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                {bizeUlasin.infoLead}
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-10 divide-y divide-line border-y border-line">
                {channels.map(({ Icon, label, value, href, mono }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-5 py-6 transition-colors"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line text-brand-600 transition-colors duration-300 group-hover:border-accent-300 group-hover:text-accent-500">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0">
                      <span className="font-mono block text-[0.625rem] uppercase tracking-[0.2em] text-slate-400">
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
                    <span className="font-mono block text-[0.625rem] uppercase tracking-[0.2em] text-slate-400">
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

            {/* Harita */}
            <Reveal delay={140}>
              <div className="mt-10 overflow-hidden rounded-lg border border-line">
                <iframe
                  title="Fabrika Doktoru konum"
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  width="100%"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full grayscale-[35%]"
                />
              </div>
            </Reveal>
          </div>

          {/* Sağ: form */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-xl border border-line bg-paper p-8 sm:p-10">
              <div className="blueprint-light absolute inset-0" />
              <div className="relative">
                <Eyebrow>{bizeUlasin.formTitle}</Eyebrow>
                <h2 className="font-display mt-5 text-2xl font-bold text-brand-900">
                  Mesajınızı bırakın
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {bizeUlasin.formLead}
                </p>
                <div className="mt-9">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
