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
          <p className="eyebrow">Frontend Engineer</p>
          <h1 id="intro-title">Yasser Pulido</h1>
          <p className="headline">Building modern, maintainable web experiences.</p>
          <div className="hero-copy">
            <p>
              I&apos;m a Frontend Engineer with extensive experience in React and
              TypeScript, along with hands-on experience in Angular and Vue. I focus
              on building scalable, accessible, and maintainable web applications,
              with a strong interest in frontend architecture, performance, and
              product engineering.
            </p>
            <p>
              Interested in remote frontend engineering opportunities and
              frontend-focused full-stack development.
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
