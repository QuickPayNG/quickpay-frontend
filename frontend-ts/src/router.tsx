import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard/:userId",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
