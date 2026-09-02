import { ArrowRight, Check } from "lucide-react";

import { faqs, features, finalCta, logos, steps, testimonials, valueProp } from "@/data/site";
import { getIcon } from "@/lib/icons";
import { ButtonLink, Eyebrow, Section, SectionHeading, cx } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function LogoStrip() {
  return (
    <section aria-label="Customers" className="border-y border-border bg-white/50 px-5 py-space-md sm:px-8">
      <div className="mx-auto w-full max-w-content">
        <p className="text-center text-sm font-medium text-muted-fg">
          Trusted by product and success teams at
        </p>
        <ul className="mt-6 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <li key={logo.name}>
              {/* Static wordmarks stand in for customer logo files. Swap each
                  <span> for a next/image <Image> with real dimensions when the
                  assets land -- the reserved row height keeps CLS at zero. */}
              <span
                className="block text-lg font-bold tracking-tight text-muted-fg/80 transition-colors duration-200 hover:text-foreground"
                title={logo.name}
              >
                {logo.wordmark}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ValueProp() {
  return (
    <Section id="problem" labelledBy="problem-heading">
      <div className="grid gap-space-md lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-space-lg">
        <Reveal>
          <Eyebrow>{valueProp.eyebrow}</Eyebrow>
          <h2
            id="problem-heading"
            className="balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            {valueProp.headline}
          </h2>
          <p className="prose-measure mt-5 text-lg leading-relaxed text-muted-fg">
            {valueProp.body}
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {valueProp.points.map((point, index) => {
            const Icon = getIcon(point.icon);
            const solution = point.tone === "solution";
            return (
              <Reveal key={point.title} delay={index * 100}>
                <div
                  className={cx(
                    "h-full rounded-2xl border p-6",
                    solution
                      ? "border-primary/25 bg-primary/[0.04] shadow-glass"
                      : "border-border bg-white/70",
                  )}
                >
                  <span
                    className={cx(
                      "grid h-11 w-11 place-items-center rounded-xl",
                      solution ? "bg-primary text-primary-fg" : "bg-muted text-muted-fg",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={2.1} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{point.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-fg">{point.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function Features() {
  return (
    <Section id="features" labelledBy="features-heading">
      <Reveal>
        <SectionHeading
          id="features-heading"
          eyebrow="Features"
          title="Everything you need to see churn coming"
          body="Six capabilities that turn scattered signals into a list of accounts your team can work through this week."
        />
      </Reveal>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = getIcon(feature.icon);
          return (
            <Reveal as="li" key={feature.title} delay={(index % 3) * 90} className="h-full">
              <div className="group h-full rounded-2xl border border-border bg-white/70 p-6 shadow-glass backdrop-blur-glass transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-white">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-fg">
                  <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={2.1} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted-fg">{feature.body}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-heading" className="bg-white/50">
      <Reveal>
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Three steps, one afternoon"
          body="No data warehouse project, no tracking plan rewrite. Connect what you already have."
        />
      </Reveal>

      <ol className="grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = getIcon(step.icon);
          return (
            <Reveal as="li" key={step.title} delay={index * 100} className="h-full">
              <div className="relative h-full rounded-2xl border border-border bg-white p-6 shadow-glass">
                <span className="absolute right-5 top-5 text-4xl font-extrabold tabular-nums text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-tint text-accent-ink">
                  <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={2.1} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted-fg">{step.body}</p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" labelledBy="testimonials-heading">
      <Reveal>
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Customers"
          title="Teams that stopped exporting CSVs"
        />
      </Reveal>

      {/* A static grid, not a carousel: no auto-rotation to pause, nothing
          hidden behind a control, and every quote is readable at once. */}
      <ul className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal as="li" key={testimonial.name} delay={index * 90} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-white/70 p-6 shadow-glass backdrop-blur-glass">
              <blockquote className="flex-1 text-lg leading-relaxed text-foreground">
                <p>{testimonial.quote}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                >
                  {testimonial.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-semibold text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="block truncate text-sm text-muted-fg">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-heading" className="bg-white/50">
      <Reveal>
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Questions we get before the trial"
        />
      </Reveal>

      {/* Native <details> gives keyboard operation, screen-reader state, and
          in-page find for free -- no JS accordion needed. */}
      <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 60}>
            <details className="group">
              <summary className="flex min-h-[3.5rem] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground transition-colors duration-200 hover:bg-muted/60 [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-muted-fg transition-transform duration-200 group-open:rotate-45"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-fg">{faq.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section id="cta" labelledBy="cta-heading">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-space-lg text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(37,99,235,0.45),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2
              id="cta-heading"
              className="balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              {finalCta.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              {finalCta.body}
            </p>

            <div className="mt-space-sm flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={finalCta.primaryCta.href} variant="accent">
                {finalCta.primaryCta.label}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </ButtonLink>
              <a
                href={finalCta.secondaryCta.href}
                className="inline-flex min-h-[3rem] cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/25 px-6 text-base font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10"
              >
                {finalCta.secondaryCta.label}
              </a>
            </div>

            <ul className="mt-space-sm flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {finalCta.assurances.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-white/80">
                  <Check className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
