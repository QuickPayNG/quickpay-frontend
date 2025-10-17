import { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth, db } from "../../lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import toast from "react-hot-toast";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [links, setLinks] = useState<any[]>([]);
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
      console.log(userData);
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
      setUser(null);
      setIsAuthenticated(false);
      await signOut(auth);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
      toast.dismiss(toastId);
    }
  };

  const uploadLink = async (data: any) => {
    try {
      const linksRef = collection(db, "users", user.uid, "links");
      const docRef = await addDoc(linksRef, {
        reference: data.reference,
        amount: data.amount,
        description: data.description,
        email: data.email,
        name: data.name,
        status: "pending",
        createdAt: serverTimestamp(),
      });
      console.log("Link created with ID: ", docRef.id);
    } catch (error) {
      console.error("Error creating link: ", error);
    }
  };

  const generateLink = async (
    amount: number,
    description: string,
    name: string,
    email: string
  ) => {
    setIsLoading(true);
    const toastId = toast.loading("Generating payment link...");
    const url = "https://api.paystack.co/transaction/initialize";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SECRET_KEY}`,
        },

        body: JSON.stringify({
          email: email || "customer@email.com",
          amount: amount * 100,
          callback_url: "https://quickpay-alpha.vercel.app/verify",
          channels: ["bank"],
          metadata: {
            name: name || "Customer",
            description: description,
            custom_filters: {
              recurring: true,
            },
          },
        }),
      });
      const data = await response.json();
      console.log("link data", data);
      const linkData = {
        reference: data.data.reference,
        amount: amount,
        description: description,
        email: email || "customer@email.com",
        name: name || "Customer",
      };
      await uploadLink(linkData);
      toast.success("Payment link generated successfully");
      return data.data.authorization_url;
    } catch (err) {
      console.log(err);
      toast.error("Error generating payment link");
    } finally {
      toast.dismiss(toastId);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;

    const linksRef = collection(db, "users", user.uid, "links");
    const unsubscribe = onSnapshot(linksRef, (snapshot) => {
      const userLinks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLinks(userLinks);
    });

    return () => unsubscribe();
  }, [user]);

  async function updateLinkStatus(
    userId: string,
    reference: string,
    newStatus: string
  ) {
    const linksRef = collection(db, "users", userId, "links");
    const q = query(linksRef, where("reference", "==", reference));
    const snapshot = await getDocs(q);

    snapshot.forEach(async (docSnap) => {
      const linkDocRef = docSnap.ref;
      await updateDoc(linkDocRef, { status: newStatus });
      console.log(`Updated ${reference} to ${newStatus}`);
    });
  }

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    links,
    generateLink,
    updateLinkStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
