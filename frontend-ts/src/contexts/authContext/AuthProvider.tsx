import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth, db } from "../../lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userData = await fetchUserDetails(currentUser.uid);
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          ...(userData || {}),
        });
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const uploadUserDetails = async (userId: string, fullname: string) => {
    try {
      await setDoc(doc(db, "users", userId), {
        fullname: fullname,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserDetails = async (userId: string) => {
    try {
      const docSnap = await getDoc(doc(db, "users", userId));

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
        return;
      }
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
      console.log("user", user);
      const userData = await fetchUserDetails(user.uid);
      setUser({ uid: user.uid, email: user.email, ...(userData || {}) });
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

  const logout = async () => {
    await signOut(auth);
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
