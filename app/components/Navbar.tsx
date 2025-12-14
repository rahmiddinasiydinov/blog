"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blogs", label: "Blogs" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full flex justify-center right-0 z-50 py-4 bg-[#030303]/80 backdrop-blur-xl border-b border-amber-900/20">
            <div className="container flex items-center justify-between max-w-[1200px] px-6">
                <Link href="/" className="flex items-center font-['Outfit'] text-[1.75rem] font-bold">
                    <span className="text-white">R</span>
                    <span className="text-amber-500">.</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "relative py-1 font-medium text-[0.95rem] transition-colors duration-250",
                                    pathname === link.href
                                        ? "text-amber-400"
                                        : "text-zinc-400 hover:text-amber-300"
                                )}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full animate-in slide-in-from-left-2" />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                {/* <button
                    className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 bg-transparent border-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={cn(
                        "block w-6 h-0.5 bg-white rounded-full transition-all duration-250",
                        isMenuOpen && "translate-y-[7px] rotate-45"
                    )} />
                    <span className={cn(
                        "block w-6 h-0.5 bg-white rounded-full transition-all duration-250",
                        isMenuOpen && "opacity-0 scale-x-0"
                    )} />
                    <span className={cn(
                        "block w-6 h-0.5 bg-white rounded-full transition-all duration-250",
                        isMenuOpen && "-translate-y-[7px] -rotate-45"
                    )} />
                </button> */}

                {/* Mobile Navigation */}
                <div className={cn(
                    "fixed md:hidden top-[60px] left-0 right-0 bottom-0 bg-[#030303]/98 backdrop-blur-xl p-8 transition-all duration-250",
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}>
                    <ul className="flex flex-col gap-6 pt-8">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.href}
                                className="animate-in fade-in slide-in-from-left-5"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "block text-2xl font-semibold py-2 transition-colors duration-250",
                                        pathname === link.href
                                            ? "text-amber-400"
                                            : "text-zinc-400 hover:text-amber-300"
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
