import { createFileRoute } from "@tanstack/react-router";
import schedeImg from "@/assets/schede.jpg";
const logoAsset = { url: "/olympia-logo.png" };
const galReception = { url: "/reception.jpg" };
const galSala1 = { url: "/sala1.jpg" };
const galSala2 = { url: "/sala2.jpg" };
const galManubri = { url: "/manubri.jpg" };
const galPanche = { url: "/panche.jpg" };
const galCardio = { url: "/cardio.jpg" };
const galMacchinari = { url: "/macchinari.jpg" };
import { MapPin, Phone, Clock, Dumbbell, Menu, X, Smartphone, FileText, Users, Wind, Building2, Ruler, Star, Quote, Camera, CreditCard } from "lucide-react";
import { useState } from "react";
import { Reveal, useParallax } from "@/components/Reveal";
import { InstagramSection, InstagramIcon, INSTAGRAM_URL } from "@/components/InstagramSection";


function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centro Fitness Olympia | Palestra a Siracusa" },
      { name: "description", content: "Palestra a Siracusa in Via Francesco Accolla 36: 750 m² di sala pesi con macchinari Panatta, scheda di allenamento gratuita e istruttori sempre in sala. Abbonamento anche in 3 rate senza interessi con Satispay." },
      { name: "keywords", content: "palestra Siracusa, sala pesi Siracusa, palestra Panatta Siracusa, centro fitness Siracusa, bodybuilding Siracusa, scheda allenamento gratuita, abbonamento palestra in 3 rate Satispay, Centro Fitness Olympia" },

      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IT-SR" },
      { name: "geo.placename", content: "Siracusa" },
      { property: "og:title", content: "Centro Fitness Olympia | Palestra a Siracusa" },
      { property: "og:description", content: "750 m² di sala pesi, macchinari Panatta, scheda gratuita e istruttori in sala. Scopri la promozione attiva." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://olympia-gym-hub.lovable.app/" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://olympia-gym-hub.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["ExerciseGym", "HealthClub"],
          name: "Centro Fitness Olympia",
          description: "Palestra a Siracusa di 750 m² dedicata alla sala pesi, con macchinari Panatta, scheda di allenamento gratuita e istruttori sempre presenti.",
          url: "https://olympia-gym-hub.lovable.app/",
          logo: "https://olympia-gym-hub.lovable.app/olympia-logo.png",
          image: "https://olympia-gym-hub.lovable.app/sala2.jpg",
          telephone: "+390931703066",
          priceRange: "€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Francesco Accolla, 36",
            addressLocality: "Siracusa",
            addressRegion: "SR",
            addressCountry: "IT",
          },
          areaServed: "Siracusa",
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "22:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
          ],
          sameAs: ["https://www.instagram.com/centro.fitness.olympia/"],
        }),
      },
    ],
  }),
  component: Index,
});

const GYM = {
  name: "Centro Fitness Olympia",
  address: "Via Francesco Accolla, 36 Siracusa",
  phone: "0931 703066",
  phoneHref: "tel:+390931703066",
  whatsapp: "348 714 7416",
  whatsappHref: "https://wa.me/393487147416",
  whatsappInfoHref:
    "https://wa.me/393487147416?text=" +
    encodeURIComponent("Ciao, vorrei informazioni sugli abbonamenti del Centro Fitness Olympia."),
  hoursWeek: "Lun – Ven  ·  07:30 – 22:00",
  hoursSat: "Sabato  ·  08:00 – 13:00",
  hoursSun: "Domenica  ·  Chiuso",
  mapsQuery: "Via+Francesco+Accolla+36+Siracusa",
};

function Index() {
  const [open, setOpen] = useState(false);
  const scrollY = useParallax();

  const nav = [
    { label: "Palestra", href: "#palestra" },
    { label: "Ambienti", href: "#gallery" },
    { label: "Instagram", href: "#instagram" },
    { label: "Abbonamenti", href: "#promo" },
    { label: "Orari", href: "#orari" },
    { label: "Dove Siamo", href: "#dove" },
    { label: "Recensioni", href: "#recensioni" },
    
  ];

  const gallery = [
    { src: galSala2.url, alt: "Vista panoramica della sala pesi", span: "md:col-span-2 md:row-span-2" },
    { src: galSala1.url, alt: "Sala pesi con macchinari Panatta", span: "" },
    { src: galManubri.url, alt: "Area manubri e panche", span: "" },
    { src: galReception.url, alt: "Reception Centro Fitness Olympia", span: "md:col-span-2" },
    { src: galCardio.url, alt: "Zona cardio con tapis roulant Life Fitness", span: "" },
    { src: galPanche.url, alt: "Panche Panatta e rastrelliera manubri", span: "" },
    { src: galMacchinari.url, alt: "Macchinari isotonici Panatta", span: "md:col-span-2" },
  ];


  const reviews = [
    { name: "Giuseppe", text: "Palestra super attrezzata. Istruttori fantastici, disponibili e gentilissimi. Ambiente pulito e confortevole." },
    { name: "Aurora", text: "Palestra Super! L'ambiente è accogliente e pulito, le attrezzature sono moderne e ben mantenute. Una vasta gamma di attrezzi per ogni tipo di allenamento." },
    { name: "Jennifer", text: "Frequento questa palestra già da due anni e mi trovo benissimo: super fornita, attrezzi sempre nuovi, proprietari gentilissimi. La consiglio!" },
    { name: "Veronica", text: "Questa palestra è davvero speciale! Attrezzature di ultima generazione, ambienti curati e puliti, e un'atmosfera che ti fa sentire parte di una famiglia." },
    { name: "Emanuele", text: "Ho trovato un ambiente di allenamento eccellente grazie alla competenza e professionalità dello staff, sempre attento, preparato e disponibile." },
    { name: "Seby", text: "Palestra ben fornita, pulizia massima. Prezzi unici in tutta Siracusa con abbonamento annuale super conveniente." },
    { name: "Peppe", text: "Palestra di pesistica completa di ogni attrezzo. Area ampia. Proprietari cortesi e disponibili. Consigliata." },
    { name: "Concetto", text: "Palestra pulita, ragazzo alla reception gentilissimo e competente, con macchinari TOP." },
    { name: "Marzia", text: "Più di una famiglia, la mia seconda casa." },
    { name: "Orazio", text: "Igiene, cordialità e professionalità oltre ogni limite. Praticamente casa." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Logo Centro Fitness Olympia" className="h-10 w-10 rounded-full" />
            <span className="font-display hidden text-base tracking-wider whitespace-nowrap md:inline">
              centro fitness OLYMPIA
            </span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={GYM.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
          >
            Prenota un allenamento
          </a>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Apri il menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border/50 bg-background md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest text-muted-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={GYM.whatsappHref}
                className="rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground"
              >
                Prenota un allenamento
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-[62vh] items-center md:min-h-[72vh] overflow-hidden bg-ink">
        <img
          src={galSala2.url}
          alt="Panoramica della sala pesi del Centro Fitness Olympia"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-60 will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(${1 + Math.min(scrollY, 600) * 0.0004})` }}
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-background" />


        

        <div className="relative mx-auto grid max-w-7xl gap-5 px-6 pt-28 pb-12 md:pb-16 text-brand-white">
          <Reveal delay={0} className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-white/70">
            <MapPin className="h-4 w-4 text-brand-red" /> Siracusa, Via Francesco Accolla 36
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-5xl text-5xl leading-none md:text-7xl lg:text-8xl">
              <span className="block text-brand-white">Allenati</span>
              <span className="block text-brand-red font-bold">Supera i tuoi limiti</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="max-w-2xl text-base text-brand-white/80 md:text-lg">
              750 m² di energia pura: macchinari Panatta, ambiente arieggiato ad altezza strada,
              scheda di allenamento gratuita e istruttori sempre presenti in sala.
            </p>
          </Reveal>
          <Reveal delay={360} className="flex flex-wrap gap-4">
            <a
              href="#palestra"
              className="rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              Scopri la palestra
            </a>
            <a
              href={GYM.whatsappInfoHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-white/40 bg-brand-white/5 px-6 py-3 text-sm font-bold uppercase tracking-widest text-brand-white backdrop-blur-sm transition-colors hover:bg-brand-white/15"
            >
              <WhatsAppIcon className="h-4 w-4" /> Contattaci su WhatsApp
            </a>
          </Reveal>

        </div>

      </section>

      {/* PROMO */}
      <section id="promo" className="relative scroll-mt-20 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl border-2 border-brand-red bg-gradient-to-br from-brand-red/25 via-card to-card shadow-[var(--shadow-glow)]">
            <div className="grid gap-6 p-5 md:grid-cols-[minmax(0,260px)_1fr] md:items-center md:gap-10 md:p-8">
              <img
                src="/promo-ottobre.jpeg"
                alt="Locandina promozione Shocktober: 5 mesi più 5 in regalo a 79 euro, valida fino al 31 ottobre 2026"
                className="mx-auto max-h-72 w-auto rounded-xl object-contain md:max-h-80"
                loading="eager"
              />
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-white" /> Promo attiva fino al 31 ottobre 2026
                </div>
                <h2 className="mt-4 text-4xl md:text-6xl">
                  5 mesi <span className="text-brand-red font-bold">+5 in regalo</span>
                </h2>
                <div className="mt-2 font-display text-5xl text-brand-red md:text-6xl">€79</div>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                  Chiamaci o scrivici su WhatsApp: ti spieghiamo tutti i dettagli e fissiamo la tua prima visita in palestra.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={GYM.whatsappInfoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-brand-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-ink transition-transform hover:scale-105"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Richiedi informazioni
                  </a>
                  <a
                    href={GYM.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Phone className="h-4 w-4" /> Chiama ora
                  </a>
                </div>
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-satispay/45 bg-satispay/10 px-4 py-3">
                  <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-satispay" aria-hidden="true" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold uppercase tracking-wider text-satispay">3 rate senza interessi con Satispay</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Puoi pagare l'abbonamento diviso in 3 comode rate, senza interessi: così iniziare ti costa meno da subito.
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PALESTRA / SALA PESI */}
      <section id="palestra" className="border-t border-border/50 py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:items-center">
          <Reveal variant="left" className="relative">
            <img
              src="/sala1.jpg"
              alt="Sala pesi 750mq con macchinari Panatta"
              className="aspect-[4/3] max-h-[460px] w-full rounded-lg object-cover"
              loading="lazy"
              width={1200}
              height={1440}
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-brand-red px-6 py-4 md:block animate-float-slow">
              <div className="font-display text-4xl leading-none">750</div>
              <div className="text-xs uppercase tracking-widest">mq Sala Pesi</div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
              <Dumbbell className="h-4 w-4" /> La nostra filosofia
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl">
              750 mq di
              <br />
              <span className="text-brand-red font-bold">pura sala pesi.</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Il Centro Fitness Olympia è una palestra di circa <strong className="text-foreground">750 mq</strong>{" "}
              interamente dedicata alla sala pesi, con macchinari professionali{" "}
              <strong className="text-foreground">Panatta</strong>. Un ambiente{" "}
              <strong className="text-foreground">ampio, arieggiato e ad altezza strada</strong>,{" "}
              niente scantinati, solo luce e aria vera.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Building2, text: "Macchinari Panatta professionali" },
                { icon: Ruler, text: "Circa 750 mq di spazio" },
                { icon: Wind, text: "Ambiente arieggiato, ad altezza strada" },
                { icon: Dumbbell, text: "Bilancieri, rack, panche e cavi" },
                { icon: Users, text: "Istruttori sempre disponibili" },
                { icon: Dumbbell, text: "Spogliatoi con docce" },
              ].map(({ icon: Icon, text }, i) => (
                <li
                  key={text}
                  className="group flex items-start gap-3 text-sm transition-transform duration-300 hover:translate-x-1"
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  <Icon className="mt-0.5 h-4 w-4 flex-none text-brand-red transition-transform duration-300 group-hover:scale-125" />
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>

        </div>

        {/* SCHEDE GRATUITE */}
        <div className="mx-auto mt-8 max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-card/40 shadow-[var(--shadow-card)]">
            <div className="absolute inset-x-0 top-0 h-1 bar-brand" />
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative min-h-[200px] overflow-hidden lg:min-h-full">
                <img
                  src={schedeImg}
                  alt="Istruttore che mostra una scheda di allenamento personalizzata al cliente"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-brand-red/50 bg-background/70 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-brand-red backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  100% Gratuite
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
                  <FileText className="h-4 w-4" /> Schede di allenamento
                </div>
                <h3 className="mt-5 font-display text-3xl leading-none md:text-4xl">
                  Sempre <span className="text-brand-red font-bold">gratuite</span>,
                  <br />su misura per te.
                </h3>
                <p className="mt-5 text-base text-muted-foreground md:text-lg">
                  Da noi la scheda è <strong className="text-foreground">sempre inclusa</strong>:
                  nessun costo aggiuntivo, nessun pacchetto da acquistare. Scegli il formato
                  che preferisci.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="group rounded-xl border border-border/60 bg-background/40 p-5 transition-all hover:-translate-y-1 hover:border-brand-red/50">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-display text-2xl tracking-wider">Via App</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Scheda digitale sempre con te sullo smartphone, con esercizi, serie
                      e note dell'istruttore.
                    </p>
                  </div>
                  <div className="group rounded-xl border border-border/60 bg-background/40 p-5 transition-all hover:-translate-y-1 hover:border-brand-red/50">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-display text-2xl tracking-wider">Cartacea</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Scheda cartacea personalizzata, stampata su misura per te. Semplice
                      e sempre a portata di mano.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/50 bg-background/30 p-4 text-sm text-muted-foreground">
                  <Users className="mt-0.5 h-4 w-4 flex-none text-brand-red" />
                  <span>
                    I nostri istruttori sono <strong className="text-foreground">sempre presenti in sala</strong>{" "}
                    per correggere, motivare e adattare l'allenamento ai tuoi obiettivi.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VANTAGGI */}
      <section id="vantaggi" aria-label="I nostri vantaggi" className="relative z-10 bg-ink/40 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <div className="text-xs uppercase tracking-[0.3em] text-brand-red">Perché Olympia</div>
          <h2 className="mt-4 text-4xl md:text-5xl">I nostri <span className="text-brand-red font-bold">punti di forza.</span></h2>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 lg:grid-cols-4">
          {[
            { icon: Ruler, title: "750 m² di palestra", text: "Spazio ampio, arieggiato e ad altezza strada." },
            { icon: Building2, title: "Macchinari Panatta", text: "Attrezzatura professionale per ogni distretto." },
            { icon: FileText, title: "Scheda gratuita", text: "Su misura per te, via app o cartacea." },
            { icon: Users, title: "Istruttori in sala", text: "Sempre presenti per seguirti e correggerti." },
          ].map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full group rounded-xl border border-border/60 bg-card p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/60 shadow-[var(--shadow-card)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/15 text-brand-red">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-xl md:text-2xl tracking-wider">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-4 max-w-7xl px-6">
          <div className="flex flex-col items-start gap-4 rounded-xl border border-satispay/45 bg-satispay/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <CreditCard className="mt-1 h-6 w-6 shrink-0 text-satispay" aria-hidden="true" />
              <div>
                <h3 className="text-xl tracking-wider md:text-2xl">
                  Paghi in <span className="text-satispay font-bold">3 rate senza interessi</span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Con Satispay dividi l'abbonamento in 3 rate, senza interessi. Inizi oggi e paghi con calma.
                </p>
              </div>
            </div>
            <a
              href={GYM.whatsappInfoHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-satispay/60 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-satispay transition-colors hover:bg-satispay hover:text-primary-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" /> Chiedi come fare
            </a>
          </div>
        </Reveal>
      </section>


      {/* GALLERY */}
      <section id="gallery" className="border-t border-border/50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
                <Camera className="h-4 w-4" /> Gallery
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl">
                Dai un'occhiata
                <br />
                <span className="text-brand-red font-bold">alla palestra.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg text-muted-foreground">
              750mq di sala pesi, macchinari Panatta, area cardio e ambiente ad altezza strada, luminoso e arieggiato.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[170px]">
            {gallery.map((g, i) => (
              <div
                key={g.src}
                className={`group relative overflow-hidden rounded-2xl border border-border/60 opacity-0 animate-fade-in ${g.span}`}
                style={{ animationDelay: `${i * 90}ms`, animationFillMode: "forwards" }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full min-h-[130px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm text-brand-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.alt}
                </div>
                <div className="pointer-events-none absolute inset-0 ring-0 ring-brand-red/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-brand-red/60" />
              </div>
            ))}
          </div>
        </div>
      </section>


      <InstagramSection />

      {/* RECENSIONI */}
      <section id="recensioni" className="border-t border-border/50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
            <Star className="h-4 w-4" /> Recensioni Google
          </div>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl md:text-5xl">
              Le voci dei
              <br />
              <span className="text-brand-red font-bold">nostri atleti.</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-brand-red text-brand-red" />
                ))}
              </div>
              <div>
                <div className="font-display text-3xl leading-none">5,0</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">su Google</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.slice(0, 8).map((r, idx) => (
              <Reveal
                as="article"
                key={r.name}
                variant="zoom"
                delay={(idx % 4) * 70}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/40 p-5 hover:-translate-y-1 hover:border-brand-red hover:shadow-[0_20px_50px_-20px_oklch(0.62_0.22_25/0.4)]"
              >

                <div className="absolute inset-x-0 top-0 h-1 bar-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-red/10" strokeWidth={1} />
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                  "{r.text}"
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-border/60 pt-3">
                  <div
                    className={`flex h-9 w-9 flex-none items-center justify-center rounded-full font-display text-lg ${
                      idx % 3 === 0
                        ? "bg-brand-red/15 text-brand-red"
                        : idx % 3 === 1
                        ? "bg-brand-red/15 text-brand-red"
                        : "bg-foreground/10 text-foreground"
                    }`}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div className="font-display text-lg tracking-wider">{r.name}</div>
                </div>
              </Reveal>
            ))}
          </div>


          <div className="mt-8 flex justify-center">
            <a
              href={`https://www.google.com/maps?q=${GYM.mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-card"
            >
              Leggi tutte le recensioni su Google
            </a>
          </div>
        </div>
      </section>

      <section id="orari" className="border-t border-border/50 py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
              <Clock className="h-4 w-4" /> Orari
            </div>
            <h2 className="mt-4 text-4xl">Quando siamo aperti.</h2>
          </div>
          <div className="md:col-span-2">
            <div className="divide-y divide-border/60 border-y border-border/60">
              {[GYM.hoursWeek, GYM.hoursSat, GYM.hoursSun].map((h) => {
                const [day, time] = h.split("·").map((s) => s.trim());
                return (
                  <div key={h} className="flex items-center justify-between py-3">
                    <span className="font-display text-2xl tracking-wider">{day}</span>
                    <span className="text-muted-foreground">{time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DOVE SIAMO */}
      <section id="dove" className="border-t border-border/50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
                <MapPin className="h-4 w-4" /> Dove Siamo
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl">
                In pieno centro
                <br />a <span className="text-brand-red font-bold">Siracusa</span>.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              {GYM.address}. Facilmente raggiungibile, con possibilità di parcheggio nelle
              vie limitrofe.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60">
            <iframe
              title="Mappa Centro Fitness Olympia"
              src={`https://www.google.com/maps?q=${GYM.mapsQuery}&output=embed`}
              className="h-[260px] w-full md:h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-border/50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
          <img
            src={logoAsset.url}
            alt="Logo Centro Fitness Olympia"
            className="h-20 w-20 rounded-full shadow-[0_10px_40px_-10px_oklch(0.62_0.22_25/0.5)]"
          />
          <div className="flex items-center gap-2">
            <div className="bar-brand h-3 w-3 rounded-sm" />
            <span className="font-display text-xl tracking-wider">
              CENTRO FITNESS OLYMPIA
            </span>
            <div className="bar-brand h-3 w-3 rounded-sm" />
          </div>
          <p className="text-sm text-muted-foreground">{GYM.address}</p>
          <nav aria-label="Link utili" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-brand-red hover:text-brand-red"><InstagramIcon className="h-5 w-5" /></a>
            <a href={GYM.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-brand-red hover:text-brand-red"><WhatsAppIcon className="h-5 w-5" /></a>
            <a href={GYM.phoneHref} aria-label={`Chiama ${GYM.phone}`} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-brand-red hover:text-brand-red"><Phone className="h-5 w-5" /></a>
          </div>
          <p className="text-sm text-muted-foreground">Tel. {GYM.phone} · WhatsApp {GYM.whatsapp}</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Centro Fitness Olympia · Siracusa
          </p>
        </div>
      </footer>

      <a
        href={GYM.whatsappInfoHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Scrivici su WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-brand-white shadow-[var(--shadow-card)] transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
