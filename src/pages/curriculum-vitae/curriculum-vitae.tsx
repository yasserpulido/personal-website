const CurriculumVitae = () => {
  return (
    <article className="my-20">
      <header className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Acerca de</h1>
        <div className="flex flex-col gap-4">
          <p className="leading-relaxed">
            <span className="font-bold">Desarrollador Frontend</span> con más de
            ocho años de experiencia construyendo aplicaciones web escalables
            para mercados internacionales (Estados Unidos, LATAM y Europa).
            Especializado en <span className="font-bold">React</span>,
            arquitectura frontend y optimización de performance, con fuerte
            enfoque en calidad de código y experiencia de usuario.
          </p>
          <p className="leading-relaxed">
            Experiencia definiendo estándares técnicos, estructuras base de
            proyectos y flujo de desarrollo. Integración activa de herramientas
            de inteligencia artificial (
            <span className="font-bold">Cursor</span>,{" "}
            <span className="font-bold">Claude Code</span>,{" "}
            <span className="font-bold">GitHub Copilot</span>, automatización de
            PRs, análisis de código) para mejorar productividad, consistencia y
            toma de decisiones técnicas en equipos.
          </p>
        </div>
      </header>
      <hr className="my-10" />
      <section className="flex flex-col gap-4">
        <h1 className="text-lg text-center">Educación</h1>
        <div>
          <h2 className="text-md font-light">Kaplan International School</h2>
          <h3 className="text-md font-medium">English Academic Year</h3>
          <p className="text-sm font-light">jul 2017</p>
        </div>
        <div>
          <h2 className="text-md font-light">
            Instituto Universitario Politécnico Santiago Mariño
          </h2>
          <h3 className="text-md font-medium">Ingenieria de Sistemas</h3>
          <p className="text-sm font-light">feb 2016</p>
        </div>
        <p className="text-sm text-right">Venezuela</p>
      </section>
      <hr className="my-10" />
      <section className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Experiencia Laboral</h1>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Huenei IT Services</h2>
            <h3 className="text-md font-medium">Desarrollador Frontend</h3>
            <p className="text-sm font-light">jul 2025 - actualmente</p>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Desarrollo end-to-end del frontend de una plataforma de salud
              mental por videollamada para mercado estadounidense (
              <span className="font-bold">Vue</span>), participando en
              definición técnica, arquitectura y diseño de flujos de usuario.
            </li>
            <li>
              Implementación de frontend en{" "}
              <span className="font-bold">React</span> para producto web +
              mobile orientado a ligas menores de béisbol en EE.UU., mejorando
              consistencia entre plataformas y experiencia de usuario.
            </li>
            <li>
              Desarrollo y evolución de módulo de gestión operativa para empresa
              agropecuaria, optimizando flujos internos y usabilidad en
              contextos reales de negocio (
              <span className="font-bold">React</span>).
            </li>
            <li>
              Participación en solución de videollamadas con asistente de IA en
              tiempo real, integrando tecnologías como{" "}
              <span className="font-bold">Tavus</span> y{" "}
              <span className="font-bold">Daily</span> para experiencias
              conversacionales (<span className="font-bold">React</span>).
            </li>
            <li>
              Definición de arquitectura frontend para proyecto del sector
              seguros en EE.UU., estableciendo estructura base, buenas prácticas
              y foco en performance.
            </li>
            <li>
              Implementación de lineamientos internos para desarrollo asistido
              por IA mediante <span className="font-bold">Cursor</span> (rules,
              commands, skills), mejorando consistencia de código, velocidad de
              desarrollo y calidad en múltiples proyectos.
            </li>
          </ul>
          <p className="text-sm text-right">Argentina</p>
        </article>
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
              Desarrollo de módulo crítico de Términos y Condiciones para{" "}
              <span className="font-bold">Homebanking</span>, con impacto
              directo en usuarios finales y cumplimiento de requerimientos
              regulatorios.
            </li>
            <li>
              Refactorización de herramientas internas en{" "}
              <span className="font-bold">React</span>, incorporando{" "}
              <span className="font-bold">TypeScript</span>,{" "}
              <span className="font-bold">CI/CD</span> y mejoras de arquitectura
              para aumentar mantenibilidad y escalabilidad.
            </li>
            <li>
              Reducción de duplicación de código a menos de 4% y aumento de
              cobertura de tests por encima del 80% utilizando{" "}
              <span className="font-bold">Jest</span> y{" "}
              <span className="font-bold">Cypress</span>.
            </li>
            <li>
              Identificación y resolución de vulnerabilidades críticas,
              fortaleciendo la seguridad del frontend en un entorno financiero.
            </li>
            <li>
              Trabajo en equipo bajo metodología{" "}
              <span className="font-bold">SCRUM</span> con control de versiones
              en <span className="font-bold">GitLab</span>, participando
              activamente en code reviews y mejora continua del código.
            </li>
          </ul>
          <p className="text-sm text-right">Argentina</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">Real Trends</h2>
            <h3 className="text-md font-medium">Desarrollador Frontend</h3>
            <p className="text-sm font-light">sep 2022 - sep 2023</p>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Desarrollo end-to-end de plataforma de e-commerce (
              <span className="font-bold">Tienda</span>), lanzada a producción
              como alternativa a Mercado Libre, permitiendo a vendedores crear y
              gestionar su propia tienda online.
            </li>
            <li>
              Construcción de <span className="font-bold">Design System</span>{" "}
              en conjunto con equipo de diseño, mejorando consistencia visual,
              reutilización de componentes y velocidad de desarrollo.
            </li>
            <li>
              Optimización de experiencia de usuario mediante UI adaptable,{" "}
              <span className="font-bold">accesibilidad</span> y cumplimiento de
              estándares <span className="font-bold">pixel perfect</span>.
            </li>
            <li>
              Implementación de{" "}
              <span className="font-bold">internacionalización (i18n)</span> y
              localización para Argentina, México y Brasil, soportando múltiples
              contextos de negocio.
            </li>
            <li>
              Incorporación de testing con{" "}
              <span className="font-bold">Cypress</span> para asegurar calidad,
              estabilidad y mantenimiento del código.
            </li>
            <li>
              Trabajo bajo metodología <span className="font-bold">SCRUM</span>{" "}
              con control de versiones en{" "}
              <span className="font-bold">GitHub</span>, participando en
              iteraciones continuas de producto.
            </li>
          </ul>
          <p className="text-sm text-right">Argentina</p>
        </article>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">
              MAS Global Consulting (Cliente: Johnson Controls International)
            </h2>
            <h3 className="text-md font-medium">Desarrollador Full Stack</h3>
            <p className="text-sm font-light">ene 2021 - mar 2022</p>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Desarrollo de módulos críticos (
              <span className="font-bold">carrito de compras</span>,{" "}
              <span className="font-bold">facturación</span> y{" "}
              <span className="font-bold">ventas</span>) para plataforma global,
              soportando operaciones en múltiples regiones.
            </li>
            <li>
              Participación en arquitectura híbrida combinando{" "}
              <span className="font-bold">.NET Framework</span>,{" "}
              <span className="font-bold">.NET Core</span> y frontend con{" "}
              <span className="font-bold">Angular/React</span> en entornos
              enterprise.
            </li>
            <li>
              Implementación de{" "}
              <span className="font-bold">internacionalización (i18n)</span>{" "}
              para soporte multirregión, adaptando interfaces a distintos
              mercados.
            </li>
            <li>
              Desarrollo de pruebas unitarias en frontend y backend (
              <span className="font-bold">MSTest</span>,{" "}
              <span className="font-bold">Jasmine</span>,{" "}
              <span className="font-bold">Karma</span>,{" "}
              <span className="font-bold">Jest</span>) para garantizar
              confiabilidad en módulos de alto impacto.
            </li>
            <li>
              Trabajo bajo metodología <span className="font-bold">SCRUM</span>{" "}
              con control de versiones en <span className="font-bold">TFS</span>
              , en equipos distribuidos y entornos corporativos.
            </li>
          </ul>
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
              Migración de sistemas legacy (
              <span className="font-bold">.NET Framework</span>) hacia
              arquitectura moderna basada en{" "}
              <span className="font-bold">.NET Core</span> y{" "}
              <span className="font-bold">React</span>, mejorando mantenibilidad
              y escalabilidad.
            </li>
            <li>
              Desarrollo de sistema de alta de clientes con integración a{" "}
              <span className="font-bold">SQL Server</span> y arquitectura en
              capas.
            </li>
            <li>
              Implementación de pruebas unitarias en backend (
              <span className="font-bold">.NET Core</span>) y frontend (
              <span className="font-bold">Jest</span>) para asegurar calidad y
              estabilidad del sistema.
            </li>
            <li>
              Trabajo bajo metodología <span className="font-bold">SCRUM</span>{" "}
              con control de versiones en <span className="font-bold">TFS</span>
              .
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
              Desarrollo de sistema de control veterinario para gestión de
              ganado, enfocado en trazabilidad y registro operativo.
            </li>
            <li>
              Integración con lectores de identificación electrónica{" "}
              <span className="font-bold">ALLFLEX</span> para captura
              automatizada de datos.
            </li>
            <li>
              Desarrollo de aplicaciones desktop con{" "}
              <span className="font-bold">.NET Framework 4</span> y{" "}
              <span className="font-bold">WinForms (C#)</span>.
            </li>
            <li>
              Diseño e implementación de base de datos{" "}
              <span className="font-bold">SQL</span> para almacenamiento y
              consulta de información.
            </li>
            <li>
              Optimización de procesos de registro reduciendo errores manuales
              en la carga de datos.
            </li>
            <li>
              Soporte técnico y ajustes evolutivos en funcionalidades según
              necesidades operativas.
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
              Desarrollo de sistema interno para control de código fuente y
              gestión de accesos dentro de la empresa.
            </li>
            <li>
              Implementación de aplicaciones desktop con{" "}
              <span className="font-bold">.NET Framework 4</span> y{" "}
              <span className="font-bold">WinForms (C#)</span>.
            </li>
            <li>
              Diseño y mantenimiento de base de datos{" "}
              <span className="font-bold">SQL</span> para almacenamiento de
              información.
            </li>
            <li>
              Participación en mejoras de funcionalidades y corrección de
              incidencias en entornos productivos.
            </li>
            <li>
              Colaboración en definición de estructuras básicas del sistema y
              organización de datos.
            </li>
          </ul>
          <p className="text-sm text-right">Venezuela</p>
        </article>
      </section>
      <hr className="my-10" />
      <section className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Desarrollo y Herramientas de IA</h1>
        <ul className="list-disc pl-6">
          <li>
            Definición e implementación de estrategia de uso de IA en desarrollo
            frontend.
          </li>
          <li>
            Configuración avanzada de <span className="font-bold">Cursor</span>{" "}
            (rules, commands, skills) para estandarización de proyectos
            frontend.
          </li>
          <li>
            Integración de herramientas de análisis automático de código (
            <span className="font-bold">Bugbot</span>).
          </li>
          <li>
            Propuesta de flujos para sincronización entre código, tickets (
            <span className="font-bold">Jira</span>), documentación y evaluación
            local de PRs.
          </li>
          <li>
            Mejora de productividad y calidad de código mediante automatización
            y asistencia contextual.
          </li>
        </ul>
      </section>
      <hr className="my-10" />
      <section className="flex flex-col gap-8">
        <h1 className="text-lg text-center">Proyectos Personales Destacados</h1>
        <article className="flex flex-col gap-4">
          <div>
            <h2 className="text-md font-light">
              FaixaPath – Roadmap interactivo de Brazilian Jiu-Jitsu
            </h2>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Diseño y desarrollo completo de una aplicación web basada en
              grafos para visualizar progresiones técnicas en Brazilian
              Jiu-Jitsu, permitiendo estudiar rutas reales entre posiciones y
              transiciones.
            </li>
            <li>
              Implementación de visualización interactiva mediante{" "}
              <span className="font-bold">React Flow</span> con layout
              automático usando <span className="font-bold">ELK.js</span>,
              optimizando legibilidad y navegación del grafo.
            </li>
            <li>
              Modelado de dominio basado en nodos (técnicas) y aristas
              (transiciones), facilitando exploración estructurada del
              conocimiento técnico.
            </li>
            <li>
              Desarrollo de sistema de filtros avanzados por rol, fase e
              intención para segmentación contextual del grafo.
            </li>
            <li>
              Construcción de vista detallada de técnicas enfocada en
              aprendizaje progresivo.
            </li>
            <li>
              Implementación de panel administrativo para gestión completa de
              técnicas y transiciones.
            </li>
            <li>Arquitectura modular con separación clara de features.</li>
            <li>
              Manejo de estado global con{" "}
              <span className="font-bold">Zustand</span>, optimizando
              rendimiento y control de datos en UI compleja.
            </li>
            <li>
              Formularios robustos con{" "}
              <span className="font-bold">React Hook Form</span> +{" "}
              <span className="font-bold">Zod</span> para validación tipada y
              consistente.
            </li>
            <li>
              Integración de <span className="font-bold">BFF</span>{" "}
              (Backend-for-Frontend) para manejo seguro de datos y generación de
              urls firmadas para medios.
            </li>
            <li>
              UI accesible y desacoplada utilizando{" "}
              <span className="font-bold">Radix UI</span> y{" "}
              <span className="font-bold">Tailwind CSS</span>.
            </li>
            <li>
              Soporte multi-idioma implementado con{" "}
              <span className="font-bold">i18next</span>.
            </li>
            <li>
              Publicada en fase Beta en{" "}
              <span className="font-bold">Google Play Store</span>.
            </li>
          </ul>
          <p className="text-sm text-right">
            <a
              href="https://www.faixapath.com/"
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
              Kyronga – App educativa para aprender japonés
            </h2>
          </div>
          <ul className="list-disc pl-6">
            <li>
              Desarrollo completo de una aplicación móvil en{" "}
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
          <span className="font-bold">Frontend</span>: React, Vue, Angular,
          React Native, TypeScript, JavaScript (ES6+), HTML5, CSS3, SASS,
          styled-components, Tailwind CSS, Radix UI.
        </p>
        <p>
          <span className="font-bold">State Management</span>: Zustand, Redux,
          MobX, Mobx State Tree, React Query (TanStack).
        </p>
        <p>
          <span className="font-bold">Forms & Validation</span>: React Hook
          Form, Zod.
        </p>
        <p>
          <span className="font-bold">Testing</span>: Jest, Cypress, Jasmine,
          Karma, MSTest.
        </p>
        <p>
          <span className="font-bold">Backend / Fullstack</span>: .NET
          Framework, .NET Core, C#, WinForms, SQL Server, MongoDB, APIs REST,
          BFF.
        </p>
        <p>
          <span className="font-bold">Arquitectura & Product Engineering</span>:
          Arquitectura frontend, Design Systems, performance optimization,
          accesibilidad (a11y), internacionalización (i18n), localización.
        </p>
        <p>
          <span className="font-bold">DevOps & Collaboration</span>: Git,
          GitHub, GitLab, TFS/Azure, Docker, CI/CD.
        </p>
        <p>
          <span className="font-bold">AI Tooling</span>: Cursor, Bugbot, GitHub
          Copilot, Claude Code.
        </p>
        <p>
          <span className="font-bold">
            Librerías / Herramientas especializadas
          </span>
          : React Flow, ELK.js, i18next, Figma.
        </p>
        <p>
          <span className="font-bold">Integraciones</span>: Daily, Tavus.
        </p>
      </section>
    </article>
  );
};

export default CurriculumVitae;
