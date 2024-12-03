"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="relative bg-background text-foreground py-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-primary">
                Laajawab Spices
              </h3>
              <div className="h-1 w-20 bg-primary rounded-full" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                The idea of Laajawab Spices was conceived when Co-founder Dr.
                Suman Jyoti Deka, Ph.D. IIT Guwahati, was researching about
                Curcumin (a potent anti-cancer agent). He stumbled upon a
                special breed of Turmeric grown in Northeast only that is
                Lakadong Turmeric having the highest Curcumin content of any
                Turmeric breed in the whole world.
              </p>
            </motion.div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-secondary rounded-full hover:bg-primary transition-colors duration-300"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-secondary rounded-full hover:bg-primary transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-secondary rounded-full hover:bg-primary transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Important Links
              </h3>
              <div className="h-1 w-20 bg-primary rounded-full mb-6" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { text: "Home", href: "/" },
                { text: "Shop", href: "/shop" },
                { text: "Rubs", href: "/rubs" },
                { text: "Combo Packs", href: "/combo-packs" },
                { text: "Northeast Special", href: "/northeast-special" },
                { text: "Our Story", href: "/our-story" },
                { text: "Blog", href: "/blog" },
                { text: "Contact Us", href: "/contact-us" },
                { text: "Cart", href: "/cart" },
              ].map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 transform inline-block  ease-in-out"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Contact Us
              </h3>
              <div className="h-1 w-20 bg-primary rounded-full mb-6" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <MapPin className="w-6 h-6 flex-shrink-0 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                <p className="text-muted-foreground text-sm">
                  Spicenatura Foodtech Private Limited, Naharani Path, Dispur,
                  Guwahati, Assam, India, 781006.
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone className="w-6 h-6 flex-shrink-0 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                <p className="text-muted-foreground">+91 8732093563</p>
              </div>
              <div className="flex items-center gap-4 group">
                <Mail className="w-6 h-6 flex-shrink-0 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                <p className="text-muted-foreground">info@laajawabspices.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm">
              Copyright 2024 - All rights are reserved by Laajawab Spices
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {[
                { text: "Blog", href: "/blog" },
                { text: "Privacy Policy", href: "/privacy-policy" },
                { text: "Terms of service", href: "/terms-of-service" },
                { text: "Shipping Policy", href: "/shipping-policy" },
                { text: "Our Story", href: "/our-story" },
                { text: "About Us", href: "/about-us" },
                { text: "Contact Us", href: "/contact-us" },
                { text: "Return", href: "/return-policy" },
              ].map((link, index) => (
                <React.Fragment key={link.text}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                  {index < 7 && <span className="text-border">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
