import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import SignUP from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Links from "./pages/Links";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUP />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "links",
        element: <Links />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
