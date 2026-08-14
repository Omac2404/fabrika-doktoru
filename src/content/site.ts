/**
 * Site içeriği — tek kaynak (single source of truth).
 * Tüm metinler fabrikadoktoru.com.tr'den BİREBİR alınmıştır; değiştirilmemelidir.
 * Tasarım değişebilir, içerik sabittir.
 */

export const site = {
  name: 'Fabrika Doktoru',
  tagline: 'Şirketinizde Başarı Reçetesi için Mentorunuz',
  domain: 'fabrikadoktoru.com.tr',
  phone: '+90 532 341 27 70',
  phoneHref: 'tel:+905323412770',
  whatsapp: 'https://wa.me/905323412770',
  email: 'info@fabrikadoktoru.com.tr',
  address: {
    line1: 'Akdeniz Mah. Cumhuriyet Blv. İZQ Girişimcilik Merkezi',
    line2: 'Kapı No: 120',
    line3: '35210 Konak / İzmir / Türkiye',
  },
} as const;

export const nav = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Ekibimiz', href: '/ekibimiz' },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'İnsan Kaynakları', href: '/insan-kaynaklari' },
  { label: 'Bize Ulaşın', href: '/bize-ulasin' },
] as const;

/* ─────────────────────────  ANASAYFA  ───────────────────────── */

export const home = {
  hero: {
    brand: 'Fabrika Doktoru',
    titleTop: 'Şirketinizde Başarı',
    titleBottom: 'Reçetesi için Mentorunuz.',
    subtitle:
      'Yüksek maliyetli danışmanlık programları yerine mentorluk çözümünü seçin.',
    description:
      'Fabrika Doktoru ile yola çıkın, hem ilerleyin, hem ekibinizi geliştirin, uzun vadede kalıcı başarıyı birlikte inşa edin.',
  },
  services: [
    {
      title: 'Kapsamlı Görüntüleme',
      description:
        'Şirketinizin tüm operasyonlarını bütünsel olarak analiz ediyoruz. Riskleri tespit ediyor, verimsizlikleri ortaya koyuyoruz.',
    },
    {
      title: 'Check – Up',
      description:
        'Üretimden yönetime kadar tüm süreçlerinizi detaylı analiz ediyor, şirket sağlığınızı sayısal verilerle ölçüyoruz.',
    },
    {
      title: 'Yazılım',
      description:
        'Üretim takibinden performans analizine kadar özelleştirilmiş yazılım çözümleriyle dijital dönüşümünüzü başlatıyoruz.',
    },
    {
      title: 'Eğitim',
      description:
        'Çalışanlarınıza özel hazırlanmış eğitimlerle verimliliği artırın, iş kazalarını azaltın.',
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
  team: {
    title: 'Ekibimiz',
    description:
      'Üretim alanı yönetimi ve yalın araçları, destek süreçleri, hedeflerle yönetim, strateji yayılımı, insan kaynağı yönetimi, yetenek yönetiminden teknik belgelendirmeye, AR-GE merkezi kurulumuna kadar geniş bir spektrumda uygulayarak öğrenmiş ve uygulatarak öğreten güçlü bir ekibiz.',
    description2:
      'Uzakdoğu, Avrupa ve Türkiye’nin otomotiv devlerinin ve yan sanayiiinin, global kurumsal şirketlerin know-how’ına Fabrika Doktoru ile sahip olun.',
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
  intro: {
    title: 'Fabrika Doktoru = Mentorunuz',
    lead: 'Mentorunuzla yönetim ekibiniz bir araya geliyor, öncelikli ihtiyacınıza hizalanıyor.',
    paragraphs: [
      'Bugünkü durumunuzu birlikte ortaya koyuyor, yol haritasını, ilerleme adımlarını birlikte belirliyoruz. Ekipleriniz, mentorunuzun desteği ve koçluğu ile ilerlemeye başlıyor.',
      'Yüksek adam x gün maliyetli danışmanlık projeleri yerine optimum kaynak kullanımı ile ekiplerinizin eğitim aldığı, sahada uygulayarak geliştiği başarı yolcululuğu. Koordinasyon, koçluk, mentorluk sunan yol arkadaşınız, Fabrika Doktorunuz yanınızda.',
    ],
  },
  kapsamliGoruntuleme: {
    title: 'Kapsamlı Görüntüleme',
    lead: 'Olgunluk seviyelerini finansal durum, süreç, dijitalleşme, sürdürülebilirlik ve destek alanlarında ölçerek gelişim fırsatlarını net bir şekilde ortaya koyun.',
    items: [
      {
        title: 'Finansal Durum Haritası',
        description:
          'İşletmenizin kar-zarar durumu, nakit akışı, alacakların çözümü, acil öncelikler, küçülme reçetesi, kriz dönemi yol haritası, sabit ve değişken giderlerinde tasarruf fırsatları, satış – pazarlama – üretim – tasarım dahil tüm bölümlerde mavi yaka ve beyaz yaka doluluk – benchmark ve analizi',
      },
      {
        title: 'İşletme Olgunluk Haritası',
        description:
          'İşletmenizin müşreti memnuniyetinden İSG ve çevreye, görsel yönetimden takım çalışmasına birbirinden farklı onbir farklı boyutta olgunluk haritasını çıkaralım. Buradan öncelikli ihtiyaçlarınıza göre birlikte plan yaparak gelişime başlayalım.',
      },
      {
        title: 'Üretim Süreçleri Haritası',
        description:
          'Müşterilerinizden satışa, satıştan üretim planlamaya, üretim birimlerine ve tedarikçilerinize kadar sipariş bilgisi nasıl akıyor? Tedarikçilerinizden müşterilerinize kadar hammadde, yarı ürün ve bitmiş ürün nasıl akıyor? Kısacası, değer akışı haritanız nasıl? Nerede stok yığılıyor? Kalite hataları hangi adımı engelliyor? Üretimde öncelikle çözülmesi gereken problemler hangileri? Belirleyelim, plan yapıp gelişime başlayın.',
      },
      {
        title: 'Destek Süreçleri Haritası',
        description:
          'Üretime yön ve hareket veren planlama süreciniz, ürünü tanımlayan tasarım süreciniz, satın alma ve tedarik süreçleriniz, depo, lojistik süreçleriniz nasıl akıyor? Veri işleme ve iletişim adımlarınız ne kadar verimli? Tekrar eden iletişim problemleri nasıl çözülebilir? İletişim hataları nedeniyle ne kadar süre kaybına ve maliyete katlanıyorsunuz? Üretim süreçlerindeki değer akış haritanıza benzer şekilde destek süreçlerinizin haritasını çıkaralım. Öncelikli konuları birlikte belirleyip çözelim.',
      },
      {
        title: 'Dijital Olgunluk Haritası',
        description:
          'Dijital olgunluğunuzu ölçmek için Tübitak Dijital Dönüşüm Değerlenirme Modelinden yararlanarak fotoğrafı çekelim, ilerleme yol haritanızı belirleyelim.',
      },
      {
        title: 'Sürdürülebilirlik Haritası',
        description:
          'Çevre, Sosyal, Yönetim ve finansal sürdürülebilirlik fotoğrafınızı çekelim, öncelikli alanlarınızda harekete geçelim.',
      },
      {
        title: 'Yeni Yatırım – Fabrika Yalınlık Testi',
        description:
          'Yeni yatırım öncesi fabrikanızın süreç, layout ve organizasyon açısından ne kadar hazır olduğunu birlikte ölçelim. Genişleme planları, üretim akışı, malzeme hareketleri ve insan kaynağı yapısını detaylıca analiz etmeyi öğrenin. Doğru zamanda, doğru yere yatırım için stratejik önerileri birlikte belirleyelim.',
      },
    ],
  },
  checkUp: {
    title: 'Check-Up',
    lead: 'İhtiyaç duyduğunuz belirli alana özel check-up kontrolü ile mevcut durum fotoğrafını çekelim, aksiyon planınızı çıkaralım',
    items: [
      {
        title: 'Nakit Akışı – Alacaklar Check-up',
        description:
          'Nakit akışınızı ve alacaklarınızı takip ediyor musunuz? Acil önlem gerekiyor mu? Atılması gereken adımlar neler? Birlikte inceleyelim',
      },
      {
        title: 'Kalite Check-Up',
        description:
          'Kalite kontrol süreçleriniz ne kadar etkin? Müşteri memnuniyetinden tedarik zincirinizin en başına kadar uzanan rotada kalitesizlik nedeniyle ayda ve yılda kaç TL kaybınız var? Bu kayıpların hangisinden başlayarak çözmelisiniz? Kalite güvence fotoğrafınız nedir?',
      },
      {
        title: 'Planlama Check-Up',
        description:
          'Üretim planlamasında, satıştan etkin bilgi geliyor mu? Bu bilgilerden öngörüler tahminler geçici ve kesin siparişler nasıl alınıyor? Hammadde tedarik planlaması nasıl yapılıyor? Stoklar nasıl yönetiliyor? Düzenli olarak azaltılıyor mu? Şirket çapında kaynak yönetimi için ERP programı kullanımda mı? Gelişim fırsatları var mı? Planlama süreciniz beklentilerinizi karşılıyor mu?',
      },
      {
        title: 'Depo-Saha Check-Up',
        description:
          'Planlama altında bir detay olarak görünse de, depo yönetiminin hatasız çalışması, tüm maliyetleri en düşük seviyede tutmak için vazgeçilmez koşuldur. Sizin depo yönetiminiz, stok doğruluğunuz, tüm giriş çıkış işlemlerinin akışı ve düzgünlüğü ne aşamada? Üretime nasıl malzeme besleniyor? Hangi alanlarda gelişim sağlanmalı?',
      },
      {
        title: 'Üretim Saha Check-Up',
        description:
          '5S aktif ve devrede mi? Üretim sahasında görsel yönetim nasıl? Hat başı panolarından depo-üretim arası malzeme aktarımına, 5S tertip düzenden standart iş kurgularına kadar farklı yönetim konularında üretim sahası nasıl? Öncelikli gelişim noktaları neler?',
      },
      {
        title: 'İK Operasyon Check-Up',
        description:
          'İşe alım, bordro, özlük, disiplin, yasal zorunluluklar, kademe ve ücret yapılarınız, yetkinlikler, eğitim, gelişim, yedekleme, kariyer ve terfi yönetimi, iş değerleme dahil insan kaynakları süreçleriniz ne durumda?',
      },
      {
        title: 'İsrafla Mücadele Check-Up',
        description:
          'Hangi süreçlerde kaynak israfı oluşuyor? Beklemeler, gereksiz hareketler, stok fazlalıkları ne seviyede? Zaman, iş gücü ve malzeme gibi kritik kaynaklar etkin kullanılıyor mu? İsrafın ana nedenleri neler ve iyileştirme fırsatları nerede?',
      },
      {
        title: 'Strateji Yayılım Check-Up',
        description:
          'Şirket stratejileri sahaya ne kadar yansıyor? Hedefler tüm birimlerce doğru anlaşılmış ve aksiyona dökülmüş mü? Göstergeler çalışanların günlük işlerine ne kadar entegre olmuş durumda? Stratejiden sahaya geçişte kopukluklar nerede oluşuyor?',
      },
      {
        title: 'İyileştirme Check-Up',
        description:
          'Sahada sistematik bir iyileştirme kültürü var mı? Çalışanlar fikirlerini paylaşmakta ne kadar istekli? Yapılan iyileştirmeler sürdürülebilir sonuçlar üretiyor mu? Hangi alanlar sürekli gelişim için öncelikli görünüyor?',
      },
      {
        title: 'Problem Çözme Check-Up',
        description:
          'Problemler doğru tanımlanıp kök nedenine inilerek mi çözülüyor? Aynı sorunlar tekrar ediyor mu? Problem çözme süreci ekipler tarafından ne kadar sistematik uygulanıyor? Hangi araçlar kullanılıyor ve ne ölçüde etkili sonuçlar alınıyor?',
      },
      {
        title: 'Proje Yönetim Check-Up',
        description:
          'İşletmeler ve firma çapında yıllık bir Proje Yönetim süreci kurulu mu? Her yıl düzenli olarak belirli projeler tanımlanıyor, sorumluları, liderleri, ekip üyeleri, kaynaklar netleştiriliyor mu? Gözden geçiriliyor mu? Açılan projelerin takibi raporlaması ve sonuçlanması başarılı mı? Firmaya faydası ölçülüyor mu? Bu çerçevede hayal ettiğiniz proje takip sistemi nedir?',
      },
      {
        title: 'Yetenek Yönetim Check-Up',
        description:
          'Doğru yetenek doğru pozisyonda mı? Çalışanların gelişimi için planlı bir eğitim ve kariyer yönetimi yapılıyor mu? Yetkinlikler performansa nasıl yansıyor? Kilit yeteneklerin elde tutulması için ne gibi stratejiler uygulanıyor?',
      },
    ],
  },
  yazilim: {
    title: 'Yazılım',
    lead: 'Operasyonel süreçlerinizi dijitalleştirin, izlenebilirliği artırın. Akıllı yazılımlarımızla karar alma, takip ve raporlama süreçlerinizi kolaylaştırın.',
    items: [
      {
        title: 'Video Analiz Sistemi',
        description:
          'Üretim sahasında yapılan işlerin kayda alınarak analiz edilmesini sağlayan bu sistem, zaman etüdü ve iş akışı optimizasyonunda devrim yaratır. Operasyon süreleri, beklemeler, hareket israfı ve standart dışı uygulamalar yüksek hassasiyetle tespit edilir. Gelişim alanları görsel verilerle desteklenerek net şekilde ortaya konur.',
      },
      {
        title: 'Öneri – Kaizen Takip Sistemi',
        description:
          'Çalışanlardan gelen önerilerin sistemli biçimde toplanmasını, değerlendirilmesini ve hayata geçirilmesini sağlayan dijital platformdur. Kaizen mantığıyla sürekli iyileştirme kültürünü destekler, katkı sağlayan çalışanları görünür kılar. Tüm süreçler izlenebilir ve ölçülebilir hale getirilir.',
      },
      {
        title: 'Saha Yönetimi için Dijital Asakai',
        description:
          'Günlük üretim toplantılarını dijital ortama taşıyan bu sistem, anlık veri paylaşımı ve sahadaki sorunların hızlı çözümü için ideal bir altyapı sunar. Departmanlar arası koordinasyonu güçlendirir, standardize edilmiş toplantı yapısıyla sürdürülebilir iletişim sağlar. Saha performansını anlık olarak izlenebilir ve yönetilebilir hale getirir.',
      },
    ],
  },
  egitim: {
    title: 'Eğitim',
    lead: 'Tamamen online esnek eğitimler, planlı grup eğitimleri ve planlı 1-1 eğitimlerle çalışan gelişimini sürekli kılın. Uygun maliyetle etkin öğrenmeyi destekleyin.',
    items: [
      {
        title: 'Fabrika Okulu',
        description:
          'Kendinize uygun saatlerde online eğitim modüllerini izleyin, ilgili çalışmaları tamamlayın, grup ve 1-1 eğitimlerde eğitmen ile haftalık gözden geçirmelere katılarak eğitiminizi tamamlayın, sertifikanıza ulaşın.',
      },
    ],
  },
} as const;

/* ─────────────────────────  EKİBİMİZ  ───────────────────────── */

export const ekibimiz = {
  titleTop: 'Fabrika Doktorları – Mentorlarınız',
  titleBottom: 'Fabrikanızın Gelişimi İçin Yanınızdayız',
  lead: 'Ekipleriniz Fabrika Doktorunun sahada uygulama tecrübesine hızla ulaşsın, uygulayarak gelişsin.',
} as const;

/* ─────────────────────────  REFERANSLAR  ───────────────────────── */

export const referanslar = {
  titleTop: 'Güvenilir Deneyim, Kanıtlanmış Başarı',
  titleBottom: 'Referanslarımızı İnceleyin',
  lead: 'Güven, işbirliği ve sonuç odaklı yaklaşımımızı görmek için referanslarımızı keşfedin',
} as const;

/* ─────────────────────────  İNSAN KAYNAKLARI  ───────────────────────── */

export const insanKaynaklari = {
  titleTop: 'Ekibimizin Yeni Üyesi Sen Ol',
  titleBottom: 'Aramıza Katıl',
  lead: 'Enerjin ve uzmanlığınla geleceğe değer kat.',
  sections: [
    {
      title: 'Geleceğimizi Birlikte İnşa Edelim',
      description:
        'Fabrika Doktoru olarak, her gün iş süreçlerini iyileştirmek ve işletmelerin geleceğine değer katmak için çalışıyoruz. Bu yolculukta en büyük gücümüz, uzmanlıkları ve enerjileriyle fark yaratan ekip arkadaşlarımız.',
    },
    {
      title: 'Siz de Ekibimizin Bir Parçası Olun',
      description:
        'Kariyerinizde yeni bir adım atmak, farklı sektörlerde projelere katkı sağlamak ve sürekli gelişim odaklı bir ekiple çalışmak isterseniz sizi aramızda görmekten mutluluk duyarız. Açık pozisyonlarımız olmasa bile, gelecekteki fırsatlar için başvurularınızı memnuniyetle değerlendiriyoruz.',
    },
  ],
  basvuru: {
    title: 'Başvuru',
    description: 'CV’nizi ve kısa bir ön yazınızı bizimle paylaşabilirsiniz:',
  },
} as const;

/* ─────────────────────────  BİZE ULAŞIN  ───────────────────────── */

export const bizeUlasin = {
  titleTop: 'Doğru İletişim, Güçlü İşbirliği',
  titleBottom: 'Bizimle Temasa Geçin',
  lead: 'İyileştirme, dijitalleşme ve süreç danışmanlığı için ilk adımı birlikte atalım.',
  infoTitle: 'İletişim Bilgileri',
  infoLead:
    'Fabrikanızın ihtiyaçları için bize ulaşabilirsiniz. Telefon, e-posta veya ofisimiz üzerinden bizimle iletişim kurabilirsiniz.',
  formTitle: 'İletişim Formu',
  formLead:
    'Aşağıdaki formu doldurarak bizimle kolayca iletişime geçebilirsiniz. İhtiyacınıza özel çözümler için en kısa sürede dönüş yapacağız.',
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
