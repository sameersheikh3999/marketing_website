import type { ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Page section with the shared max width and the spacious vertical rhythm. */
export function Section({
  id,
  children,
  className,
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx("px-5 py-space-xl sm:px-8 lg:py-space-2xl", className)}
    >
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-accent-ink">
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  body,
  align = "center",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={cx("mb-space-lg", centered && "mx-auto max-w-2xl text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className="balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cx(
            "prose-measure mt-5 text-lg leading-relaxed text-muted-fg",
            centered && "mx-auto",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "accent" | "ghost";

const buttonBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold transition-all duration-200 min-h-[3rem]";

const buttonVariants: Record<ButtonVariant, string> = {
  // white on #2563EB -> 5.12:1
  primary:
    "bg-primary text-primary-fg shadow-lift hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0",
  // white on #C2410C -> 5.22:1 (never #EA580C, which is only 3.56:1)
  accent:
    "bg-accent-ink text-white shadow-lift hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "border border-border bg-white/70 text-foreground backdrop-blur-glass hover:border-primary/40 hover:bg-white hover:text-primary",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <a href={href} className={cx(buttonBase, buttonVariants[variant], className)}>
      {children}
    </a>
  );
}
