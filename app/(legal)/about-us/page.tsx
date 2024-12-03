import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  Hourglass,
  Leaf,
  Sparkles,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaMortarPestle } from "react-icons/fa6";

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="bg-secondary/50 p-8 rounded-xl border border-primary/10 hover:border-primary/20 transition-all">
    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const AboutUs = () => {
  const features = [
    {
      icon: Leaf,
      title: "Northeast Indian Spices",
      description:
        "We use unique ingredients like Lakadong turmeric and Bhut Jolokia, adding unmatched depth and aroma to your dishes.",
    },
    {
      icon: Heart,
      title: "Ethical Sourcing",
      description:
        "Strong relationships with local farmers ensure fresh spices and fair prices for their hard work.",
    },
    {
      icon: Sparkles,
      title: "All-Natural Ingredients",
      description:
        "No artificial flavors or chemicals - just pure, natural ingredients for healthier cooking.",
    },
    {
      icon: FaMortarPestle,
      title: "All-in-One Solutions",
      description:
        "Innovative blends designed to eliminate the need for multiple spices or additional ingredients.",
    },
    {
      icon: Hourglass,
      title: "Time-Saving",
      description:
        "Natural tenderizing elements reduce cooking time while locking in moisture and flavor.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image9.jpg"
            alt="Spices Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Laajawab Spices
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              The Online Spices, Rubs & Seasonings Store
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                >
                  Explore Our Store
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Who We Are
            </h2>
            <div className="prose prose-invert">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Laajawab Spices is a food-tech company that aims to
                revolutionise your culinary experience. We believe in the
                transformative power of spices & herbs, which is why we focus on
                sourcing the finest, most exotic ingredients from the heart of
                Northeast India.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Starting our culinary journey in Guwahati, Assam, we've grown
                into a national presence with a thriving online community of
                repeat customers who trust us to elevate their everyday cooking.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/image2.jpg"
              alt="Our Store"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            What Makes Laajawab Unique
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-secondary/80 rounded-xl p-12 text-center">
          <Target className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Our Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            We visualise Laajawab Spices becoming a household name, synonymous
            with innovation, quality, and the captivating flavours of Northeast
            India. We strive to offer an easy and delicious culinary experience
            to every kitchen across India.
          </p>
          <div className="flex justify-center">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8"
              >
                Join Our Flavorful Adventure
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
