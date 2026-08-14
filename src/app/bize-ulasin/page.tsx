import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
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

export default function BizeUlasinPage() {
  return (
    <>
      <PageHero
        titleTop={bizeUlasin.titleTop}
        titleBottom={bizeUlasin.titleBottom}
        lead={bizeUlasin.lead}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Sol: bilgi */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900">
              {bizeUlasin.infoTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              {bizeUlasin.infoLead}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-colors hover:border-brand-200"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">
                    Telefon / Whatsapp
                  </span>
                  <span className="font-semibold text-brand-900">
                    {site.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-colors hover:border-brand-200"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">
                    E-posta
                  </span>
                  <span className="font-semibold text-brand-900">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">
                    Adres
                  </span>
                  <span className="font-semibold text-brand-900">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.line3}
                  </span>
                </span>
              </div>
            </div>

            {/* Harita */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <iframe
                title="Fabrika Doktoru konum"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* Sağ: form */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-7 shadow-sm sm:p-9">
            <h2 className="font-display text-2xl font-bold text-brand-900">
              {bizeUlasin.formTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              {bizeUlasin.formLead}
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
