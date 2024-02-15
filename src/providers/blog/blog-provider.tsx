import { createContext, useEffect, useState } from "react";
import { Post } from "../../types";
import { getPosts } from "../../utils";

type BlogContextType = {
  posts: Post[];
};

export const BlogContext = createContext<BlogContextType>({
  posts: [],
});

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const result = async () => {
      const posts = await getPosts();
      if (posts.status === "success") {
        setPosts(Object.values(posts.data));
      }
    };

    result();
  }, []);

  return (
    <BlogContext.Provider value={{ posts }}>{children}</BlogContext.Provider>
  );
};
