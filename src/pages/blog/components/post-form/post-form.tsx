import { Controller, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { Post } from "../../../../types";
import { v4 as uuidv4 } from "uuid";
import { createPost, updatePost } from "../../../../utils";
import { Toast as ToastType } from "../../../../types";
import { useEffect, useState } from "react";
import { Toast } from "../../../../components";
import moment from "moment";
import { useAuth, useBlog } from "../../../../hooks";
import { useNavigate, useParams } from "react-router-dom";

const defaultValues = {
  title: "",
  description: "",
  content: "",
  dateOfCreation: "",
  id: "",
};

const PostForm = () => {
  const navigate = useNavigate();
  const { userRole } = useAuth();
  const { posts } = useBlog();
  const { id } = useParams();

  if (userRole !== "admin") {
    navigate("/blog");
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Post>({
    defaultValues,
  });
  const [toast, setToast] = useState<ToastType>({ message: "", type: "none" });

  useEffect(() => {
    if (id) {
      const post = posts.find((post) => post.id === id);

      if (post) {
        reset({ ...post });
      }
    }
  }, [id, posts, reset]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      [{ list: "bullet" }],
      ["link", "image"],
      ["clean"],
      ["code-block"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const onSubmit = async (data: Post) => {
    let result = { status: "error", message: "An unknown error occurred." };

    if (data.id) {
      result = await updatePost(data);
    } else {
      const post: Post = {
        id: uuidv4(),
        title: data.title,
        description: data.description,
        content: data.content,
        dateOfCreation: moment().format("MM-DD-YYYY"),
      };

      result = await createPost(post);
    }

    if (result.status === "success") {
      setToast({ type: "success", message: result.message });
    } else {
      setToast({ type: "error", message: result.message });
    }

    reset(defaultValues);

    if (result.status === "success") {
      navigate("/blog");
    }
  };

  return (
    <section className="flex flex-col gap-4 my-20">
      {toast.type !== "none" && (
        <Toast
          status={toast}
          reset={() => setToast({ message: "", type: "none" })}
        />
      )}
      <header>
        {id ? (
          <h1 className="text-4xl font-light">Edit post</h1>
        ) : (
          <h1 className="text-4xl font-light">Create a new post</h1>
        )}
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Controller
            name="title"
            control={control}
            rules={{
              required: "Title is required",
              maxLength: {
                message: "Title is too long",
                value: 100,
              },
            }}
            render={({ field }) => (
              <div className="flex flex-col w-full">
                <input
                  className="border border-gray-300 p-2 w-full"
                  placeholder="Title"
                  maxLength={100}
                  {...field}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{
              required: "Description is required",
              maxLength: {
                message: "Description is too long",
                value: 200,
              },
            }}
            render={({ field }) => (
              <div className="flex flex-col w-full">
                <input
                  className="border border-gray-300 p-2 w-full"
                  placeholder="Description"
                  maxLength={200}
                  {...field}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <Controller
          name="content"
          control={control}
          rules={{ required: "Content is required" }}
          render={({ field }) => (
            <div className="flex flex-col w-full">
              <ReactQuill
                theme="snow"
                modules={modules}
                placeholder="Content"
                {...field}
              />
              {errors.content && (
                <p className="text-red-500 text-sm">{errors.content.message}</p>
              )}
            </div>
          )}
        />
        <button
          className="bg-green-500 text-white px-4 py-1 rounded font-bold"
          type="submit"
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default PostForm;
