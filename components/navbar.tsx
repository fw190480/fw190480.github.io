"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Resume } from "@/components/resume";

const NavLink = ({
  href,
  icon: Icon,
  children,
  className = "",
  ...restProps
}: {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    href={href}
    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
    {...restProps}
  >
    <Icon className="w-4 h-4" />
    <span>{children}</span>
  </Link>
);

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const navLinks = [
    { href: "/", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#skills", icon: Code, label: "Skills" },
    { href: "#projects", icon: Briefcase, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Portfolio
              </span>

              {/* <span
                className="text-2xl font-bold 
  bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 
  text-transparent bg-clip-text 
  hover:bg-gradient-to-l 
  transition-all duration-300 
  cursor-pointer"
              >
                Portfolio
              </span> */}

{/* <span className="text-2xl font-bold 
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  text-transparent bg-clip-text 
  animate-gradient-x 
  background-size-200 
  hover:animate-none 
  hover:bg-gradient-to-l 
  transition-all duration-300 
  cursor-pointer">
  Portfolio
</span> */}

{/* <span className="text-2xl font-bold 
  text-gray-800 dark:text-white
  drop-shadow-[0_5px_3px_rgba(0,0,0,0.3)]
  dark:drop-shadow-[0_5px_3px_rgba(255,255,255,0.2)]
  transition-all duration-300 
  hover:scale-105 
  inline-block 
  origin-bottom">
  Portfolio
</span> */}

{/* 
<span className="text-2xl font-bold 
  text-transparent 
  bg-gradient-to-r from-blue-500 to-purple-500 
  bg-clip-text 
  animate-pulse 
  relative 
  before:absolute 
  before:-z-10 
  before:inset-0 
  before:bg-gradient-to-r 
  before:from-blue-500 
  before:to-purple-500 
  before:blur-lg 
  before:opacity-50 
  before:translate-y-1">
  Portfolio
</span> */}

{/* <span className="text-2xl font-bold 
  bg-gradient-to-r from-green-400 to-blue-500 
  text-transparent bg-clip-text 
  relative 
  after:absolute 
  after:inset-y-0 
  after:right-0 
  after:w-1 
  after:bg-gray-700 
  after:animate-blink">
  Portfolio
</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} icon={link.icon}>
                  {link.label}
                </NavLink>
              ))}
              <Resume>Resume</Resume>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Mobile Menu Sheet */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader className="mb-4">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <NavLink
                        key={link.href}
                        href={link.href}
                        icon={link.icon}
                        className="w-full justify-start"
                      >
                        {link.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Resume>Resume</Resume>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
