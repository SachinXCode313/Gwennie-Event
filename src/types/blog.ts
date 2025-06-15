export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  date: string;
  category: string;
  likes: number;
  comments: number;
  image: string;
  featured?: boolean;
}

export interface BlogCategory {
  name: string;
  count: number;
  color: string;
}