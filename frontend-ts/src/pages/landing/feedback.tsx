'use client'
import logo from "../../assets/logo/quickpay.png"

export default function FeedbackSection() {
  const testimonials = [
    {
      quote:
        "QuickPay has revolutionized how I handle payments. It’s so much easier to send links to my customers & collect money instantly!",
      name: "Sophia Carter",
      role: "Freelance Designer",
      image: logo,
    },
    {
      quote:
        "As a small business owner, QuickPay has simplified my workflow. Customers love the convenience.",
      name: "Ethan Walker",
      role: "Online Retailer",
      image: logo,
    },
    {
      quote:
        "I was hesitant at first, but QuickPay’s system is flawless. I can now focus on growing my business instead of chasing payments.",
      name: "Isabella Bennett",
      role: "Consultant",
      image: logo,
    },
  ]

  return (
    <section id="feedback" className="py-25 px-6 bg-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Loved by Hustlers Everywhere
        </h2>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
          >
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <div className="flex flex-row gap-2">
              <img src={t.image} alt="" className="w-12 h-12" />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
