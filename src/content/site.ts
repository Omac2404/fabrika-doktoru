/**
 * Site içeriği — tek kaynak (single source of truth).
 * Metinler müşteri tarafından verilmiştir. Tasarım değişebilir, içerik
 * değişikliği yalnızca bu dosyadan yapılır.
 */

export const site = {
  name: 'Fabrika Doktoru',
  tagline: 'Fabrika Doktoru = Mentorunuz',
  domain: 'fabrikadoktoru.com.tr',
  phone: '0 850 723 1925',
  phoneHref: 'tel:+908507231925',
  email: 'fo@uretmer.com.tr',
  address: {
    line1: 'Akdeniz Mah. Cumhuriyet Blv. İZQ Girişimcilik Merkezi',
    line2: 'Kapı No: 120',
    line3: '35210 Konak / İzmir / Türkiye',
  },
} as const;

/* ─────────────────  ÜCRETSİZ ÖN DEĞERLENDİRME (RANDEVU)  ───────────────── */

/**
 * Sitenin her yerindeki "randevu" çağrıları tek bir diyalog penceresini
 * açar. Bağlantı ve anket soruları geldiğinde yalnızca burası doldurulur.
 */
export const randevu = {
  slogan: 'Fabrika Doktoru = Mentorunuz.',
  cta: 'Ücretsiz ön değerlendirme için randevunuzu oluşturun.',
  buttonLabel: 'Ücretsiz Ön Değerlendirme',
  /**
   * Kısa anket + randevu bağlantısı. Boş olduğu sürece pencere, randevu
   * talebi için telefon ve e-posta seçeneklerini gösterir.
   */
  url: '' as string,
} as const;

export const nav = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Ekibimiz', href: '/ekibimiz' },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'Bize Ulaşın', href: '/bize-ulasin' },
] as const;

/* ─────────────────────────  ANASAYFA  ───────────────────────── */

export const home = {
  hero: {
    titleBrand: 'Fabrika Doktoru = Mentorunuz',
    titleRest: 'ile harekete geçin.',
    benefits: [
      'Maliyetlerinizi düşürmeye,',
      'Ekiplerinizi geliştirmeye başlayın.',
      'Elde ettiğiniz rekabet avantajını koruma altına alın.',
    ],
    experience:
      'Uzakdoğu, Avrupa ve Türkiye’nin üretim devlerinde kazandığımız üretim ve iyileştirme tecrübesi şimdi sizin hizmetinizde.',
  },
  services: [
    {
      title: 'Kapsamlı Görüntüleme',
      href: '/hizmetler#kapsamli-goruntuleme',
      description:
        'Şirketinizin tüm operasyonlarını bütünsel olarak analiz ediyoruz. Riskleri tespit ediyor, verimsizlikleri ortaya koyuyoruz.',
    },
    {
      title: 'Check – Up',
      href: '/hizmetler#check-up',
      description:
        'Üretimden yönetime kadar tüm süreçlerinizi detaylı analiz ediyor, şirket sağlığınızı sayısal verilerle ölçüyoruz.',
    },
  ],
  banner: {
    title: 'Üretimin Kalbine Dokunuyoruz',
    subtitle: 'Günlük Takipten Stratejiye Dişli Çarkları Yerleştirin',
    description:
      'Saha ekiplerinden üst yönetime kadar tüm bileşenleriniz uyum içinde çalışsın.',
  },
  puko: {
    title: 'Püko Döngüsü',
    description:
      'Tüm süreçlerinizi, Planla-Uygula-Kontrol Et-Önlem Al (PUKÖ) döngüsü ile uyumlu hale getirin. Ekipleriniz kayıpları görmeyi ve yok etmeyi öğrensin. Kesintisiz teşhis ve sürekli iyileştirmeyle gelişin.',
    items: [
      {
        title: 'Hedeflerle Çalışma',
        description:
          'İş güvenliği, Kalite, Maliyet ve Teslimatta mevcut durumunuzu ölçün. Hedef koyun. Planlı çalışmalarla hedefe ulaşın.',
      },
      {
        title: 'Çalışan Gelişimi',
        description:
          'Çalışanların kişisel ve profesyonel gelişimi için ideal ortamı sunun.',
      },
    ],
  },
  vision: {
    titleTop: 'Verimlilik, Güvenlik ve',
    titleBottom: 'Kalite İçin Yeni Bir Bakış Açısı',
    subtitle:
      'Doğru analizlerle israfı azaltıyor, ekiplerinizi daha etkili hale getiriyoruz.',
    description:
      'Fabrika Doktoru, üretim sahalarınızı yalnızca analiz etmez; potansiyelinizi ortaya çıkarır. Süreçleri sadeleştirir, kaynakları etkin kullanır, sahada ölçülebilir iyileştirmeler sağlar.',
  },
} as const;

/* ─────────────────────────  HİZMETLER  ───────────────────────── */

export const hizmetler = {
  hero: {
    title: 'Adım adım “Firmanızın Üretim ve Yönetim Sistemi”nizi inşa edin.',
    lead: '20 yılı aşkın üretim tecrübesiyle Fabrika Doktoru = Mentorunuz yanınızda.',
  },
  roadmap: [
    {
      title: 'İlk adımı atın',
      steps: [
        'En acil maliyet gündeminizi anlatın.',
        'Mevcut durum nedir? Bilançoda ve sahada doğru röntgeni çekin.',
        'Hızlı sonuç için yoğun koşu etabına başlayın (maks. 3 aylık plan).',
      ],
    },
    {
      title: 'İlk adımın sonunda',
      steps: [
        'İyileşmeyi ölçün.',
        'Bir sonraki yoğun koşu etabını planlayın.',
        'Uzun vadeli ilerleme için mentorlukla gelişim planını yapın.',
      ],
    },
  ],
  /*
   * Hizmet maddelerinde yalnızca başlıklar yayınlanır. Açıklamalar bilerek
   * sitede YOK — gizlenmiş değil, hiç gönderilmiyor; kopyalanmasın diye.
   * Başlığa tıklamak ön değerlendirme penceresini açar.
   */
  kapsamliGoruntuleme: {
    title: 'Kapsamlı Görüntüleme',
    lead: 'Olgunluk seviyelerini finansal durum, süreç, dijitalleşme, sürdürülebilirlik ve destek alanlarında ölçerek gelişim fırsatlarını net bir şekilde ortaya koyun.',
    items: [
      'Finansal Durum Haritası',
      'İşletme Olgunluk Haritası',
      'Üretim Süreçleri Haritası',
      'Destek Süreçleri Haritası',
      'Dijital Olgunluk Haritası',
      'Sürdürülebilirlik Haritası',
      'Yeni Yatırım – Fabrika Yalınlık Testi',
    ],
  },
  checkUp: {
    title: 'Check-Up',
    lead: 'İhtiyaç duyduğunuz belirli alana özel check-up kontrolü ile mevcut durum fotoğrafını çekelim, aksiyon planınızı çıkaralım',
    items: [
      'Kalite Check-Up',
      'Planlama Check-Up',
      'Depo Check-Up',
      'Üretim Saha Check-Up',
      'İK Operasyon Check-Up',
      'İK Yetkinlik Gelişimi Check-Up',
      'PUKÖ Döngüsü Check-Up',
      'Strateji Yayılım Check-Up',
    ],
  },
} as const;

/* ─────────────────────────  EKİBİMİZ  ───────────────────────── */

export type TeamMember = {
  name: string;
  tags: readonly string[];
  /** Tek tip portre gelince: '/images/ekip/<dosya>.jpg'. Yokken monogram gösterilir. */
  photo?: string;
};

const members: readonly TeamMember[] = [
  { name: 'M. Caner Akıncı', tags: ['Fabrika Müdürü', 'TPS', 'WCM', 'Y6S', 'Mentor'], photo: '/images/ekip/caner-akinci.jpg' },
  { name: 'İkram Akboğa', tags: ['Stratejik İK', 'Mentor'], photo: '/images/ekip/ikram-akboga.jpg' },
  { name: 'Murat Torun', tags: ['TPS', 'WCM', 'montaj ve lojistik', 'Mentor'], photo: '/images/ekip/murat-torun.jpg' },
];

export const ekibimiz = {
  titleTop: 'Fabrika Doktorları – Mentorlarınız',
  titleBottom: 'Fabrikanızın Gelişimi İçin Yanınızdayız',
  lead: 'Ekipleriniz Fabrika Doktorunun sahada uygulama tecrübesine hızla ulaşsın, uygulayarak gelişsin.',
  foundationsLead:
    '20 yılı aşkın saha tecrübemizin yapıtaşları:',
  foundations: [
    { code: 'TPS', name: 'Toyota Üretim Sistemi' },
    { code: 'WCM', name: 'Dünya Klasında Üretim' },
    { code: 'Y6S', name: 'Yalın Altı Sigma' },
    { code: 'MIT', name: 'Organizasyon ve Değişim Liderliği' },
    { code: 'PMI', name: 'Proje Yönetim Enstitüsü' },
  ],
  members,
} as const;

/* ─────────────────────────  REFERANSLAR  ───────────────────────── */

export const referanslar = {
  titleTop: 'Güvenilir Deneyim, Kanıtlanmış Başarı',
  titleBottom: 'Referanslarımızı İnceleyin',
  lead: 'Güven, işbirliği ve sonuç odaklı yaklaşımımızı görmek için referanslarımızı keşfedin',
  /**
   * Sunumun "Referanslarımız" bölümünün birebir aynısı: 8 firma.
   * note = hover'da ikinci satır (yapılan çalışma).
   */
  logos: [
    { name: "Ammann Teknomak", note: "Destek Süreçleri Haritası (MG)", src: "/images/referanslar/ammann.png" },
    { name: "BMC", note: "Yeni Yatırım Yalınlık Çalışması (YY)", src: "/images/referanslar/bmc.png" },
    { name: "BMC Power", note: "", src: "/images/referanslar/bmcpower.png" },
    { name: "Yanmar Turkey", note: "Sürekli İyileştirme check-up", src: "/images/referanslar/yanmar.png" },
    { name: "Toyo Ink", note: "", src: "/images/referanslar/toyo.png" },
    { name: "Orma", note: "Üretim Süreçleri Haritası (VSM)", src: "/images/referanslar/orma.png" },
    { name: "Verimetrik", note: "Destek Süreçleri Haritası (MG)", src: "/images/referanslar/verimetrik.jpg" },
    { name: "Webreta", note: "Destek Süreçleri Haritası (MG)", src: "/images/referanslar/webreta.png" },
  ] as readonly { name: string; note: string; src: string }[],
} as const;

/* ─────────────────────────  BİZE ULAŞIN  ───────────────────────── */

export const bizeUlasin = {
  infoTitle: 'İletişim Bilgileri',
  infoHeading: 'Ücretsiz ön değerlendirme için randevunuzu oluşturun.',
  infoLead:
    'Fabrikanızın ihtiyaçları için bize ulaşabilirsiniz. Telefon, e-posta veya ofisimiz üzerinden bizimle iletişim kurabilirsiniz.',
} as const;

/* ─────────────────────────  HUKUKİ METİNLER  ───────────────────────── */

export const kvkk = {
  title: 'K.V.K.K. Aydınlatma Metni',
  sections: [
    {
      title: '1. Veri Sorumlusu',
      body: 'Fabrika Doktoru olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla hareket etmekteyiz. İşlenen kişisel verilerin güvenliği ve gizliliği bizim için önem arz etmektedir.',
    },
    {
      title: '2. İşlenen Kişisel Veriler',
      body: 'Ad, soyad, iletişim bilgileri (e-posta, telefon numarası), şirket bilgisi ve sitemizin kullanımı sırasında otomatik yollarla toplanan veriler (IP adresi, çerez bilgileri vb.).',
    },
    {
      title: '3. İşleme Amaçları',
      body: 'Kişisel verileriniz; hizmet taleplerinizin yerine getirilmesi, iletişim kurulması, sözleşme gerekliliklerinin yerine getirilmesi, hukuki yükümlülüklerin yerine getirilmesi, kampanya ve bilgilendirme mesajlarının iletilmesi amacıyla işlenmektedir.',
    },
    {
      title: '4. İşlemenin Hukuki Sebepleri',
      body: 'Kişisel verileriniz, açık rızanıza ve KVKK madde 5/2’de belirtilen diğer hukuki sebeplere dayalı olarak toplanmakta ve işlenmektedir.',
    },
    {
      title: '5. Veri Paylaşımı',
      body: 'Kişisel verileriniz, yalnızca kanunların öngördüğü durumlarda veya hizmetin yerine getirilmesi için iş ortaklarımız, tedarikçilerimiz ve yetkili kamu kurumlarıyla paylaşılabilir.',
    },
    {
      title: '6. Veri Sahibi Hakları',
      body: 'KVKK’nın 11. maddesi uyarınca; kişisel verilerinize erişme, düzeltme, silme veya anonim hâle getirme, işlemenin sınırlandırılmasını talep etme, işlemenin durdurulmasını isteme, veri aktarılabilirliği hakkınızı kullanma haklarına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişim kurabilirsiniz.',
      list: [
        'Kişisel verilerinize erişme',
        'Düzeltme, silme veya anonim hâle getirme',
        'İşlemenin sınırlandırılmasını talep etme',
        'İşlemenin durdurulmasını isteme',
        'Veri aktarılabilirliği hakkınızı kullanma',
      ],
    },
  ],
} as const;

export const cerezler = {
  title: 'Site Kullanımı ve Çerezler Politikası',
  sections: [
    {
      title: '1. Amaç',
      body: 'Bu politika, Fabrika Doktoru web sitesini ziyaret eden kullanıcıların deneyimini geliştirmek için kullanılan çerezlerin türleri ve kullanım amaçları hakkında bilgi vermek amacıyla hazırlanmıştır.',
    },
    {
      title: '2. Çerez Nedir?',
      body: 'Çerez, cihazınıza (bilgisayar, telefon, tablet vb.) gönderilen ve kullanımı boyunca tanımlanmanızı sağlayan küçük veri dosyasıdır.',
    },
    {
      title: '3. Kullanılan Çerez Türleri',
      body: '',
      list: [
        'Zorunlu Çerezler: Sitenin düzgün çalışmasını sağlar.',
        'Analitik Çerezler: Ziyaretçi sayısını ölçer, sayfa ziyaret sürelerini analiz eder.',
        'Fonksiyonel Çerezler: Tercihlerinizi hatırlar (ör. dil seçimi).',
        'Pazarlama Çerezleri: İlgi alanlarınıza uygun reklamları göstermeye yarar.',
      ],
    },
    {
      title: '4. Üçüncü Taraf Çerezler',
      body: 'Google Analytics, Facebook Piksel vb. gibi üçüncü taraf uygulamaların çerezleri yalnızca açık onayınızla kullanılır.',
    },
    {
      title: '5. Çerezlerin Kontrolü',
      body: 'Tarayıcı ayarlarından çerez tercihlerinizi değiştirebilir, tüm çerezleri engelleyebilir ya da silinmesini sağlayabilirsiniz.',
    },
    {
      title: '6. Politikada Değişiklikler',
      body: 'Bu politika zaman zaman güncellenebilir. Son değişiklik tarihi sayfa sonunda yer alır.',
    },
  ],
} as const;
