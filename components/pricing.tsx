"use client";

import {
  IconCamera,
  IconCheck,
  IconConfetti,
  IconHome,
  IconUsers,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const packages = [
  {
    name: "Couple & Family",
    icon: IconUsers,
    price: "25,000 Ft",
    priceNote: "per session",
    description:
      "Ideal for couples, families, engagement sessions, or milestone celebrations.",
    deliverables: "25-40 edited images",
    features: [
      "1-2 hour session at a mutually agreed location and time",
      "Collaborative creative direction if you have specific ideas",
      "Professional guidance with mood boards and concepts if needed",
      "Complete curation, editing, and retouching of the full session",
    ],
    popular: true,
  },
  {
    name: "Portrait Session",
    icon: IconCamera,
    price: "20,000 Ft",
    priceNote: "per session",
    description:
      "Individual portraits, professional headshots, or small-scale product photography.",
    deliverables: "15-25 edited images",
    features: [
      "1-2 hour session at a mutually agreed location and time",
      "Relaxed atmosphere for natural, authentic expressions",
      "Tailored styling to match your vision",
      "Full curation, editing, and retouching of all captured images",
    ],
    popular: false,
  },
  {
    name: "Event Coverage",
    icon: IconConfetti,
    price: "60,000 Ft",
    priceNote: "half-day / 100,000 Ft full-day",
    description:
      "Concerts, performances, weddings, ceremonies, and special occasions.",
    deliverables: "80-150 edited images",
    features: [
      "Documentation of key moments and distinguished guests",
      "Comprehensive coverage throughout the entire event",
      "Creative storytelling through candid and composed shots",
      "Full curation, editing, and retouching of all deliverables",
    ],
    popular: false,
  },
  {
    name: "Interior & Real Estate",
    icon: IconHome,
    price: "40,000 Ft",
    priceNote: "half-day / 75,000 Ft full-day",
    description:
      "Property listings, commercial spaces, offices, and architectural photography.",
    deliverables: "20-50 edited images",
    features: [
      "Multiple angles with professional lighting and composition",
      "Color-accurate, publication-ready final images",
      "Custom pricing available based on project scope",
    ],
    popular: false,
  },
];

const includedInAll = [
  "Professional skin retouching and subtle body refinement across all delivered images",
  "Carefully curated selection with precise color grading and correction",
  "Final images delivered within 7 business days",
];

const addOns = [
  { name: "Travel outside Budapest", price: "100 Ft / km" },
  { name: "Express delivery within 24 hours", price: "10,000 - 30,000 Ft" },
];

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-12 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Investment
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Photography Packages
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Select the package that best suits your needs. Custom packages
            available upon request.
          </p>
        </div>

        {/* Included in all packages */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <h3 className="font-serif text-xl md:text-2xl font-light text-center mb-6">
              Included with Every Package
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {includedInAll.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <IconCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={pkg.name}
                className={`relative flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 overflow-visible ${pkg.popular ? "border-primary shadow-lg ring-1 ring-primary" : "border-border"}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl font-normal">
                    {pkg.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-light">{pkg.price}</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {pkg.priceNote}
                    </p>
                  </div>
                  <CardDescription className="mt-4 text-sm">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  {/* Deliverables badge */}
                  <div className="mb-4 text-center">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                      {pkg.deliverables}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <IconCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={scrollToContact}
                  >
                    Inquire Now
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="max-w-xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-center mb-8">
            Additional Services
          </h3>
          <div className="grid gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between p-4 rounded-lg bg-background border border-border"
              >
                <span className="text-sm">{addon.name}</span>
                <span className="text-sm font-medium text-primary">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Have specific requirements? Let us create a tailored package
            perfectly suited to your project.
          </p>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
