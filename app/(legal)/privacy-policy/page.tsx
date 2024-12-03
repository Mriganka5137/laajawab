import React from "react";
import {
  Shield,
  Lock,
  Cookie,
  Mail,
  Users,
  MessagesSquare,
  User2,
  FileWarning,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";

// Info card component for better reusability
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

// Policy section component
const Section = ({ title, content, className = "" }: any) => (
  <section className={`mb-12 ${className}`}>
    <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
    <div className="bg-secondary/50 rounded-xl p-6 border border-primary/10">
      <div className="text-muted-foreground space-y-4">
        {Array.isArray(content) ? (
          content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  </section>
);

const PrivacyPolicy = () => {
  const quickLinks = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Learn how we protect your personal information",
    },
    {
      icon: Cookie,
      title: "Cookie Policy",
      description: "Understanding how we use cookies and tracking",
    },
    {
      icon: Users,
      title: "Information Sharing",
      description: "How we handle your information with third parties",
    },
  ];

  const policyContent = [
    {
      title: "Who We Are",
      content: `This website (the "Site") is owned and operated by Spicenatura Foodtech LLP, Guwahati "laajawabspices.com" ("COMPANY," "we" or "us"). Laajawab Spices, Guwahati understands that your privacy is important to you. We are committed to protecting the privacy of your personally identifiable information as you use this website.`,
    },
    {
      title: "Personal and Non-Personal Information",
      content: [
        "Our Privacy Policy identifies how we treat your personal and non-personal information.",
        "Non personal information is information that cannot identify you. If you visit this website to read information, such as information about one of our services, we may collect certain non-personal information about you from your computer's web browser.",
        "Personal information is information that identifies you as an individual, such as your name, mailing address, e-mail address, telephone number, and fax number. We may collect personal information when you send us an application, conduct a transaction, or submit forms on our website.",
      ],
    },
    {
      title: "Cookie Usage and Technologies",
      content: `We use cookies and related technologies, such as web beacons, to collect information on our website. A cookie is a text file that is placed on your hard disk by a web page server. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you. They help us provide a better experience by saving your preferences and tracking usage patterns.`,
    },
    {
      title: "Third-Party Cookies and Services",
      content: `Third-party vendors may use cookies on our website. These cookies help track anonymous usage and volume statistical information. The data collected is used solely by or on behalf of Laajawabspices and is shared externally only on an anonymous, aggregated basis.`,
    },
    {
      title: "How We Use Personal Information",
      content: `Laajawabspices may use personal information to provide services, respond to requests, process billing, provide support, send relevant information, and improve our products and services. We may combine online information with other sources and may de-identify information for analytical purposes.`,
    },
    {
      title: "Information Sharing",
      content: `We will not share your personal information with unrelated third parties without permission, except as outlined in this policy. We may share information with service providers, for legal compliance, or during corporate transactions like mergers or acquisitions.`,
    },
    {
      title: "Communications",
      content: `We may contact you via email, mail, or telephone about our programs, products, and services. While we implement security measures, we cannot guarantee that communications will be free from unauthorized interception.`,
    },
    {
      title: "Security Measures",
      content: `We implement standard security technologies and procedures to protect your information. Only authorized personnel and vendors have access to personal information, with confidentiality requirements in place.`,
    },
    {
      title: "Public Discussions",
      content: `Please be aware that information posted in public discussions becomes public. We are not responsible for how others may use publicly disclosed information.`,
    },
    {
      title: "Children's Privacy",
      content: `Laajawabspices will not intentionally collect personal information from children under 13. Contact us if you believe we have inadvertently collected such information.`,
    },
    {
      title: "Policy Changes",
      content: `We reserve the right to modify this policy at any time. Material changes will be noted on our homepage. For questions about our privacy practices, contact support@laajawabspices.com.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <div className="relative bg-black  pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image9.jpg"
            alt="Privacy Policy"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <Shield className="w-6 h-6 text-primary" />
              <p className="text-lg">
                Your privacy and security are our top priorities
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-20 relative z-10">
          {quickLinks.map((link, index) => (
            <InfoCard key={index} {...link} />
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {policyContent.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-8 rounded-xl bg-secondary/80 border border-primary/20">
          <div className="flex flex-col items-center text-center">
            <Mail className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Questions about our Privacy Policy?
            </h3>
            <p className="text-muted-foreground mb-4">Contact us at:</p>
            <a
              href="mailto:support@laajawabspices.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              support@laajawabspices.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
