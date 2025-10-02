import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth, db } from "../../lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const uploadUserDetails = async (userId: any, fullname: string) => {
    try {
      const docRef = await setDoc(doc(db, "users", userId), {
        fullname: fullname,
      });
      console.log("docref", docRef);
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (fullname: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      await uploadUserDetails(user.uid, fullname);
      setIsLoading(false);
      return true;
    } catch (error: any) {
      console.log({
        errorCode: error.code,
        message: error.message,
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setUser(user);
      setIsAuthenticated(true);
      return true;
    } catch (error: any) {
      console.log({
        errorCode: error.code,
        message: error.message,
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
