import { Clock, MapPin, PackageCheck, Phone, Truck } from "lucide-react";
import Image from "next/image";

const InfoCard = ({ icon: Icon, title, description }: any) => (
  <div className="p-6 rounded-xl bg-secondary border border-primary/20 hover:border-primary/40 transition-colors">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-lg bg-primary/10">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const DeliveryInfoCard = ({ title, content }: any) => (
  <div className="bg-secondary/50 p-6 rounded-xl border border-primary/10">
    <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground">{content}</p>
  </div>
);

const ShippingPolicy = () => {
  const deliveryInfo = [
    {
      icon: MapPin,
      title: "Shipping Location",
      description:
        "All orders are shipped from our warehouse in Guwahati, Assam – India",
    },
    {
      icon: Clock,
      title: "Delivery Times",
      description: "India Wide – 1 to 8 business days",
    },
    {
      icon: PackageCheck,
      title: "Delivery Hours",
      description: "Deliveries between 9 AM – 8 PM, Monday – Sunday",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-black pt-10">
        <div className="absolute inset-0">
          <Image
            src="/image9.jpg"
            alt="Shipping Policy"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Shipping Policy
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <Truck className="w-6 h-6 text-primary" />
              <p className="text-lg">
                Everything you need to know about our delivery service
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-20 relative z-10">
          {deliveryInfo.map((info, index) => (
            <InfoCard key={index} {...info} />
          ))}
        </div>

        {/* Detailed Information */}
        <div className="grid gap-8 mb-16">
          <DeliveryInfoCard
            title="Delivery Signature Requirements"
            content="Goods will need to be signed for upon delivery. If you cannot be there to sign for your delivery, please suggest an alternative such as a family member, colleague, or neighbor. Please note that Laajawabspices takes no responsibility for goods signed by an alternative person."
          />

          <DeliveryInfoCard
            title="Damage and Shortage Claims"
            content="All claims for shortages or damages must be reported to customer service on the day of delivery. Laajawabspices is not responsible for damage after delivery."
          />

          <DeliveryInfoCard
            title="Shipping and Handling Rates"
            content="Shipping and handling rates may vary based on product, packaging, size, volume, type, and other considerations. The shipping and handling charges are given at the time of check out and consumers will know about this before making payments."
          />
        </div>

        {/* Customer Support Section */}
        <div className="mt-16 p-8 rounded-xl bg-secondary/80 border border-primary/20">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-primary/10 mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Need Help with Your Delivery?
            </h3>
            <p className="text-muted-foreground max-w-2xl mb-6">
              Our customer service team is ready to assist you with any
              shipping-related questions or concerns. Contact us on the day of
              delivery for any issues with your order.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a
                href="mailto:support@laajawabspices.com"
                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
              <span className="text-muted-foreground">
                Business Hours: 9 AM - 8 PM (Monday - Sunday)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
