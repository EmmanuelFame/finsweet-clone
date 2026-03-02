import { Hero } from "../components/home/Hero";
import { FeaturedAndPosts } from "../components/home/FeaturedAndPosts";
import { AboutMission } from "../components/home/AboutMission";
import { Categories } from "../components/home/Categories";
import { SpecialPost } from "../components/home/SpecialPost";
import { Authors } from "../components/home/Authors";
import { FeaturedIn } from "../components/home/FeaturedIn";
import { Testimonials } from "../components/home/Testimonials";
import { HomeCTA } from "../components/home/HomeCTA";

import { heroPost, featuredPost, posts } from "../data/mock";

export function Home() {
  return (
    <>
      <Hero post={heroPost} />
      <FeaturedAndPosts featured={featuredPost} posts={posts} />
      <AboutMission />
      <Categories />
      <SpecialPost />

      <Authors />
      <FeaturedIn />
      <Testimonials />
      <HomeCTA />
    </>
  );
}