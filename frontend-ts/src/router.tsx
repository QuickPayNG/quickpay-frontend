import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import LandingPage from "./pages/landing";
import SignUP from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Profile from "./pages/dashboard/Profile";
import Links from "./pages/dashboard/Links";
import AuthRoute from "./components/AuthRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import RootLayout from "./RootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <AuthRoute>
            <LandingPage />
          </AuthRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthRoute>
            <SignUP />
          </AuthRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthRoute>
            <Login />
          </AuthRoute>
        ),
      },
      {
        path: "/app",
        element: <App />,
        children: [
          {
            path: "dashboard",
            element: (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            ),
          },
          {
            path: "links",
            element: (
              <ProtectedRoute>
                <Links />
              </ProtectedRoute>
            ),
          },
          {
            path: "profile",
            element: (
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
