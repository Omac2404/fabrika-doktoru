import type { NextConfig } from 'next';
import { DEMO_HOSTS } from './src/lib/demo-hosts';

/**
 * Content-Security-Policy — temel XSS koruması.
 * Next.js inline script/style gerektirir (hidrasyon + Tailwind stream).
 */
const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline' 'unsafe-eval'`,
  `style-src 'self' 'unsafe-inline' fonts.googleapis.com`,
  `font-src 'self' data: fonts.gstatic.com`,
  `img-src 'self' data: blob: https:`,
  `media-src 'self' https:`,
  `connect-src 'self'`,
  // Bize Ulaşın sayfasındaki Google Haritalar gömülü çerçevesi.
  // Bu olmadan default-src 'self' devreye girip haritayı bloklar.
  `frame-src 'self' https://www.google.com https://maps.google.com`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
];

/**
 * Demo alan adları için arama motoru engeli.
 *
 * Neden meta etiketi değil de HTTP başlığı: başlık her istekte, sunucu
 * seviyesinde eklenir — sayfaların statik üretimini bozmaz ve HTML dışı
 * yanıtları (PDF, görsel vb.) da kapsar. Google ikisini de eşdeğer sayar.
 *
 * `noarchive` önbellek kopyasını, `nosnippet` arama sonucundaki metin
 * parçacığını engeller; sayfa bir şekilde listelenirse bile içerik sızmaz.
 */
const noindexHeaders = [
  { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' },
];

/** Bir host (ve www varyantı) için noindex başlığı kuralı üretir. */
function noindexRule(host: string) {
  return {
    source: '/:path*',
    has: [{ type: 'host' as const, value: host }],
    headers: noindexHeaders,
  };
}

/**
 * Eski WordPress sitesinden kalan ve Google'da indekslenmiş URL'ler.
 * Yeni sitede karşılığı olmayanlar 404 vermesin diye kalıcı (308)
 * yönlendiriliyor. Birebir karşılığı olan sayfalar (/hizmetler/ vb.)
 * burada yok: Next.js sondaki "/" işaretini zaten kendisi kaldırıyor.
 */
const legacyRedirects = [
  // Gerçek içerik — hizmetler sayfasının eski adresi
  { source: '/hizmet-sayfasi', destination: '/hizmetler' },
  // Kullanılmayan WooCommerce kalıntıları ve varsayılan içerik
  { source: '/magaza', destination: '/' },
  { source: '/sepet', destination: '/' },
  { source: '/odeme', destination: '/' },
  { source: '/hesabim', destination: '/' },
  { source: '/urun/:slug*', destination: '/' },
  { source: '/2025/04/07/hello-world', destination: '/' },
];

const nextConfig: NextConfig = {
  // EasyPanel/Docker için tek başına çalışan minimal sunucu çıktısı.
  output: 'standalone',
  async redirects() {
    return [
      // www → kök alan adı. Aynı içeriğin iki adreste durması Google'da
      // yinelenen içerik sayılır; metadataBase ve sitemap zaten kökü kullanıyor.
      {
        source: '/:path*',
        has: [{ type: 'host' as const, value: 'www.fabrikadoktoru.com.tr' }],
        destination: 'https://fabrikadoktoru.com.tr/:path*',
        permanent: true,
      },
      ...legacyRedirects.map((r) => ({ ...r, permanent: true })),
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Yalnızca demo alan adlarında geçerli — fabrikadoktoru.com.tr
      // bu kuraldan etkilenmez, indekslenmeye devam eder.
      ...DEMO_HOSTS.flatMap((host) => [
        noindexRule(host),
        noindexRule(`www.${host}`),
      ]),
    ];
  },
};

export default nextConfig;
