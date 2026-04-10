import { useEffect, useRef, useState } from "react";

// ─── ClicksScale brand ────────────────────────────────────────────────────────
const CS_LOGO = "https://clickscale.agency/assets/click-scale-logo-IBjJ635-.png";

const TEAM = [
  { photo: "https://clickscale.agency/assets/kristaps-krankelis-CDjPm5xS.png", name: "Kristaps Krankelis", title: "Līdzdibinātājs un CEO", linkedin: "#" },
  { photo: "https://clickscale.agency/assets/martins-arins-C_NV8N2_.png", name: "Mārtiņš Āriņš", title: "Līdzdibinātājs un stratēģijas direktors", linkedin: "#" },
];

const SKILLS = [
  "Performance marketing", "E-komercijas izstrāde", "Konversiju optimizācija",
  "Datu balstīta pieeja", "Mērogojami risinājumi", "Ilgtermiņa sadarbība", "Stratēģiskā plānošana",
];

const CS_TESTIMONIALS = [
  { name: "Jānis Bērziņš", company: "AgroTech SIA", text: "ClicksScale izveidoja mūsu mājas lapu 3 nedēļu laikā. Jauno klientu pieprasījums pieauga jau pirmajā mēnesī — rezultāts pārsniedza cerības.", stars: 5 },
  { name: "Inga Kalniņa", company: "Baltic Grain OÜ", text: "Profesionāla komanda, kas saprot lauksaimniecības nozari. Mājaslapa izskatās moderna un uzreiz rada uzticamības sajūtu pie klientiem.", stars: 5 },
  { name: "Māris Ozols", company: "ZS Ozolkalns", text: "Beidzot mājaslapa, ar kuru var lepoties. Klienti paši min, ka uzreiz jūtas pārliecināti darīt biznesu ar mums.", stars: 5 },
];

const CS_FAQ = [
  { q: "Cik ilgi aizņem jaunas mājaslapas izveide?", a: "Tipiska mājaslapa ir gatava 3–6 nedēļu laikā. Šo demonstrācijas lapu mēs izveidojām 48 stundu laikā — kā pierādījumu tam, ko esam spējīgi izdarīt." },
  { q: "Cik maksā jauna mājaslapa?", a: "Cena atkarīga no projekta apjoma. Mēs piedāvājam bezmaksas konsultāciju, kurā saprotam jūsu vajadzības un sagatavosim precīzu piedāvājumu bez slēptajām izmaksām." },
  { q: "Ko ietver mājaslapa SEO ziņā?", a: "Katra mājaslapa ietver tehnisko SEO optimizāciju, strukturētos datus (schema.org), lapu ātruma optimizāciju un mobilās versijas pielāgošanu. Tas palīdz atrast jūs gan Google, gan AI meklētājos." },
  { q: "Vai jūs nodrošināt arī uzturēšanu pēc palaišanas?", a: "Jā. Mēs piedāvājam uzturēšanas pakalpojumus, regulārus atjauninājumus un tehnisko atbalstu. Jūs koncentrējaties uz savu biznesu — mēs parūpēsimies par mājas lapu." },
  { q: "Vai varu redzēt vairāk jūsu darbu piemērus?", a: "Protams — portfolio un klientu veiksmes stāsti pieejami clickscale.agency/lv/veiksmes-stasti. Tur var redzēt reālus pirms/pēc piemērus." },
];

// ─── EcoAgroForest assets ─────────────────────────────────────────────────────
const EAF = {
  logo: '/eaf-logo.png',
  green: "#3d7a3d",
  greenDark: "#1e4d1e",
  greenDeep: "#0d260d",
  slides: [
    "https://site-1807114.mozfiles.com/files/1807114/catitems/m/ECOAGROFOREST%20SIA-498c8bcc.jpg",
    "/hero_banner.png",
  ],
};

const NAV_ITEMS = [
  { label: "Par mums", sub: [] },
  { label: "Produkti", sub: ["Organominerālais pamatmēslojums", "Augu augšanas stimulants", "Augsnes kondicionieris", "Individuālie maisījumi"] },
  { label: "Ražošana", sub: ["Izejmateriāli", "Ražošanas process", "Kvalitātes kontrole"] },
  { label: "Zinātne & KKI", sub: [] },
  { label: "Kontakti", sub: [] },
];

const SERVICES = [
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2L5 13h4l-2.5 7h11l-2.5-7h4L12 2z"/><line x1="12" y1="20" x2="12" y2="23"/></svg>), name: "Meža atlikumi kā izejviela", desc: "Koksnes izstrādes blakusprodukti — sveķi, mizas, zari, skujas — nenonāk atkritumu poligonā" },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 2v6h6"/><path d="M3 8C6 4 10 2 14 2a10 10 0 0 1 7 17"/><path d="M21 22v-6h-6"/><path d="M21 16c-3 4-7 6-11 6A10 10 0 0 1 3 5"/></svg>), name: "Bezatlikumu pārstrāde", desc: "Katra organiskā daļa tiek pārstrādāta — cirkulārā ekonomika praksē" },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14 2v6l3.44 5.84A2 2 0 0 1 15.72 16H8.28a2 2 0 0 1-1.72-2.16L10 8V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>), name: "KKI zinātniskie pētījumi", desc: "Sadarbībā ar Latvijas Valsts koksnes ķīmijas institūtu — zinātniski pamatoti produkti" },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M7 20h10"/><path d="M10 20c5.5-2.5 4-6 0-6"/><path d="M10 14c3.5 0 6-2 6-5s-2.5-5-6-5-6 2-6 5 2.5 5 6 5"/><path d="M4 9c0 3 2.5 5 6 5"/></svg>), name: "Augsnes uzlabošana", desc: "Humīnskābes un organiskās vielas atjauno augsnes struktūru un mikrobioma daudzveidību" },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 5.5 12 3c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>), name: "Bioaktīvie augu stimulanti", desc: "Koksnes ekstraktu savienojumi veicina dīgšanu, sakņu augšanu un pretestību stresam" },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>), name: "Ilgtspējīga lauksaimniecība", desc: "Mazāk sintētisko ķimikāliju, veselīgāka augsne, labāka ražas kvalitāte sezonā pēc sezonas" },
];

// ─── Audit data (swap per client) ────────────────────────────────────────────
const AUDIT = {
  domain: "EcoAgroForest SIA",
  timeTag: "48 st. laikā",
  problems: [
    "Nav mājaslapas — uzņēmums nav atrodams Google meklēšanā",
    "Potenciālie klienti neatrod kontaktinformāciju tiešsaistē",
    "Nav digitāla pakalpojumu kataloga — prezentācija tikai klātienē vai pa tālruni",
    "Konkurenti ar mājaslapa saņem jūsu potenciālos klientus",
    "Nav kontaktformas — pieprasījumi tiek zaudēti ārpus darba laika",
    "Meklēšanas sistēmas un AI nevar ieteikt jūsu pakalpojumus",
  ],
  gains: [
    "Produktu katalogs ar zinātniski pamatotiem sastāviem un pielietojumu",
    "KKI sadarbības stāsts — uzticamības un inovācijas pierādījums tiešsaistē",
    "Tiešsaistes pieprasījumu forma — pieejama 24/7 lauksaimniekiem visā Latvijā",
    "SEO optimizācija — redzami organiskās lauksaimniecības un mēslošanas meklējienos",
    "Schema.org — Google rāda produktus, adresi un kontaktus tieši meklēšanā",
    "AI laikmeta meklētāji iesaka produktus ilgtspējīgas lauksaimniecības meklējienos",
  ],
};

// ─── SEO content (swap per client) ───────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Aigars Freimanis",
    company: "ZS \"Freimaņi\", Jelgavas nov.",
    text: "Organominerālais pamatmēslojums pilnībā aizstāja sintētiskos mēslus rapša laukā. Augsnes struktūra uzlabojās redzami jau pirmajā sezonā — sēklu dīgšana ātrāka par 20%.",
    stars: 5,
  },
  {
    name: "Inga Bērziņa",
    company: "BIO Lauku saimniecība, Cēsu nov.",
    text: "Beidzot produkts, kas atbilst bioloģiskās lauksaimniecības standartiem un darbojas. Augsnes kondicionieris uzlaboja ūdens aizturi smilšainā augsnē — rezultāts pārsteidza.",
    stars: 5,
  },
  {
    name: "Jānis Ozoliņš",
    company: "ZS \"Ozolkalns\", Dobeles nov.",
    text: "Zinātniski pamatoti produkti un godīga komunikācija. Tas, ka izejvielas nāk no vietas vietējā meža un KKI pētniecības — piešķir uzticamību. Izmantoju jau trešo sezonu.",
    stars: 5,
  },
];

const FAQ_ITEMS = [
  { q: "No kādiem izejmateriāliem tiek izgatavoti produkti?", a: "Produkti tiek izgatavoti no mežsaimniecības blakusproduktiem — koksnes mizas, zariem, skujām, koksnes pelniem un lignīna savienojumiem. Izejvielas papildina minerālie komponenti, nodrošinot pilnvērtīgu augu barošanu." },
  { q: "Kāda ir atšķirība no parastajiem sintētiskajiem mēsliem?", a: "Sintētiskie mēsli darbojas ātri, bet izskalojās un noplicina augsni ilgtermiņā. Mūsu organominerālie produkti vienlaikus baro augus UN uzlabo augsnes struktūru — humīnskābes un bioaktīvie savienojumi paliek augsnē un strādā vairākas sezonas." },
  { q: "Kā KKI sadarbība ietekmē produktu kvalitāti?", a: "Latvijas Valsts koksnes ķīmijas institūts (KKI) ir ilggadīgs pētnieku partneris. Viņu atklājumi par koksnes ķīmijas savienojumiem — sorbentiem, augšanas stimulantiem un augsnes uzlabotājiem — veido zinātnisko pamatu mūsu produktu formulām." },
  { q: "Kādiem kultūraugiem piemēroti produkti?", a: "Produkti piemēroti graudaugiem (kvieši, mieži, rapsis), dārzeņiem, augļu dārziem un aramzemēm. Organominerālais pamatmēslojums un kondicionieris ir universāli — augu augšanas stimulants ir efektīvāks intensīvas audzēšanas kultūrām." },
  { q: "Vai veicat augsnes analīzi pirms ieteikuma?", a: "Jā — augsnes analīze ir pamats precīzam ieteikumam. Mūsu speciālisti novērtē augsnes pH, organisko vielu saturu un trūkstošos elementus, pēc tam iesaka optimālo produktu kombināciju un devu jūsu konkrētajam laukam." },
  { q: "Kā pasūtīt un kādi ir piegādes nosacījumi?", a: "Sazinieties pa e-pastu inagroforest@gmail.com vai zvaniet +371 25148850. Piegādājam visā Latvijā — daudzumi, laiks un cena tiek saskaņoti individuāli. Minimālais pasūtījums atkarīgs no produkta veida." },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5 text-yellow-400 text-base leading-none">
    {Array.from({ length: 5 }).map((_, i) => <span key={i} className={i < n ? "text-yellow-400" : "text-gray-200"}>★</span>)}
  </div>
);

// ─── Icons ────────────────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
  </svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const MapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [slide, setSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCsFaq, setOpenCsFaq] = useState<number | null>(null);
  const [showDemoToast, setShowDemoToast] = useState(false);
  const demoToast = (e: React.MouseEvent) => { e.preventDefault(); setShowDemoToast(true); setTimeout(() => setShowDemoToast(false), 3500); };

  // Schema.org JSON-LD — FAQPage + LocalBusiness
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "name": "EcoAgroForest SIA",
          "description": "Organominerālo mēslošanas līdzekļu ražotājs Latvijā — produkti izgatavoti no mežsaimniecības blakusproduktiem sadarbībā ar KKI.",
          "address": { "@type": "PostalAddress", "streetAddress": "Mārkalnes iela 20", "addressLocality": "Rīga", "postalCode": "LV-1024", "addressCountry": "LV" },
          "telephone": "+37125148850",
          "email": "inagroforest@gmail.com",
          "areaServed": ["Latvia"],
          "foundingDate": "2010",
        },
        {
          "@type": "FAQPage",
          "mainEntity": FAQ_ITEMS.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a },
          })),
        },
      ],
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "page-schema";
    el.textContent = JSON.stringify(schema);
    document.getElementById("page-schema")?.remove();
    document.head.appendChild(el);
    return () => { document.getElementById("page-schema")?.remove(); };
  }, []);

  useEffect(() => {
    if (EAF.slides.length <= 1) return;
    const t = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setSlide((s) => (s + 1) % EAF.slides.length);
        setFadeIn(true);
      }, 300);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const prevSlide = () => {
    setFadeIn(false);
    setTimeout(() => { setSlide((s) => (s - 1 + EAF.slides.length) % EAF.slides.length); setFadeIn(true); }, 200);
  };
  const nextSlide = () => {
    setFadeIn(false);
    setTimeout(() => { setSlide((s) => (s + 1) % EAF.slides.length); setFadeIn(true); }, 200);
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const scrollTeased = useRef(false);
  useEffect(() => {
    if (scrollTeased.current) return;
    scrollTeased.current = true;
    const timer = setTimeout(() => {
      window.scrollTo({ top: 120, behavior: "smooth" });
      setTimeout(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, 600);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Demo toast */}
      {showDemoToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-gray-900 text-white text-sm font-semibold px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in max-w-sm text-center">
          <span className="text-blue-400 text-lg flex-shrink-0">ℹ</span>
          <span>Šī ir demo lapa. Lai iegūtu pilnu pieredzi, sazinieties ar <span className="text-blue-400">ClicksScale</span>.</span>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — CLICKSSCALE DEMO FRAME
      ══════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col font-body" style={{ background: 'linear-gradient(135deg, #0238F4 0%, #7A1DF2 45%, #00D6C9 100%)' }}>
        <header className="sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 pt-4">
            <div className="bg-white/90 backdrop-blur-xl rounded-full shadow-xl border border-white/50 px-6 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={CS_LOGO} alt="ClicksScale" className="h-8 object-contain" />
                <div className="hidden sm:flex flex-col justify-center leading-tight">
                  <p className="text-[11px] font-semibold text-gray-600">Tīmekļa izstrādes &amp;</p>
                  <p className="text-[11px] font-semibold text-gray-600">digitālā mārketinga aģentūra</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://clickscale.agency/lv/veiksmes-stasti" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-1.5 rounded-full transition-all duration-200 hidden sm:block whitespace-nowrap">
                  Apskati mūsu citus klientus
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
          <div className="flex flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <img src="/lab-workers.png" alt="Lab production of organic fertilizers" className="object-cover rounded-xl drop-shadow-lg" style={{ width: '200px', height: '200px' }} />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-sm font-medium px-4 py-2 rounded-full text-highlight">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight" />
              </span>
              Personalizēta demonstrācija — EcoAgroForest SIA
            </div>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Mēs izveidojām šo lapu<br />
              <span className="text-cyan-300">speciāli priekš jums</span>
            </h1>
            <button
              onClick={() => scrollTo("eaf")}
              className="inline-flex items-center gap-2 bg-highlight text-highlight-foreground font-bold px-8 py-4 rounded-lg shadow-glow-yellow hover:shadow-glow-yellow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer text-lg"
            >
              SKATĪT DEMO LAPU ZEMĀK <span className="inline-block animate-chevron-bounce"><ChevronDown /></span>
            </button>
            <p className="text-xs text-white/50">Bezmaksas demonstrācija · Nav saistošu pienākumu</p>
          </div>

          {/* Glassmorphism audit cards */}
          <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-10 mb-10">
            {/* Before */}
            <div className="border-2 border-highlight rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl">
              <div className="bg-white/15 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-b border-white/10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] mb-0.5 text-highlight">Ko mēs pamanījām</p>
                  <p className="text-sm font-semibold text-white">Digitālā klātbūtne</p>
                </div>
                <span className="bg-red-500 text-black text-[11px] font-bold px-3 py-1 rounded-full">nav mājaslapas</span>
              </div>
              <div className="px-6 py-5 space-y-3">
                {AUDIT.problems.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-300 text-xs font-bold">✕</span>
                    <span className="text-sm text-white">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="border-2 border-highlight rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl">
              <div className="bg-white/15 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-b border-white/10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-highlight mb-0.5">Ko mēs izveidojām</p>
                  <p className="text-sm font-semibold text-white">Jaunā versija priekš jums</p>
                </div>
                <span className="text-highlight-foreground text-[11px] font-bold px-3 py-1 rounded-full bg-lime-500">Demo lapa</span>
              </div>
              <div className="px-6 py-5 space-y-3">
                {AUDIT.gains.map((g) => (
                  <div key={g} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 text-xs font-bold">✓</span>
                    <span className="text-sm text-white">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Ticker 1 — ŠEIT SĀKAS */}
      <div>
        <div className="warning-stripes" />
        <div style={{ backgroundColor: '#C8FF24' }} className="overflow-hidden whitespace-nowrap py-1">
          <div className="inline-block animate-marquee">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="inline-block px-6 text-sm font-bold uppercase tracking-[0.1em]" style={{ fontFamily: "'Orbitron', sans-serif", color: '#000000' }}>
                ŠEIT SĀKAS JŪSU DEMO LAPA
              </span>
            ))}
          </div>
        </div>
        <div className="warning-stripes" />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — ECOAGROFOREST SHOWCASE
      ══════════════════════════════════════════════════════ */}
      <div id="eaf">

        {/* Sticky wrapper — banner + nav stick together */}
        <div className="sticky top-0 z-40">

        {/* Announcement bar */}
        {showBanner && (
          <div style={{ backgroundColor: EAF.green }} className="relative flex items-center justify-center px-6 py-2 text-white text-sm font-semibold">
            <span className="mr-3">EcoAgroForest — Organominerālie mēsli no meža atlikumiem</span>
            <button
              onClick={demoToast}
              className="bg-white/20 hover:bg-white/30 border border-white/40 text-white text-xs font-bold px-3 py-0.5 rounded transition-colors cursor-pointer"
            >
              Sazināties!
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-lg leading-none cursor-pointer"
            >
              ×
            </button>
          </div>
        )}

        {/* Nav */}
        <nav style={{ backgroundColor: EAF.greenDark }}>
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 py-2.5">
              {/* Two pine trees — small + large */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5 text-green-400 flex-shrink-0">
                <path d="M12 3L5 19h14L12 3z"/><rect x="10.5" y="18" width="3" height="3" fill="currentColor" opacity="0.7"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6 text-green-300 flex-shrink-0 -ml-1">
                <path d="M12 1L3 20h18L12 1z"/><rect x="10.5" y="19" width="3" height="3" fill="currentColor" opacity="0.7"/>
              </svg>
              <div className="ml-1">
                <p className="text-white text-sm font-extrabold leading-none tracking-tight">EcoAgroForest</p>
                <p className="text-green-300/70 text-[9px] leading-none mt-0.5 font-medium uppercase tracking-wide">SIA</p>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              {NAV_ITEMS.map(({ label, sub }) => (
                sub.length > 0 ? (
                  <div key={label} className="relative group">
                    <a href="#" onClick={demoToast}
                      className="text-white text-xs font-semibold px-3 py-4 hover:opacity-80 transition-opacity uppercase tracking-wide whitespace-nowrap cursor-pointer flex items-center gap-1">
                      {label} <span className="text-white/50 text-[10px]">▾</span>
                    </a>
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl border border-gray-100 min-w-[220px] z-50 rounded-b-lg overflow-hidden">
                      {sub.map((s) => (
                        <a key={s} href="#" onClick={demoToast}
                          className="block px-5 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50 uppercase tracking-wide border-b border-gray-100 last:border-0 cursor-pointer">
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a key={label} href="#" onClick={demoToast}
                    className="text-white text-xs font-semibold px-3 py-4 hover:opacity-80 transition-opacity uppercase tracking-wide whitespace-nowrap cursor-pointer">
                    {label}
                  </a>
                )
              ))}
            </div>
            <div className="md:hidden text-white text-2xl px-3 py-3 cursor-pointer">☰</div>
          </div>
        </nav>
        </div>{/* end sticky wrapper */}

        {/* Hero — single image, no slider controls */}
        <div className="px-4 sm:px-6 pt-4 pb-2">
          <div className="relative overflow-hidden bg-gray-900 rounded-2xl" style={{ height: "520px" }}>
            <img
              src={EAF.slides[slide]}
              alt="EcoAgroForest"
              className={`w-full h-full object-cover transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
            />
            {/* Deep forest left overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d260d]/85 via-[#0d260d]/40 to-transparent" />
            {/* Dark bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-end pb-10">
              <div className="max-w-7xl mx-auto px-8 w-full">
                <p className="text-white/90 text-sm font-semibold uppercase tracking-[0.2em] mb-2">
                  No meža atlikumiem — līdz auglīgākai augsnei
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5 max-w-xl">
                  Meža gudrība —<br />
                  <span style={{ color: "#4fc46a" }}>jūsu laukā</span>
                </h2>
                <button
                  onClick={() => scrollTo("products")}
                  style={{ backgroundColor: EAF.green }}
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
                >
                  Skatīt produktus <ArrowRight />
                </button>
              </div>
            </div>
            {/* Slider dots — only if multiple slides */}
            {EAF.slides.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors cursor-pointer">
                  <ChevronLeft />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors cursor-pointer">
                  <ChevronRight />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {EAF.slides.map((_, i) => (
                    <button key={i} onClick={() => setSlide(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${i === slide ? "bg-white scale-125" : "bg-white/50"}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* About */}
        <div className="bg-white py-10 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            {/* IMAGE PLACEHOLDER — generate: lush green forest floor with sunlight filtering through trees, rich dark soil visible, professional nature photography */}
            <img src="/forest.png" alt="Zinātniski pamatota lauksaimniecība" className="w-full md:w-72 h-52 rounded-lg shadow-md flex-shrink-0 object-cover" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: EAF.green }}>Par mums</p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                No meža atlikumiem — uz ilgtspējīgas lauksaimniecības.
              </h3>
              <p className="text-gray-500 leading-relaxed mb-3">
                EcoAgroForest SIA mežsaimniecības procesā iegūtās izejvielas un blakusproduktus izmanto ilgtspējīgi — bezatlikumu ciklā. Koksnes pelni, lignīns, mizas un organiskās frakcijas kļūst par pamatu bioloģiski aktīviem organominerālajiem mēslošanas līdzekļiem.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Sadarbībā ar <span className="font-semibold text-gray-700">Latvijas Valsts koksnes ķīmijas institūtu (KKI)</span> izstrādājam zinātniski pamatotus produktus, kas uzlabo augsnes kvalitāti, veicina augu augšanu un samazina nepieciešamību pēc sintētiskajiem ķimikālijiem.
              </p>
              <p className="font-bold text-sm" style={{ color: EAF.green }}>
                Rīga, Mārkalnes iela 20 · +371 25148850 · inagroforest@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Green accent bar */}
        <div style={{ backgroundColor: EAF.greenDark }} className="py-4 px-6">
          <h3 className="text-white text-xl font-extrabold uppercase tracking-wider text-center">
            Ražots no meža — domāts laukam · Zinātniski pamatots · Pieejams visā Latvijā
          </h3>
        </div>

        {/* Products */}
        <div id="products" className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: EAF.green }}>Produkti</p>
              <h3 className="text-3xl font-extrabold text-gray-900">Organominerālie mēslošanas līdzekļi</h3>
              <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">Izgatavoti no mežsaimniecības blakusproduktiem · Zinātniski pamatoti sadarbībā ar KKI · Piemēroti bioloģiskajai un konvencionālajai lauksaimniecībai</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tag: "Pamatmēslojums",
                  title: "OrgoForest Granula",
                  imgSrc: "/granules.png",
                  specs: ["Koksnes pelni + lignīna savienojumi", "N-P-K + mikroelementi", "Graudaugi, rapsis, dārzeņi", "Lietošana: pavasarī pirms sējas"],
                  badge: "Vispieprasītākais",
                },
                {
                  tag: "Augšanas stimulants",
                  title: "OrgoForest Aktīvs",
                  imgSrc: "/seedlings.png",
                  specs: ["Koksnes ekstraktu bioaktīvie savienojumi", "Stimulē dīgšanu un sakņu augšanu", "Palielina stresa izturību", "Lietošana: lapu apstrāde vai laistīšana"],
                  badge: "KKI formula",
                },
                {
                  tag: "Augsnes kondicionieris",
                  title: "OrgoForest Augsne",
                  imgSrc: "/soil.png",
                  specs: ["Humīnskābes no koksnes biomasas", "Uzlabo ūdens aizturi un struktūru", "Aktivizē augsnes mikrobioma", "Lietošana: rudenī vai pavasarī"],
                  badge: "Ilgtermiņa efekts",
                },
              ].map((p) => (
                <div key={p.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Image placeholder */}
                  <img src={p.imgSrc} alt={p.title} className="w-full h-44 object-cover border-b border-gray-200" />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: EAF.green }}>{p.tag}</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white whitespace-nowrap shrink-0" style={{ backgroundColor: EAF.greenDark }}>{p.badge}</span>
                    </div>
                    <h4 className="text-base font-extrabold text-gray-900 mb-3">{p.title}</h4>
                    <ul className="space-y-1.5 mb-4">
                      {p.specs.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: EAF.green + "22", color: EAF.green }}>
                            <Check />
                          </span>
                          {s}
                        </li>
                      ))}
                    </ul>
                    <button onClick={demoToast} style={{ backgroundColor: EAF.green }} className="w-full text-white font-bold py-2.5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer text-sm">
                      Pieprasīt piedāvājumu
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* KKI partnership strip */}
            <div className="mt-10 border border-green-200 rounded-2xl p-6 bg-green-50 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0" style={{ color: EAF.green }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/>
                  <path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z"/>
                  <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
                </svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.12em] mb-1" style={{ color: EAF.green }}>Zinātniskie partneri</p>
                <p className="text-sm font-extrabold text-gray-900 mb-1">Latvijas Valsts koksnes ķīmijas institūts (KKI)</p>
                <p className="text-xs text-gray-500 leading-relaxed">KKI pētnieki izstrādājuši metodes koksnes ekstraktu pārvēršanai augšanas stimulantos, augsnes sorbentās un organominerālo savienojumos. Mūsu produktu formulas balstās uz šiem atklājumiem.</p>
              </div>
              <a href="https://kki.lv" target="_blank" rel="noopener noreferrer" onClick={demoToast}
                className="flex-shrink-0 text-xs font-bold px-4 py-2 rounded-lg border-2 cursor-pointer transition-colors"
                style={{ borderColor: EAF.green, color: EAF.green }}>
                kki.lv →
              </a>
            </div>
          </div>
        </div>

        {/* Atsauksmes */}
        <div className="bg-white py-16 px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: EAF.green }}>Atsauksmes</p>
              <h3 className="text-3xl font-extrabold text-gray-900">Ko saka mūsu klienti</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map(({ name, company, text, stars }) => (
                <div key={name} className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-4 border border-gray-100">
                  <Stars n={stars} />
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">"{text}"</p>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{name}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="bg-white py-16 px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: EAF.green }}>Kā tas strādā</p>
              <h3 className="text-3xl font-extrabold text-gray-900">No meža — uz lauku</h3>
              <p className="text-gray-400 text-sm mt-2 max-w-lg mx-auto">Cirkulārais cikls, kas pārvērš mežizstrādes blakusproduktus augstvērtīgā lauksaimniecības resursos</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SERVICES.map(({ icon, name, desc }) => (
                <div
                  key={name}
                  onClick={demoToast}
                  className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center hover:border-green-300 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: EAF.green + "18", color: EAF.green }}>
                    {icon}
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1 leading-tight">{name}</p>
                  <p className="text-[11px] text-gray-400 leading-tight">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ backgroundColor: EAF.green }} className="py-10 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: "3", l: "Produktu veidi" },
              { n: "100%", l: "Dabiskas izejvielas" },
              { n: "KKI", l: "Zinātniskie partneri" },
              { n: "Latvija", l: "Piegāde visā valstī" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-extrabold text-white mb-1">{s.n}</div>
                <div className="text-green-100 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BUJ */}
        <div className="bg-white py-16 px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: EAF.green }}>BUJ</p>
              <h3 className="text-3xl font-extrabold text-gray-900">Bieži uzdotie jautājumi</h3>
            </div>
            <div className="space-y-3">
              {FAQ_ITEMS.map(({ q, a }, i) => (
                <div key={q} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-gray-900 pr-4">{q}</span>
                    <span className="flex-shrink-0 text-gray-400 text-lg leading-none transition-transform duration-200" style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}>
                      ▾
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="kontakti" className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-6">
                <img src={EAF.logo} alt="EcoAgroForest" className="h-24 object-contain" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: EAF.green }}>Sazināties</p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Kontakti</h3>
              <div className="space-y-4">
                {[
                  { icon: <MapPin />, text: "Mārkalnes iela 20, Rīga, LV-1024" },
                  { icon: <Phone />, text: "+371 25148850" },
                  { icon: <Mail />, text: "inagroforest@gmail.com" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: EAF.green }}>{icon}</span>
                    <span className="text-gray-600 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-5">Nosūtīt ziņojumu</h4>
              <div className="space-y-4">
                <input type="text" placeholder="Jūsu vārds" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors" />
                <input type="email" placeholder="E-pasta adrese" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors" />
                <textarea placeholder="Jūsu ziņojums" rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors resize-none" />
                <button onClick={demoToast} style={{ backgroundColor: EAF.green }} className="w-full text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                  Nosūtīt
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* EcoAgroForest footer */}
        <div className="bg-[#2d3a2d] py-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logo + address */}
            <div>
              <div className="mb-4">
                <img src={EAF.logo} alt="EcoAgroForest" className="h-16 object-contain drop-shadow-lg" />
              </div>
              <div className="text-gray-300 text-xs leading-relaxed space-y-0.5">
                <p className="font-bold text-white mb-1">EcoAgroForest SIA</p>
                <p>Mārkalnes iela 20, Rīga, LV-1024</p>
              </div>
            </div>
            {/* Kontakti */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">Kontakti</p>
              <div className="text-gray-300 text-xs space-y-1">
                <p>Tālrunis: <span className="text-white">+371 25148850</span></p>
                <p>E-pasts: <a href="mailto:inagroforest@gmail.com" className="text-green-400 hover:text-green-300">inagroforest@gmail.com</a></p>
              </div>
            </div>
            {/* Produkti */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">Produkti</p>
              <div className="text-gray-300 text-xs space-y-1">
                <p className="text-white font-semibold flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0 opacity-70"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                  OrgoForest Granula
                </p>
                <p>Organominerālais pamatmēslojums</p>
                <p className="text-white font-semibold mt-2 flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0 opacity-70"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 5.5 12 3c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
                  OrgoForest Aktīvs
                </p>
                <p>Bioaktīvais augu augšanas stimulants</p>
                <p className="text-white font-semibold mt-2 flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0 opacity-70"><path d="M7 20h10"/><path d="M10 20c5.5-2.5 4-6 0-6"/><path d="M10 14c3.5 0 6-2 6-5s-2.5-5-6-5-6 2-6 5 2.5 5 6 5"/><path d="M4 9c0 3 2.5 5 6 5"/></svg>
                  OrgoForest Augsne
                </p>
                <p>Augsnes kondicionieris un struktūras uzlabotājs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker 2 — ŠEIT BEIDZAS */}
      <div>
        <div className="warning-stripes" />
        <div style={{ backgroundColor: '#C8FF24' }} className="overflow-hidden whitespace-nowrap py-1">
          <div className="inline-block animate-marquee">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="inline-block px-6 text-sm font-bold uppercase tracking-[0.1em]" style={{ fontFamily: "'Orbitron', sans-serif", color: '#000000' }}>
                ŠEIT BEIDZAS JŪSU DEMO LAPA
              </span>
            ))}
          </div>
        </div>
        <div className="warning-stripes" />
      </div>

      {/* Gradient bleed — dark footer → white */}
      <div className="h-16 bg-gradient-to-b from-[#2d3a2d] to-white" />

      {/* ── Ghostly audit teaser ── */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">Digitālā klātbūtne</p>
            <h3 className="text-xl font-extrabold text-gray-800">Vēlies apskatīt pilnu digitālās klātbūtnes auditu?</h3>
            <p className="text-sm text-gray-400 mt-1">Mēs veicām pilnu EcoAgroForest digitālās klātbūtnes analīzi. Šeit ir tās pārskata kopsavilkums.</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
            <div className="pointer-events-none select-none">
              <div className="bg-gray-900 px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">Digitālās klātbūtnes audits — EcoAgroForest SIA</p>
                  <p className="text-gray-400 text-xs mt-0.5">Ģenerēts: 09.04.2026 · ClicksScale analīze</p>
                </div>
                <span className="bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">Kritisks</span>
              </div>
              <div className="bg-white px-5 py-5 flex justify-around border-b border-gray-100">
                {[
                  { l: "SEO", s: 0, ring: "border-red-700", text: "text-red-800" },
                  { l: "Ātrums", s: 0, ring: "border-red-700", text: "text-red-800" },
                  { l: "Mobilais", s: 0, ring: "border-red-700", text: "text-red-800" },
                  { l: "Drošība", s: 0, ring: "border-red-700", text: "text-red-800" },
                  { l: "Dizains", s: 0, ring: "border-red-700", text: "text-red-800" },
                ].map(({ l, s, ring, text }) => (
                  <div key={l} className="flex flex-col items-center gap-1.5">
                    <div className={`w-14 h-14 rounded-full border-[3px] ${ring} flex items-center justify-center bg-white shadow-sm`}>
                      <span className={`text-xl font-extrabold ${text}`}>{s}</span>
                    </div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">{l}</p>
                  </div>
                ))}
              </div>
              <div className="blur-sm bg-white">
                <div className="px-5 pt-4 pb-2 border-b border-gray-100">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-red-500 mb-3">❌ Kritiskie trūkumi (6)</p>
                  <div className="space-y-2.5">
                    {["Nav aktīvas mājaslapas — uzņēmums nav atrodams Google meklēšanā","Nulles organiskais meklēšanas trafiks — nav indexētu lapu","Konkurenti ar mājaslapa saņem jūsu potenciālos klientus","Nav kontaktformas — pieprasījumi ārpus darba laika tiek zaudēti","Google Business profils nav optimizēts","Schema.org strukturētie dati nav ieviesti — AI meklētāji nezina par uzņēmumu"].map((t) => (
                      <div key={t} className="flex items-start gap-2.5 text-xs text-gray-700"><span className="text-red-500 flex-shrink-0 mt-0.5">✕</span><span>{t}</span></div>
                    ))}
                  </div>
                </div>
                <div className="px-5 pt-4 pb-2 border-b border-gray-100">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-orange-500 mb-3">⚠ Iespējas (5)</p>
                  <div className="space-y-2.5">
                    {["Organominerālie mēsli no vietējiem izejmateriāliem — augošs pieprasījums ilgtspējīgā lauksaimniecībā","KKI zinātniskie pētījumi kā konkurences priekšrocība — vēl neviens cits šo nestāsta digitāli","Google Ads var sniegt tūlītēju redzamību lauksaimnieku auditorijā","Tiešsaistes pasūtīšana — iespēja pieņemt pieprasījumus 24/7 no visas Latvijas","Bioloģiskās lauksaimniecības operators meklē alternatīvus mēslus — jūsu produkts ir atbilde"].map((t) => (
                      <div key={t} className="flex items-start gap-2.5 text-xs text-gray-700"><span className="text-orange-400 flex-shrink-0 mt-0.5">▲</span><span>{t}</span></div>
                    ))}
                  </div>
                </div>
                <div className="px-5 pt-4 pb-2 border-b border-gray-100">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-gray-400 mb-3">Konkurentu salīdzinājums</p>
                  <div className="space-y-2">
                    {[
                      { n: "ecoagroforest", seo: 0, mob: 0, spd: 0, bg: "bg-red-50" },
                      { n: "latforest.lv", seo: 5, mob: 6, spd: 5, bg: "bg-gray-50" },
                      { n: "agromeistars.lv", seo: 6, mob: 7, spd: 6, bg: "bg-gray-50" },
                    ].map(({ n, seo, mob, spd, bg }) => (
                      <div key={n} className={`${bg} rounded-lg px-3 py-2 flex items-center justify-between text-xs`}>
                        <span className="font-bold text-gray-700 w-32">{n}</span>
                        <span className="text-gray-500">SEO: <b>{seo}/10</b></span>
                        <span className="text-gray-500">Mob: <b>{mob}/10</b></span>
                        <span className="text-gray-500">Ātr: <b>{spd}/10</b></span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-5 py-4 grid grid-cols-4 gap-3 bg-gray-50">
                  {[{ l: "Indexētas lapas", v: "0" }, { l: "Organiskais trafiks", v: "0/mēn" }, { l: "Google pozīcija", v: "nav" }, { l: "Digitālā klātbūtne", v: "0%" }].map(({ l, v }) => (
                    <div key={l} className="text-center">
                      <p className="text-base font-extrabold text-gray-800">{v}</p>
                      <p className="text-[9px] text-gray-400 uppercase tracking-wide leading-tight mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[38%] to-white to-[72%] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-10 px-6 text-center pointer-events-auto">
              <p className="text-sm text-gray-500 mb-4 font-medium">Gribi redzēt pilnu auditu un ko mēs varam mainīt?</p>
              <button
                onClick={() => scrollTo("cta")}
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-sm">
                Pieprasīt pilno auditu <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — CLICKSSCALE CTA
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 pt-24 pb-14 text-center">
          <div className="flex items-center justify-center mb-8">
            <img src={CS_LOGO} alt="ClicksScale" className="h-10 object-contain" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 leading-tight">Patīk tas, ko redzi?</h2>
          <p className="text-xl text-gray-600 mb-4">Tas, ko redzi — ir tikai aisberga redzamā daļa.</p>
          <p className="text-gray-500 max-w-lg mx-auto mb-4 leading-relaxed">
            Šī lapa tika izveidota personalizēta Jums — ar jūsu nozares saturu, jūsu pakalpojumiem, jūsu krāsām. Taču vizuālais izskats ir tikai sākums.
          </p>
          <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
            Aiz tā stāv tehnoloģijas un atjauninājumi, kas palīdz ar SEO rankošanos Google un AI laikmeta meklētājos — tā jūsu klienti jūs atrod, pirms viņi vispār nokļūst uz lapas.
          </p>
          {/* Primary CTA */}
          <div id="cta" className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:martins@kkmedia.lv"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-base">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Rakstīt e-pastu
            </a>
            <a href="https://wa.me/37127832222" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-base">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              WhatsApp — Mārtiņš
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-400">Bez saistībām · Bezmaksas konsultācija · Atbilde 24 st. laikā</p>

          {/* Case studies button */}
          <div className="mt-5">
            <a href="https://clickscale.agency/lv/veiksmes-stasti" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-blue-200 hover:border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 cursor-pointer text-base">
              Apskati mūsu citus klientus <ArrowRight />
            </a>
          </div>
        </div>

        {/* Team section */}
        <div className="max-w-4xl mx-auto px-6 pb-10">
          <div className="border-t border-gray-100 pt-10 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">Mūsu komanda</p>
            <p className="text-sm text-gray-400 mb-7 max-w-md mx-auto leading-relaxed">
              Mēs esam saliedēta komanda, kas izturas pret katru klientu kā pret ģimeni — dziļa kompetence apvienota ar patiesu rūpi par tavu panākumu.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
              {TEAM.map(({ photo, name, title, linkedin }) => (
                <div key={name} className="bg-gray-50 rounded-xl p-5 flex flex-col items-center text-center">
                  <img src={photo} alt={name} className="w-28 h-32 rounded-2xl object-cover object-top mb-3" />
                  <p className="text-sm font-bold text-gray-900 leading-tight">{name}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 mb-3 leading-tight">{title}</p>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 border border-blue-100 hover:border-blue-300 bg-white px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                  </a>
                </div>
              ))}

              {/* AI card */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex flex-col text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-100 rounded-full -translate-y-8 translate-x-8 pointer-events-none" />
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-3 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.16Z"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.16Z"/>
                  </svg>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-500 mb-1">Jaunums</p>
                <p className="text-sm font-extrabold text-gray-900 leading-tight mb-2">Mākslīgā Intelekta pielietojums biznesā</p>
                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Tas nav zinātniskā fantastika — mēs to būvējam jau šodien.</p>
                <ul className="space-y-2 flex-1">
                  {[
                    "Atbild klientiem 24/7 bez operatora",
                    "Apstrādā pasūtījumus un piedāvājumus",
                    "Atjaunina CRM automātiski",
                    "Seko konkurentu cenām reāllaikā",
                  ].map((uc) => (
                    <li key={uc} className="flex items-start gap-2 text-[11px] text-gray-600">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {SKILLS.map((s) => (
                <span key={s} className="text-[11px] font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <span>© {new Date().getFullYear()} ClicksScale. Visas tiesības aizsargātas.</span>
            <span className="italic">Šī lapa ir izveidota kā demonstrācija EcoAgroForest SIA — nav publiska mājaslapa.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
