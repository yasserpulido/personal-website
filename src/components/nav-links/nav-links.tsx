import { NavLink } from "react-router-dom";
import { Login, Logout } from "grommet-icons";
import { useAuth } from "../../hooks";

type NavLinksProps = {
  setIsMenuOpen: (value: boolean) => void;
  onOpenModal: () => void;
  openModalConfirmationWhenSignOutIsClicked: () => void;
};

const NavLinks = ({
  setIsMenuOpen,
  onOpenModal,
  openModalConfirmationWhenSignOutIsClicked,
}: NavLinksProps) => {
  const { userLoggedIn } = useAuth();

  return (
    <>
      <li>
        <NavLink
          to="/curriculum-vitae"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          onClick={() => setIsMenuOpen(false)}
        >
          Curriculum Vitae
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </NavLink>
      </li>
      <li>
        {userLoggedIn ? (
          <button onClick={openModalConfirmationWhenSignOutIsClicked}>
            <Logout color="black" />
          </button>
        ) : (
          <button
            onClick={() => {
              onOpenModal();
              setIsMenuOpen(false);
            }}
          >
            <Login color="black" />
          </button>
        )}
      </li>
    </>
  );
};

export default NavLinks;
