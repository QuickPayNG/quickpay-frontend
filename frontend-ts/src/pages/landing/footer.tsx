'use client'

import { Button } from "@/components/ui/button"
import logo from "../../assets/logo/quickpay.png"

export default function Footer() {
    return (
        <footer className="bg-[#34301f] text-white py-12 px-6">
            <div className="max-w-screen-xl mx-auto">
                {/* Top Section */}
                <div className="text-center pb-12">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Start collecting payments today with
                    </h2>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        QuickPay.
                    </h2>
                    <Button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold transition">
                        Sign Up Free
                    </Button>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between pt-12 gap-8 lg:gap-0 text-center lg:text-left">
                    
                    {/* Logo */}
                    <div className="flex items-center justify-center lg:justify-start">
                        <img
                            src={logo}
                            alt="Quickpay Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <h1 className="font-bold text-lg sm:text-xl text-white ml-2">
                            QuickPay
                        </h1>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                    </div>

                    {/* Copyright */}
                    <div className="text-white text-sm">
                        © 2025 QuickPay. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
