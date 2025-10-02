import { createContext } from "react";

export const AuthContext = createContext({
  user: "",
  isAuthenticated: false,
  login: () => {},
  signup: () => {},
  logout: () => {},
});
