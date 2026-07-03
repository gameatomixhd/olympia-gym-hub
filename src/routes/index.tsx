import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-gym.jpg";
import salaPesiImg from "@/assets/salapesi.jpg";
import logoAsset from "@/assets/olympia-logo.png.asset.json";
import { MapPin, Phone, MessageCircle, Clock, Dumbbell, Menu, X, Smartphone, FileText, Users, Wind, Building2, Ruler, Star, Quote } from "lucide-react";
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
    { label: "Promo", href: "#promo" },
    { label: "Orari", href: "#orari" },
    { label: "Dove Siamo", href: "#dove" },
    { label: "Contatti", href: "#contatti" },
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
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Sala pesi Centro Fitness Olympia"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-y-0 left-0 w-1 bar-brand" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pt-32 pb-20">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-8 bg-brand-red" /> Siracusa · Sala pesi
          </div>
          <h1 className="max-w-5xl text-6xl leading-none md:text-8xl lg:text-9xl">
            Alza la sbarra.
            <br />
            <span className="text-gradient-brand">Diventa Olympia.</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
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
              className="rounded-full border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-card"
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
              <span className="text-gradient-brand">pura sala pesi.</span>
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
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 md:p-12">
            <div className="absolute inset-x-0 top-0 h-1 bar-brand" />
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
              <div className="inline-flex rounded-full border border-brand-green/40 bg-brand-green/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-brand-green">
                100% Gratuite
              </div>
              <h3 className="font-display text-4xl leading-none md:text-5xl">
                Schede di allenamento <span className="text-gradient-brand">gratuite</span>,
                su misura per te.
              </h3>
            </div>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              Da noi la scheda è <strong className="text-foreground">sempre inclusa</strong>:
              nessun costo aggiuntivo, nessun pacchetto da acquistare. Scegli il formato
              che preferisci.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border/60 p-6">
                <Smartphone className="h-6 w-6 text-brand-green" />
                <div className="mt-4 font-display text-2xl tracking-wider">Via App</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Scheda digitale sempre con te sullo smartphone, con esercizi, serie,
                  ripetizioni e note dell'istruttore.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 p-6">
                <FileText className="h-6 w-6 text-brand-red" />
                <div className="mt-4 font-display text-2xl tracking-wider">Cartacea</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Scheda cartacea personalizzata, stampata su misura per te. Semplice,
                  chiara, sempre a portata di mano.
                </p>
              </div>
            </div>
            <p className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
              <Users className="mt-0.5 h-4 w-4 flex-none text-brand-red" />
              I nostri istruttori sono <strong className="text-foreground">sempre presenti in sala</strong>{" "}
              per correggere, motivare e adattare l'allenamento ai tuoi obiettivi.
            </p>
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
            La <span className="text-gradient-brand">promo</span> del mese.
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
              <p className="text-xs text-muted-foreground">
                Tip: sostituisci il file <code className="rounded bg-muted px-1 py-0.5">public/promo-mese.jpg</code> ogni
                mese con la nuova grafica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORARI */}
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

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="bar-brand h-3 w-3 rounded-sm" />
            <span className="font-display text-lg tracking-wider">
              CENTRO FITNESS OLYMPIA
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Centro Fitness Olympia · Siracusa
          </p>
        </div>
      </footer>
    </div>
  );
}
