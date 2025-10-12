"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const transactions = [
    { ref: "REF12345", amount: "$50.00", status: "Paid", date: "2024-01-15" },
    {
      ref: "REF67890",
      amount: "$75.00",
      status: "Pending",
      date: "2024-01-16",
    },
    { ref: "REF11223", amount: "$100.00", status: "Paid", date: "2024-01-17" },
    { ref: "REF33445", amount: "$25.00", status: "Failed", date: "2024-01-18" },
    { ref: "REF55667", amount: "$60.00", status: "Paid", date: "2024-01-19" },
  ];

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
    <div className="min-h-screen bg-[#151518] text-white p-4 sm:p-6 space-y-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Welcome back, {user?.fullname}
        </h1>
        <div className="flex items-center gap-4 self-end sm:self-auto">
          <Bell className="text-gray-300 w-5 h-5 sm:w-6 sm:h-6" />
          <Avatar className="border border-gray-700 w-9 h-9 sm:w-10 sm:h-10">
            <AvatarImage src="/avatar.png" alt="Sarah" />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-[#111112] border-0 border-l-4 border-yellow-500">
          <CardContent className="pt-5 sm:pt-6">
            <p className="text-gray-400 text-sm mb-1">Total Earnings</p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              $1,250.00
            </h2>
          </CardContent>
        </Card>

        <Card className="bg-[#111112] border-0 border-l-4 border-yellow-500">
          <CardContent className="pt-5 sm:pt-6">
            <p className="text-gray-400 text-sm mb-1">Payment Links Created</p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">15</h2>
          </CardContent>
        </Card>

        <Card className="bg-[#111112] border-0 border-l-4 border-yellow-500">
          <CardContent className="pt-5 sm:pt-6">
            <p className="text-gray-400 text-sm mb-1">Customers Served</p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">32</h2>
          </CardContent>
        </Card>
      </div>

      {/* Create New Link Button */}
      <div className="flex justify-end">
        <Button onClick={() => navigate("createlink")} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md px-5 py-2 sm:px-6">
          + Create New Link
        </Button>
      </div>

      {/* Recent Transactions */}
      <section className="bg-[#111112] rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
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
              {transactions.map((t) => (
                <tr
                  key={t.ref}
                  className="border-b border-gray-800 hover:bg-[#1a1a1c] transition"
                >
                  <td className="py-3">{t.ref}</td>
                  <td className="py-3">{t.amount}</td>
                  <td className="py-3">{getStatusBadge(t.status)}</td>
                  <td className="py-3 text-gray-400">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {transactions.map((t) => (
            <div
              key={t.ref}
              className="p-3 rounded-lg bg-[#1a1a1c] flex flex-col gap-2 border border-gray-800"
            >
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Reference</span>
                <span>{t.ref}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Amount</span>
                <span>{t.amount}</span>
              </div>
              <div className="flex justify-between text-sm items-center">
                <span className="text-gray-400">Status</span>
                {getStatusBadge(t.status)}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Date</span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <Button
            variant="secondary"
            className="bg-[#1a1a1a] text-white hover:bg-[#222] px-4 sm:px-6"
          >
            View All Links
          </Button>
        </div>
      </section>
    </div>
  );
}
