import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext } from "react";

const Links = () => {
  const { links } = useContext(AuthContext);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
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

  return (
    <div className="bg-background dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-text dark:text-text-dark">
              My Payment Links
            </h1>
            <p className="text-text/70 dark:text-text-muted-dark mt-1">
              View and manage all your generated payment links.
            </p>
          </div>
          <div className="mb-6 md:flex md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center">
              <input
                className="w-full md:w-80 p-2 rounded-sm border border-primary/50 dark:border-border-dark text-text/50 text-xs outline-none placeholder:text-text/50 placeholder:text-sm"
                placeholder="Search by description or reference..."
                type="text"
              />
            </div>
            <Button className="w-full md:w-auto flex items-center justify-center bg-primary text-background-dark font-bold py-2 px-4 rounded-DEFAULT hover:bg-primary/90 transition-colors">
              + Create New Link
            </Button>
          </div>
          <div className="mb-6">
            <div className="border-b border-border-light dark:border-border-dark">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                <a
                  className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-primary border-primary"
                  href="#"
                >
                  All
                </a>
                <a
                  className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-text dark:text-text-muted-dark border-transparent hover:text-text-light dark:hover:text-text-dark hover:border-border-light dark:hover:border-border-dark"
                  href="#"
                >
                  Pending
                </a>
                <a
                  className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-text dark:text-text-muted-dark border-transparent hover:text-text-light dark:hover:text-text-dark hover:border-border-light dark:hover:border-border-dark"
                  href="#"
                >
                  Paid
                </a>
                <a
                  className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-text dark:text-text-muted-dark border-transparent hover:text-text-light dark:hover:text-text-dark hover:border-border-light dark:hover:border-border-dark"
                  href="#"
                >
                  Expired
                </a>
              </nav>
            </div>
          </div>
          {/* Recent Transactions */}
          <section className="bg-card rounded-xl p-4">
            {/* Desktop Table */}
            {links.length > 0 ? (
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
                    {links.slice(0, 5).map((t) => (
                      <tr
                        key={t.id}
                        className="border-b text-gray-400 border-gray-800 hover:bg-[#1a1a1c] transition"
                      >
                        <td className="py-3">{t.reference}</td>
                        <td className="py-3">₦ {t.amount}</td>
                        <td className="py-3">{getStatusBadge(t.status)}</td>
                        <td className="py-3">
                          {new Date(
                            t.createdAt?.seconds * 1000
                          ).toLocaleString()}
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
            {links.length > 0 ? (
              <div className="md:hidden space-y-3 mt-10">
                {links.slice(0, 5).map((t) => (
                  <div
                    key={t.ref}
                    className="p-3 rounded-lg bg-[#1a1a1c] flex flex-col gap-2 border border-gray-800"
                  >
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>Reference</span>
                      <span>{t.reference}</span>
                    </div>
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>Amount</span>
                      <span>₦ {t.amount}</span>
                    </div>
                    <div className="flex justify-between text-gray-400 text-sm items-center">
                      <span>Status</span>
                      {getStatusBadge(t.status)}
                    </div>
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>Date</span>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Links;
