"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, Leaf, ShieldCheck, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Categories Showcase
const CategoriesShowcase = ({ categories }: { categories: any[] }) => {
  categories = categories.slice(0, 3);
  return (
    <section className="py-20  bg-cover bg-center relative ">
      <div className="absolute inset-0 bg-black/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Explore Our Categories</h2>
          <p className="text-muted-foreground">
            Find the perfect blend for your cooking style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={category.image?.src || "/api/placeholder/400/400"}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <Button variant="outline" size="sm">
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Product Process Section
const ProcessSection = () => {
  const steps = [
    {
      icon: Flame,
      title: "Choose Your Flavor",
      description: "Select from our range of authentic spice blends",
    },
    {
      icon: ChefHat,
      title: "Quick Marination",
      description: "Just 10-30 minutes for perfect flavoring",
    },
    {
      icon: Leaf,
      title: "Cook & Enjoy",
      description: "Create restaurant-quality dishes at home",
    },
  ];

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0">
        <Image
          src="/wooden-background-3.jpg"
          alt="Wooden Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Simple steps to culinary excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 right-0 w-1/2 h-0.5 bg-primary/50 transform translate-x-1/2" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "100% Natural",
      description: "No artificial ingredients or preservatives",
    },
    {
      icon: Leaf,
      title: "Premium Quality",
      description: "Sourced from the finest spice farms",
    },
    {
      icon: ChefHat,
      title: "Expert Blending",
      description: "Crafted by experienced spice masters",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Laajawab</h2>
          <p className="text-muted-foreground">
            Experience the difference in every blend
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-primary rounded-full mb-6">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
const NewsletterSection = () => {
  return (
    <section className="py-20 bg-[url('/image9.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Join Our Culinary Community
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive recipes, cooking tips, and exclusive offers
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md bg-background border border-input"
            />
            <Button>Subscribe</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export {
  CategoriesShowcase,
  ProcessSection,
  BenefitsSection,
  NewsletterSection,
};
