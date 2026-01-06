"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const title = "Build Modern Web Experiences";

export default function Banner() {
  const controls = useAnimationControls();

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        await controls.start("visible");
        await new Promise((r) => setTimeout(r, 3000)); // pause
        await controls.start("hidden");
        await new Promise((r) => setTimeout(r, 500));
      }
    };

    loopAnimation();
  }, [controls]);

  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-white">
          {/* Animated Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight flex flex-wrap"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12, // slower stagger
                },
              },
              hidden: {
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              },
            }}
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 80,
                    rotateX: 90,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  },
                }}
                transition={{
                  duration: 0.9, // slower letter animation
                  ease: "easeOut",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 1 }}
            className="mt-6 text-lg text-gray-200"
          >
            We create fast, scalable and beautiful applications using Next.js,
            TypeScript and modern UI libraries.
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
