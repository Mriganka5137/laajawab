import {
  FileWarning,
  Scale,
  ScrollText,
  ShieldCheck,
  Store,
} from "lucide-react";
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

const TermsOfService = () => {
  const quickLinks = [
    {
      icon: Scale,
      title: "Legal Agreement",
      description: "Understanding your rights and obligations",
    },
    {
      icon: Store,
      title: "Online Commerce",
      description: "Rules regarding purchases and transactions",
    },
    {
      icon: ShieldCheck,
      title: "User Conduct",
      description: "Guidelines for using our services",
    },
  ];

  const termsContent = [
    {
      title: "General",
      content: `This website (the "Site") is owned and operated by Laajawabspices, Guwahati "laajawabspices.com" ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from COMPANY.`,
    },
    {
      title: "Our Limited License to You",
      content: `This Site and all the materials available on the Site are the property of us and/or our affiliates or licensors, and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal noncommercial use. You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.`,
    },
    {
      title: "Your License to Us",
      content: `By posting or submitting any material to us via the Site, you are representing: (i) that you are the owner of the material, or are making your posting or submission with the express consent of the owner of the material; and (ii) that you are thirteen years of age or older. You are granting us a royalty-free, perpetual, irrevocable, non-exclusive, unrestricted, worldwide license to use, copy, modify, transmit, sell, exploit, create derivative works from, distribute, and/or publicly perform or display such material.`,
    },
    {
      title: "Interactive Features",
      content: [
        "This Site may include features like bulletin boards, web logs, chat rooms, and email services. You are responsible for what you post.",
        "We reserve the right to remove content and users at our discretion.",
        "Our communities are valuable spaces and we expect all members to add value.",
      ],
    },
    {
      title: "Online Commerce",
      content: `Certain sections of the Site may allow you to purchase products and services. We are not responsible for the quality, accuracy, timeliness, reliability or any other aspect of these products and services. When making purchases, you agree to provide current, complete, and accurate purchase and account information.`,
    },
    {
      title: "Limitation of Liability",
      content: `UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE, OUR SUBSIDIARY AND PARENT COMPANIES OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, THE SITE, INCLUDING OUR MESSAGING, BLOGS, COMMENTS OF OTHERS, BOOKS, EMAILS, PRODUCTS, OR SERVICES, OR THIRD-PARTY MATERIALS, PRODUCTS, OR SERVICES MADE AVAILABLE THROUGH THE SITE OR BY US IN ANY WAY, EVEN IF WE ARE ADVISED BEFOREHAND OF THE POSSIBILITY OF SUCH DAMAGES. (BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN CATEGORIES OF DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IN SUCH STATES, OUR LIABILITY AND THE LIABILITY OF OUR SUBSIDIARY AND PARENT COMPANIES OR AFFILIATES IS LIMITED TO THE FULLEST EXTENT PERMITTED BY SUCH STATE LAW.) YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT WE ARE NOT LIABLE FOR ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF ANY USER. IF YOU ARE DISSATISFIED WITH THE SITE, ANY MATERIALS, PRODUCTS, OR SERVICES ON THE SITE, OR WITH ANY OF THE SITE’S TERMS AND CONDITIONS, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE AND THE PRODUCTS, SERVICES AND/OR MATERIALS COMPANY IS NOT AN INVESTMENT ADVISORY SERVICE, IS NOT AN INVESTMENT ADVISER, AND DOES NOT PROVIDE PERSONALIZED FINANCIAL ADVICE OR ACT AS A FINANCIAL ADVISOR.
      WE EXIST FOR EDUCATIONAL PURPOSES ONLY, AND THE MATERIALS AND INFORMATION CONTAINED HEREIN AND IN OUR PRODUCTS AND SERVICES ARE FOR GENERAL INFORMATIONAL PURPOSES ONLY. NONE OF THE INFORMATION PROVIDED BY US IS INTENDED AS INVESTMENT, TAX, ACCOUNTING OR LEGAL ADVICE, AS AN OFFER OR SOLICITATION OF AN OFFER TO BUY OR SELL, OR AS AN ENDORSEMENT, RECOMMENDATION OR SPONSORSHIP OF ANY COMPANY, SECURITY, OR FUND. OUR INFORMATION SHOULD NOT BE RELIED UPON FOR PURPOSES OF TRANSACTING IN SECURITIES OR OTHER INVESTMENTS.
      WE DO NOT OFFER OR PROVIDE TAX, LEGAL OR INVESTMENT ADVICE AND YOU ARE RESPONSIBLE FOR CONSULTING TAX, LEGAL, OR FINANCIAL PROFESSIONALS BEFORE ACTING ON ANY INFORMATION PROVIDED BY US. THIS SITE IS CONTINUALLY UNDER DEVELOPMENT AND THE COMPANY MAKES NO WARRANTY OF ANY KIND, IMPLIED OR EXPRESS, AS TO ITS ACCURACY, COMPLETENESS, OR APPROPRIATENESS FOR ANY PURPOSE.
      YOU acknowledge and agree that no representation has been made by COMPANY OR ITS AFFILIATES and relied upon as to the future income, expenses, sales volume, or potential profitability that may be derived from the participation in THIS PROGRAM.`,
    },

    {
      title: "Termination",
      content:
        "We may cancel or terminate your right to use the Site or any part of the Site at any time without notice. In the event of cancellation or termination, you are no longer authorized to access the part of the Site affected by such cancellation or termination. The restrictions imposed on you with respect to material downloaded from the Site, and the disclaimers and limitations of liabilities set forth in these Terms of Service, shall survive.",
    },
    {
      title: "Refund Policy",
      content:
        "Your purchase of a product or service or ticket to an event may or may not provide any refund. Each specific product, service, event, or course will specify its own refund policy.",
    },
    {
      title: "Disclaimer",
      content:
        "Although it is highly unlikely, This policy may be changed at any time at our discretion. If we should update this policy, we will post the updates to this page on our Website.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-black pt-10">
        <div className="absolute inset-0">
          <Image
            src="/image9.jpg"
            alt="Terms of Service"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <ScrollText className="w-6 h-6 text-primary" />
              <p className="text-lg">
                Please read these terms carefully before using our services
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
          {termsContent.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-8 rounded-xl bg-secondary/80 border border-primary/20">
          <div className="flex flex-col items-center text-center">
            <FileWarning className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Questions about our Terms?
            </h3>
            <p className="text-muted-foreground mb-4">
              For any questions or concerns about our Terms of Service, please
              contact us at:
            </p>
            <a
              href="mailto:info@laajawabspices.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              info@laajawabspices.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
