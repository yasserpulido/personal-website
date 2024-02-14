import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return (
    <article className="my-20 flex flex-col gap-12">
      <header className="flex flex-col gap-12 items-center">
        <div>
          <h1 className="text-4xl text-center font-light">Title</h1>
          <p className="text-sm text-gray-500">02/13/2024</p>
        </div>
        <p className="text-sm text-gray-500">
          written by{" "}
          <Link
            to="/"
            className="tracking-widest hover:text-blue-500 uppercase"
          >
            yasser pulido
          </Link>
        </p>
      </header>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sed tortor porta, congue tellus non, scelerisque nisi. Maecenas
          pharetra diam condimentum mauris fermentum, ac auctor lectus libero.
        </p>
      </section>
      <footer>
        <h2 className="text-2xl font-light">Comments</h2>
      </footer>
    </article>
  );
};

export default Post;
