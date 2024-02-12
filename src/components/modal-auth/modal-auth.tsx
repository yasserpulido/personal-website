import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../../utils/auth";
import { ModalAuthMethods } from "../../types";

const ModalAuth = forwardRef<ModalAuthMethods>((_, ref) => {
  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dialog = useRef<HTMLDialogElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);
  const modal = document.getElementById("modal");

  useImperativeHandle(ref, () => ({
    open: () => {
      document.body.style.overflow = "hidden";
      if (dialog && "current" in dialog && dialog.current) {
        dialog.current.showModal();
      }
    },
    close: () => {
      document.body.style.overflow = "auto";
      if (dialog && "current" in dialog && dialog.current) {
        dialog.current.close();
      }
    },
  }));

  const closeModal = () => {
    document.body.style.overflow = "auto";
    if (ref && "current" in ref && ref.current) {
      ref.current.close();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const email = data.email as string;
    const password = data.password as string;

    if (email.trim() === "" || password.trim() === "") {
      return;
    }

    try {
      setIsLoading(true);

      if (register) {
        const result = await doCreateUserWithEmailAndPassword(email, password);

        if (result.status === "success") {
          console.log("User created successfully");
        } else {
          console.error(result.message);
        }
      } else {
        const result = await doSignInWithEmailAndPassword(email, password);

        if (!result.error) {
          console.log(result.message);
          closeModal();
        } else {
          console.error(result.message);
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleDialogClick = (
    event: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
    if (
      ref &&
      "current" in ref &&
      ref.current &&
      content.current &&
      !content.current.contains(event.target as Node)
    ) {
      closeModal();
    }
  };

  if (modal) {
    return createPortal(
      <dialog
        ref={dialog}
        className="border-2 border-black rounded-md"
        onClick={handleDialogClick}
      >
        <section ref={content} className="p-14 flex flex-col gap-12">
          <header className="text-center">
            <h1 className="text-2xl font-bold">
              {register ? "Register" : "Login"}
            </h1>
          </header>
          <main>
            <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border-b-2 border-black w-full outline-none"
                    type="email"
                    name="email"
                    placeholder="type your email here"
                    required
                  />
                </div>
                <div className="h-20">
                  <label className="text-sm" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="border-b-2 border-black w-full outline-none"
                    type="password"
                    name="password"
                    required
                    placeholder="type your password here"
                  />
                  {!register && (
                    <p className="text-sm text-right">
                      <button type="button" className="underline text-blue-500">
                        Forgot password?
                      </button>
                    </p>
                  )}
                </div>
              </div>
              <button
                className="bg-green-500 h-10 text-white tracking-wider rounded-md"
                type="submit"
              >
                {register ? "Register" : "Login"}
              </button>
              <p className="text-center">
                {register
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setRegister((prevState) => !prevState)}
                  className="underline text-blue-500"
                  disabled={isLoading}
                >
                  {register ? "Login" : "Register"}
                </button>
              </p>
            </form>
          </main>
        </section>
      </dialog>,
      modal
    );
  } else {
    return null;
  }
});

export default ModalAuth;
