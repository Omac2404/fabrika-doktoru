# Fabrika Doktoru — Kurumsal Web Sitesi

WordPress'ten **Next.js 16**'ya taşınmış kurumsal tanıtım sitesi. İçerik orijinal
siteden (fabrikadoktoru.com.tr) birebir korunmuş, tasarım dili modernleştirilmiştir.

## Tech Stack

| Katman      | Teknoloji                          |
| ----------- | ---------------------------------- |
| Framework   | Next.js 16 (App Router, standalone)|
| UI          | React 19                           |
| Dil         | TypeScript                         |
| Stil        | Tailwind CSS v4                    |
| İkonlar     | lucide-react                       |
| Paket Yön.  | pnpm                               |
| Deploy      | EasyPanel + Docker                 |

## Marka Renkleri

- Lacivert (primary): `#1e4983`
- Turuncu (accent): `#f99b1c`

## Geliştirme

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # production sunucu
pnpm typecheck    # tip kontrolü
pnpm lint         # eslint
```

## Randevu / Ön Değerlendirme

Sitedeki tüm randevu butonları tek bir pencere açar. Anket + randevu bağlantısı
`src/content/site.ts` içindeki `randevu.url` alanına yazılır. Ortam değişkeni gerekmez.

## İçerik Yönetimi

Tüm metinler [`src/content/site.ts`](src/content/site.ts) dosyasında tek noktada
tutulur. İçerik güncellemesi için yalnızca bu dosya düzenlenir.

## İçerik Yapısı (Sayfalar)

- `/` — Anasayfa
- `/hizmetler` — Kapsamlı Görüntüleme, Check-Up, Yazılım, Eğitim
- `/ekibimiz` — Ekibimiz
- `/referanslar` — Referanslar
- `/bize-ulasin` — İletişim formu + harita
- `/k-v-k-k-aydinlatma-metni` — KVKK metni
- `/site-kullanimi-ve-cerezler-politikasi` — Çerez politikası

## EasyPanel ile Deploy

1. EasyPanel'de yeni bir **App** servisi oluşturun.
2. Kaynak olarak bu Git reposunu bağlayın (veya GitHub'a push edin).
3. **Build** yöntemi: **Dockerfile** (repo kökündeki `Dockerfile` kullanılır).
4. **Port**: `3000`.
6. Domain olarak `fabrikadoktoru.com.tr` tanımlayın, EasyPanel SSL'i (Let's Encrypt)
   otomatik sağlar.
7. Deploy edin.

> Not: `next.config.ts` içinde `output: 'standalone'` aktiftir; Docker imajı bu
> sayede minimaldir ve `node server.js` ile çalışır.
