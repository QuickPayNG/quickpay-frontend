'use client'

export default function InstructionSection() {
    const steps = [
        {
            num: "1",
            title: "Create a Link",
            desc: "Generate a secure payment link for your product or service.",
        },
        {
            num: "2",
            title: "Share with Customers",
            desc: "Send the link to your customers via email, social media, or any other platform.",
        },
        {
            num: "3",
            title: "Customers Pay Instantly",
            desc: "They click the link and complete the payment through our secure checkout.",
        },
        {
            num: "4",
            title: "You Get Notified",
            desc: "Receive a real-time notification as soon as the payment is successful.",
        },
    ]

    const leftSteps = steps.filter((_, i) => i % 2 === 0) // 1, 3
    const rightSteps = steps.filter((_, i) => i % 2 === 1) // 2, 4

    return (
        <section id="instructions" className="py-20 px-6 bg-[#2a2a1a] text-white">
            {/* Section Header */}
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
                <p className="text-gray-400 text-base">
                    Get started in just a few simple steps.
                </p>
            </div>

            {/* MOBILE: stacked list */}
            <div className="space-y-10 md:hidden">
                {steps.map((s) => (
                    <div key={s.num} className="flex items-start gap-4">
                        {/* Number circle */}
                        <div className="w-12 h-12 rounded-full bg-[#f4c430] text-black flex items-center justify-center font-bold text-lg shrink-0">
                            {s.num}
                        </div>
                        {/* Text */}
                        <div>
                            <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* DESKTOP: staggered with divider */}
            <div className="hidden md:block relative max-w-5xl mx-auto md:min-h-[500px]">
                {/* Middle vertical line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#3a3a2a]" />

                <div className="grid md:grid-cols-2 gap-12 md:gap-0">
                    {/* LEFT column: steps 1 & 3 */}
                    <div className="flex flex-col justify-start space-y-32">
                        {leftSteps.map((s) => (
                            <div key={s.num} className="relative">
                                <div className="pl-10 text-left">
                                    <div className="absolute top-0 md:left-[-28px] w-14 h-14 rounded-full bg-[#f4c430] text-black flex items-center justify-center font-bold text-xl">
                                        {s.num}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* RIGHT column: steps 2 & 4 - offset downward */}
                    <div className="flex flex-col justify-start space-y-32 md:mt-25">
                        {rightSteps.map((s) => (
                            <div key={s.num} className="relative">

                                <div className="pl-25 text-left">
                                    {/* Number circle overlaps the divider */}
                                    <div className="absolute top-0 md:left-[28px] w-14 h-14 rounded-full bg-[#f4c430] text-black flex items-center justify-center font-bold text-xl">
                                        {s.num}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
