import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { isDemoHost } from '@/lib/demo-hosts';

const BASE = 'https://fabrikadoktoru.com.tr';

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Demo alan adlarında boş sitemap. Eskiden burada fabrikadoktoru.com.tr
  // URL'leri duyuruluyordu; demo sunucusunun başka bir siteyi işaret
  // etmesi hem yanlış hem gereksizdi.
  if (isDemoHost((await headers()).get('host'))) return [];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
