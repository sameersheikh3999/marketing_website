import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import {
  Faq,
  Features,
  FinalCta,
  HowItWorks,
  LogoStrip,
  Testimonials,
  ValueProp,
} from "@/components/sections";

/**
 * Section order comes straight from the resolved landing pattern
 * (Hero + Features + CTA, with social proof placed before the CTA):
 *   hero -> proof -> problem/solution -> features -> steps
 *   -> testimonials -> pricing -> faq -> cta -> footer
 *
 * Everything is statically rendered; the only client components are the
 * header menu, the billing toggle, and the scroll-reveal wrapper.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <LogoStrip />
        <ValueProp />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
