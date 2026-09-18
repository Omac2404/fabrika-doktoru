import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal, Brackets } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { Roadmap } from '@/components/sections/Roadmap';
import { Foundations } from '@/components/sections/Foundations';
import { RandevuButton } from '@/components/randevu/Randevu';
import { home, randevu } from '@/content/site';

export default function HomePage() {
  return (
    <>
      {/*
        ANA BANNER — bilinçli olarak ekran yüksekliğinden kısa tutuldu;
        altındaki açık bölümün üst kenarı ilk açılışta görünsün ve
        kaydırmaya davet etsin.
      */}
      <section className="relative overflow-hidden bg-brand-950 pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900" />
        <div className="blueprint absolute inset-0" />
        <div className="pointer-events-none absolute -right-52 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[22rem] w-[22rem] rounded-full bg-brand-500/20 blur-[100px]" />

        <Container className="relative">
          <div className="grid items-center gap-10 pb-14 lg:grid-cols-12 lg:gap-10 lg:pb-16">
            {/* Metin */}
            <div className="lg:col-span-7">
              <Reveal>
                <h1 className="font-display text-display text-white text-balance">
                  {/* Tescil işareti yalnızca anasayfa banner'ında */}
                  <span className="text-accent-300">
                    {home.hero.titleBrand.split(' = ')[0]}
                    <sup className="ml-0.5 -top-[1.5em] text-[0.32em]">®</sup>{' '}
                    = {home.hero.titleBrand.split(' = ')[1]}
                  </span>{' '}
                  {home.hero.titleRest}
                </h1>
              </Reveal>

              <Reveal delay={80}>
                <ul className="mt-7 space-y-2.5">
                  {home.hero.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-baseline gap-4 text-lg text-brand-100 sm:text-xl"
                    >
                      <span className="h-px w-5 shrink-0 -translate-y-1.5 bg-accent-300" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl leading-relaxed text-brand-200">
                  {home.hero.experience}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 border-t border-white/10 pt-7">
                  <p className="font-display text-xl text-white">{randevu.slogan}</p>
                  <p className="mt-1.5 text-brand-200">{randevu.cta}</p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <RandevuButton size="lg">Randevunuzu Oluşturun</RandevuButton>
                    <Button href="/hizmetler" variant="light" size="lg">
                      Hizmetleri İncele
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Görsel */}
            <div className="lg:col-span-5">
              <Reveal delay={200} className="relative mx-auto max-w-xs lg:max-w-none">
                <div className="pointer-events-none absolute inset-x-8 bottom-8 top-12 rounded-full bg-accent-500/15 blur-3xl" />
                {/* Çerçeve görselin tam kenarına otursun diye kutu görsel kadar. */}
                <div className="relative mx-auto w-fit">
                  <Image
                    src="/images/doktor-hero.png"
                    alt="Fabrika Doktoru — üretim mentorunuz"
                    width={520}
                    height={780}
                    priority
                    sizes="(max-width: 1024px) 20rem, 26rem"
                    className="relative block h-auto w-[19rem] object-contain drop-shadow-2xl lg:w-[26rem]"
                  />
                  <Brackets className="-inset-3" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Hizmetler sayfasındaki yol haritasının aynısı */}
      <Roadmap />

      {/* Ekibimiz sayfasındaki yapıtaşlarının aynısı */}
      <Foundations tinted />

      <CTASection />
    </>
  );
}
