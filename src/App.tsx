import { Outlet } from "react-router-dom";
import { Navigation } from "./components";

function App() {
  return (
    <div className="container h-full flex flex-col mx-auto">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
