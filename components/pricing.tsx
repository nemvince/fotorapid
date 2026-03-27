"use client";

import {
  IconCamera,
  IconCheck,
  IconConfetti,
  IconHome,
  IconUsers,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const packagesMeta = [
  { id: "couple", icon: IconUsers, price: "25,000 Ft", popular: true },
  { id: "portrait", icon: IconCamera, price: "20,000 Ft", popular: false },
  { id: "event", icon: IconConfetti, price: "60,000 Ft", popular: false },
  { id: "interior", icon: IconHome, price: "40,000 Ft", popular: false },
] as const;

const addOnsMeta = [
  { id: "addOn1" },
  { id: "addOn2" },
] as const;

export function Pricing() {
  const t = useTranslations("Pricing");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-12 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            {t("eyebrow")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Included in all packages */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <h3 className="font-serif text-xl md:text-2xl font-light text-center mb-6">
              {t("includedTitle")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {(["included1", "included2"] as const).map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <IconCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packagesMeta.map((pkg) => {
            const Icon = pkg.icon;
            const featureKeys = (["feature1", "feature2", "feature3", "feature4", "feature5"] as const).filter(
              (k) => {
                try { return t.has(`packages.${pkg.id}.${k}`) } catch { return false; }
              }
            );
            return (
              <Card
                key={pkg.id}
                className={`relative flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 overflow-visible mt-3 ${pkg.popular ? "border-primary shadow-lg ring-1 ring-primary" : "border-border"}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                      {t("mostPopular")}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl font-normal">
                    {t(`packages.${pkg.id}.name`)}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-light">{pkg.price}</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t(`packages.${pkg.id}.priceNote`)}
                    </p>
                  </div>
                  <CardDescription className="mt-4 text-sm">
                    {t(`packages.${pkg.id}.description`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  {/* Deliverables badge */}
                  <div className="mb-4 text-center">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                      {t(`packages.${pkg.id}.deliverables`)}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {featureKeys.map((key) => (
                      <li key={key} className="flex items-start gap-3">
                        <IconCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">
                          {t(`packages.${pkg.id}.${key}`)}
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
                    {t("inquireNow")}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="max-w-xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-center mb-8">
            {t("addOnsTitle")}
          </h3>
          <div className="grid gap-4">
            {addOnsMeta.map((addon) => (
              <div
                key={addon.id}
                className="flex items-center justify-between p-4 rounded-lg bg-background border border-border"
              >
                <span className="text-sm">{t(`${addon.id}Name`)}</span>
                <span className="text-sm font-medium text-primary">
                  {t(`${addon.id}Price`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            {t("customCta")}
          </p>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            {t("customButton")}
          </Button>
        </div>
      </div>
    </section>
  );
}

