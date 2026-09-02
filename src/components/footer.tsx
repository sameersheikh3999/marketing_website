import { Waves } from "lucide-react";

import { footer, site } from "@/data/site";
import { getIcon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/60 px-5 py-space-lg sm:px-8">
      <div className="mx-auto w-full max-w-content">
        <div className="grid gap-space-md lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 rounded-lg text-lg font-extrabold tracking-tight text-foreground"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-fg">
                <Waves className="h-5 w-5" aria-hidden="true" strokeWidth={2.25} />
              </span>
              {site.name}
            </a>
            <p className="prose-measure mt-4 leading-relaxed text-muted-fg">{site.tagline}.</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block cursor-pointer rounded font-medium text-primary hover:underline"
            >
              {site.email}
            </a>

            <ul className="mt-6 flex items-center gap-2">
              {footer.socials.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="grid h-11 w-11 cursor-pointer place-items-center rounded-xl border border-border bg-white text-muted-fg transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-space-sm sm:grid-cols-3">
            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-foreground">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-flex min-h-[2.5rem] cursor-pointer items-center rounded text-muted-fg transition-colors duration-200 hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-space-md flex flex-col gap-4 border-t border-border pt-space-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-fg">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.legal.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="cursor-pointer rounded text-sm text-muted-fg transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
