import { Outlet } from "react-router-dom";
import { Credits, Navigation } from "./components";

function App() {
  return (
    <div className="container flex flex-col min-h-screen mx-auto">
      <Navigation />
      <main className="2xl:px-80">
        <Outlet />
      </main>
      <Credits />
    </div>
  );
}

export default App;
