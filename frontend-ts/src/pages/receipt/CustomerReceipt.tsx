import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { CheckCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CustomerReceipt = () => {
  const { verifyPayment } = useContext(AuthContext);
  const [receiptData, setReceiptData] = useState<any>(null);
  const { reference } = useParams();

  useEffect(() => {
    const verify = async () => {
      if (!reference) {
        return;
      }
      const data: any = await verifyPayment(reference);
      console.log("receiptdata", data);
      setReceiptData(data);
    };
    verify();
  }, [reference]);

  if (!receiptData) {
    return (
      <div className="bg-background text-text h-[100vh]">
        receipt loading...
      </div>
    );
  }

  return (
    <div className="bg-background dark:bg-background-dark font-display text-text dark:text-content-dark">
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-text dark:text-content-dark">
              QuickPay
            </h1>
            <p className="text-lg text-text/80 dark:text-content-dark/80">
              Payment Receipt
            </p>
          </header>
          <main>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center">
                <CheckCircle className="text-[#16a34a]" size={44} />
              </div>
              <h2 className="text-2xl font-bold text-content-light dark:text-content-dark">
                Payment Successful
              </h2>
              <p className="text-content-light/80 dark:text-content-dark/80 mt-1">
                Thank you for your payment. Your transaction has been confirmed.
              </p>
            </div>
            <div className="bg-card dark:bg-content-light/5 shadow-lg rounded-lg p-6 space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="font-bold text-text dark:text-content-dark">
                  Amount Paid:
                </span>
                <span className="text-text dark:text-content-dark">
                  ₦ {(receiptData?.data?.amount / 100).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-text dark:text-content-dark">
                  Description:
                </span>
                <span className="text-text dark:text-content-dark">
                  {receiptData?.data?.metadata?.description}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-text dark:text-content-dark">
                  Reference Code:
                </span>
                <span className="text-text dark:text-content-dark">
                  {receiptData?.data?.reference}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-text dark:text-content-dark">
                  Customer Email:
                </span>
                <span className="text-text dark:text-content-dark">
                  {receiptData?.data?.customer?.email}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-text dark:text-content-dark">
                  Status:
                </span>
                <span className="flex items-center gap-1 text-[#16a34a] font-medium">
                  Paid
                  <CheckCircle size={12} />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-content-light dark:text-content-dark">
                  Date &amp; Time:
                </span>
                <span className="text-content-light dark:text-content-dark">
                  {new Date(receiptData?.data?.createdAt).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300">
                Download Receipt (PDF)
              </Button>
              {/* <Button className="w-full bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300">
                Return to Merchant
              </Button> */}
            </div>
          </main>
          <footer className="text-center mt-12 border-t border-primary pt-6">
            <p className="text-xs text-content-light/60 dark:text-content-dark/60">
              This receipt was generated securely by QuickPay and powered by
              Paystack.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CustomerReceipt;
