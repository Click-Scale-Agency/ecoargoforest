import { useEffect, useState } from "react";

const CLICKSCALE_LOGO =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/9xh2hCCh94Tp5EyhUvXQdPhcEWK2/uploads/1763656087512-Click%20Scale%20Favicon.png";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
  </svg>
);

const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// ─── Product cards data ────────────────────────────────────────────────────────

const products = [
  {
    id: "mobile",
    tag: "GSI T-sērija",
    title: "Mobilās graudu kaltes",
    desc: "Elastīgs risinājums vidēja apjoma saimniecībām. Ātri pārvietojams, vienkāršā ekspluatācijā.",
    features: ["Ražīgums 3–32 t/st", "Propāna vai dabasgāzes deglis", "Pilnīga rezerves daļu bāze"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "stationary",
    tag: "GSI 2100-sērija",
    title: "Stacionārās graudu kaltes",
    desc: "Liela ražīguma kaltes lielām saimniecībām un graudu termināļiem ar automātisko vadību.",
    features: ["Ražīgums līdz 100 t/st", "Automātiskā vadības sistēma", "Modulārā konstrukcija"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "transport",
    tag: "Konveijeri & Norijas",
    title: "Transportēšanas iekārtas",
    desc: "Horizontālie skrūvveida konveijeri un norijas efektīvai graudu pārvietošanai.",
    features: ["Ražīgums 5–350 t/st", "Nerūsējošā tērauda kontakta daļas", "Zems trokšņu līmenis"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5" />
        <circle cx="15.5" cy="18.5" r="2.5" />
        <circle cx="19.5" cy="18.5" r="2.5" />
        <path d="M15 18H3" />
      </svg>
    ),
  },
  {
    id: "storage",
    tag: "50–10 000 T ietilpība",
    title: "Uzglabāšanas torņi",
    desc: "Tērauda graudu torņi ar aerāciju, temperatūras monitoringu un pilnu iekšējo sistēmu.",
    features: ["Dažādi izmēri pēc pasūtījuma", "Aerācijas un temperatūras kontrole", "Ilgmūžīga konstrukcija"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 4.69 2 8v8c0 3.31 4.48 6 10 6s10-2.69 10-6V8c0-3.31-4.48-6-10-6z" />
        <path d="M2 8c0 3.31 4.48 6 10 6s10-2.69 10-6" />
        <path d="M2 12c0 3.31 4.48 6 10 6s10-2.69 10-6" />
      </svg>
    ),
  },
];

const stats = [
  { value: "2001", label: "Dibināšanas gads" },
  { value: "GSI", label: "ASV sertifikāts" },
  { value: "3", label: "Baltijas valstis" },
  { value: "5★", label: "Garantija & Serviss" },
];

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="font-['Plus_Jakarta_Sans',sans-serif] bg-white">

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — CLICKSSCALE DEMO FRAME
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col">

        {/* Sticky header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={CLICKSCALE_LOGO}
                alt="ClicksScale"
                className="h-10 w-10 rounded-full object-contain shadow-sm"
              />
              <div>
                <p className="text-base font-bold text-gray-900 leading-tight">ClicksScale</p>
                <p className="text-xs text-gray-400">Web Development Agency</p>
              </div>
            </div>
            <span className="bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              Demo lapa
            </span>
          </div>
        </header>

        {/* Hero */}
        <div
          className={`flex-1 flex flex-col items-center justify-center text-center px-6 py-28 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="max-w-2xl mx-auto">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Personalizēta demonstrācija — MEXA
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Mēs izveidojām šo lapu{" "}
              <span className="text-blue-600">speciāli priekš jums</span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-10">
              Zemāk redzat, kā MEXA mājaslapa varētu izskatīties — moderna, ātra un profesionāla digitālā klātbūtne, kas atspoguļo jūsu reālo kompetenci.
            </p>

            <button
              onClick={() => scrollTo("mexa")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-lg"
            >
              Skatīt demonstrāciju
              <ChevronDown />
            </button>

            <p className="mt-6 text-sm text-gray-400">
              Bezmaksas demonstrācija · Nav saistošu pienākumu
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — MEXA SHOWCASE
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="mexa">

        {/* ── Hero ── */}
        <div
          className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
          style={{ background: "linear-gradient(160deg,#0a1f0a 0%,#163a16 45%,#1f5c1f 100%)" }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          {/* Soft radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,180,40,.15)_0%,transparent_70%)]" />

          <div className="relative z-10 px-6 py-28 max-w-4xl mx-auto">

            {/* MEXA wordmark */}
            <div className="flex items-center justify-center gap-1 mb-6">
              <div className="bg-white rounded-2xl px-5 py-3 shadow-2xl">
                <span className="text-3xl font-extrabold tracking-tight" style={{ color: "#1f5c1f" }}>ME</span>
                <span className="text-3xl font-extrabold tracking-tight text-red-600">X</span>
                <span className="text-3xl font-extrabold tracking-tight" style={{ color: "#1f5c1f" }}>A</span>
              </div>
            </div>

            {/* GSI trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8">
              <Star />
              GSI (ASV) Oficiālais Pārstāvis Baltijā
            </div>

            <h2 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Graudu tehnoloģiju{" "}
              <span style={{ color: "#7dd356" }}>līderis Baltijā</span>
            </h2>

            <p className="text-xl text-green-100/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              Kopš 2001. gada — profesionālas graudu kaltes, transportēšanas iekārtas un uzglabāšanas torņi lauksaimniekiem Latvijā, Lietuvā un Igaunijā.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-10 mb-14">
              {[
                { n: "23+", l: "Gadi pieredzes" },
                { n: "500+", l: "Pabeigti projekti" },
                { n: "3", l: "Baltijas valstis" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-5xl font-extrabold text-white mb-1">{s.n}</div>
                  <div className="text-green-200/70 text-sm">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollTo("products")}
                className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors duration-200 shadow-xl cursor-pointer"
              >
                Skatīt pakalpojumus <ArrowRight />
              </button>
              <button
                onClick={() => scrollTo("contact-mexa")}
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                Sazināties
              </button>
            </div>
          </div>
        </div>

        {/* ── Products ── */}
        <div id="products" className="bg-gray-50 py-24 px-6">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <span className="text-xs font-bold text-green-700 uppercase tracking-[0.15em]">Mūsu pakalpojumi</span>
              <h3 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
                Pilna cikla risinājumi graudu nozarei
              </h3>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                No pirmās konsultācijas līdz montāžai un regulārai apkopei — nodrošinām visu.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center text-green-700 mb-5 transition-colors duration-200">
                    {p.icon}
                  </div>
                  <p className="text-[11px] font-bold text-green-600 uppercase tracking-[0.12em] mb-1.5">{p.tag}</p>
                  <h4 className="text-base font-bold text-gray-900 mb-3 leading-snug">{p.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                          <Check />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── About + Trust ── */}
        <div className="bg-white py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-xs font-bold text-green-700 uppercase tracking-[0.15em]">Par MEXA</span>
              <h3 className="text-4xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
                GSI (ASV) oficiālais pārstāvis Baltijas valstīs kopš 2001. gada
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                MEXA nodrošina augstas kvalitātes graudu apstrādes un uzglabāšanas risinājumus Latvijas, Lietuvas un Igaunijas lauksaimniekiem. No sākotnējās konsultācijas līdz regulārai apkopei — pilns pakalpojuma cikls.
              </p>
              <div className="space-y-3">
                {[
                  "Oficiāls GSI (Grain Systems Inc., ASV) pārstāvis Baltijā",
                  "Pilns pakalpojumu cikls — projekts, piegāde, montāža, serviss",
                  "Liela rezerves daļu noliktava — ātra apkalpošana",
                  "Individuāla pieeja katram projektam un budžetam",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-50 border border-green-200 text-green-700 flex items-center justify-center flex-shrink-0">
                      <Check />
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:border-green-200 hover:bg-green-50/40 transition-all duration-200"
                >
                  <div className="text-4xl font-extrabold text-gray-900 mb-2">{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MEXA Contact CTA ── */}
        <div
          id="contact-mexa"
          className="py-20 px-6 text-center"
          style={{ background: "linear-gradient(135deg,#0a1f0a,#163a16)" }}
        >
          <div className="max-w-xl mx-auto">
            <h3 className="text-3xl font-extrabold text-white mb-4">
              Interesē konkrēts risinājums?
            </h3>
            <p className="text-green-200/80 text-lg mb-10">
              Sazinieties ar mums — bezmaksas konsultācija un individuāls piedāvājums jūsu saimniecībai.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+37126588885"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-900 font-bold px-7 py-4 rounded-xl hover:bg-green-50 transition-colors duration-200 shadow-lg cursor-pointer"
              >
                <Phone /> +371 26 588 885
              </a>
              <a
                href="mailto:a.barkans@mexa.lv"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                <Mail /> a.barkans@mexa.lv
              </a>
            </div>
            <p className="mt-6 text-green-300/60 text-xs">
              Tirgoņu iela 4a, Cēsis, LV-4101 · Atbilde darba dienās 24 st. laikā
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — CLICKSSCALE CTA FOOTER
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="cta" className="bg-white border-t-4 border-blue-600">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">

          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={CLICKSCALE_LOGO} alt="ClicksScale" className="h-12 w-12 rounded-full object-contain shadow-md" />
            <span className="text-2xl font-bold text-gray-900">ClicksScale</span>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Patīk tas, ko redzi?
          </h2>
          <p className="text-xl text-gray-400 mb-3">Tieši tā izskatās mūsu darbs.</p>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Šī demonstrācijas lapa tika izveidota 48 stundu laikā. Mēs projektējam un veidojam mājaslapas, kas pārdod — ne tikai izskatās skaisti.
          </p>

          <a
            href="mailto:hello@clicksscale.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-lg"
          >
            Sazināties ar ClicksScale <ArrowRight />
          </a>

          <p className="mt-6 text-sm text-gray-400">
            Bez saistībām · Bezmaksas konsultācija · Atbilde 24 st. laikā
          </p>
        </div>

        <div className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <span>© 2025 ClicksScale. Visas tiesības aizsargātas.</span>
            <span className="italic">Šī lapa ir izveidota kā demonstrācija MEXA — nav publiska mājaslapa.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
