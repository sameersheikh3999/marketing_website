"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Waves, X } from "lucide-react";

import { nav, site } from "@/data/site";
import { cx } from "@/components/ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the panel and returns focus to the control that opened it,
  // so keyboard users are never dropped at the top of the document.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 transition-shadow duration-200",
        scrolled ? "shadow-glass" : "shadow-none",
      )}
    >
      <div
        className={cx(
          "border-b transition-colors duration-200",
          scrolled
            ? "border-border/80 bg-white/80 backdrop-blur-glass"
            : "border-transparent bg-background/60 backdrop-blur-glass",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-lg text-lg font-extrabold tracking-tight text-foreground"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-fg shadow-lift">
              <Waves className="h-5 w-5" aria-hidden="true" strokeWidth={2.25} />
            </span>
            {site.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium text-muted-fg transition-colors duration-200 hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#cta"
              className="cursor-pointer rounded-lg px-3.5 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="inline-flex min-h-[2.75rem] cursor-pointer items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-fg shadow-lift transition-colors duration-200 hover:bg-primary-hover"
            >
              Start free
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-xl border border-border bg-white/70 text-foreground transition-colors duration-200 hover:bg-white md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          id="mobile-nav"
          ref={panelRef}
          hidden={!open}
          className="border-t border-border bg-white/95 backdrop-blur-glass md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-content px-5 py-4 sm:px-8">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[3rem] cursor-pointer items-center rounded-lg px-2 text-base font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-[3rem] cursor-pointer items-center justify-center rounded-xl bg-primary px-5 font-semibold text-primary-fg"
            >
              Start free
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
