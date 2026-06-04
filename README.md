# Ayşe Sena Bağdat — Portföy

Modern, iki dilli (EN/TR), erişilebilir ve SEO uyumlu kişisel portföy.
Next.js 15 (App Router), TypeScript, Tailwind CSS ve Framer Motion ile geliştirildi.

---

## 🚀 Hızlı Başlangıç

> Node.js 18.18+ (tercihen 20+) kurulu olmalı. Kontrol: `node -v`
> Yüklü değilse: https://nodejs.org (LTS sürümü)

PowerShell'de proje klasöründe:

```powershell
# 1) Bağımlılıkları yükle
npm install

# 2) Geliştirme sunucusunu başlat
npm run dev
```

Sonra tarayıcıda **http://localhost:3000** adresini aç.
Otomatik olarak **/en** (varsayılan dil) adresine yönlendirilirsin. Türkçe için **/tr**.

Üretim derlemesini denemek için:

```powershell
npm run build
npm run start
```

---

## 📝 İçeriği Düzenleme (en önemli kısım)

**Tüm metinler tek dosyada:** [`src/content/profile.ts`](src/content/profile.ts)

Her alan iki dillidir:

```ts
headline: { en: "Learn. Build. Improve.", tr: "Öğren. Üret. Geliştir." },
```

Burada düzenleyebileceklerin:

- **profile** — ad, ünvan, konum, başlık, hakkımda, e-posta/GitHub/LinkedIn linkleri
- **skills** — yetenek grupları (yüzde yok, kategori kartları)
- **projects** — projeler ve **case study** detayları (problem, çözüm, öğrenilenler, sonuçlar…)
- **journey** — zaman çizelgesi (eğitim, deneyim, dönüm noktaları)
- **certifications** — sertifikalar (şu an gizli, aşağıya bak)
- **focus** — "Şu An" bölümü

UI metinleri (menü, buton etiketleri, form) ise: [`src/i18n/dictionaries.ts`](src/i18n/dictionaries.ts)

### Sertifika bölümünü açma

Şu an gizli. `src/content/profile.ts` içinde:

```ts
showCertifications: false,   //  ->  true yap
```

`true` yaptığında "Sertifikalar" bölümü ve navigasyonda görünür hale gelir.
İçindeki örnek sertifikaları düzenleyip `credentialUrl` ekleyebilirsin.

### Yeni proje ekleme

`projects` dizisine yeni bir nesne ekle. `slug` benzersiz olmalı; detay sayfası
otomatik olarak `/en/projects/<slug>` ve `/tr/projects/<slug>` adresinde oluşur.

---

## 📄 CV ve Görseller

- **CV:** `public/cv/Ayse_Sena_Bagdat_CV.pdf` olarak ekle.
  (Detay: `public/cv/README.txt`) — "Download CV" butonu buna bağlı.
- **Sosyal medya kapak görseli:** `public/og-image.png` (1200×630).
  (Detay: `public/og-image-README.txt`)
- **Favicon:** `public/favicon.svg` hazır (AS monogramı).

---

## ✉️ İletişim Formu (Resend)

Form, `/api/contact` üzerinden Resend ile e-posta gönderir.
Key eklenmeden de site çalışır; key yoksa form "doğrudan e-posta gönder"
seçeneğini gösterir.

1. https://resend.com adresinde ücretsiz hesap aç → **API Keys** → key oluştur.
2. Proje kökünde `.env.example` dosyasını `.env.local` olarak kopyala.
3. Değerleri doldur:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO_EMAIL=ayse.sena.bagdatt@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_SITE_URL=https://senin-adresin.vercel.app
```

> Kendi domainin yoksa `onboarding@resend.dev` test için yeterlidir.
> Kendi domainini Resend'de doğrularsan `CONTACT_FROM_EMAIL` olarak onu kullan.

---

## ☁️ Vercel'e Yayınlama

1. Kodu GitHub'a yükle (yeni bir repo).
2. https://vercel.com → **Add New Project** → repoyu seç.
3. **Environment Variables** kısmına `.env.local`'daki değerleri ekle
   (özellikle `RESEND_API_KEY` ve `NEXT_PUBLIC_SITE_URL`).
4. **Deploy.** Vercel Next.js'i otomatik tanır, ek ayar gerekmez.

Yayından sonra `NEXT_PUBLIC_SITE_URL`'i gerçek adresinle güncellemeyi unutma
(SEO, sitemap ve Open Graph için).

---

## 🗂️ Proje Yapısı

```
src/
├─ app/
│  ├─ layout.tsx              # pass-through kök layout
│  ├─ globals.css
│  ├─ sitemap.ts / robots.ts  # SEO
│  ├─ api/contact/route.ts    # form -> Resend
│  └─ [locale]/
│     ├─ layout.tsx           # <html lang>, metadata, JSON-LD, Navbar/Footer
│     ├─ page.tsx             # tek sayfa: tüm bölümler
│     ├─ not-found.tsx
│     └─ projects/[slug]/page.tsx   # case study detay sayfaları
├─ components/
│  ├─ layout/                 # Navbar, Footer, ThemeToggle, LanguageSwitcher…
│  ├─ sections/               # Hero, About, Skills, Projects, Journey…
│  └─ ui/                     # Button, Card, Badge, Section, Reveal…
├─ content/
│  ├─ profile.ts              # ⭐ TÜM İÇERİK (iki dilli)
│  ├─ categories.ts
│  └─ types.ts
├─ i18n/
│  ├─ config.ts               # diller (en, tr)
│  ├─ dictionaries.ts         # UI metinleri
│  └─ LocaleProvider.tsx
├─ lib/utils.ts
└─ middleware.ts              # dil yönlendirmesi (/ -> /en)
```

---

## ✨ Özellikler

- 🌍 İki dilli (EN varsayılan / TR) — `/[locale]` rota yapısı, hreflang, SEO uyumlu
- 🌗 Açık / koyu tema (next-themes)
- 🧭 Sticky navbar + aktif bölüm vurgusu + yumuşak kaydırma
- 📊 Filtrelenebilir proje vitrini + detaylı case study sayfaları
- 🕒 İnteraktif yolculuk zaman çizelgesi
- 🟢 Dinamik "Şu An" bölümü
- ✉️ Doğrulamalı iletişim formu (Resend)
- ♿ Erişilebilirlik: semantik HTML, ARIA, klavye, "skip to content", reduced-motion
- 🔎 SEO: metadata, Open Graph, Twitter Card, JSON-LD, sitemap, robots
- 📈 Kaydırma ilerleme çubuğu

---

## 🛠️ Teknolojiler

Next.js 15 · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion · next-themes · Resend · lucide-react

---

Made with ☕ by Ayşe Sena Bağdat
