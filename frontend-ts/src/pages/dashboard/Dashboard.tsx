"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { getInitials } from "@/lib/utils";

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

  return (
    <div className="min-h-screen bg-[#151518] text-white p-4 sm:p-6 space-y-8">
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
                {links?.slice(0, 5).map((t) => (
                  <tr
                    key={t.id}
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
            {links.slice(0, 5).map((t) => (
              <div
                key={t.id}
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
