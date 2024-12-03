import React from "react";
import Image from "next/image";
import { Leaf, Users, Target, ArrowRight, FlaskRoundIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturePoint = ({ icon: Icon, title, description }: any) => (
  <div className="flex gap-4 items-start">
    <div className="p-2 rounded-lg bg-primary/10 mt-1">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <Image
          src="/hero2.jpeg"
          alt="Spices Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Our Story
          </h1>
        </div>
        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="fill-background">
            <path d="M0,120 L1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Origin Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Our Beginning
            </h2>
            <div className="prose prose-invert">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The idea behind Laajawab was conceived when Co-founder Dr. Suman
                Jyoti Deka, Ph.D. IIT Guwahati, discovered a special breed of
                Turmeric grown in Northeast India - the Lakadong Turmeric,
                having the highest Curcumin content of any Turmeric breed in the
                world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We have travelled through entire Northeast and have made tie-ups
                with farmers to identify and supply us the best quality Spices
                and Herbs grown in the region, from Bhoot Jolokia to Sikkim
                Black Cardamom.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/dr-suman.jpg"
              alt="Farmer Partnership"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-12">
            <FeaturePoint
              icon={Leaf}
              title="Northeast Indian Spices"
              description="We use Northeast Indian spices and selected herbs in our dry marinade rubs and seasonings, offering unmatched depth and aroma."
            />
            <FeaturePoint
              icon={Users}
              title="Ethical Sourcing"
              description="We believe in ethical sourcing and building strong relationships with local farmers and farmer organizations."
            />
            <FeaturePoint
              icon={FlaskRoundIcon}
              title="All-Natural Ingredients"
              description="Forget artificial flavours and chemicals! We make our spice blends using only the finest, all-natural ingredients."
            />
          </div>
          <div className="relative">
            <div className="sticky top-8">
              <Image
                src="/image2.jpg"
                alt="Our Products"
                width={600}
                height={800}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-secondary/50 rounded-xl p-12 mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We visualize Laajawab becoming a household name, synonymous with
              innovation, quality, and the captivating flavours of Northeast
              India. We strive to offer an easy and delicious culinary
              experience to every kitchen across India.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            Explore our Online store now!
          </h2>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full"
            asChild
          >
            <Link href="/shop">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
