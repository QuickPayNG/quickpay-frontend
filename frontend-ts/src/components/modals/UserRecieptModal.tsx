import { CheckCircle, LoaderIcon, X } from "lucide-react";
import { Button } from "../ui/button";

const UserRecieptModal = ({
  onClose,
  isOpen,
  link,
}: {
  onClose: any;
  isOpen: boolean;
  link: any;
}) => {
  if (!isOpen) return null;
  return (
    <div className="h-full bg-background sm:h-screen absolute inset-0 dark:bg-black p-6 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-text dark:text-text-dark mb-6">
          Transaction Receipt
        </h1>
        {link?.status === "success" && (
          <div className="bg-[#16a34a]/10 text-[#16a34a] border border-[#16a34a]/20 rounded-lg p-4 flex items-center gap-4 mb-8">
            <CheckCircle />
            <div>
              <h2 className="font-bold text-lg">Payment Successful</h2>
              <p className="text-sm">This payment link has been closed.</p>
            </div>
          </div>
        )}

        {link?.status === "failed" && (
          <div className="bg-red-900/30 text-red-300 border border-red-600 rounded-lg p-4 flex items-center gap-4 mb-8">
            <X />
            <div>
              <h2 className="font-bold text-lg">Payment Failed</h2>
              <p className="text-sm">This payment link has been closed.</p>
            </div>
          </div>
        )}

        {link?.status === "pending" && (
          <div className="text-text border border-text/30 rounded-lg p-4 flex items-center gap-4 mb-8">
            <LoaderIcon />
            <div>
              <h2 className="font-bold text-lg">Payment Pending</h2>
              <p className="text-sm">This payment link has not been closed.</p>
            </div>
          </div>
        )}

        <div className="bg-card text-text dark:bg-card-dark rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div className="col-span-1 sm:col-span-2">
                <p className="text-sm font-medium text-text/60 ">Customer</p>
                <p className="text-base font-semibold ">
                  {link.name} ({link.email})
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-text/60">Amount Paid</p>
                <p className="text-base font-semibold text-text-light dark:text-text-dark">
                  ₦ {link.amount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-text/60dark:text-text-muted-dark">
                  Description
                </p>
                <p className="text-base font-semibold text-text-light dark:text-text-dark">
                  {link?.description}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-text/60 dark:text-text-muted-dark">
                  Reference Code
                </p>
                <p className="text-base font-semibold text-text-light dark:text-text-dark">
                  {link?.reference}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-text/60 dark:text-text-muted-dark">
                  Status
                </p>
                {link?.status === "success" && (
                  <p className="text-base font-semibold text-[#16a34a] flex items-center gap-1">
                    Paid
                    <CheckCircle size={12} />
                  </p>
                )}

                {link?.status === "failed" && (
                  <p className="text-base font-semibold text-red-300 flex items-center gap-1">
                    Failed
                    <X size={12} />
                  </p>
                )}
                {link?.status === "pending" && (
                  <p className="text-base font-semibold text-text flex items-center gap-1">
                    Pending
                    <LoaderIcon size={12} />
                  </p>
                )}
              </div>
              <div className="col-span-1 sm:col-span-2">
                <p className="text-sm font-medium text-text/60 dark:text-text-muted-dark">
                  Date &amp; Time
                </p>
                <p className="text-base font-semibold text-text-light dark:text-text-dark">
                  {new Date(link?.createdAt?.seconds * 1000).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button className="w-full sm:w-auto flex-1 bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200">
            Download Receipt (PDF)
          </Button>
          <Button className="w-full sm:w-auto flex-1 bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200">
            Share Receipt
          </Button>
          <Button
            onClick={onClose}
            className="w-full sm:w-auto bg-gray-200 dark:bg-gray-800 text-black dark:text-text-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Back to My Links
          </Button>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xs text-text">
            This receipt is securely generated by QuickPay, powered by Paystack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRecieptModal;
