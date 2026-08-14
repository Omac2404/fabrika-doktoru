import type { NextConfig } from 'next';

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

const nextConfig: NextConfig = {
  // EasyPanel/Docker için tek başına çalışan minimal sunucu çıktısı.
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
