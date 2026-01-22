"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, FileText } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
            <div className="relative w-full max-w-2xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-2xl md:rounded-full px-6 py-3 transition-all duration-300">
                <div className="flex items-center justify-between">
                    {/* Logo / Name */}
                    <Link href="/" className="text-white font-bold text-lg tracking-tight">
                        Gofiky<span className="text-zinc-500">.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-white",
                                    pathname === item.link ? "text-white" : "text-zinc-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Resume Link (Desktop) */}
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden pt-4 pb-2 space-y-2 border-t border-zinc-800 mt-3 animate-in slide-in-from-top-2 fade-in duration-200">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "block px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-zinc-900",
                                    pathname === item.link ? "text-white bg-zinc-900" : "text-zinc-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Resume Link (Mobile) */}
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                        >
                            Resume
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
