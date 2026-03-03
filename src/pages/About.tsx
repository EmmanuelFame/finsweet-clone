import { AboutHero } from "../components/about/AboutHero";
import { AboutTwoSections } from "../components/about/AboutTwoSections";
import { Authors } from "../components/home/Authors";
import { HomeCTA } from "../components/home/HomeCTA";

export function About() {
  return (
    <>
      <AboutHero />
      <AboutTwoSections />
      <Authors />
      <HomeCTA />
    </>
  );
}