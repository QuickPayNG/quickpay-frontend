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
import toast from "react-hot-toast";

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
    const toastId = toast.loading("Getting you signed up...");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      await uploadUserDetails(user.uid, fullname);
      toast.success("Account creation successfull, proceed to login");
      await logout();
      return true;
    } catch (error: any) {
      toast.error(error.code);
      console.log({
        errorCode: error.code,
        message: error.message,
      });
      return false;
    } finally {
      toast.dismiss(toastId);
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    const toastId = toast.loading("Getting you signed in...");
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
      toast.success("Logged In");
      setIsAuthenticated(true);
      return true;
    } catch (error: any) {
      toast.error(error.code);
      console.log({
        errorCode: error.code,
        message: error.message,
      });
      return false;
    } finally {
      toast.dismiss(toastId);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    const toastId = toast.loading("Signing out...");
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated(false);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
      toast.dismiss(toastId);
    }
  };

  const uploadLink = async (
    userId: string,
    amount: number,
    description: string,
    name: string
  ) => {
    try {
      const linkId = `${userId}-${Date.now()}`;
      await setDoc(doc(db, "links", linkId), {
        userId,
        amount,
        description,
        name,
        linkId,
        createdAt: new Date(),
      });
      return linkId;
    } catch (error) {
      console.log(error);
    }
  };

  const generateLink = async (
    amount: number,
    description: string,
    name: string
  ) => {
    setIsLoading(true);

    const url = "https://api.paystack.co/transaction/initialize";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SECRET_KEY}`,
      },

      body: JSON.stringify({
        email: name,
        amount: amount * 100,
        callback_url: "https://quickpay-alpha.vercel.app/verify",
        channels: ["bank"],
        metadata: {
          custom_filters: {
            recurring: true,
          },
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        toast.success("Payment link generated successfully", {
          duration: 4000,
        });

        console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Error generating payment link", { duration: 4000 });
        console.error("Error:", err);
      });
    console.log("Generating link with:", { amount, description, name });
    const kinikan = await uploadLink(user.uid, amount, description, name);
    console.log(kinikan);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    generateLink,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
