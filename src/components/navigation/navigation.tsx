import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Close } from "grommet-icons";
import { NavLinks } from "../nav-links";
import { ModalAuth } from "../modal-auth";
import { ModalAuthMethods } from "../../types";
import { Modal, Toast } from "..";
import { doSignOut } from "../../utils/auth";
import { Toast as ToastType } from "../../types";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const modalAuth = useRef<ModalAuthMethods>(null);
  const modalSignOut = useRef<HTMLDialogElement | null>(null);
  const [toast, setToast] = useState<ToastType>({ message: "", type: "none" });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowMenuIcon(true);
      } else {
        setIsMenuOpen(false);
        setShowMenuIcon(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const handleOpenModal = () => {
    if (modalAuth.current) {
      modalAuth.current.open();
    }
  };

  const openModalConfirmationWhenSignOutIsClicked = () => {
    if (modalSignOut.current) {
      modalSignOut.current.showModal();
    }
  };

  const closeModalConfirmation = () => {
    if (modalSignOut.current) {
      modalSignOut.current.close();
    }
  };

  const signOut = () => {
    doSignOut();
    closeModalConfirmation();
    setToast({ message: "You have signed out.", type: "success" });
    setIsMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between h-20">
      <p>
        <NavLink to="/" className="font-bold font-mono text-xl text-blue-500">
          {"<yasserpulido />"}
        </NavLink>
      </p>
      {showMenuIcon ? (
        <>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
          {isMenuOpen && (
            <nav className="absolute z-10 bg-white w-full h-screen top-0 left-0 flex items-center justify-center">
              <div className="absolute top-0 right-0 px-6 py-6">
                <button onClick={() => setIsMenuOpen(false)}>
                  <Close />
                </button>
              </div>
              <ul className="flex flex-col items-center gap-8">
                <NavLinks
                  setIsMenuOpen={setIsMenuOpen}
                  onOpenModal={handleOpenModal}
                  openModalConfirmationWhenSignOutIsClicked={
                    openModalConfirmationWhenSignOutIsClicked
                  }
                />
              </ul>
            </nav>
          )}
        </>
      ) : (
        <nav>
          <ul className="flex items-center justify-between gap-8">
            <NavLinks
              setIsMenuOpen={setIsMenuOpen}
              onOpenModal={handleOpenModal}
              openModalConfirmationWhenSignOutIsClicked={
                openModalConfirmationWhenSignOutIsClicked
              }
            />
          </ul>
        </nav>
      )}
      {toast.type !== "none" && (
        <Toast
          status={toast}
          reset={() => setToast({ message: "", type: "none" })}
        />
      )}
      <ModalAuth ref={modalAuth} />
      <Modal ref={modalSignOut}>
        <section className="p-4 flex flex-col gap-4">
          <header>
            <h1 className="font-bold text-lg">Sign out confirmation</h1>
          </header>
          <hr />
          <main>
            <p className="text-center text-gray-500">
              Do you want to sign out?
            </p>
          </main>
          <hr />
          <footer className="flex items-center justify-end gap-2">
            <button
              className="bg-green-500 text-white px-4 py-1 rounded font-bold"
              onClick={signOut}
            >
              Yes
            </button>
            <button
              className="px-4 py-1 font-bold"
              onClick={closeModalConfirmation}
            >
              No
            </button>
          </footer>
        </section>
      </Modal>
    </header>
  );
};

export default Navigation;
