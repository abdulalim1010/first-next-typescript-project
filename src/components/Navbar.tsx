"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-blue-600">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-white tracking-wide"
        >
          MyApp
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`text-sm font-medium text-white transition-colors
                    hover:text-yellow-300`}
                >
                  {link.name}
                </Link>

                {/* Active underline animation */}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-white"
                  />
                )}
              </div>
            );
          })}

          <Button
            size="sm"
            className="bg-white text-blue-600 hover:bg-blue-100"
          >
            Login
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-blue-500"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-blue-600 text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
            </SheetHeader>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-6 flex flex-col gap-5"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition
                      hover:text-yellow-300
                      ${isActive ? "text-yellow-300" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Button className="mt-4 w-full bg-white text-blue-600 hover:bg-blue-100">
                Login
              </Button>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
