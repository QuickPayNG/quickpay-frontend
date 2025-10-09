"use client";

import { Link, ShieldCheck, History, TabletSmartphone } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Generate Payment Links",
      desc: "Create instant payment links in seconds for any product or service.",
      icon: Link,
    },
    {
      title: "Secure Checkout",
      desc: "Ensure customer trust with our secure and encrypted payment gateway.",
      icon: ShieldCheck,
    },
    {
      title: "Real-Time Updates",
      desc: "Receive instant notifications for every successful transaction.",
      icon: History,
    },
    {
      title: "Mobile-Friendly",
      desc: "Accept payments seamlessly on any device, from smartphones to tablets.",
      icon: TabletSmartphone,
    },
  ];

  return (
    <section id="features" className="py-25 px-6 max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
        <p className="text-gray-600 text-lg">
          Everything you need to get paid, simplified.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition duration-300 text-left"
          >
            <f.icon className="w-10 h-10 text-yellow-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
