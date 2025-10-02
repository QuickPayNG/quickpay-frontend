import { createContext } from "react";

export const AuthContext = createContext({
  user: "",
  isAuthenticated: false,
  isLoading: false,
  isSuccessful: false,
  login: () => {},
  signup: (fullname: string, email: string, password: string) => {},
  logout: () => {},
});
