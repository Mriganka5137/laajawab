import React from "react";
import Image from "next/image";
import {
  RotateCcw,
  RefreshCw,
  XCircle,
  Clock,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";

const PolicySection = ({ title, icon: Icon, children }: any) => (
  <div className="bg-secondary/50 rounded-xl p-8 border border-primary/10">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-lg bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
    </div>
    <div className="space-y-4 text-muted-foreground">{children}</div>
  </div>
);

const ListItem = ({ children }: any) => (
  <li className="flex items-start gap-2 leading-relaxed">
    <span className="text-primary mt-1.5">•</span>
    <span>{children}</span>
  </li>
);

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-black pt-20">
        <div className="absolute inset-0">
          <Image
            src="/image9.jpg"
            alt="Return Policy"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Return & Refund Policy
            </h1>
            <p className="text-lg text-white/80">
              Understanding our policies for returns, refunds, and cancellations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Return Policy Section */}
          <PolicySection title="Return Policy" icon={RotateCcw}>
            <p>
              Laajawabspices wishes its customers the best shopping experience
              to enhance their lives. As opened or used products cannot be
              reused or resold, the items cannot be returned to the seller once
              delivered.
            </p>
            <p>
              In extreme cases of damaged product delivery (leakage /
              broken/missing items) due to transit, a refund/exchange can be
              initiated after thorough verification of the refund policy.
            </p>
            <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <p className="text-destructive">
                <strong>Important Note:</strong> Our products contain active
                natural extracts and ingredients and damages due to neglect,
                improper usage, or wrong application will not be covered under
                this Policy. This also does not cover repercussions arising out
                of specific sensitivities towards a product/ingredient and you
                are advised to do a patch test as cautioned in every product.
              </p>
            </div>
          </PolicySection>

          {/* Refund Policy Section */}
          <PolicySection title="Refund Policy" icon={RefreshCw}>
            <ul className="space-y-3">
              <ListItem>
                Laajawabspices is not responsible for any damage after the
                delivery of the products.
              </ListItem>
              <ListItem>
                An unboxing video is mandatory with the original packaging in
                case of claims on missing items / leakage / breakage or damage /
                incorrect product.
              </ListItem>
              <ListItem>
                Contact customer care with necessary images and videos related
                to your claim with subject line "Refund For [Order Number]".
              </ListItem>
              <ListItem>
                Returns accepted only for damaged items/wrong items delivered
                with unboxing video proof.
              </ListItem>
              <ListItem>
                Contact customer care within 3 days if order is marked delivered
                but not received.
              </ListItem>
              <ListItem>Delivery charges are non-refundable.</ListItem>
              <ListItem>
                COD refunds processed to bank account within 4-7 working days.
              </ListItem>
              <ListItem>
                Refund claims must be made within 24 hours of delivery.
              </ListItem>
              <ListItem>
                Refund processing may take up to 15 days from acceptance.
              </ListItem>
              <ListItem>
                Transaction details and screenshots provided upon refund
                initiation.
              </ListItem>
            </ul>
          </PolicySection>

          {/* Cancellation Policy Section */}
          <PolicySection title="Cancellation Policy" icon={XCircle}>
            <div className="space-y-4">
              <p>
                Cancellation of orders can be processed before their dispatch
                from the warehouses only.
              </p>

              <div className="bg-secondary rounded-lg p-4 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  Cancellation Charges:
                </h4>
                <ul className="space-y-2">
                  <ListItem>
                    2.5% gateway charge for order cancellation
                  </ListItem>
                  <ListItem>
                    ₹75 deduction for shipped orders returned to seller (prepaid
                    orders)
                  </ListItem>
                  <ListItem>
                    Refunds credited to original payment account within 15 days
                  </ListItem>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-destructive mt-4">
                <AlertCircle className="w-5 h-5" />
                <p>
                  Orders cannot be cancelled once shipped from the warehouses.
                </p>
              </div>
            </div>
          </PolicySection>
        </div>

        {/* Contact Support */}
        <div className="mt-16 p-8 rounded-xl bg-secondary/80 border border-primary/20 text-center">
          <ShieldAlert className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Need Help with Returns?
          </h3>
          <p className="text-muted-foreground mb-4">
            Our customer service team is here to help you with the return
            process.
          </p>
          <a
            href="mailto:support@laajawabspices.com"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
