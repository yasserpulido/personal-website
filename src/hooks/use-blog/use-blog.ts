import { useContext } from "react";
import { BlogContext } from "../../providers";

export const useBlog = () => {
  return useContext(BlogContext);
};
