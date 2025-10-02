import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className="w-full h-[100vh] relative sm:pl-[250px]">
      <Outlet />
      <Navbar />
    </div>
  );
};

export default App;
