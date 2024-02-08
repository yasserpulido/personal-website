import { Github, Linkedin, Instagram } from "grommet-icons";

const Credits = () => {
  return (
    <footer className="flex items-center justify-end h-20 2xl:px-80">
      <ul className="flex gap-4">
        <li>
          <a
            href="https://github.com/yasserpulido"
            target="_blank"
            rel="noreferrer"
          >
            <Github color="black" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/yasserpulido/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram color="black" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yasserpulido/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="black" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Credits;
