import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Toast as ToastType } from "../../types";

type ToastProps = {
  status: ToastType;
  reset: () => void;
};

const Toast = ({ status, reset }: ToastProps) => {
  const toast = document.getElementById("toast");

  let toastStyle = "";

  switch (status.type) {
    case "success":
      toastStyle = "bg-green-500";
      break;
    case "error":
      toastStyle = "bg-red-500";
      break;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      reset();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [reset]);

  if (toast) {
    return createPortal(
      <div className="fixed z-10 top-6 right-6 animate-slide-in-down">
        <div
          className={`${toastStyle} px-4 py-2 min-w-40 rounded shadow shadow-black text-white`}
        >
          <p>{status.message}</p>
        </div>
      </div>,
      toast
    );
  } else {
    return null;
  }
};

export default Toast;
