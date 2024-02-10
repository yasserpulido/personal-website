import { Outlet } from "react-router-dom";
import { Credits, Navigation } from "./components";

function App() {
  return (
    <div className="container mx-auto 2xl:px-96 lg:px-64 md:px-32 sm:px-16 px-8 flex flex-col min-h-screen">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Credits />
    </div>
  );
}

export default App;
