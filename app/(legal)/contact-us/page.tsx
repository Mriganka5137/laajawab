import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactCard = ({ icon: Icon, title, content }: any) => (
  <div className="bg-secondary/50 p-8 rounded-xl border border-primary/10 hover:border-primary/20 transition-all h-full">
    <div className="flex flex-col items-center text-center">
      <div className="p-3 rounded-full bg-primary/10 mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{content}</p>
    </div>
  </div>
);

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-black pt-10">
        <div className="absolute inset-0">
          <Image
            src="/hero2.jpeg"
            alt="Contact Us"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 -mt-20 relative z-10">
          <ContactCard
            icon={Phone}
            title="Call us at"
            content="+91 8732093563"
          />
          <ContactCard
            icon={Mail}
            title="E-mail us at"
            content="info@laajawabspices.com"
          />
          <ContactCard
            icon={MapPin}
            title="Our office"
            content="Spicenatura Foodtech Private Limited, Naharani Path, Dispur, Guwahati, Assam, India, 781006."
          />
        </div>

        {/* Map Section */}
        <div className="bg-secondary/50 rounded-xl p-6 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.1868564232086!2d91.7863887339541!3d26.137627132626594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59539cdfeb1f%3A0xac1561fc2f09efdb!2sSpiceNatura%20Foodtech!5e1!3m2!1sen!2sin!4v1731676371967!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
