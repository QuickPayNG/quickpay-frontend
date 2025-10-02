import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
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

  const signup = () => {
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
