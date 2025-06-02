const CurriculumVitae = () => {
  return (
    <article className="my-20">
      <header className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Acerca de</h1>
        <div className="flex flex-col gap-4">
          <p className="leading-relaxed">
            Mi nombre es <span className="font-bold">Yasser</span>. Soy{" "}
            <span className="font-bold">Desarrollador Frontend</span> con más de
            cinco años de experiencia en la creación de aplicaciones web de alta
            calidad, especializado en <span className="font-bold">React</span>.
            Apasionado por la performance, accesibilidad y experiencia de
            usuario. Experiencia internacional trabajando en empresas de
            Venezuela, Argentina y Estados Unidos. En constante aprendizaje y
            actualización en tecnologías modernas de frontend.
          </p>
        </div>
      </header>
      <hr className="my-10" />
      <section className="flex flex-col gap-4">
        <h1 className="text-lg text-center">Educación</h1>
        <div>
          <h2 className="text-md font-light">
            Instituto Universitario Politécnico Santiago Mariño
          </h2>
          <h3 className="text-md font-medium">Ingenieria de Sistemas</h3>
          <p className="text-sm font-light">sep 2009 - feb 2016</p>
        </div>
        <p className="text-sm text-right">Venezuela</p>
      </section>
      <hr className="my-10" />
      <section className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Experiencia Laboral</h1>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">
              Santander Tecnología Argentina
            </h2>
            <h3 className="text-md font-medium">Desarrollador Frontend</h3>
            <p className="text-sm font-light">sep 2023 - may 2025</p>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Desarrollo del nuevo módulo de Términos y Condiciones del{" "}
              <span className="font-bold">Homebanking</span>.
            </li>
            <li>
              Refactorización de herramientas internas con{" "}
              <span className="font-bold">React</span>, aplicando{" "}
              <span className="font-bold">type safesty</span> y{" "}
              <span className="font-bold">CI/CD</span>.
            </li>
            <li>
              Cumplimiento de estándares: menos de 4% de duplicación de código y
              más del 80% de cobertura de tests (
              <span className="font-bold">Jest</span> y{" "}
              <span className="font-bold">Cypress</span>).
            </li>
            <li>
              Resolución de vulnerabilidades críticas y mejoras de seguridad en
              el código <span className="font-bold">frontend</span>.
            </li>
            <li>
              Implementación bajo metodología{" "}
              <span className="font-bold">SCRUM</span> y control de versiones
              con <span className="font-bold">GIT/GitLab</span>.
            </li>
          </ul>
          <p className="text-sm text-right">Argentina</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Real Trends S.A.</h2>
            <h3 className="text-md font-medium">Desarrolador Frontend</h3>
            <p className="text-sm font-light">sep 2022 - sep 2023</p>
          </div>
          <p className="leading-relaxed">
            <ul className="list-disc pl-6">
              <li>
                Desarrollo completo de la herramienta{" "}
                <span className="font-bold">Tienda</span>, lanzada a producción
                como alternativa a soluciones de Mercado Libre, donde los
                vendedores creen su propia tienda online en minutos.
              </li>
              <li>
                Construcción de un{" "}
                <span className="font-bold">Design System</span> propio en
                conjunto con el equipo de diseño para escalar la consistencia
                visual.
              </li>
              <li>
                Aplicación de estándares de{" "}
                <span className="font-bold">pixel perfect</span>,{" "}
                <span className="font-bold">accesibilidad</span> y{" "}
                <span className="font-bold">UI adaptable</span> para optimizar
                la experiencia del usuario.
              </li>
              <li>
                implementación de{" "}
                <span className="font-bold">internacionalización (i18n)</span> y
                localización de la herramienta adaptándola para su uso en
                Argentina, México y Brasil.
              </li>
              <li>
                Implementé pruebas unitarias con{" "}
                <span className="font-bold">Cypress</span> para garantizar
                calidad y mantenimiento del código.
              </li>
              <li>
                Implementación bajo metodología{" "}
                <span className="font-bold">SCRUM</span> y control de versiones
                con <span className="font-bold">GIT/GitHub</span>.
              </li>
            </ul>
          </p>
          <p className="text-sm text-right">Argentina</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">MAS Glogal Consulting</h2>
            <h3 className="text-md font-medium">Desarrollador Full Stack</h3>
            <p className="text-sm font-light">ene 2021 - mar 2022</p>
          </div>
          <p className="leading-relaxed">
            <ul className="list-disc pl-6">
              <li>
                Desarrollo de módulos clave como{" "}
                <span className="font-bold">carrito de compras</span>,{" "}
                <span className="font-bold">facturación</span> y{" "}
                <span className="font-bold">ventas</span> para la plataforma
                global de productos.
              </li>
              <li>
                Participación en soluciones hibridas usando con{" "}
                <span className="font-bold">.NET Framework</span>,{" "}
                <span className="font-bold">.NET Core</span> y{" "}
                <span className="font-bold">Angular/React</span>.
              </li>
              <li>
                Implementación de{" "}
                <span className="font-bold">internacionalización (i18n)</span> y
                localización de interfaces para soporte multirregión.
              </li>
              <li>
                Desarrollé pruebas unitarias utilizando{" "}
                <span className="font-bold">MSTest</span>,{" "}
                <span className="font-bold">Jasmine</span>,{" "}
                <span className="font-bold">Karma</span> y{" "}
                <span className="font-bold">Jest</span> para asegurar
                confiabilidad de los módulos críticos.
              </li>
              <li>
                Implementación bajo metodología{" "}
                <span className="font-bold">SCRUM</span> y control de versiones
                con <span className="font-bold">TFS</span>.
              </li>
            </ul>
          </p>
          <p className="text-sm text-right">Estados Unidos</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Edenred Argentina S.A.</h2>
            <h3 className="text-md font-medium">Desarrollador Full Stack</h3>
            <p className="text-sm font-light">ene 2020 - dic 2020</p>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Migración de herramientas legacy (
              <span className="font-bold">.NET Framework</span>) a plataformas
              web modernas con <span className="font-bold">.NET Core</span> y{" "}
              <span className="font-bold">React</span>.
            </li>
            <li>
              Desarrollo del sistema de alta de clientes, integrando{" "}
              <span className="font-bold">SQL Server</span> y arquitectura
              orientada en capas.
            </li>
            <li>
              Implementé pruebas unitarias con herramientas de testing de
              Microsoft para backend en{" "}
              <span className="font-bold">.NET Core</span> y{" "}
              <span className="font-bold">Jest</span> con{" "}
              <span className="font-bold">React</span>.
            </li>
            <li>
              Implementación bajo metodología{" "}
              <span className="font-bold">SCRUM</span> y control de versiones
              con <span className="font-bold">TFS</span>.
            </li>
          </ul>
          <p className="text-sm text-right">Argentina</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Santa Rita de Cascia C.A.</h2>
            <h3 className="text-md font-medium">Desarrollador .NET</h3>
            <p className="text-sm font-light">ene 2016 - sep 2016</p>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Participación en el desarrollo de un sistema de control
              veterinario para ganado.
            </li>
            <li>
              Compatibilidad con lectores de identificación electrónica{" "}
              <span className="font-bold">ALLFLEX</span> para trazabilidad del
              ganado.
            </li>
            <li>
              Desarrollo con <span className="font-bold">.NET Framework 4</span>{" "}
              y <span className="font-bold">WinForms (C#)</span>.
            </li>
            <li>
              Implementación de base de datos{" "}
              <span className="font-bold">SQL</span> para gestión de la
              información.
            </li>
          </ul>
          <p className="text-sm text-right">Venezuela</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Solo Sistemas C.A.</h2>
            <h3 className="text-md font-medium">Desarrollador .NET</h3>
            <p className="text-sm font-light">nov 2014 - dic 2016</p>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Colaboración en la creación de un sistema de control de código
              fuente y control de acceso a la empresa.
            </li>
            <li>
              Desarrollo con <span className="font-bold">.NET Framework 4</span>{" "}
              y <span className="font-bold">WinForms (C#)</span>.
            </li>
            <li>
              Uso de base de datos <span className="font-bold">SQL</span> para
              almacenamiento de datos.
            </li>
          </ul>
          <p className="text-sm text-right">Venezuela</p>
        </article>
      </section>
      <hr className="my-10" />
      <section className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Proyectos Personales Destacados</h1>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">
              Kyronga – App educativa para aprender japonés
            </h2>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Desarrollo completo de una app móvil en{" "}
              <span className="font-bold">React Native</span> para aprender
              japonés de forma visual.
            </li>
            <li>
              Incluye práctica de silabarios (hiragana, katakana), kanji y
              escritura a mano.
            </li>
            <li>
              Funcionalidad para marcar tarjetas difíciles y reforzar la
              memoria.
            </li>
            <li>
              Publicada en <span className="font-bold">Google Play Store</span>{" "}
              para uso libre.
            </li>
          </ul>
          <p className="text-sm text-right">
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
            <h2 className="text-md font-light">
              Cinema Memory – Sitio personal sobre películas
            </h2>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Desarrollo de un sitio web personal donde publico reseñas breves
              de películas que he visto.
            </li>
            <li>
              Implementado con <span className="font-bold">React</span> y{" "}
              <span className="font-bold">Next.js</span>, utilizando{" "}
              <span className="font-bold">TypeScript</span> y un{" "}
              <span className="font-bold">Design System</span> propio.
            </li>
            <li>
              Integración con una <span className="font-bold">API pública</span>{" "}
              para obtener datos de películas.
            </li>
            <li>Enfocado en rendimiento, UI simple y navegación rápida.</li>
          </ul>
          <p className="text-sm text-right">
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
            <h2 className="text-md font-light">
              anwar-components – Librería de componentes para React
            </h2>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Desarrollo de una librería de{" "}
              <span className="font-bold">componentes UI</span> reutilizables
              para proyectos personales en React.
            </li>
            <li>
              Construida con <span className="font-bold">TypeScript</span> y
              publicada en <span className="font-bold">NPM</span> para compartir
              con la comunidad.
            </li>
            <li>
              Incluye componentes visuales con estilos desacoplados, enfocados
              en simplicidad y personalización.
            </li>
            <li>Usada activamente en proyectos propios como Cinema Memory.</li>
          </ul>
          <p className="text-sm text-right">
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
      <hr className="my-10" />
      <section className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Tecnologías</h1>
        <p>
          <span className="font-bold">Frontend</span>: React, React Native,
          TypeScript, JavaScript (ES6+), HTML5, CSS3, SASS, Zustand, Redux,
          styled-components, librerías UI.
        </p>
        <p>
          <span className="font-bold">Testing</span>: Jest, Cypress, Jasmine,
          Karma.
        </p>
        <p>
          <span className="font-bold">Herramientas</span>: Git, GitHub, GitLab,
          Docker, CI/CD.
        </p>
        <p>
          <span className="font-bold">Otros</span>: SQL Server, MongoDB, Figma
          (diseño UI), consumo de APIs REST.
        </p>
      </section>
    </article>
  );
};

export default CurriculumVitae;
