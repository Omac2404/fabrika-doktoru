import type { Metadata } from 'next';
import { Manrope, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';

/* Gövde metni — geniş x-yüksekliği, uzun paragraflarda okunaklı. */
const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
});

/* Başlıklar — teknik karakterli grotesk, endüstriyel dile oturuyor. */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space',
  weight: ['500', '600', '700'],
  display: 'swap',
});

/* Veri etiketleri, numaralar, ölçü göstergeleri. */
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono-tech',
  weight: ['400', '500'],
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
    <html
      lang="tr"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white">
        {/*
          JS kapalıysa ortaya çıkış animasyonu içeriği gizli bırakmasın.
          App Router head'i kendi yönettiği için elle <head> açmıyoruz;
          bu hidrasyon uyuşmazlığına yol açıyordu. İçeriği React'in
          ayrıştırmaması için de doğrudan HTML olarak veriyoruz.
        */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<style>[data-reveal]{opacity:1 !important;transform:none !important}</style>',
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
