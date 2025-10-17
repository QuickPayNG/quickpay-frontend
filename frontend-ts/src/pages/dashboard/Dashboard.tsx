"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { getInitials } from "@/lib/utils";
import TransactionTable from "@/components/ui/TransactionTable";

export default function Dashboard() {
  const { user, links } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Links in Dashboard:", links);
    console.log("User in Dashboard:", user);
  }, [user, links]);

  const getTotalEarnings = () => {
    if (links.length === 0) return 0;
    return links.reduce((total, link) => {
      if (link.status === "success") {
        return total + link.amount;
      }
      return total;
    }, 0);
  };

  return (
    <div className="min-h-screen relative bg-[#151518] text-white p-4 sm:p-6 space-y-8">
      {/* Header */}
      <header className="flex flex-row justify-between items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Welcome back,{" "}
          <span className="block sm:inline">{user?.fullname}</span>
        </h1>
        <div className="flex items-center gap-4 self-end sm:self-auto cursor-pointer">
          <Bell className="text-gray-300 w-5 h-5 sm:w-6 sm:h-6" />
          <Avatar
            onClick={() => navigate("/profile")}
            className="border border-gray-700 w-9 h-9 sm:w-10 sm:h-10"
          >
            {/* <AvatarImage src="/avatar.png" alt="Sarah" /> */}
            <AvatarFallback className="text-gray-500 font-bold text-2xl">
              {getInitials(user?.fullname)}
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-[#111112] border-0 border-l-4 border-primary">
          <CardContent className="pt-5 sm:pt-6">
            <p className="text-gray-400 text-sm mb-1">Total Earnings</p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              ₦ {getTotalEarnings().toLocaleString()}
            </h2>
          </CardContent>
        </Card>

        <Card className="bg-[#111112] border-0 border-l-4 border-primary">
          <CardContent className="pt-5 sm:pt-6">
            <p className="text-gray-400 text-sm mb-1">Payment Links Created</p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              {links?.length}
            </h2>
          </CardContent>
        </Card>

        <Card className="bg-[#111112] border-0 border-l-4 border-primary">
          <CardContent className="pt-5 sm:pt-6">
            <p className="text-gray-400 text-sm mb-1">Customers Served</p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              {links?.length}
            </h2>
          </CardContent>
        </Card>
      </div>

      {/* Create New Link Button */}
      <div className="flex justify-end">
        <Button
          onClick={() => navigate("/createlink")}
          className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-md px-5 py-2 sm:px-6"
        >
          + Create New Link
        </Button>
      </div>

      {/* Recent Transactions */}
      <section className="bg-[#111112] rounded-xl p-4">
        <h2 className="text-lg text-center font-semibold">
          Recent Transactions
        </h2>
        <TransactionTable links={links} />

        {links?.length > 0 && (
          <div className="flex justify-end mt-4">
            <Button
              variant="secondary"
              className="bg-[#1a1a1a] text-white hover:bg-[#222] px-4 sm:px-6"
              onClick={() => navigate("/links")}
            >
              View All Links
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
