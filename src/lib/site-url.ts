/**
 * Resolves the canonical origin for absolute URLs (OG tags, robots, sitemap).
 *
 * Precedence:
 *   1. NEXT_PUBLIC_SITE_URL          -- set this once a custom domain is live
 *   2. VERCEL_PROJECT_PRODUCTION_URL -- Vercel injects this automatically, so
 *                                       a fresh deploy is correct with no config
 *   3. http://localhost:3000         -- local development
 *
 * Hardcoding the origin means every preview deploy advertises the production
 * domain in its metadata, so it is read from the environment instead.
 */

const FALLBACK = "http://localhost:3000";

function withProtocol(value: string): string {
  const trimmed = value.trim().replace(/\/+$/, "");
  if (!trimmed) return FALLBACK;
  return /^https?:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export function getSiteUrl(): string {
  return withProtocol(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      FALLBACK,
  );
}
