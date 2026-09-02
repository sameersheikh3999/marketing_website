"use client";

import { useId, useState } from "react";
import { Check, Sparkles } from "lucide-react";

import { pricing, type BillingCycle } from "@/data/site";
import { Section, SectionHeading, cx } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const cycles: { id: BillingCycle; label: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "annual", label: "Annual" },
];

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("annual");
  const groupId = useId();

  return (
    <Section id="pricing" labelledBy="pricing-heading">
      <Reveal>
        <SectionHeading
          id="pricing-heading"
          eyebrow="Pricing"
          title="Priced on usage, not on seats"
          body={pricing.note}
        />
      </Reveal>

      <Reveal>
        <div className="mb-space-md flex flex-col items-center gap-3">
          {/* A radiogroup rather than a switch: two named choices, both
              announced, both reachable with arrow keys. */}
          <div
            role="radiogroup"
            aria-label="Billing cycle"
            className="inline-flex rounded-xl border border-border bg-white p-1 shadow-glass"
          >
            {cycles.map((option) => {
              const active = cycle === option.id;
              return (
                <button
                  key={option.id}
                  id={`${groupId}-${option.id}`}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setCycle(option.id)}
                  className={cx(
                    "min-h-[2.75rem] cursor-pointer rounded-lg px-5 text-sm font-semibold transition-colors duration-200",
                    active
                      ? "bg-primary text-primary-fg"
                      : "text-muted-fg hover:bg-muted hover:text-foreground",
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <p className="text-sm font-semibold text-accent-ink">
            {pricing.annualDiscountLabel} on annual billing
          </p>
        </div>
      </Reveal>

      <ul className="grid items-start gap-5 lg:grid-cols-3">
        {pricing.plans.map((plan, index) => {
          const amount = plan.price[cycle];
          return (
            <Reveal as="li" key={plan.id} delay={index * 90} className="h-full">
              <div
                className={cx(
                  "relative flex h-full flex-col rounded-2xl border p-6 sm:p-7",
                  plan.featured
                    ? "border-primary bg-white shadow-lift lg:-mt-4 lg:pb-9 lg:pt-9"
                    : "border-border bg-white/70 shadow-glass backdrop-blur-glass",
                )}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-fg">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Most popular
                  </span>
                ) : null}

                <h3 className="text-xl font-bold tracking-tight text-foreground">{plan.name}</h3>
                <p className="mt-2 min-h-[3rem] leading-relaxed text-muted-fg">{plan.blurb}</p>

                <p className="mt-5 flex items-baseline gap-1.5">
                  {amount === null ? (
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      Custom
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold tracking-tight tabular-nums text-foreground">
                        ${amount}
                      </span>
                      <span className="text-muted-fg">{plan.priceSuffix}</span>
                    </>
                  )}
                </p>
                <p className="mt-1 text-sm text-muted-fg">
                  {amount === null
                    ? "Annual contract, volume based"
                    : cycle === "annual"
                      ? "per month, billed annually"
                      : "per month, billed monthly"}
                </p>

                <a
                  href={plan.cta.href}
                  className={cx(
                    "mt-6 inline-flex min-h-[3rem] cursor-pointer items-center justify-center rounded-xl px-5 font-semibold transition-all duration-200",
                    plan.featured
                      ? "bg-primary text-primary-fg shadow-lift hover:bg-primary-hover"
                      : "border border-border bg-white text-foreground hover:border-primary/40 hover:text-primary",
                  )}
                >
                  {plan.cta.label}
                </a>

                <ul className="mt-7 space-y-3 border-t border-border pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 leading-relaxed">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <span className="text-muted-fg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
