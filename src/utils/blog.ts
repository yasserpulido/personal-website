import { get, ref, set } from "firebase/database";
import { db } from "./firebase";
import { Post } from "../types";

export const createPost = async (post: Post) => {
  try {
    const userRef = ref(db, `posts/${post.id}`);

    await set(userRef, {
      ...post,
    });

    return {
      status: "success",
      message: "Post has been created successfully.",
    };
  } catch (error) {
    if (error instanceof Error) {
      return { status: "error", message: error.message };
    } else {
      return { status: "error", message: "An unknown error occurred." };
    }
  }
};

export const getPosts = async () => {
  try {
    const userRef = ref(db, "posts");
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      return {
        status: "success",
        data: snapshot.val(),
      };
    } else {
      return {
        status: "error",
        message: "No data available.",
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { status: "error", message: error.message };
    } else {
      return { status: "error", message: "An unknown error occurred." };
    }
  }
};

export const updatePost = async (post: Post) => {
  try {
    const userRef = ref(db, `posts/${post.id}`);

    await set(userRef, {
      ...post,
    });

    return {
      status: "success",
      message: "Post has been updated successfully.",
    };
  } catch (error) {
    if (error instanceof Error) {
      return { status: "error", message: error.message };
    } else {
      return { status: "error", message: "An unknown error occurred." };
    }
  }
};
