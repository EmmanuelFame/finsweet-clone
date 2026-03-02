export type Post = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  coverUrl: string;
};

export type Author = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
};