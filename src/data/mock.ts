import type { Post, Author } from "../types/blog";

import heroImage from "../assets/hero.png";
import buildingImage from "../assets/building.png";
import blogHomeImg from "../assets/bloghome.png";
import blogImage1 from "../assets/blog1.png";
import blogImage2 from "../assets/blog2.png";
import blogImage3 from "../assets/blog3.png";
import blogImage4 from "../assets/blog4.png";
import blogImage5 from "../assets/blog5.png";
import blogPostImage from "../assets/blogpost.png";
import blogauthor from "../assets/author.png";
import aboutHomeImg from "../assets/abouthome.png";

export const heroPost: Post = {
  id: "hero-1",
  title: "Step-by-step guide to choosing great font pairs",
  excerpt:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  author: "James West",
  date: "May 23, 2022",
  category: "Startup",
  coverUrl: heroImage,
};

export const featuredPost: Post = {
  id: "feat-1",
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  excerpt:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  author: "John Doe",
  date: "May 23, 2022",
  category: "Startup",
  coverUrl: buildingImage, 
};

export const posts: Post[] = [
  {
    id: "p2",
    title: "8 Figma design systems that you can download for free today.",
    excerpt: "",
    author: "John Doe",
    date: "Aug 23, 2021",
    category: "Design",
    coverUrl: "",
  },
  {
    id: "p3",
    title: "8 Figma design systems that you can download for free today.",
    excerpt: "",
    author: "John Doe",
    date: "Aug 23, 2021",
    category: "Design",
    coverUrl: "",
  },
  {
    id: "p4",
    title: "8 Figma design systems that you can download for free today.",
    excerpt: "",
    author: "John Doe",
    date: "Aug 23, 2021",
    category: "Design",
    coverUrl: "",
  },
  {
    id: "p5",
    title: "8 Figma design systems that you can download for free today.",
    excerpt: "",
    author: "John Doe",
    date: "Aug 23, 2021",
    category: "Design",
    coverUrl: "",
},
];

//blogPost Page

export const blogSinglePost: Post = {
  id: "sp1",
  title: "Step-by-step guide to choosing great font pairs",
  excerpt: "",
  author: "Andrew Jonson",
  date: "Jan 27, 2022",
  category: "Startup",
  coverUrl: blogPostImage,
  authorAvatar: blogauthor,
};

//blog Page
export const blogPostsAll: Post[] = [
  {
    id: "b1",
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "John Doe",
    date: "Aug 23, 2021",
    coverUrl: blogImage1,
  },
  {
    id: "b2",
    category: "Business",
    title: "How to build rapport with your web design clients",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "John Doe",
    date: "Aug 23, 2021",
    coverUrl: blogImage2,
  },
  {
    id: "b3",
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "John Doe",
    date: "Aug 23, 2021",
    coverUrl: blogImage3,
  },
  {
    id: "b4",
    category: "Technology",
    title: "8 Figma design systems you can download for free today",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "John Doe",
    date: "Aug 23, 2021",
    coverUrl: blogImage4,
  },
  {
    id: "b5",
    category: "Economy",
    title: "Font sizes in UI design: The complete guide to follow",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "John Doe",
    date: "Aug 23, 2021",
    coverUrl: blogImage5,
  },
];




export const blogFeaturedPost: Post = {
  id: "bp1",
  title: "Step-by-step guide to choosing great font pairs",
  excerpt:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  author: "John Doe",
  date: "May 23, 2022",
  category: "Startup",
  coverUrl: blogHomeImg,
};

export const authors: Author[] = [
  {
    id: "a1",
    name: "Floyd Miles",
    role: "Content Writer @Company",
    avatarUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "a2",
    name: "Dianne Russell",
    role: "Content Writer @Company",
    avatarUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "a3",
    name: "Jenny Wilson",
    role: "Content Writer @Company",
    avatarUrl:
      "https://images.unsplash.com/photo-1524503033411-f9f3a9a2bd9b?auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "a4",
    name: "Leslie Alexander",
    role: "Content Writer @Company",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
  },
];