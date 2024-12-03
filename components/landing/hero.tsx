"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const images = ["/hero/hero-desktop.jpg"];

export default function DynamicHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Images with Crossfade */}
      {/* {images.map((src, index) => (
        <motion.div
          key={src}
          initial={false}
          animate={{
            opacity: index === currentImageIndex ? 1 : 0,
            scale: index === currentImageIndex ? 1.1 : 1,
          }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 10, ease: "linear" },
          }}
          className="absolute inset-0"
          style={{
            display:
              Math.abs(currentImageIndex - index) <= 1 ||
              (currentImageIndex === 0 && index === images.length - 1)
                ? "block"
                : "none",
          }}
        >
          <Image
            src={src}
            alt="Hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      ))} */}
      <Image
        src="/hero/hero-desktop.jpg"
        alt="Hero background"
        fill
        priority
        className="object-contain  max-lg:object-right max-md:hidden "
      />
      {/* <Image
        src="/hero/hero-desktop.jpg"
        alt="Hero background"
        fill
        priority
        className="object-contain max-md:hidden "
        sizes="100vw"
      /> */}
      <Image
        src="/hero/hero-mobile.jpg"
        alt="Hero background"
        fill
        priority
        className="object-contain object-center  md:hidden"
        sizes="100vw"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />

      {/* Fire Overlay Video */}
      {/* <div className="absolute inset-0 z-20 opacity-50">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fill"
        >
          <source src="/fire.mp4" type="video/mp4" />
        </video>
      </div> */}

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={100}
            className="mx-auto"
          />
        </motion.div> */}

        {/* Hero Text */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Discover the Art of Spice Blending
        </motion.h1> */}

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
        >
          Where tradition meets innovation in every blend
        </motion.p> */}

        {/* CTA Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link href="/products">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Explore Our Collection
            </Button>
          </Link>
          <Link href="/about">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Learn Our Story
            </Button>
          </Link>
        </motion.div> */}
      </div>

      {/* Image Navigation Dots */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}
