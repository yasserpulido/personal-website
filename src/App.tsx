const resumeLinks = [
  { label: "Español", href: "/cv-es.pdf", download: "cv-es.pdf" },
  { label: "English", href: "/cv-en.pdf", download: "cv-en.pdf" },
  { label: "Português", href: "/cv-pt.pdf", download: "cv-pt.pdf" },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Yasser Pulido home">
          yasserpulido.com
        </a>
        <nav className="social-links" aria-label="Professional links">
          <a href="https://github.com/yasserpulido" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yasserpulido/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="intro-title">
          <p className="eyebrow">Software Engineer</p>
          <h1 id="intro-title">Yasser Pulido</h1>
          <p className="name-note">
            Professional name: Yasser Pulido · CV: Yasser Barzotto
          </p>
          <p className="headline">Building scalable, maintainable software.</p>
          <div className="hero-copy">
            <p>
              I&apos;m a Software Engineer with over 10 years of experience
              developing frontend, backend, and full-stack solutions for
              international markets.
            </p>
            <p>
              In recent years, I&apos;ve focused primarily on frontend engineering
              with React and TypeScript, while maintaining hands-on experience with
              Angular, Vue, Node.js, and C#/.NET.
            </p>
            <p>
              My work includes software architecture, enterprise applications,
              system modernization, API integrations, and AI-assisted development
              practices to improve code quality, maintainability, and engineering
              efficiency.
            </p>
          </div>
        </section>

        <section className="resume-section" aria-labelledby="resume-title">
          <h2 id="resume-title">Download my resume</h2>
          <div className="resume-links">
            {resumeLinks.map((resume) => (
              <a key={resume.href} href={resume.href} download={resume.download}>
                {resume.label}
              </a>
            ))}
          </div>
          <a className="contact-link" href="mailto:pulidoyasser@gmail.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Yasser Pulido</span>
        <a href="mailto:pulidoyasser@gmail.com">pulidoyasser@gmail.com</a>
      </footer>
    </div>
  );
}

export default App;
