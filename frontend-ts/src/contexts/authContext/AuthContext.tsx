import { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  login: (email: string, password: string) => {},
  signup: (fullname: string, email: string, password: string) => {},
  logout: () => {},
});
