import { useEffect, useState } from "react";

// Scadenza Black Friday: 30 novembre 2026 ore 22:00 (ora italiana)
const DEADLINE = new Date("2026-11-30T22:00:00+01:00").getTime();

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function remaining(now: number) {
  const diff = Math.max(0, DEADLINE - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);
  return { days, hours, minutes, seconds, expired: diff === 0 };
}

export function PromoCountdown() {
  const [left, setLeft] = useState<ReturnType<typeof remaining> | null>(null);

  useEffect(() => {
    const tick = () => setLeft(remaining(Date.now()));
    tick();
    const id = setInterval(tick, 1_000);
    return () => clearInterval(id);
  }, []);

  if (!left) {
    return (
      <div className="mt-4 rounded-xl border border-brand-red/50 bg-brand-red/10 px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Offerta valida fino al 30 novembre 2026, ore 22:00
      </div>
    );
  }

  if (left.expired) {
    return (
      <div className="mt-4 rounded-xl border border-border/60 bg-card px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        La promozione Black Friday è terminata
      </div>
    );
  }

  const cells = [
    { value: pad(left.days), label: "giorni" },
    { value: pad(left.hours), label: "ore" },
    { value: pad(left.minutes), label: "min" },
    { value: pad(left.seconds), label: "sec" },
  ];

  return (
    <div className="mt-4 rounded-xl border-2 border-brand-red bg-brand-red/10 px-4 py-3">
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
        L'offerta scade il 30 novembre alle 22:00
      </p>
      <div className="mt-2 flex items-center justify-center gap-2 sm:gap-3">
        {cells.map((cell) => (
          <div
            key={cell.label}
            className="flex min-w-[58px] flex-col items-center rounded-lg bg-ink/60 px-2 py-1.5 sm:min-w-[68px]"
          >
            <span className="font-display text-2xl leading-none text-brand-white tabular-nums sm:text-3xl">
              {cell.value}
            </span>
            <span className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
              {cell.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
