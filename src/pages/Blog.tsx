import { BlogFeatured } from "../components/blog/BlogFeatured";
import { BlogAllPosts } from "../components/blog/BlogAllPosts";
import { blogFeaturedPost, blogPostsAll } from "../data/mock";
import { HomeCTA } from "../components/home/HomeCTA";
import { Categories } from "../components/home/Categories";

export function Blog() {
  return (
    <>
      <BlogFeatured post={blogFeaturedPost} />
      <BlogAllPosts posts={blogPostsAll} />
      <Categories />
      <HomeCTA />
    </>
  );
}