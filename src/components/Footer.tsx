"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold">MyApp</h2>
            <p className="mt-4 text-sm text-blue-100 leading-relaxed">
              Building modern, fast and scalable web experiences with
              Next.js, TypeScript and beautiful UI.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-blue-100 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {["Blog", "Docs", "Privacy Policy", "Terms"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-blue-100 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@myapp.com
              </li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="hover:text-white transition">
                  <Github size={18} />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Facebook size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-blue-600 pt-6 text-center text-sm text-blue-100">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
