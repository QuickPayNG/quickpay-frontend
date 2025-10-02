import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = (email, password) => {
    const name = "ade";
    setUser(name);
    setIsAuthenticated(true);
    console.log("welcome", name);
  };

  const logout = () => {
    setUser("");
    setIsAuthenticated(false);
    console.log("good bye Ade");
  };

  const signup = (email, password, fullname) => {
    console.log("good bye Ade");
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
