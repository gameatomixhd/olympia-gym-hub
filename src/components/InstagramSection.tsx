import { useState } from "react";
import { Play } from "lucide-react";

export const INSTAGRAM_URL = "https://www.instagram.com/centro.fitness.olympia/";

/**
 * Link reali dei Reel/post del profilo @centro.fitness.olympia.
 * Incolla qui gli URL copiati da Instagram (Condividi → Copia link), es:
 * "https://www.instagram.com/reel/ABC123xyz/"
 * Ogni link viene mostrato con l'embed ufficiale di Instagram, caricato solo al clic.
 */
export const INSTAGRAM_REELS: string[] = [];

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function embedUrl(url: string) {
  const m = url.match(/instagram\.com\/(reel|p|tv)\/([A-Za-z0-9_-]+)/);
  return m ? `https://www.instagram.com/${m[1]}/${m[2]}/embed` : null;
}

function ReelCard({ url, index }: { url: string; index: number }) {
  const [active, setActive] = useState(false);
  const src = embedUrl(url);
  if (!src) return null;
  return (
    <div className="relative aspect-[9/16] w-[160px] flex-none snap-start overflow-hidden rounded-2xl border border-border/60 bg-card sm:w-auto">
      {active ? (
        <iframe src={src} title={`Reel Instagram ${index + 1}`} className="h-full w-full" loading="lazy" allowFullScreen />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-card to-ink p-6 text-center"
          aria-label={`Guarda il Reel ${index + 1}`}
        >
          <img src="/olympia-logo.png" alt="" className="h-10 w-10 rounded-full opacity-80" loading="lazy" />
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
            <Play className="h-7 w-7 fill-current" />
          </span>
          <span className="font-display text-base tracking-wider">Guarda il Reel</span>
          <span className="absolute right-4 top-4 text-foreground/80"><InstagramIcon className="h-5 w-5" /></span>
        </button>
      )}
    </div>
  );
}

export function InstagramSection() {
  return (
    <section id="instagram" className="border-t border-border/50 bg-ink/40 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-red">
              <InstagramIcon className="h-4 w-4" /> @centro.fitness.olympia
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Vivi l'energia <span className="text-brand-red font-bold">Olympia</span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Allenamenti, novità, vita in palestra e tutta l'energia della nostra community.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 md:self-auto"
          >
            <InstagramIcon className="h-4 w-4" /> Seguici su Instagram
          </a>
        </div>

        {INSTAGRAM_REELS.length > 0 ? (
          <div className="-mx-6 mt-8 flex snap-x gap-3 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5">
            {INSTAGRAM_REELS.map((u, i) => (
              <ReelCard key={u} url={u} index={i} />
            ))}
          </div>
        ) : (
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 flex flex-col items-center gap-5 rounded-2xl border border-dashed border-border p-8 text-center transition-colors hover:border-brand-red"
          >
            <img src="/olympia-logo.png" alt="Logo Centro Fitness Olympia" className="h-20 w-20 rounded-full" loading="lazy" />
            <span className="font-display text-3xl tracking-wider">Guarda i nostri Reel su Instagram</span>
            <span className="max-w-md text-muted-foreground">
              Video degli allenamenti e della vita in sala, direttamente dal nostro profilo ufficiale.
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
