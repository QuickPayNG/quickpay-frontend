import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const login = () => {
    const name = "ade";
    console.log("welcome", name);
  };

  const logout = () => {
    setUser("");
    setIsAuthenticated(false);
  };

  // const uploadUserDetails = (userId) => {
  //   console.log(userId);
  // };

  const signup = async (fullname: string, email: string, password: string) => {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        setIsSuccessful(true);
        console.log(user);
      })
      .catch((error) => {
        console.log({
          errorCode: error.code,
          message: error.message,
        });
        setIsLoading(false);
      });
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    isSuccessful,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
