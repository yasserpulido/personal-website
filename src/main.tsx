import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Blog, CurriculumVitae, Post, PostForm } from "./pages";
import App from "./App";
import { AuthProvider, BlogProvider } from "./providers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CurriculumVitae />,
      },
      {
        path: "/curriculum-vitae",
        element: <CurriculumVitae />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/post/create-post",
        element: <PostForm />,
      },
      {
        path: "/blog/post/edit-post/:id",
        element: <PostForm />,
      },
      {
        path: "/blog/post/:id",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BlogProvider>
        <RouterProvider router={router} />
      </BlogProvider>
    </AuthProvider>
  </React.StrictMode>
);
