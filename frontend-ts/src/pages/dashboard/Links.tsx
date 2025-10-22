import { Button } from "@/components/ui/button";
import TransactionTable from "@/components/ui/TransactionTable";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const { links } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
      const matchesSearch =
        link.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.reference?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTab =
        activeTab === "All" ||
        link.status?.toLowerCase() === activeTab.toLowerCase();

      return matchesSearch && matchesTab;
    });
  }, [links, searchTerm, activeTab]);

  return (
    <div className="bg-background relative dark:bg-background-dark font-display text-text-light dark:text-text-dark">
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              onClick={() => navigate("/createlink")}
              className="w-full md:w-auto flex items-center justify-center bg-primary text-background-dark font-bold py-2 px-4 rounded-DEFAULT hover:bg-primary/90 transition-colors"
            >
              + Create New Link
            </Button>
          </div>

          <div className="mb-6">
            <div className="border-b border-border-light dark:border-border-dark">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                {["All", "Pending", "Success", "Failed"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setActiveTab(status)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm 
                      ${
                        activeTab === status
                          ? "text-primary border-primary"
                          : "text-text dark:text-text-muted-dark border-transparent hover:text-text-light dark:hover:text-text-dark hover:border-border-light dark:hover:border-border-dark"
                      }`}
                  >
                    {status}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Filtered Transactions */}
          <section className="bg-card rounded-xl p-4">
            <TransactionTable links={filteredLinks} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Links;
