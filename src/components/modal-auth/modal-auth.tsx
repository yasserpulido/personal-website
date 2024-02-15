import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../../utils/auth";
import { ModalAuthMethods } from "../../types";
import { Toast } from "../toast";
import { Toast as ToastType } from "../../types";

const ModalAuth = forwardRef<ModalAuthMethods>((_, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const dialog = useRef<HTMLDialogElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);
  const modal = document.getElementById("modal");
  const [toast, setToast] = useState<ToastType>({ message: "", type: "none" });

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

      const result = await doSignInWithEmailAndPassword(email, password);

      closeModal();

      if (!result.error) {
        setToast({ type: "success", message: result.message });
      } else {
        setToast({ type: "error", message: result.message });
      }
    } catch (error) {
      closeModal();
      setToast({ type: "error", message: "An unknown error occurred." });
    }

    setIsLoading(false);
    form.reset();
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
      <>
        {toast.type !== "none" && (
          <Toast
            status={toast}
            reset={() => setToast({ message: "", type: "none" })}
          />
        )}
        <dialog
          ref={dialog}
          className="rounded-md drop-shadow-lg backdrop:bg-black/50"
          onClick={handleDialogClick}
        >
          <section ref={content} className="p-14 flex flex-col gap-12">
            <header className="text-center">
              <h1 className="text-2xl font-bold">Login</h1>
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
                  </div>
                </div>
                <button
                  className={`${
                    isLoading ? "bg-gray-500" : "bg-green-500"
                  } h-10 text-white tracking-wider rounded-md font-bold`}
                  type="submit"
                  disabled={isLoading}
                >
                  Login
                </button>
              </form>
            </main>
          </section>
        </dialog>
      </>,
      modal
    );
  } else {
    return null;
  }
});

export default ModalAuth;
