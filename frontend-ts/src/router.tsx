import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import LandingPage from "./pages/landing";
import SignUP from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Profile from "./pages/dashboard/Profile";
import Links from "./pages/dashboard/Links";

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
