"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo/quickpay.png";
import ctaImage from "../../assets/cta-background.jpg";
const sections = [
    "CTA",
    "Features",
    "Instructions",
    "Feedback"
];

export default function CTASection() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <div
            className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
        >
            {/* Background Image */}
            <img
                src={ctaImage}
                alt="CTA Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />


            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-50 px-4 pt-3 transition-all duration-300">
                <div
                    className={`mx-auto max-w-7xl flex justify-between items-center px-6 py-3 rounded-2xl shadow-lg transition-all duration-300
            ${scrolled
                            ? "bg-white/50 backdrop-blur-lg border border-white/30"
                            : "bg-white/90 backdrop-blur-md border border-white/20"
                        }`}
                >
                    {/* Logo + Name */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={logo}
                            alt="Quickpay Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <h1 className="font-bold text-lg sm:text-xl text-black tracking-wide">
                            QuickPay
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-6 text-sm sm:text-lg font-medium">
                        {sections.map((section) => (
                            <ScrollLink
                                key={section}
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-black hover:text-black/50 transition"
                            >
                                {section}
                            </ScrollLink>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="link"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="text-black" />
                            ) : (
                                <Menu className="text-black" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-black/80 backdrop-blur rounded-2xl mt-2 w-full flex flex-col items-center py-4 space-y-4">
                        {sections.map((section) => (
                            <ScrollLink
                                key={section}
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer text-white hover:text-[#E3963E]"
                            >
                                {section}
                            </ScrollLink>
                        ))}
                    </div>
                )}
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#34301f] to-black/70 z-10"></div>

            {/* CTA Section */}
            <section
                id="cta"
                className="relative min-h-screen flex items-center max-w-7xl mx-auto px-6 pt-22 z-20"
            >
                <div className="items-center justify-between w-full gap-12 lg:p-10">
                    
                    {/* Content */}
                    <div className="text-center ">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                            Fast. Secure. Simple.
                        </h1>
                        <p className="mt-6 text-lg text-gray-200 ">
                           Instant payment links for small hustlers and businesses
                        </p>

                        {/* CTA Buttons */}
                        <div className="justify-center mt-8 flex flex-col sm:flex-row gap-4">
                            {/* <a href="mailto:"> */}
                                <Button
                                    size="lg"
                                    className="bg-yellow-400 hover:bg-yellow-200 text-black font-semibold"
                                >
                                    Get Started
                                </Button>
                            {/* </a> */}
                            <ScrollLink
                                to="instructions"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white bg-transparent text-white hover:bg-white/90"
                                >
                                    See How It Works
                                </Button>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
