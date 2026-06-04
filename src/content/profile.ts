import type { PortfolioData } from "./types";

/**
 * SINGLE SOURCE OF TRUTH for all portfolio content.
 * Every string is provided in both English (en) and Turkish (tr).
 * Edit here to update the whole site — no hardcoded copy in components.
 */
export const portfolio: PortfolioData = {
  profile: {
    name: "Ayşe Sena Bağdat",
    role: {
      en: "Management Information Systems Student",
      tr: "Yönetim Bilişim Sistemleri Öğrencisi",
    },
    location: { en: "Ankara, Türkiye", tr: "Ankara, Türkiye" },
    headline: { en: "Learn. Build. Improve.", tr: "Öğren. Üret. Geliştir." },
    subtitle: {
      en: "Multidisciplinary MIS student who codes, designs, analyzes data, and leads teams — working toward full-stack software development.",
      tr: "Kod yazan, tasarlayan, veri analiz eden ve ekip yöneten çok yönlü bir MIS öğrencisi — full-stack yazılım geliştirme hedefiyle.",
    },
    about: {
      en: [
        "I'm a 3rd-year Management Information Systems student at Ankara Medipol University — right at the intersection of business and technology. My focus is software development: I've worked with Python, C, Java, SQL, HTML/CSS and JavaScript, and I'm actively building toward full-stack development. I'm interested in both frontend and backend, and how they come together to create things people can actually use.",
        "Beyond coursework, I build and lead. I founded InnoLearnTech (ILTECH), a student team competing in Teknofest, ESC30 and UNIDES, and co-founded the civic initiative \"Genç Ne İster?\". I captain teams in the Pardus bug-hunting competition and a European Solidarity Corps (ESC30) project.",
        "My work spans UI/UX design (Figma), data analysis (SPSS, SQL), computer vision (OpenCV, MediaPipe), SAP/ERP processes, and cloud security fundamentals (Huawei HSD). I'm multidisciplinary by nature — I learn fast, ship real projects, and like owning problems end to end.",
      ],
      tr: [
        "Ankara Medipol Üniversitesi'nde 3. sınıf Yönetim Bilişim Sistemleri öğrencisiyim; iş ve teknolojinin tam kesişimindeyim. Odağım yazılım geliştirme: Python, C, Java, SQL, HTML/CSS ve JavaScript üzerine çalıştım ve aktif olarak full-stack geliştirmeye ilerliyorum. Hem frontend hem backend ilgimi çekiyor — ikisinin bir araya gelip kullanılabilir şeyler üretmesi beni heyecanlandırıyor.",
        "Ders dışında da üretip liderlik yapıyorum. Teknofest, ESC30 ve UNIDES'te yarışan öğrenci ekibi InnoLearnTech'i (ILTECH) kurdum ve \"Genç Ne İster?\" sivil inisiyatifinin kurucu ortağıyım. Pardus hata yakalama yarışmasında ve bir Avrupa Dayanışma Programı (ESC30) projesinde ekip kaptanlığı yapıyorum.",
        "Çalışmalarım UI/UX tasarımı (Figma), veri analizi (SPSS, SQL), bilgisayarlı görü (OpenCV, MediaPipe), SAP/ERP süreçleri ve bulut güvenliği temellerini (Huawei HSD) kapsıyor. Doğası gereği çok yönlüyüm — hızlı öğrenir, gerçek projeler çıkarır ve problemleri baştan sona sahiplenmeyi severim.",
      ],
    },
    cvPath: {
      en: "/cv/Ayse_Sena_Bagdat_CV.pdf",
      tr: "/cv/Ayse_Sena_Bagdat_CV.pdf",
    },
    social: {
      email: "ayse.sena.bagdatt@gmail.com",
      linkedin: "https://www.linkedin.com/in/ayşe-sena-bağdat",
      github: "https://github.com/Setunya",
    },
  },

  skills: [
    {
      id: "programming",
      label: { en: "Programming Languages", tr: "Programlama Dilleri" },
      icon: "Code2",
      skills: ["Python", "Java", "C", "JavaScript", "SQL"],
    },
    {
      id: "web",
      label: { en: "Web & Frontend", tr: "Web & Frontend" },
      icon: "Globe",
      skills: ["HTML", "CSS", "React", "TypeScript", "Vite"],
    },
    {
      id: "data",
      label: { en: "Data & Analytics", tr: "Veri & Analiz" },
      icon: "BarChart3",
      skills: ["SQL", "SPSS", "Data Analysis", "SWOT"],
    },
    {
      id: "ai",
      label: { en: "AI & Image Processing", tr: "Yapay Zeka & Görüntü İşleme" },
      icon: "BrainCircuit",
      skills: ["OpenCV", "MediaPipe", "NumPy"],
    },
    {
      id: "design",
      label: { en: "Design & UX", tr: "Tasarım & UX" },
      icon: "PenTool",
      skills: ["Figma", "UI/UX Design", "Auto Layout", "Components & Variants"],
    },
    {
      id: "erp",
      label: { en: "ERP & Business", tr: "ERP & İş Süreçleri" },
      icon: "Workflow",
      skills: ["SAP / ERP", "Project Management", "Organizational Planning"],
    },
    {
      id: "systems",
      label: { en: "Systems & Security", tr: "Sistem & Güvenlik" },
      icon: "ShieldCheck",
      skills: ["Linux", "Pardus", "Huawei Cloud IAM", "MFA"],
    },
    {
      id: "tools",
      label: { en: "Tools", tr: "Araçlar" },
      icon: "Wrench",
      skills: ["Git", "GitHub", "VS Code", "Netlify"],
    },
    {
      id: "languages",
      label: { en: "Languages", tr: "Diller" },
      icon: "Languages",
      skills: ["Türkçe (Native)", "English (B1)"],
    },
  ],

  projects: [
    {
      slug: "health-tracker-uiux",
      title: "Health Tracker — UI/UX Design",
      category: "design",
      featured: true,
      emoji: "🩺",
      tagline: {
        en: "A clean, calming mobile UI for daily health tracking, designed end-to-end in Figma.",
        tr: "Günlük sağlık takibi için Figma'da baştan sona tasarlanmış sade ve huzurlu bir mobil arayüz.",
      },
      role: { en: "Product / UI-UX Designer", tr: "Ürün / UI-UX Tasarımcısı" },
      timeline: "2025",
      tech: ["Figma", "Auto Layout", "Components", "Variants", "Design Systems"],
      links: {
        figma: "#",
      },
      screenshots: [
        "/images/health-tracker/screen-1-login.png",
        "/images/health-tracker/screen-2-home.png",
        "/images/health-tracker/screen-3-detail.png",
      ],
      problem: {
        en: "People struggle to track daily health data consistently because most apps feel cluttered and clinical. The goal was a mobile interface where logging and reviewing health information feels effortless and reassuring.",
        tr: "Çoğu uygulama karmaşık ve klinik hissettirdiği için insanlar günlük sağlık verilerini düzenli takip etmekte zorlanıyor. Amaç, sağlık bilgisini kaydetmenin ve incelemenin zahmetsiz ve güven verici hissettirdiği bir mobil arayüzdü.",
      },
      approach: {
        en: "I designed three core screens — login, home, and a detail page — with a consistent grid, generous spacing, and a clear visual hierarchy. A mint-green and turquoise palette communicates calm and trust, with gradient primary buttons for a modern feel. I built the system on Figma's Auto Layout for flexible alignment, reusable Components for repeated UI, and Variants to express active/passive button states.",
        tr: "Tutarlı bir grid, ferah boşluk kullanımı ve net bir görsel hiyerarşiyle üç temel ekran tasarladım — giriş, ana sayfa ve detay sayfası. Mint yeşili ve turkuaz paleti huzur ve güven hissi verirken, gradyan ana butonlar modern bir görünüm katıyor. Sistemi esnek hizalama için Figma Auto Layout, tekrar eden UI için yeniden kullanılabilir Component'ler ve buton aktif/pasif durumları için Variant'lar üzerine kurdum.",
      },
      challenges: {
        en: "Keeping visual consistency across screens while the layout had to flex for different content lengths. Auto Layout plus a strict spacing scale solved most alignment drift.",
        tr: "Düzenin farklı içerik uzunluklarına göre esnemesi gerekirken ekranlar arası görsel tutarlılığı korumak. Auto Layout ve katı bir boşluk ölçeği hizalama kaymalarının çoğunu çözdü.",
      },
      learnings: {
        en: [
          "How a real design system (components + variants) keeps a product consistent and fast to iterate.",
          "Color and typography choices directly shape how trustworthy a health product feels.",
          "Designing mobile-first forces ruthless prioritization of what matters on screen.",
        ],
        tr: [
          "Gerçek bir tasarım sisteminin (component + variant) bir ürünü nasıl tutarlı ve hızlı geliştirilebilir tuttuğunu.",
          "Renk ve tipografi seçimlerinin bir sağlık ürününün ne kadar güvenilir hissettirdiğini doğrudan şekillendirdiğini.",
          "Mobil öncelikli tasarımın, ekranda neyin önemli olduğunu acımasızca önceliklendirmeyi zorunlu kıldığını.",
        ],
      },
      results: {
        en: [
          "A cohesive 3-screen prototype with a reusable component library.",
          "A documented design rationale covering color, typography, and layout decisions.",
        ],
        tr: [
          "Yeniden kullanılabilir bir component kütüphanesine sahip, bütünlüklü 3 ekranlık prototip.",
          "Renk, tipografi ve düzen kararlarını kapsayan belgelenmiş bir tasarım gerekçesi.",
        ],
      },
      future: {
        en: [
          "Add charts for weekly health trends and a dark mode variant.",
          "Run a small usability test and iterate on the navigation.",
          "Hand off to a coded React Native prototype.",
        ],
        tr: [
          "Haftalık sağlık trendleri için grafikler ve bir karanlık mod varyantı eklemek.",
          "Küçük bir kullanılabilirlik testi yapıp navigasyonu iyileştirmek.",
          "Kodlanmış bir React Native prototipine aktarmak.",
        ],
      },
    },
    {
      slug: "todo-app",
      title: "Todo App",
      category: "software",
      featured: true,
      emoji: "✅",
      tagline: {
        en: "A fast, minimal task manager built with React, TypeScript and Vite — deployed and live.",
        tr: "React, TypeScript ve Vite ile geliştirilmiş, hızlı ve sade bir görev yöneticisi — yayında ve canlı.",
      },
      role: { en: "Frontend Developer", tr: "Frontend Geliştirici" },
      timeline: "2025",
      tech: ["React", "TypeScript", "Vite", "CSS", "Netlify"],
      links: {
        github: "https://github.com/Setunya/todo-app",
        demo: "https://symphonious-capybara-968806.netlify.app/",
      },
      problem: {
        en: "I wanted to move from tutorials to shipping a real, deployed front-end — and to get comfortable with a modern, type-safe React workflow rather than plain JavaScript.",
        tr: "Tutoriallerden çıkıp gerçekten yayınlanmış bir front-end ortaya koymak istedim — ve düz JavaScript yerine modern, tip güvenli bir React iş akışında rahatlamak istedim.",
      },
      approach: {
        en: "I built a clean task manager with React + TypeScript on Vite, with create / complete / delete flows and a focused, distraction-free UI. I used TypeScript for safer component props and state, kept the component structure small and reusable, and deployed continuously to Netlify.",
        tr: "Vite üzerinde React + TypeScript ile, görev oluştur / tamamla / sil akışları ve odaklı, dikkat dağıtmayan bir arayüze sahip temiz bir görev yöneticisi geliştirdim. Daha güvenli component prop ve state'leri için TypeScript kullandım, component yapısını küçük ve yeniden kullanılabilir tuttum ve sürekli olarak Netlify'a dağıttım.",
      },
      challenges: {
        en: "Getting TypeScript types right for state and event handlers was new at first; reading the compiler errors carefully turned out to be the fastest way to learn.",
        tr: "State ve olay yöneticileri için TypeScript tiplerini doğru kurmak başta yeniydi; derleyici hatalarını dikkatle okumak öğrenmenin en hızlı yolu oldu.",
      },
      learnings: {
        en: [
          "The full loop of building → committing → deploying a live front-end.",
          "Why TypeScript catches bugs before they reach the browser.",
          "Keeping components small and single-purpose makes features easy to add.",
        ],
        tr: [
          "Bir front-end'i geliştirme → commit etme → canlıya alma döngüsünün tamamını.",
          "TypeScript'in hataları tarayıcıya ulaşmadan neden yakaladığını.",
          "Component'leri küçük ve tek amaçlı tutmanın özellik eklemeyi kolaylaştırdığını.",
        ],
      },
      results: {
        en: [
          "A live, publicly deployed app on Netlify.",
          "A clean TypeScript-first React codebase on GitHub.",
        ],
        tr: [
          "Netlify'da canlı, herkese açık yayınlanmış bir uygulama.",
          "GitHub'da temiz, TypeScript öncelikli bir React kod tabanı.",
        ],
      },
      future: {
        en: [
          "Add persistent storage (localStorage, then a backend).",
          "Categories, due dates, and filtering.",
          "Unit tests and accessibility passes.",
        ],
        tr: [
          "Kalıcı depolama eklemek (localStorage, sonra bir backend).",
          "Kategoriler, son tarihler ve filtreleme.",
          "Birim testleri ve erişilebilirlik iyileştirmeleri.",
        ],
      },
    },
    {
      slug: "driveguard",
      title: "DriveGuard — Driver Fatigue Detection",
      category: "ai-data",
      featured: true,
      emoji: "🚗",
      tagline: {
        en: "A computer-vision system that detects driver drowsiness and distraction in real time from a webcam.",
        tr: "Webcam görüntüsünden sürücünün uykululuk ve dikkat dağınıklığını gerçek zamanlı tespit eden bir bilgisayarlı görü sistemi.",
      },
      role: { en: "Developer", tr: "Geliştirici" },
      timeline: "2025",
      tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      links: {
        github: "https://github.com/Setunya/driveguard",
      },
      problem: {
        en: "Driver fatigue is a major cause of road accidents. I wanted to explore whether an ordinary webcam could warn a driver early — before microsleep becomes dangerous — without any special hardware.",
        tr: "Sürücü yorgunluğu trafik kazalarının başlıca nedenlerinden biri. Özel bir donanım olmadan, sıradan bir webcam'in sürücüyü erkenden — mikro uyku tehlikeli hale gelmeden önce — uyarıp uyaramayacağını araştırmak istedim.",
      },
      approach: {
        en: "Using MediaPipe face mesh and OpenCV, I track facial landmarks to compute Eye Aspect Ratio (EAR) for closed eyes, Mouth Aspect Ratio (MAR) for yawning, and head pose (yaw/pitch) for attention. A short calibration on startup reads the driver's neutral pose so the system reacts to deviation, not absolute angles. Different alert states (drowsy / yawning / distracted) trigger distinct alarm tones and tempos.",
        tr: "MediaPipe yüz örgüsü ve OpenCV kullanarak yüz işaret noktalarını takip ediyorum: kapalı gözler için Göz En-Boy Oranı (EAR), esneme için Ağız En-Boy Oranı (MAR) ve dikkat için baş pozu (yaw/pitch). Açılışta yapılan kısa bir kalibrasyon, sürücünün nötr pozunu okur; böylece sistem mutlak açılara değil, sapmaya tepki verir. Farklı uyarı durumları (uykulu / esneme / dikkatsiz) ayrı alarm tonları ve temposu tetikler.",
      },
      challenges: {
        en: "Head pose initially read a high pitch even when looking straight ahead, causing false alarms. I solved it by calibrating a neutral baseline at startup and measuring deviation from it. I also pinned mediapipe==0.10.14, because newer releases removed the solutions API the project relies on.",
        tr: "Baş pozu, düz bakışta bile başta yüksek pitch ölçüyor ve yanlış alarm veriyordu. Açılışta nötr bir referans kalibre edip ondan sapmayı ölçerek çözdüm. Ayrıca mediapipe==0.10.14 sürümünü sabitledim; çünkü yeni sürümler projenin dayandığı solutions API'sini kaldırmış.",
      },
      learnings: {
        en: [
          "How to translate a real-world signal (a tired face) into measurable features like EAR and MAR.",
          "Calibration matters: relative measurements beat absolute thresholds for real people.",
          "Dependency pinning is part of reproducible engineering, not an afterthought.",
        ],
        tr: [
          "Gerçek dünyadan bir sinyali (yorgun bir yüz) EAR ve MAR gibi ölçülebilir özelliklere nasıl çevireceğimi.",
          "Kalibrasyonun önemini: gerçek insanlar için göreli ölçümler mutlak eşiklerden iyidir.",
          "Bağımlılık sabitlemenin, sonradan akla gelen bir şey değil, tekrarlanabilir mühendisliğin parçası olduğunu.",
        ],
      },
      results: {
        en: [
          "A working real-time prototype detecting drowsiness, yawning, and distraction with state-aware audio alerts.",
          "Tunable thresholds (EAR/MAR/pose) plus an on-screen HUD for debugging.",
        ],
        tr: [
          "Uykululuk, esneme ve dikkat dağınıklığını duruma duyarlı sesli uyarılarla tespit eden, çalışan gerçek zamanlı bir prototip.",
          "Ayarlanabilir eşikler (EAR/MAR/poz) ve hata ayıklama için ekran üstü HUD.",
        ],
      },
      future: {
        en: [
          "Wrap it in a Streamlit interface for easy demos.",
          "Log fatigue events over a session for later review.",
          "Test across lighting conditions and add glasses robustness.",
        ],
        tr: [
          "Kolay demolar için bir Streamlit arayüzüyle paketlemek.",
          "Bir oturum boyunca yorgunluk olaylarını sonradan incelemek üzere kaydetmek.",
          "Farklı ışık koşullarında test etmek ve gözlük dayanıklılığı eklemek.",
        ],
      },
    },
    {
      slug: "mini-erp-dashboard",
      title: "MiniERP Dashboard",
      category: "software",
      featured: false,
      emoji: "📊",
      tagline: {
        en: "A learning-focused ERP dashboard with stock tracking and order views, built to understand SAP/ERP flows in React.",
        tr: "SAP/ERP akışlarını React'te anlamak için geliştirilen; stok takibi ve sipariş görünümleri içeren öğrenme odaklı bir ERP panosu.",
      },
      role: { en: "Developer", tr: "Geliştirici" },
      timeline: "2025",
      tech: ["React", "JavaScript", "SAP / ERP concepts"],
      links: {
        github: "https://github.com/Setunya/mini-erp-dashboard",
      },
      problem: {
        en: "ERP systems run real businesses, but they're abstract until you build one. I wanted to understand core ERP flows — stock, orders, navigation — by implementing a small dashboard myself.",
        tr: "ERP sistemleri gerçek işletmeleri yürütür ama bir tanesini inşa edene kadar soyut kalırlar. Temel ERP akışlarını — stok, sipariş, navigasyon — küçük bir panoyu kendim geliştirerek anlamak istedim.",
      },
      approach: {
        en: "I built a mini dashboard in React covering basic stock tracking, order viewing, and multi-page navigation. In parallel, I completed Udemy SAP/ERP training to map what I was building onto real ERP concepts and terminology.",
        tr: "React ile temel stok takibi, sipariş görüntüleme ve çok sayfalı navigasyonu kapsayan bir mini pano geliştirdim. Paralelde, geliştirdiğim şeyi gerçek ERP kavram ve terminolojisiyle eşleştirmek için Udemy SAP/ERP eğitimini tamamladım.",
      },
      challenges: {
        en: "Structuring state and navigation so the dashboard felt like a coherent app rather than disconnected pages.",
        tr: "Panonun kopuk sayfalar yerine tutarlı bir uygulama gibi hissettirmesi için state ve navigasyonu yapılandırmak.",
      },
      learnings: {
        en: [
          "How core ERP modules (inventory, orders) connect in practice.",
          "Structuring a multi-page React app with shared state.",
          "Pairing hands-on building with formal training accelerates understanding.",
        ],
        tr: [
          "Temel ERP modüllerinin (stok, sipariş) pratikte nasıl bağlandığını.",
          "Paylaşımlı state ile çok sayfalı bir React uygulamasını yapılandırmayı.",
          "Uygulamalı geliştirmeyi resmi eğitimle birleştirmenin anlamayı hızlandırdığını.",
        ],
      },
      results: {
        en: [
          "A functional mini ERP dashboard demonstrating stock and order flows.",
          "Completed SAP/ERP training applied directly to the build.",
        ],
        tr: [
          "Stok ve sipariş akışlarını gösteren işlevsel bir mini ERP panosu.",
          "Doğrudan geliştirmeye uygulanan, tamamlanmış SAP/ERP eğitimi.",
        ],
      },
      future: {
        en: [
          "Connect to a real backend / database.",
          "Add charts and role-based views.",
          "Improve the UI with the design system from the health-tracker project.",
        ],
        tr: [
          "Gerçek bir backend / veritabanına bağlamak.",
          "Grafikler ve role dayalı görünümler eklemek.",
          "Arayüzü, sağlık takip projesindeki tasarım sistemiyle iyileştirmek.",
        ],
      },
    },
    {
      slug: "ai-employment-research",
      title: "AI's Impact on IT-Sector Employment",
      category: "ai-data",
      featured: true,
      emoji: "🔬",
      tagline: {
        en: "A TÜBİTAK 2209-A research project analyzing how AI development affects employment in the IT sector.",
        tr: "Yapay zeka gelişiminin bilişim sektöründeki istihdamı nasıl etkilediğini inceleyen bir TÜBİTAK 2209-A araştırma projesi.",
      },
      role: { en: "Researcher (data analysis)", tr: "Araştırmacı (veri analizi)" },
      timeline: "2024 – 2025",
      tech: ["SPSS", "Statistical Analysis", "SWOT", "Academic Research"],
      links: {},
      problem: {
        en: "AI is reshaping the IT job market, but its effect on employment is debated. Our TÜBİTAK 2209-A project set out to study this with data rather than opinion.",
        tr: "Yapay zeka, bilişim iş piyasasını yeniden şekillendiriyor ancak istihdama etkisi tartışmalı. TÜBİTAK 2209-A projemiz bunu görüşle değil, veriyle incelemeyi amaçladı.",
      },
      approach: {
        en: "Within the project I ran the quantitative analysis: I applied statistical analysis in SPSS to the collected data, then synthesized the findings into a SWOT analysis to frame the opportunities and risks AI brings to IT employment.",
        tr: "Proje kapsamında nicel analizi ben yürüttüm: toplanan veriye SPSS'te istatistiksel analiz uyguladım, ardından bulguları yapay zekanın bilişim istihdamına getirdiği fırsat ve riskleri çerçevelemek için bir SWOT analizine dönüştürdüm.",
      },
      challenges: {
        en: "Turning raw survey data into statistically meaningful conclusions, and presenting them clearly enough for a non-technical audience to act on.",
        tr: "Ham anket verisini istatistiksel olarak anlamlı sonuçlara dönüştürmek ve bunları teknik olmayan bir kitlenin harekete geçebileceği netlikte sunmak.",
      },
      learnings: {
        en: [
          "Hands-on statistical analysis and interpretation in SPSS.",
          "How to structure findings with a SWOT framework for decision-makers.",
          "The discipline of evidence-based, academically grounded conclusions.",
        ],
        tr: [
          "SPSS'te uygulamalı istatistiksel analiz ve yorumlama.",
          "Bulguları karar vericiler için SWOT çerçevesiyle yapılandırmayı.",
          "Kanıta dayalı, akademik temelli sonuç çıkarma disiplinini.",
        ],
      },
      results: {
        en: [
          "Completed SPSS analysis and a SWOT synthesis feeding the project's conclusions.",
          "Experience contributing to a nationally funded (TÜBİTAK) research program.",
        ],
        tr: [
          "Projenin sonuçlarını besleyen tamamlanmış SPSS analizi ve SWOT sentezi.",
          "Ulusal destekli (TÜBİTAK) bir araştırma programına katkı deneyimi.",
        ],
      },
      future: {
        en: [
          "Extend the analysis with a larger, more recent dataset.",
          "Compare findings across regions or company sizes.",
        ],
        tr: [
          "Analizi daha büyük ve güncel bir veri setiyle genişletmek.",
          "Bulguları bölgeler veya şirket büyüklükleri arasında karşılaştırmak.",
        ],
      },
    },
    {
      slug: "pardus-bug-hunt",
      title: "Pardus Bug-Hunting Competition — Teknofest",
      category: "leadership",
      featured: false,
      emoji: "🐧",
      tagline: {
        en: "Captaining a team to find, document, and report bugs in Pardus, Türkiye's Linux-based OS.",
        tr: "Türkiye'nin Linux tabanlı işletim sistemi Pardus'ta hata bulan, belgeleyen ve raporlayan bir ekibe kaptanlık.",
      },
      role: { en: "Team Captain", tr: "Ekip Kaptanı" },
      timeline: "2025",
      tech: ["Pardus", "Linux", "QA / Testing", "Bug Reporting"],
      links: {},
      problem: {
        en: "Open-source operating systems improve through systematic testing. The Teknofest Pardus competition challenges teams to find and clearly report real defects to help the OS get better.",
        tr: "Açık kaynak işletim sistemleri sistematik testle gelişir. Teknofest Pardus yarışması, işletim sisteminin iyileşmesine yardımcı olmak için ekipleri gerçek hataları bulup net bir şekilde raporlamaya davet ediyor.",
      },
      approach: {
        en: "As captain, I organized the team's testing effort: writing structured test scenarios, dividing coverage across the system, and ensuring every bug was reproduced and reported with clear steps and severity. The work produced a large set of documented test cases.",
        tr: "Kaptan olarak ekibin test çalışmasını organize ettim: yapılandırılmış test senaryoları yazmak, kapsamı sistem genelinde bölüştürmek ve her hatanın net adımlar ve önem derecesiyle yeniden üretilip raporlanmasını sağlamak. Çalışma, belgelenmiş geniş bir test senaryosu seti üretti.",
      },
      challenges: {
        en: "Coordinating a team to cover a whole OS without overlap, and keeping bug reports consistent and reproducible.",
        tr: "Bir ekibi, çakışma olmadan tüm bir işletim sistemini kapsayacak şekilde koordine etmek ve hata raporlarını tutarlı ve tekrar üretilebilir tutmak.",
      },
      learnings: {
        en: [
          "How to lead and coordinate a QA team toward a shared goal.",
          "Writing test scenarios and reproducible, actionable bug reports.",
          "Working hands-on inside a Linux/Pardus environment.",
        ],
        tr: [
          "Bir QA ekibini ortak bir hedefe doğru yönetmeyi ve koordine etmeyi.",
          "Test senaryoları ve tekrar üretilebilir, eyleme geçirilebilir hata raporları yazmayı.",
          "Linux/Pardus ortamı içinde uygulamalı çalışmayı.",
        ],
      },
      results: {
        en: [
          "A structured test-scenario suite and a set of documented, reported bugs.",
          "Leadership experience captaining a competition team.",
        ],
        tr: [
          "Yapılandırılmış bir test senaryosu paketi ve belgelenmiş, raporlanmış hatalar seti.",
          "Bir yarışma ekibine kaptanlık yapma liderlik deneyimi.",
        ],
      },
      future: {
        en: [
          "Automate parts of the regression testing.",
          "Build a reusable reporting template for future competitions.",
        ],
        tr: [
          "Regresyon testinin bir kısmını otomatikleştirmek.",
          "Gelecek yarışmalar için yeniden kullanılabilir bir raporlama şablonu oluşturmak.",
        ],
      },
    },
    {
      slug: "esc30-solidarity",
      title: "European Solidarity Corps (ESC30)",
      category: "leadership",
      featured: false,
      emoji: "🌍",
      tagline: {
        en: "Leading a team developing a solidarity project under the EU's European Solidarity Corps programme.",
        tr: "AB'nin Avrupa Dayanışma Programı kapsamında bir dayanışma projesi geliştiren ekibe liderlik.",
      },
      role: { en: "Team Captain / Lead", tr: "Ekip Kaptanı / Yürütücü" },
      timeline: "2025 – present",
      tech: ["Project Management", "Team Leadership", "EU Programmes"],
      links: {},
      problem: {
        en: "The European Solidarity Corps funds youth-led projects that create real social impact — but they require structured planning, coordination, and follow-through to succeed.",
        tr: "Avrupa Dayanışma Programı, gerçek sosyal etki yaratan gençlik liderliğindeki projeleri destekler — ancak başarılı olmaları için yapılandırılmış planlama, koordinasyon ve takip gerektirir.",
      },
      approach: {
        en: "I lead the team developing the project: shaping the idea, planning activities, and coordinating the people involved so the project meets the programme's solidarity goals.",
        tr: "Projeyi geliştiren ekibe liderlik ediyorum: fikri şekillendirmek, faaliyetleri planlamak ve projenin programın dayanışma hedeflerini karşılaması için katılımcıları koordine etmek.",
      },
      challenges: {
        en: "Aligning a volunteer team and keeping momentum across the project lifecycle.",
        tr: "Gönüllü bir ekibi hizalamak ve proje yaşam döngüsü boyunca ivmeyi korumak.",
      },
      learnings: {
        en: [
          "Planning and running a project within an international (EU) framework.",
          "Leading volunteers and keeping a team aligned.",
          "Translating social goals into concrete activities.",
        ],
        tr: [
          "Uluslararası (AB) bir çerçevede proje planlamayı ve yürütmeyi.",
          "Gönüllülere liderlik etmeyi ve bir ekibi hizada tutmayı.",
          "Sosyal hedefleri somut faaliyetlere dönüştürmeyi.",
        ],
      },
      results: {
        en: ["Active leadership of an ongoing ESC30 solidarity project."],
        tr: ["Devam eden bir ESC30 dayanışma projesinin aktif liderliği."],
      },
      future: {
        en: ["Deliver the project's planned activities and measure their impact."],
        tr: ["Projenin planlanan faaliyetlerini hayata geçirmek ve etkisini ölçmek."],
      },
    },
    {
      slug: "huawei-cloud-security",
      title: "Huawei HSD Cloud Security Bootcamp",
      category: "security",
      featured: false,
      emoji: "🔐",
      tagline: {
        en: "Hands-on cloud security training: configuring IAM, MFA, and exploring security operations on Huawei Cloud.",
        tr: "Uygulamalı bulut güvenliği eğitimi: Huawei Cloud üzerinde IAM, MFA yapılandırması ve güvenlik operasyonlarını keşfetme.",
      },
      role: { en: "Participant", tr: "Katılımcı" },
      timeline: "2025",
      tech: ["Huawei Cloud IAM", "MFA", "Cloud Security", "Log Management"],
      links: {},
      problem: {
        en: "Cloud security is foundational for any modern IT career. The Huawei HSD Türkiye bootcamp offered a structured path into cloud, network, and security fundamentals.",
        tr: "Bulut güvenliği, modern her BT kariyeri için temeldir. Huawei HSD Türkiye bootcamp'i bulut, ağ ve güvenlik temellerine yapılandırılmış bir giriş sundu.",
      },
      approach: {
        en: "I completed a hands-on Identity and Access Management (IAM) exercise on Huawei Cloud — configuring users, groups, policies, and MFA. Alongside, I studied data security and encryption, log management, security event analysis, vulnerability detection/remediation, and compliance frameworks like PCI and KVKK.",
        tr: "Huawei Cloud üzerinde uygulamalı bir Kimlik ve Erişim Yönetimi (IAM) çalışması tamamladım — kullanıcı, grup, policy ve MFA yapılandırması. Yanında veri güvenliği ve şifreleme, log yönetimi, güvenlik olay analizi, açık tespiti/giderme ve PCI ile KVKK gibi uyumluluk çerçeveleri üzerine çalıştım.",
      },
      challenges: {
        en: "Mapping abstract security concepts onto concrete cloud configuration steps for the first time.",
        tr: "Soyut güvenlik kavramlarını ilk kez somut bulut yapılandırma adımlarına oturtmak.",
      },
      learnings: {
        en: [
          "Configuring IAM, policies, and MFA on a real cloud platform.",
          "Fundamentals of log management and security event analysis.",
          "How compliance (PCI, KVKK) shapes real security practice.",
        ],
        tr: [
          "Gerçek bir bulut platformunda IAM, policy ve MFA yapılandırmayı.",
          "Log yönetimi ve güvenlik olay analizinin temellerini.",
          "Uyumluluğun (PCI, KVKK) gerçek güvenlik pratiğini nasıl şekillendirdiğini.",
        ],
      },
      results: {
        en: [
          "Completed a hands-on Huawei Cloud IAM + MFA configuration.",
          "A working foundation in cloud and security operations.",
        ],
        tr: [
          "Tamamlanmış uygulamalı bir Huawei Cloud IAM + MFA yapılandırması.",
          "Bulut ve güvenlik operasyonlarında çalışan bir temel.",
        ],
      },
      future: {
        en: [
          "Pursue a cloud or security certification to formalize the foundation.",
          "Build a small project applying IAM best practices.",
        ],
        tr: [
          "Temeli resmileştirmek için bir bulut veya güvenlik sertifikası almak.",
          "IAM en iyi uygulamalarını uygulayan küçük bir proje geliştirmek.",
        ],
      },
    },
  ],

  journey: [
    {
      id: "medipol-mis",
      kind: "education",
      date: "2023 — present",
      title: {
        en: "B.Sc. Management Information Systems",
        tr: "Yönetim Bilişim Sistemleri (Lisans)",
      },
      org: { en: "Ankara Medipol University", tr: "Ankara Medipol Üniversitesi" },
      description: {
        en: "Started my MIS degree — the foundation that connects business and technology. Currently a 3rd-year student.",
        tr: "İş ve teknolojiyi birleştiren temel olan MIS lisansıma başladım. Şu anda 3. sınıf öğrencisiyim.",
      },
      current: true,
    },
    {
      id: "tto-intern",
      kind: "experience",
      date: "2024 — 2025",
      title: { en: "Intern, Technology Transfer Office", tr: "Stajyer, Teknoloji Transfer Ofisi" },
      org: { en: "Ankara Medipol University (TTO)", tr: "Ankara Medipol Üniversitesi (TTO)" },
      description: {
        en: "Researched national & EU funding programmes (TÜBİTAK, KOSGEB, EU), analyzed calls, edited the newsletter, and prepared project tracking documents and company portfolios.",
        tr: "Ulusal ve AB destek programlarını (TÜBİTAK, KOSGEB, AB) araştırdım, çağrıları analiz ettim, bülten editörlüğü yaptım, proje takip belgeleri ve firma portföyleri hazırladım.",
      },
    },
    {
      id: "anadolu",
      kind: "education",
      date: "2024 — present",
      title: { en: "Office Management & Executive Assistance", tr: "Büro Yönetimi ve Yönetici Asistanlığı" },
      org: { en: "Anadolu University", tr: "Anadolu Üniversitesi" },
      description: {
        en: "A second associate degree, broadening my organizational and management foundation alongside MIS.",
        tr: "MIS'in yanında organizasyon ve yönetim temelimi genişleten ikinci bir ön lisans programı.",
      },
    },
    {
      id: "tubitak",
      kind: "project",
      date: "2024 — 2025",
      title: { en: "TÜBİTAK 2209-A Research", tr: "TÜBİTAK 2209-A Araştırması" },
      org: { en: "AI & IT Employment Study", tr: "Yapay Zeka & Bilişim İstihdamı Çalışması" },
      description: {
        en: "Ran SPSS statistical analysis and a SWOT synthesis on how AI affects IT-sector employment.",
        tr: "Yapay zekanın bilişim sektörü istihdamına etkisi üzerine SPSS istatistiksel analizi ve SWOT sentezi yürüttüm.",
      },
    },
    {
      id: "huawei",
      kind: "milestone",
      date: "2025",
      title: { en: "Huawei HSD Cloud Security Bootcamp", tr: "Huawei HSD Bulut Güvenliği Bootcamp" },
      org: { en: "HSD Türkiye × Huawei", tr: "HSD Türkiye × Huawei" },
      description: {
        en: "Completed hands-on Cloud IAM & MFA configuration and security-operations fundamentals.",
        tr: "Uygulamalı Cloud IAM & MFA yapılandırması ve güvenlik operasyonları temellerini tamamladım.",
      },
    },
    {
      id: "pardus",
      kind: "project",
      date: "2025",
      title: { en: "Pardus Bug-Hunt — Teknofest (Captain)", tr: "Pardus Hata Yakalama — Teknofest (Kaptan)" },
      org: { en: "Teknofest Competition", tr: "Teknofest Yarışması" },
      description: {
        en: "Captained a team writing test scenarios and reporting bugs in the Pardus operating system.",
        tr: "Pardus işletim sisteminde test senaryoları yazıp hata raporlayan bir ekibe kaptanlık ettim.",
      },
    },
    {
      id: "iltech",
      kind: "milestone",
      date: "2025 — present",
      title: { en: "Founder, InnoLearnTech (ILTECH)", tr: "Kurucu, InnoLearnTech (ILTECH)" },
      org: { en: "Student Technology Team", tr: "Öğrenci Teknoloji Ekibi" },
      description: {
        en: "Founded and captain a team competing in Teknofest, ESC30, UNIDES and other technology programmes.",
        tr: "Teknofest, ESC30, UNIDES ve diğer teknoloji programlarında yarışan bir ekibi kurdum ve kaptanlığını yapıyorum.",
      },
      current: true,
    },
    {
      id: "genc-ne-ister",
      kind: "milestone",
      date: "2026 — present",
      title: { en: "Co-Founder, “Genç Ne İster?”", tr: "Kurucu Ortağı, “Genç Ne İster?”" },
      org: { en: "Civic Initiative", tr: "Sivil İnisiyatif" },
      description: {
        en: "Co-founded a youth-focused civic initiative.",
        tr: "Gençlik odaklı bir sivil inisiyatifin kurucu ortağı oldum.",
      },
      current: true,
    },
  ],

  // Hidden for now — flip showCertifications to true once credential links are ready.
  certifications: [
    {
      id: "huawei-hsd",
      title: { en: "HSD Cloud Security Bootcamp", tr: "HSD Bulut Güvenliği Bootcamp" },
      issuer: { en: "HSD Türkiye × Huawei", tr: "HSD Türkiye × Huawei" },
      date: "2025",
    },
    {
      id: "entrepreneurship",
      title: {
        en: "Applied Entrepreneurship Programme for Women & Youth",
        tr: "Kadın ve Gençler için Uygulamalı Girişimcilik Programı",
      },
      issuer: { en: "Ankara Development Agency", tr: "Ankara Kalkınma Ajansı" },
      date: "2025",
    },
    {
      id: "tech4youth",
      title: { en: "Tech4Youth Programme", tr: "Tech4Youth Programı" },
      issuer: {
        en: "Women in Science & Technology Association",
        tr: "Bilim ve Teknoloji Kadın Derneği",
      },
      date: "2025",
    },
  ],
  showCertifications: false,

  focus: [
    {
      id: "sap",
      icon: "Workflow",
      text: {
        en: "Going deeper into SAP/ERP processes through the MiniERP project.",
        tr: "MiniERP projesi üzerinden SAP/ERP süreçlerine daha derin iniyorum.",
      },
    },
    {
      id: "fullstack",
      icon: "Layers",
      text: {
        en: "Working toward full-stack development — deepening both frontend (React) and backend skills.",
        tr: "Full-stack geliştirmeye ilerliyorum — hem frontend (React) hem backend becerilerimi derinleştiriyorum.",
      },
    },
    {
      id: "iltech",
      icon: "Rocket",
      text: {
        en: "Growing the ILTECH team toward Teknofest & UNIDES.",
        tr: "ILTECH ekibini Teknofest & UNIDES'e doğru büyütüyorum.",
      },
    },
    {
      id: "english",
      icon: "Languages",
      text: {
        en: "Moving my English from B1 toward B2 for international opportunities.",
        tr: "Uluslararası fırsatlar için İngilizcemi B1'den B2'ye taşıyorum.",
      },
    },
    {
      id: "internships",
      icon: "Briefcase",
      text: {
        en: "Actively exploring internships in tech, data, and ERP — in Türkiye and Europe.",
        tr: "Türkiye ve Avrupa'da teknoloji, veri ve ERP alanında staj fırsatlarını aktif olarak araştırıyorum.",
      },
    },
  ],
};
