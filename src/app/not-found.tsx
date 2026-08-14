import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Reveal';

/**
 * Header sabit ve üstteyken açık renkli olduğu için bu sayfa da
 * koyu bir zeminle başlar — diğer tüm sayfalarla tutarlı.
 */
export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900" />
      <div className="blueprint absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent-400/10 blur-[100px]" />

      <Container className="relative flex min-h-[85vh] flex-col items-center justify-center py-32 text-center">
        <Eyebrow light>Hata 404</Eyebrow>

        <span className="font-display mt-8 text-[clamp(5rem,18vw,11rem)] font-bold leading-none tracking-tighter text-white/10 tabular">
          404
        </span>

        <h1 className="font-display -mt-6 text-3xl font-bold text-white sm:text-4xl">
          Sayfa Bulunamadı
        </h1>
        <p className="mt-5 max-w-md leading-relaxed text-brand-300">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Anasayfaya
          dönerek devam edebilirsiniz.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="accent" size="lg">
            Anasayfaya Dön
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <Link
            href="/bize-ulasin"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-brand-300 transition-colors hover:text-accent-300"
          >
            veya bize ulaşın
          </Link>
        </div>
      </Container>

      <div className="tick-rule absolute inset-x-0 bottom-0 text-white" />
    </section>
  );
}
