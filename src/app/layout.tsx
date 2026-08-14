import type { Metadata } from 'next';
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fabrikadoktoru.com.tr'),
  title: {
    default:
      'Fabrika Doktoru | İş Güvenliği, Üretim Verimliliği ve Kalite Danışmanlığı',
    template: '%s | Fabrika Doktoru',
  },
  description:
    'Şirketinizde Başarı Reçetesi için Mentorunuz. Yüksek maliyetli danışmanlık programları yerine sahada uygulayan mentorluk çözümü ile verimlilik, güvenlik ve kaliteyi artırın.',
  keywords: [
    'fabrika doktoru',
    'üretim danışmanlığı',
    'mentorluk',
    'yalın üretim',
    'verimlilik',
    'kalite danışmanlığı',
    'iş güvenliği',
    'dijital dönüşüm',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://fabrikadoktoru.com.tr',
    siteName: 'Fabrika Doktoru',
    title: 'Fabrika Doktoru | Şirketinizde Başarı Reçetesi için Mentorunuz',
    description:
      'Yüksek maliyetli danışmanlık yerine sahada uygulayan mentorluk çözümü.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${manrope.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
