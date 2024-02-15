import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { useBlog } from "../../hooks/use-blog/use-blog";

const Blog = () => {
  const { userRole } = useAuth();
  const { posts } = useBlog();

  return (
    <article className="my-20 flex flex-col gap-12">
      <header className="flex flex-col gap-12">
        <h1 className="text-4xl text-center font-light">Posts</h1>
        {userRole === "admin" && (
          <div className="self-end">
            <Link to="/blog/post/create-post">
              <p className="text-sm text-gray-500 text-right hover:text-black px-4 py-1 rounded font-bold border border-gray-500">
                Create
              </p>
            </Link>
          </div>
        )}
      </header>
      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        <section className="flex flex-col gap-12">
          {posts.map((post) => (
            <div key={post.id}>
              <Link
                to={`/blog/post/${post.id}`}
                className="hover:text-blue-500"
              >
                <h2 className="text-2xl font-light">{post.title}</h2>
              </Link>
              <p className="text-sm text-gray-500">{post.dateOfCreation}</p>
              <p className="mt-5">{post.description}</p>
            </div>
          ))}
        </section>
      )}
    </article>
  );
};

export default Blog;
