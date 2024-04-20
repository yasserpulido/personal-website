const CurriculumVitae = () => {
  return (
    <article className="my-20">
      <header className="flex flex-col gap-8">
        <h1 className="text-lg text-center">About me</h1>
        <div className="flex flex-col gap-4">
          <p className="leading-relaxed">
            Hey there! My name is <span className="font-bold">Yasser</span>. In
            the beginning, I worked as a Full-Stack Developer and this role
            helped me to learn about how a software works from the database to
            the client side. Today, I'm a passionate{" "}
            <span className="font-bold">Front-End (React) Developer</span>, with
            the goal of creating and innovating web applications that offer
            exceptional user experiences, using different frameworks and
            libraries related to. Also, I pride myself on applying best
            practices and tools that facilitate the use and development of web
            applications.
          </p>
          <p className="leading-relaxed">
            Outside of work, I am constantly studying to keep up with the new
            technologies related to application development. I am a lover of
            cinema, fantastic literature, sports practice, exercise and, of
            course, I enjoy a good cup of coffee.
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
            <h2 className="text-md font-light">RH Tecnologías S.A.</h2>
            <h3 className="text-md font-medium">Front-End Developer</h3>
            <p className="text-sm font-light">sep 2023 - current</p>
          </div>
          <p className="leading-relaxed">
            The client <span className="font-bold">Santander Rio</span> is a
            multinational financial services company. As Front-End Developer, I
            have been refactoring a web application where the users fill out and
            submit forms about the different services that the bank has. The
            project in addition to refactor using best practice, patterns, and
            architecture with React also was migrated to TypeScript and created
            unit test to has 80% coverage as minimum.
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
            Real Trends is a platform that help to their user has a better
            experiencies in their e-commerce services. I developed tools for
            Tienda (shop) project that is about user's e-commerce, using React
            with Hooks and TypeScript, MobX-State-Tree, Cypress, Storybook with
            Design Systems, Ubuntu, and Dockers.
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
            The client{" "}
            <span className="font-bold">Johnson Controls International</span> is
            an american company that offers products and services to optimize
            energy efficiency in buildings, automotive and interior batteries,
            and automotive electronic systems. I worked in the differents web
            application with frameworks and libraries like .NET Core, Angular
            and React.
          </p>
          <p className="text-sm text-right">United States</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Edenred Argentina S.A.</h2>
            <h3 className="text-md font-medium">Full-Stack Developer</h3>
            <p className="text-sm font-light">aug 2020 - dec 2020</p>
          </div>
          <p className="leading-relaxed">
            Alta is about a web application to registry new client for the
            different solutions related to employee benefits, meal vouchers,
            loyalty programs, flee and mobility and corporate payment. The web
            application was migrated to .NET Core 3.1 using Visual Studio 2019
            based on Onion Architecture. Using on the frontend with React and
            Redux with TypeScript, Bootstrap 4 and PrimeReact 5. Also, Data
            Model with SQLServer 2012 and Git as Version
          </p>
          <p className="text-sm text-right">Argentina</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">RH Tecnologías S.A.</h2>
            <h3 className="text-md font-medium">Full-Stack Developer</h3>
            <p className="text-sm font-light">jan 2020 - jul 2020</p>
          </div>
          <p className="leading-relaxed">
            Development of the new Comercio website to{" "}
            <span className="font-bold">Edenred Argentina S.A.</span> as client.
            The web is about manage the client account, monitor payments, and
            access all the advantages and benefits that Edenred offers for being
            part of its network. The project was based on .NET Core 3.1 with
            Visual Studio 2019. Using React and Redux with TypeScript, Bootstrap
            4.0 and PrimeReact 4 as framework design. Also, SQL Server 2012 for
            database, and version control Team Foundation Service
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
