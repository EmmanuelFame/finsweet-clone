import { useParams } from "react-router-dom";
import { BlogPostView } from "../components/blog/BlogPostView";
import { ReadNext } from "../components/blog/ReadNext";
import { HomeCTA } from "../components/home/HomeCTA";
import { blogPostsAll, blogSinglePost } from "../data/mock";
import type { Post } from "../types/blog";

export function BlogPost() {
  const { id } = useParams();

  // build a pool of posts (all + the single)
  const pool: Post[] = [
    blogSinglePost,
    ...blogPostsAll.filter((p) => p.id !== blogSinglePost.id),
  ];

  const post = pool.find((p) => p.id === id) ?? blogSinglePost;

  const readNext = pool
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <BlogPostView post={post} />
      <ReadNext posts={readNext} />
      <HomeCTA />
    </>
  );
}