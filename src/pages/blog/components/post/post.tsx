import { Link, useParams } from "react-router-dom";
import { useAuth, useBlog } from "../../../../hooks";

const Post = () => {
  const { userRole } = useAuth();
  const { id } = useParams();
  const { posts } = useBlog();

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article className="my-20 flex flex-col gap-12">
      <header className="flex flex-col gap-12 items-center">
        {userRole === "admin" && (
          <div className="self-end">
            <Link to={`/blog/post/edit-post/${post.id}`}>
              <p className="text-sm text-gray-500 text-right hover:text-black px-4 py-1 rounded font-bold border border-gray-500">
                Edit
              </p>
            </Link>
          </div>
        )}
        <h1 className="text-4xl text-center font-light">{post.title}</h1>
        <div>
          <p className="text-sm text-gray-500">
            written by{" "}
            <Link to="/" className="tracking-widest hover:text-black uppercase">
              yasser pulido
            </Link>
          </p>
          <p className="text-sm text-center text-gray-500">
            {post.dateOfCreation}
          </p>
        </div>
      </header>
      <section>
        <div className="post-wrapper" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </section>
    </article>
  );
};

export default Post;
