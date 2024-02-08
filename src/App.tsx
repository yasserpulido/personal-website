import { Outlet } from "react-router-dom";
import { Credits, Navigation } from "./components";

function App() {
  return (
    <div className="container h-full flex flex-col mx-auto">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Credits />
    </div>
  );
}

export default App;
