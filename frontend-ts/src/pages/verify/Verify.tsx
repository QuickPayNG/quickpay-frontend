import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext } from "react";

const Verify = () => {
  const { updateLinkStatus } = useContext(AuthContext);
  const queryParams = new URLSearchParams(window.location.search);
  const reference = queryParams.get("reference");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await fetch(
          `https://api.paystack.co/transaction/verify/${reference}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_SECRET_KEY}`,
            },
          }
        );

        const data = await response.json();
        console.log(data);
        if (data.data.status === "success") {
          const newStatus = data.data.status
          const userId = data.data.metadata.userId
          await updateLinkStatus(userId, reference, newStatus)
          toast.success("Payment verified successfully!");
        } 
        else if (data.data.status === "failed") {
          const newStatus = data.data.status
          const userId = data.data.metadata.userId
          await updateLinkStatus(userId, reference, newStatus)
          toast.error("Payment verification failed, please contact the vendor!");
        } 
        else {
          toast.error("Payment verification failed. Please try again.")
        }
      } catch (error) {
        toast.error("Error verifying payment. Please try again.");
        console.error("Error verifying payment:", error);
      }
    };

    if (reference) {
      verifyPayment();
    }
  }, [reference]);
  return (
    <div className="flex justify-center items-center h-screen w-full bg-background px-2">
      <div className="bg-card p-8 rounded-2xl shadow-2xl flex flex-col items-center w-[400px] max-w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-opacity-70 mb-6"></div>

        <h1 className="text-2xl font-bold text-text">
          Verifying Payment...
        </h1>
        <p className="mt-2 text-text text-center">
          <i>You will be redirected shortly</i>
        </p>
      </div>
    </div>
  );
};

export default Verify;