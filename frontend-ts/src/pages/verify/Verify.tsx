import { useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const { updateLinkStatus, verifyPayment } = useContext(AuthContext);
  const queryParams = new URLSearchParams(window.location.search);
  const reference = queryParams.get("reference");
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      if (!reference) {
        return;
      }
      try {
        const data: any = await verifyPayment(reference);
        if (
          data?.data?.status === "success" ||
          data?.data?.status === "failed"
        ) {
          const newStatus = data.data.status;
          const userId = data.data.metadata?.userId;
          if (userId && reference && newStatus) {
            await updateLinkStatus(userId, reference, newStatus);
            if (newStatus === "success") {
              toast.success("Payment verified successfully!");
              setTimeout(() => {
                navigate(`/receipt/${reference}`);
              }, 3000);
            } else if (newStatus === "failed") {
              toast.error(
                "Payment verification failed, please contact the vendor!"
              );
            }
          } else {
            toast.error("Missing user info. Could not verify payment.");
          }
        }
      } catch (error) {
        toast.error("Error verifying payment. Please try again.");
        console.error("Error verifying payment:", error);
      }
    };

    if (reference) {
      verify();
    }
  }, [reference]);
  return (
    <div className="flex justify-center items-center h-screen w-full bg-background px-2">
      <div className="bg-card p-8 rounded-2xl shadow-2xl flex flex-col items-center w-[400px] max-w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-opacity-70 mb-6"></div>

        <h1 className="text-2xl font-bold text-text">Verifying Payment...</h1>
        <p className="mt-2 text-text text-center">
          <i>You will be redirected shortly</i>
        </p>
      </div>
    </div>
  );
};

export default Verify;
