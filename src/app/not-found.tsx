import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-7xl font-extrabold text-brand-600">
        404
      </span>
      <h1 className="font-display mt-4 text-2xl font-bold text-brand-900">
        Sayfa Bulunamadı
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Anasayfaya
        dönerek devam edebilirsiniz.
      </p>
      <Button href="/" variant="accent" size="lg" className="mt-8">
        Anasayfaya Dön
      </Button>
      <Link href="/bize-ulasin" className="mt-4 text-sm font-semibold text-brand-600 hover:text-accent-500">
        veya bize ulaşın
      </Link>
    </Container>
  );
}
