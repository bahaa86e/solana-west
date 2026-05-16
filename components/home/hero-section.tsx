import { Container } from "@/components/ui/container";

import { HomeHeroCard } from "./home-hero-card";
import { HomeHeroMediaLayer } from "./home-hero-media-layer";
import { homeHeroContainerClassName, homeHeroSectionClassName } from "./home-hero-media";

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className={homeHeroSectionClassName}>
      <HomeHeroMediaLayer />
      <Container as="div" size="wide" className={homeHeroContainerClassName}>
        <HomeHeroCard />
      </Container>
    </section>
  );
}
