import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-gym.jpg";
import salaPesiImg from "@/assets/salapesi.jpg";
import schedeImg from "@/assets/schede.jpg";
const logoAsset = { url: "/olympia-logo.png" };
const galReception = { url: "/reception.jpg" };
const galSala1 = { url: "/sala1.jpg" };
const galSala2 = { url: "/sala2.jpg" };
const galManubri = { url: "/manubri.jpg" };
const galPanche = { url: "/panche.jpg" };
const galCardio = { url: "/cardio.jpg" };
const galMacchinari = { url: "/macchinari.jpg" };
import { MapPin, Phone, MessageCircle, Clock, Dumbbell, Menu, X, Smartphone, FileText, Users, Wind, Building2, Ruler, Star, Quote, Camera } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const GYM = {
  name: "Centro Fitness Olympia",
  address: "Via Francesco Accolla, 36 — Siracusa",
  phone: "0931 703066",
  phoneHref: "tel:+390931703066",
  whatsapp: "348 714 7416",
  whatsappHref: "https://wa.me/393487147416",
  hoursWeek: "Lun – Ven  ·  07:30 – 22:00",
  hoursSat: "Sabato  ·  08:00 – 13:00",
  hoursSun: "Domenica  ·  Chiuso",
  mapsQuery: "Via+Francesco+Accolla+36+Siracusa",
};

function Index() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Palestra", href: "#palestra" },
    { label: "Gallery", href: "#gallery" },
    { label: "Promo", href: "#promo" },
    { label: "Orari", href: "#orari" },
    { label: "Dove Siamo", href: "#dove" },
    { label: "Recensioni", href: "#recensioni" },
    { label: "Contatti", href: "#contatti" },
  ];

  const gallery = [
    { src: galReception.url, alt: "Reception Centro Fitness Olympia", span: "md:col-span-2 md:row-span-2" },
    { src: galSala1.url, alt: "Sala pesi con macchinari Panatta", span: "" },
    { src: galManubri.url, alt: "Area manubri e panche", span: "" },
    { src: galSala2.url, alt: "Vista panoramica della sala pesi", span: "md:col-span-2" },
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
            <span className="font-display text-xl tracking-wider hidden sm:inline">
              OLYMPIA<span className="text-brand-red">.</span>
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
            Prenota una prova
          </a>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
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
                Prenota una prova
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt="Sala pesi Centro Fitness Olympia"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-background" />

        

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pt-32 pb-20 text-brand-white">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-white/70">
            <span className="h-px w-8 bg-brand-red" /> Siracusa · Sala pesi
          </div>
          <h1 className="max-w-5xl text-6xl leading-none md:text-8xl lg:text-9xl">
            <span className="text-brand-white">Alza la sbarra.</span>
            <br />
            <span className="text-brand-red font-bold">Diventa Olympia.</span>
          </h1>
          <p className="max-w-2xl text-lg text-brand-white/80 md:text-xl">
            Il Centro Fitness Olympia è la palestra di riferimento a Siracusa per chi cerca
            un ambiente serio, attrezzature complete e una sala pesi pensata per allenarsi
            davvero.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#promo"
              className="rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              Promo del mese
            </a>
            <a
              href="#dove"
              className="rounded-full border border-brand-white/40 bg-brand-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-brand-white backdrop-blur-sm transition-colors hover:bg-brand-white/15"
            >
              Vieni a trovarci
            </a>
          </div>
        </div>

      </section>

      {/* PALESTRA / SALA PESI */}
      <section id="palestra" className="border-t border-border/50 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img
              src={salaPesiImg}
              alt="Sala pesi attrezzata"
              className="aspect-[5/6] w-full rounded-lg object-cover"
              loading="lazy"
              width={1200}
              height={1400}
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-brand-red px-6 py-4 md:block">
              <div className="font-display text-4xl leading-none">100%</div>
              <div className="text-xs uppercase tracking-widest">Sala Pesi</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-green">
              <Dumbbell className="h-4 w-4" /> La nostra filosofia
            </div>
            <h2 className="mt-6 text-5xl md:text-6xl">
              700 mq di
              <br />
              <span className="text-brand-red font-bold">pura sala pesi.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Il Centro Fitness Olympia è una palestra di circa <strong className="text-foreground">700 mq</strong>{" "}
              interamente dedicata alla sala pesi, con macchinari professionali{" "}
              <strong className="text-foreground">Panatta</strong>. Un ambiente{" "}
              <strong className="text-foreground">ampio, arieggiato e ad altezza strada</strong> —
              niente scantinati, solo luce e aria vera.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Building2, text: "Macchinari Panatta professionali" },
                { icon: Ruler, text: "Circa 700 mq di spazio" },
                { icon: Wind, text: "Ambiente arieggiato, ad altezza strada" },
                { icon: Dumbbell, text: "Bilancieri, rack, panche e cavi" },
                { icon: Users, text: "Istruttori sempre disponibili" },
                { icon: Dumbbell, text: "Spogliatoi con docce" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm">
                  <Icon className="mt-0.5 h-4 w-4 flex-none text-brand-red" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SCHEDE GRATUITE */}
        <div className="mx-auto mt-24 max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-card/40 shadow-[var(--shadow-card)]">
            <div className="absolute inset-x-0 top-0 h-1 bar-brand" />
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
                <img
                  src={schedeImg}
                  alt="Istruttore che mostra una scheda di allenamento personalizzata al cliente"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-brand-green/50 bg-background/70 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-brand-green backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  100% Gratuite
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
                  <FileText className="h-4 w-4" /> Schede di allenamento
                </div>
                <h3 className="mt-5 font-display text-4xl leading-none md:text-5xl">
                  Sempre <span className="text-brand-red font-bold">gratuite</span>,
                  <br />su misura per te.
                </h3>
                <p className="mt-5 text-base text-muted-foreground md:text-lg">
                  Da noi la scheda è <strong className="text-foreground">sempre inclusa</strong>:
                  nessun costo aggiuntivo, nessun pacchetto da acquistare. Scegli il formato
                  che preferisci.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="group rounded-xl border border-border/60 bg-background/40 p-5 transition-all hover:-translate-y-1 hover:border-brand-green/50">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
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

      {/* PROMO */}
      <section id="promo" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-green/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
            <span className="h-px w-8 bg-brand-red" /> Solo per questo mese
          </div>
          <h2 className="mt-6 max-w-3xl text-5xl md:text-7xl">
            La <span className="text-brand-red font-bold">promo</span> del mese.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Un'offerta nuova ogni mese per iniziare o tornare ad allenarti. Contattaci per
            i dettagli e attivare la tua promozione.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card">
              <img
                src="/promo-mese.jpg"
                alt="Promozione del mese Centro Fitness Olympia"
                className="w-full transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur">
                Promo attiva
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Come attivarla
                </div>
                <p className="mt-3 text-base">
                  Chiamaci o scrivici su WhatsApp: ti spieghiamo tutti i dettagli e
                  fissiamo la tua prima visita in palestra.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={GYM.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={GYM.phoneHref}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" /> Chiama ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-t border-border/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
                <Camera className="h-4 w-4" /> Gallery
              </div>
              <h2 className="mt-6 text-5xl md:text-6xl">
                Dai un'occhiata
                <br />
                <span className="text-gradient-brand">alla palestra.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg text-muted-foreground">
              700mq di sala pesi, macchinari Panatta, area cardio e ambiente ad altezza strada, luminoso e arieggiato.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
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
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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


      <section id="orari" className="border-t border-border/50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-green">
              <Clock className="h-4 w-4" /> Orari
            </div>
            <h2 className="mt-6 text-5xl">Quando siamo aperti.</h2>
          </div>
          <div className="md:col-span-2">
            <div className="divide-y divide-border/60 border-y border-border/60">
              {[GYM.hoursWeek, GYM.hoursSat, GYM.hoursSun].map((h) => {
                const [day, time] = h.split("·").map((s) => s.trim());
                return (
                  <div key={h} className="flex items-center justify-between py-6">
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
      <section id="dove" className="border-t border-border/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
                <MapPin className="h-4 w-4" /> Dove Siamo
              </div>
              <h2 className="mt-6 text-5xl md:text-6xl">
                In pieno centro
                <br />a <span className="text-gradient-brand">Siracusa</span>.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              {GYM.address}. Facilmente raggiungibile, con possibilità di parcheggio nelle
              vie limitrofe.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border/60">
            <iframe
              title="Mappa Centro Fitness Olympia"
              src={`https://www.google.com/maps?q=${GYM.mapsQuery}&output=embed`}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="border-t border-border/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-green">
            <Phone className="h-4 w-4" /> Contatti
          </div>
          <h2 className="mt-6 text-5xl md:text-6xl">Scrivici. Passa a trovarci.</h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <a
              href={GYM.phoneHref}
              className="group rounded-2xl border border-border/60 bg-card p-8 transition-colors hover:border-brand-red"
            >
              <Phone className="h-6 w-6 text-brand-red" />
              <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                Telefono
              </div>
              <div className="mt-2 font-display text-3xl tracking-wider">{GYM.phone}</div>
            </a>
            <a
              href={GYM.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border/60 bg-card p-8 transition-colors hover:border-brand-green"
            >
              <MessageCircle className="h-6 w-6 text-brand-green" />
              <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                WhatsApp
              </div>
              <div className="mt-2 font-display text-3xl tracking-wider">{GYM.whatsapp}</div>
            </a>
            <a
              href={`https://www.google.com/maps?q=${GYM.mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border/60 bg-card p-8 transition-colors hover:border-brand-red"
            >
              <MapPin className="h-6 w-6 text-brand-red" />
              <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                Indirizzo
              </div>
              <div className="mt-2 font-display text-2xl leading-tight tracking-wider">
                Via F. Accolla, 36
                <br />
                Siracusa
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* RECENSIONI */}
      <section id="recensioni" className="border-t border-border/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-green">
            <Star className="h-4 w-4" /> Recensioni Google
          </div>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-5xl md:text-6xl">
              Le voci dei
              <br />
              <span className="text-gradient-brand">nostri atleti.</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-8 w-8 fill-brand-red text-brand-red" />
                ))}
              </div>
              <div>
                <div className="font-display text-3xl leading-none">5,0</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">su Google</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, idx) => (
              <article
                key={r.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red hover:shadow-[0_20px_50px_-20px_oklch(0.62_0.22_25/0.4)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bar-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Quote className="absolute right-6 top-6 h-16 w-16 text-brand-red/10" strokeWidth={1} />
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="mt-6 flex-1 text-base leading-relaxed text-foreground/90">
                  "{r.text}"
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-border/60 pt-5">
                  <div
                    className={`flex h-11 w-11 flex-none items-center justify-center rounded-full font-display text-lg ${
                      idx % 3 === 0
                        ? "bg-brand-red/15 text-brand-red"
                        : idx % 3 === 1
                        ? "bg-brand-green/15 text-brand-green"
                        : "bg-foreground/10 text-foreground"
                    }`}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div className="font-display text-lg tracking-wider">{r.name}</div>
                </div>
              </article>
            ))}
          </div>


          <div className="mt-12 flex justify-center">
            <a
              href={`https://www.google.com/maps?q=${GYM.mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-card"
            >
              Leggi tutte le recensioni su Google
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
          <img
            src={logoAsset.url}
            alt="Logo Centro Fitness Olympia"
            className="h-32 w-32 rounded-full shadow-[0_10px_40px_-10px_oklch(0.62_0.22_25/0.5)]"
          />
          <div className="flex items-center gap-2">
            <div className="bar-brand h-3 w-3 rounded-sm" />
            <span className="font-display text-xl tracking-wider">
              CENTRO FITNESS OLYMPIA
            </span>
            <div className="bar-brand h-3 w-3 rounded-sm" />
          </div>
          <p className="text-sm text-muted-foreground">{GYM.address}</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Centro Fitness Olympia · Siracusa
          </p>
        </div>
      </footer>

    </div>
  );
}
