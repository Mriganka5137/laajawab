"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DynamicHero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Desktop Image */}
      <div className="relative w-full h-full">
        <Image
          src="/hero/hero-desktop.jpg"
          alt="Hero background"
          width={1456}
          height={816}
          priority
          className="hidden md:block object-cover w-full h-full"
        />
        {/* Mobile Image */}
        <Image
          src="/hero/hero-mobile.jpg"
          alt="Hero background"
          width={816}
          height={1088}
          priority
          className="md:hidden object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-start mt-20 md:mt-40">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-30">
          <div className="flex gap-4 sm:gap-6 md:gap-8 justify-between items-start">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white  w-full"
            >
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-staatliches tracking-wider leading-none">
                BBQ/GRILL RUBS
              </h1>
              <Link href="/products">
                <button
                  className="rounded bg-gradient-to-br from-orange-500 to-red-700 px-2 py-1 sm:px-4 md:px-6 sm:py-1.5 md:py-2 text-[10px] sm:text-sm md:text-base text-zinc-50 
       ring-1 sm:ring-2 ring-red-500/40 ring-offset-1 sm:ring-offset-2 ring-offset-zinc-950 
       transition-all hover:scale-[1.02] hover:ring-transparent 
       active:scale-[0.98] active:ring-red-500/70 
       font-staatliches mt-1 sm:mt-2  "
                >
                  Shop Now
                </button>
              </Link>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-right w-full"
            >
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-staatliches tracking-wider leading-none">
                2X SPICY SEASONINGS
              </h1>
              <div className="flex justify-end">
                <Link href="/seasonings">
                  <button
                    className="rounded bg-gradient-to-br from-orange-500 to-red-700 
         px-2 py-1 sm:px-4 md:px-6 
         sm:py-1.5 md:py-2
         text-[10px] sm:text-sm md:text-base
         text-zinc-50 
         ring-1 sm:ring-2 ring-red-500/40 ring-offset-1 sm:ring-offset-2 ring-offset-zinc-950 
         transition-all hover:scale-[1.02] hover:ring-transparent 
         active:scale-[0.98] active:ring-red-500/70 
         font-staatliches mt-1 sm:mt-2"
                  >
                    Explore
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fire Overlay Video */}
      <div className="absolute inset-0 z-20 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fill"
        >
          <source src="/fire.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
