/**
 * Müşteriye yalnızca link ile gösterilen demo alan adları.
 *
 * Bu hostlar arama motorlarına tamamen kapalıdır (X-Robots-Tag: noindex,
 * sitemap yok). Gerçek site (fabrikadoktoru.com.tr) bundan etkilenmez ve
 * normal şekilde indekslenmeye devam eder — bu yüzden koda sabit bir
 * "noindex" yazmak yerine host bazlı ayrım yapıyoruz.
 *
 * Liste hem next.config.ts (HTTP başlığı) hem de robots.ts / sitemap.ts
 * tarafından kullanılır. Yeni bir demo alan adı eklenince tek yer burasıdır.
 */
export const DEMO_HOSTS = ['webretademo.com', 'webretademo2.com'] as const;

/**
 * Gelen Host başlığı bir demo alan adına mı ait?
 * Port (`:3000`) ve `www.` öneki tolere edilir.
 */
export function isDemoHost(hostHeader: string | null | undefined): boolean {
  if (!hostHeader) return false;
  const host = hostHeader.toLowerCase().split(':')[0];
  return DEMO_HOSTS.some((d) => host === d || host === `www.${d}`);
}
