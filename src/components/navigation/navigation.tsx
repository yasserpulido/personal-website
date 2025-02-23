import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between h-20">
      <p>
        <NavLink
          to="/"
          className="font-bold font-mono text-xl text-blue-500 logo-text"
        >
          {"<yasserpulido />"}
        </NavLink>
      </p>
    </header>
  );
};

export default Navigation;
