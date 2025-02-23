const CurriculumVitae = () => {
  return (
    <article className="my-20">
      <header className="flex flex-col gap-8">
        <h1 className="text-lg text-center">About me</h1>
        <div className="flex flex-col gap-4">
          <p className="leading-relaxed">
            My name is <span className="font-bold">Yasser</span>. I am a
            passionate Frontend Developer specializing in React, dedicated to
            creating high- quality web applications with a focus on performance,
            accessibility, and user experience. With over five years of
            experience in companies across Venezuela, Argentina, and the United
            States, I continuously improve my skills by staying up to date with
            the latest frontend technologies and best practices.
          </p>
        </div>
      </header>
      <hr className="my-10" />
      <section className="flex flex-col gap-4">
        <h1 className="text-lg text-center">Education</h1>
        <div>
          <h2 className="text-md font-medium">Systems Engineering</h2>
          <p className="text-sm font-light">sep 2009 - feb 2016</p>
        </div>
        <p className="leading-relaxed">
          Here, I learned about{" "}
          <span className="font-bold">Systems Engineering</span> that deals with
          the design, programming, implementation and maintenance of systems.
          Incorporating modern methods and techniques to optimize performance,
          control and correct the different stages of a project. Also
          formulating the plans that allow integrating different projects of a
          general development program.
        </p>
        <p className="text-sm text-right">Venezuela</p>
      </section>
      <hr className="my-10" />
      <section className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Experiences</h1>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">
              Santander Tecnología Argentina
            </h2>
            <h3 className="text-md font-medium">Front-End Developer</h3>
            <p className="text-sm font-light">sep 2023 - current</p>
          </div>
          <p className="leading-relaxed">
            At Santander Tecnología Argentina, I am part of the frontend
            development team, creating innovative solutions for web applications
            and tools in the bank's services. My work focuses on developing and
            optimizing interfaces using React.js, TypeScript, and Jest, ensuring
            performance, accessibility, and excellent user experience.
            Additionally, I work closely with backend and design teams to ensure
            efficient system integration.
          </p>
          <p className="text-sm text-right">Argentina</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Real Trends S.A.</h2>
            <h3 className="text-md font-medium">Front-End Developer</h3>
            <p className="text-sm font-light">sep 2022 - sep 2023</p>
          </div>
          <p className="leading-relaxed">
            At Real Trends, I was part of the frontend development team,
            contributing to the design and optimization of advanced tools for
            Mercado Libre sellers' analysis and management. I developed
            intuitive and efficient interfaces using React.js, TypeScript, and
            styled-components, ensuring a smooth user experience. Additionally,
            I worked with Mobx-state-tree, Storybook, and Cypress.io to improve
            code quality and maintainability, and collaborated in Docker and
            Linux-based environments.
          </p>
          <p className="text-sm text-right">Argentina</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">MAS Glogal Consulting</h2>
            <h3 className="text-md font-medium">Full-Stack Developer</h3>
            <p className="text-sm font-light">jan 2021 - mar 2022</p>
          </div>
          <p className="leading-relaxed">
            At MAS Global Consulting, I was part of the full stack development
            team, contributing to the creation and optimization of solutions for
            Johnson Controls International, a company focused on energy
            efficiency and automotive electronic systems. I worked on five
            projects using ASP.NET MVC 5 (.NET Framework 4.8) with Bootstrap and
            jQuery, as well as solutions based on .NET Core 3.0 and 3.1,
            integrating Angular with TypeScript and JavaScript with jQuery.
            Additionally, I contributed to a project using .NET 5 and Angular
            with TypeScript. I collaborated in the implementation of Team
            Foundation Service for version control, and we followed the SCRUM
            methodology for agile project management.
          </p>
          <p className="text-sm text-right">United States</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Edenred Argentina S.A.</h2>
            <h3 className="text-md font-medium">Full-Stack Developer</h3>
            <p className="text-sm font-light">jan 2020 - dec 2020</p>
          </div>
          <p className="leading-relaxed">
            At Edenred Argentina, I was part of the full stack development team,
            contributing to the creation and optimization of digital solutions
            for corporate benefits management, meal vouchers, loyalty programs,
            and business payments. I worked on web platform development using
            .NET Core 3.1 and .NET 5, following an Onion Architecture approach
            and developed in Visual Studio 2019. On the frontend, I implemented
            solutions with React and Redux, integrating TypeScript, Bootstrap 4,
            and PrimeReact 5. I also collaborated on data modeling with SQL
            Server 2012 and used Git and Team Foundation Service for version
            control.
          </p>
          <p className="text-sm text-right">Argentina</p>
        </article>
      </section>
      <hr className="my-10" />
      <section className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Personal Projects</h1>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Cinema Memory</h2>
          </div>
          <p className="leading-relaxed">
            Cinema Memory is a personal website where I post about films I have
            watched. The website is built with React, Next, TypeScript, and own
            Design System, and the backend is based on Python with Django.{" "}
            <a
              href="https://www.cinemamemory.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-right underline"
            >
              (Click here to vist the website)
            </a>
          </p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Kyronga</h2>
          </div>
          <p className="leading-relaxed">
            Kyronga is a personal project where I can study Japanese with
            flashcards. The website is built with React, TypeScript, and
            Tailwinds. Progresive Web Application is available. Also, it was
            migrated to use in Android with React Native.{" "}
            <a
              href="https://www.kyronga.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-right underline"
            >
              (Click here to vist the website)
            </a>
          </p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Anwar Components</h2>
          </div>
          <p className="leading-relaxed">
            This is a collection of components that I have created for my
            personal projects. I have decided to share them with the community.
            I hope you find them useful.{" "}
            <a
              href="https://www.npmjs.com/package/anwar-components"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-right underline"
            >
              (Click here to vist npm package)
            </a>
          </p>
        </article>
      </section>
    </article>
  );
};

export default CurriculumVitae;
