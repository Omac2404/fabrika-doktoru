import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { isDemoHost } from '@/lib/demo-hosts';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const demo = isDemoHost((await headers()).get('host'));

  const rules = {
    userAgent: '*',
    allow: '/',
    disallow: '/api/',
  } as const;

  if (demo) {
    /*
     * DİKKAT — burada bilerek "Disallow: /" YAZMIYORUZ.
     *
     * Taramayı engellemek sezgisel olarak doğru görünse de tam tersi işe
     * yarar: Google sayfayı indiremezse üzerindeki "noindex" başlığını da
     * göremez. Hâlihazırda indekslenmiş URL'ler bu yüzden sonuçlarda
     * (açıklamasız da olsa) asılı kalır.
     *
     * Doğrusu: taramaya izin ver, X-Robots-Tag: noindex okunsun ve sayfalar
     * indeksten düşsün. Sitemap ise duyurulmaz — demo URL'leri Google'a
     * kendimiz sunmayalım.
     */
    return { rules };
  }

  return {
    rules,
    sitemap: 'https://fabrikadoktoru.com.tr/sitemap.xml',
  };
}
