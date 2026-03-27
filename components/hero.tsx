"use client";

import { useTheme } from "@wrksz/themes/client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { resolvedTheme } = useTheme();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Desktop Hero Image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={
            resolvedTheme === "light"
              ? "/images/intro/csapo.png"
              : "/images/intro/csapo2.png"
          }
          alt="Csapo Kristof Photography"
          fill
          sizes="(max-width: 1920px) 100vw, 50vw"
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Mobile Hero Image */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={
            resolvedTheme === "light"
              ? "/images/intro/csapo-m.png"
              : "/images/intro/csapo2-m.png"
          }
          alt="Csapo Kristof Photography"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-5 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl -mt-48 md:mt-0  p-6 md:p-0 rounded-lg md:rounded-none">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Professional Photography
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 text-balance">
            Csapo Kristof
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Capturing timeless moments with artistic vision. Every frame tells a
            story, every photo preserves a memory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToContact}
            >
              Book a Session
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 hover:bg-foreground/5"
              onClick={scrollToWork}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
