import { ArrowRight, ArrowUpRight, CalendarDays, TrendingDown } from "lucide-react";

import { hero } from "@/data/site";
import { ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";

/** Static stand-in for the product screenshot, drawn in CSS. */
const riskRows = [
  { account: "Ironclad Systems", score: 88, trend: "-24% usage", tone: "high" },
  { account: "Fernway", score: 71, trend: "2 open tickets", tone: "high" },
  { account: "Palette", score: 46, trend: "card expiring", tone: "medium" },
  { account: "Meridian", score: 22, trend: "seats +12", tone: "low" },
] as const;

const toneStyles = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-accent-tint text-accent-ink",
  low: "bg-primary/10 text-primary",
} as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-space-xl pt-space-lg sm:px-8">
      {/* Decorative light source behind the glass -- purely presentational. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.18),transparent)]" />
        <div className="absolute right-[-10rem] top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(234,88,12,0.14),transparent)]" />
      </div>

      <div className="mx-auto grid w-full max-w-content items-center gap-space-lg lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <a
            href={hero.eyebrowHref}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-white/70 py-1.5 pl-3 pr-2.5 text-sm font-medium text-muted-fg backdrop-blur-glass transition-colors duration-200 hover:border-primary/40 hover:text-foreground"
          >
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="min-w-0">{hero.eyebrow}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>

          <h1 className="balance mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.headline}{" "}
            <span className="relative whitespace-nowrap text-primary">
              {hero.headlineAccent}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1 h-[0.28em] rounded-full bg-accent/35"
              />
            </span>
          </h1>

          <p className="prose-measure mt-6 text-lg leading-relaxed text-muted-fg sm:text-xl">
            {hero.subhead}
          </p>

          <div className="mt-space-sm flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="ghost">
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <p className="mt-4 text-sm text-muted-fg">{hero.disclaimer}</p>

          <dl className="mt-space-md grid grid-cols-1 gap-6 border-t border-border pt-space-sm sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-muted-fg">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          {/* Decorative product mock: hidden from assistive tech, since the
              same numbers are stated in the copy above. */}
          <div aria-hidden="true" className="relative">
            <div className="glass rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-muted-fg">Accounts at risk</p>
                  <p className="text-2xl font-extrabold tracking-tight text-foreground">
                    18 of 412
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                  <TrendingDown className="h-4 w-4" strokeWidth={2.25} />
                  31%
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {riskRows.map((row) => (
                  <li
                    key={row.account}
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-white/80 px-3.5 py-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted text-xs font-bold text-muted-fg">
                      {row.account.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-foreground">
                        {row.account}
                      </span>
                      <span className="block truncate text-xs text-muted-fg">{row.trend}</span>
                    </span>
                    <span
                      className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold ${toneStyles[row.tone]}`}
                    >
                      {row.score}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl bg-foreground px-4 py-3.5">
                <p className="text-xs font-medium text-white/70">Churn risk, last 90 days</p>
                <div className="mt-3 flex h-16 items-end gap-1.5">
                  {[38, 44, 41, 52, 49, 61, 57, 48, 40, 34, 29, 24].map((value, index) => (
                    <span
                      key={index}
                      style={{ height: `${value}%` }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-primary to-secondary"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="glass absolute -bottom-6 -left-4 hidden rounded-2xl px-4 py-3 sm:block lg:-left-10">
              <p className="text-xs font-medium text-muted-fg">Identity resolution</p>
              <p className="text-sm font-bold text-foreground">4 sources merged</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
