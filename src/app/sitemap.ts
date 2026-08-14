import type { MetadataRoute } from 'next';

const BASE = 'https://fabrikadoktoru.com.tr';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/hizmetler',
    '/ekibimiz',
    '/referanslar',
    '/insan-kaynaklari',
    '/bize-ulasin',
    '/k-v-k-k-aydinlatma-metni',
    '/site-kullanimi-ve-cerezler-politikasi',
  ];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
