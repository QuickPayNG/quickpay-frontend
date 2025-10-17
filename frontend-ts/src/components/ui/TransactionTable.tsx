import { useState } from "react";
import UserRecieptModal from "../modals/UserRecieptModal";
import { Badge } from "./badge";

const TransactionTable = ({ links }: { links: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge className="bg-green-600 text-white flex items-center gap-1">
            <span></span> Paid
          </Badge>
        );
      case "Pending":
        return (
          <Badge className="bg-yellow-600 text-white flex items-center gap-1">
            <span></span> Pending
          </Badge>
        );
      case "Failed":
        return (
          <Badge className="bg-red-600 text-white flex items-center gap-1">
            <span></span> Failed
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };
  const handleClick = (clickedLInk: any) => {
    setIsOpen(true);
    setLink(clickedLInk);
  };
  return (
    <>
      {/* Desktop Table */}
      {links?.length > 0 ? (
        <div className="hidden md:block overflow-x-auto mt-10">
          <table className="w-full text-left text-sm">
            <thead className="text-gray-400 border-b border-gray-700">
              <tr>
                <th className="pb-2">Reference</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {links?.slice(0, 5).map((t: any) => (
                <tr
                  key={t.id}
                  onClick={() => handleClick(t)}
                  className="border-b text-gray-400 border-gray-800 hover:bg-[#1a1a1c] transition"
                >
                  <td className="py-3">{t.reference}</td>
                  <td className="py-3">₦ {t.amount.toLocaleString()}</td>
                  <td className="py-3">{getStatusBadge(t.status)}</td>
                  <td className="py-3">
                    {new Date(t.createdAt?.seconds * 1000).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400 text-center py-10 hidden md:block">
          No payment links found. Create your first link!
        </p>
      )}

      {/* Mobile Card View */}
      {links?.length > 0 ? (
        <div className="md:hidden space-y-3 mt-10">
          {links.slice(0, 5).map((t: any) => (
            <div
              key={t.id}
              onClick={() => handleClick(t)}
              className="p-3 rounded-lg text-gray-400 bg-[#1a1a1c] flex flex-col gap-2 border border-gray-800"
            >
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Reference</span>
                <span>{t.reference}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Amount</span>
                <span>₦ {t.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm items-center">
                <span className="text-gray-400">Status</span>
                {getStatusBadge(t.status)}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Date</span>
                <span>
                  {new Date(t.createdAt?.seconds * 1000).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center py-10 md:hidden">
          No payment links found. Create your first link!
        </p>
      )}
      <UserRecieptModal
        isOpen={isOpen}
        link={link}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default TransactionTable;
