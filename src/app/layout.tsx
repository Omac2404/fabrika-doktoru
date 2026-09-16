import type { Metadata } from 'next';
import { Inter, Capriola } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PhoneFloat } from '@/components/layout/PhoneFloat';
import { RandevuDialog } from '@/components/randevu/Randevu';

/* Gövde metni ve arayüz — değişken ağırlıklı Inter. */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

/* Başlıklar — Capriola (tek ağırlık, 400). */
const capriola = Capriola({
  subsets: ["latin", "latin-ext"],
  variable: "--font-capriola",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fabrikadoktoru.com.tr'),
  title: {
    default:
      'Fabrika Doktoru | İş Güvenliği, Üretim Verimliliği ve Kalite Danışmanlığı',
    template: '%s | Fabrika Doktoru',
  },
  description:
    'Fabrika Doktoru = Mentorunuz ile harekete geçin. Maliyetlerinizi düşürün, ekiplerinizi geliştirin, rekabet avantajınızı koruma altına alın. Üretim devlerinde kazanılan tecrübe şimdi sizin hizmetinizde.',
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
    title: 'Fabrika Doktoru = Mentorunuz',
    description:
      'Ücretsiz ön değerlendirme için randevunuzu oluşturun.',
  },
  // Google Search Console sahiplik doğrulaması (fabrikadoktoru.com.tr).
  // Herkese açık bir etiket, gizli bilgi değil.
  verification: {
    google: 'TpxcAY-k387TJLTHLUVNW65M9cl3tIuff3SfMQGaerI',
  },
  // Not: robots meta etiketi bilerek tanımlanmıyor. Varsayılan davranış
  // zaten indekslenebilir olmak; demo alan adlarında ise next.config.ts
  // içindeki X-Robots-Tag başlığı devreye giriyor. İkisini birden
  // tanımlamak çelişkili sinyal üretirdi.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${capriola.variable}`}
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
        <PhoneFloat />
        <RandevuDialog />
      </body>
    </html>
  );
}
