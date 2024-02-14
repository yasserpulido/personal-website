import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

const POSTS = [
  {
    title: "Understanding Design Patterns in React",
    date: "2021-01-01",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tortor porta, congue tellus non, scelerisque nisi. Maecenas pharetra diam condimentum mauris fermentum, ac auctor lectus libero. ",
  },
  {
    title: "Fetching data with TanStack Query (React Query)",
    date: "2021-01-02",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tortor porta, congue tellus non, scelerisque nisi. Maecenas pharetra diam condimentum mauris fermentum, ac auctor lectus libero. ",
  },
];

const Blog = () => {
  const { userRole } = useAuth();

  console.log(userRole);

  return (
    <article className="my-20 flex flex-col gap-12">
      <header>
        <h1 className="text-4xl text-center font-light">Posts</h1>
        <Link to="/blog/post/create-post">
          <p className="text-sm text-gray-500 text-right hover:text-blue-500">
            create a post
          </p>
        </Link>
      </header>
      <section className="flex flex-col gap-12">
        {POSTS.map((post, index) => (
          <div key={index}>
            <Link to={`/blog/post/${index}`} className="hover:text-blue-500">
              <h2 className="text-2xl font-light">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-5">{post.content}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Blog;
