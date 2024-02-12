import React, { forwardRef } from "react";
import { createPortal } from "react-dom";
const modal = document.getElementById("modal");

type ModalConfirmationProps = {
  children: React.ReactNode;
};

const Modal = forwardRef<HTMLDialogElement, ModalConfirmationProps>(
  ({ children }, ref) => {
    if (modal) {
      return createPortal(
        <dialog
          ref={ref}
          className="rounded-md drop-shadow-lg backdrop:bg-black/50"
        >
          {children}
        </dialog>,
        modal
      );
    } else {
      return null;
    }
  }
);

export default Modal;
