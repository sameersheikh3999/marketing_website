/**
 * Icon registry.
 *
 * Data files reference icons by name (a plain string) rather than importing
 * components, so `src/data/site.ts` stays free of React. Imports here are
 * explicit and named so the bundler tree-shakes everything we do not use --
 * never `import * as icons from "lucide-react"`.
 */

import {
  Bell,
  Github,
  Linkedin,
  Plug,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Twitter,
  Unplug,
  Waypoints,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const icons = {
  Bell,
  Github,
  Linkedin,
  Plug,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Twitter,
  Unplug,
  Waypoints,
  Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function getIcon(name: IconName): LucideIcon {
  return icons[name];
}
