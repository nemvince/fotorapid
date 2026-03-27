"use client";

import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Category data with multiple images per category
const categories = [
  {
    id: "portrait",
    name: "Portrait",
    description: "Capturing personality and emotion",
    coverImage: "/images/samples/portrait/portre2.jpg",
    images: [
      { src: "/images/samples/portrait/portre2.jpg", alt: "Portrait 2" },
      { src: "/images/samples/portrait/portre3.jpg", alt: "Portrait 3" },
      { src: "/images/samples/portrait/portre4.jpg", alt: "Portrait 4" },
      { src: "/images/samples/portrait/portre5.jpg", alt: "Portrait 5" },
      { src: "/images/samples/portrait/portre6.jpg", alt: "Portrait 6" },
      { src: "/images/samples/portrait/portre1.jpg", alt: "Portrait 1" },
      { src: "/images/samples/portrait/portre7.jpg", alt: "Portrait 7" },
      { src: "/images/samples/portrait/portre8.jpg", alt: "Portrait 8" },
      { src: "/images/samples/portrait/portre9.jpg", alt: "Portrait 9" },
      { src: "/images/samples/portrait/portre10.jpg", alt: "Portrait 10" },
      { src: "/images/samples/portrait/portre11.jpg", alt: "Portrait 11" },
    ],
  },
  {
    id: "duo",
    name: "Duo",
    description: "Intimate moments between two people",
    coverImage: "/images/samples/duo/paros2.jpg",
    images: [
      { src: "/images/samples/duo/paros2.jpg", alt: "Duo 2" },
      { src: "/images/samples/duo/paros1.jpg", alt: "Duo 1" },
      { src: "/images/samples/duo/paros3.jpg", alt: "Duo 3" },
    ],
  },
  {
    id: "events",
    name: "Events",
    description: "Corporate and private gatherings",
    coverImage: "/images/samples/event/rendezveny4.jpg",
    images: [
      { src: "/images/samples/event/rendezveny4.jpg", alt: "Event 4" },
      { src: "/images/samples/event/rendezveny1.jpg", alt: "Event 1" },
      { src: "/images/samples/event/rendezveny2.jpg", alt: "Event 2" },
      { src: "/images/samples/event/rendezveny3.jpg", alt: "Event 3" },
      { src: "/images/samples/event/rendezveny5.jpg", alt: "Event 5" },
      { src: "/images/samples/event/rendezveny6.jpg", alt: "Event 6" },
    ],
  },
  {
    id: "interior",
    name: "Interior",
    description: "Showcasing architectural and interior design",
    coverImage: "/images/samples/interior/enterior2.jpg",
    images: [
      { src: "/images/samples/interior/enterior2.jpg", alt: "Interior 2" },
      { src: "/images/samples/interior/enterior1.jpg", alt: "Interior 1" },
      { src: "/images/samples/interior/enterior3.jpg", alt: "Interior 3" },
    ],
  },
  {
    id: "misc",
    name: "Miscellaneous",
    description: "A variety of subjects and styles",
    coverImage: "/images/samples/misc/egyeb1.jpg",
    images: [
      { src: "/images/samples/misc/egyeb1.jpg", alt: "Misc 1" },
      { src: "/images/samples/misc/egyeb2.jpg", alt: "Misc 2" },
      { src: "/images/samples/misc/egyeb3.jpg", alt: "Misc 3" },
      { src: "/images/samples/misc/egyeb4.jpg", alt: "Misc 4" },
      { src: "/images/samples/misc/egyeb5.jpg", alt: "Misc 5" },
      { src: "/images/samples/misc/egyeb6.jpg", alt: "Misc 6" },
    ],
  },
];

export function GalleryCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(
    new Set(),
  );
  const [sectionInView, setSectionInView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Observe section entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stagger category reveals when section comes into view
  useEffect(() => {
    if (sectionInView) {
      categories.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCategories((prev) => new Set([...prev, index]));
        }, index * 150);
      });
    }
  }, [sectionInView]);

  // Parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const openCarousel = (category: (typeof categories)[0]) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  const closeCarousel = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCategory(null);
      setIsAnimating(false);
    }, 300);
  }, []);

  const nextImage = useCallback(() => {
    if (!selectedCategory) return;
    setCurrentImageIndex((prev) =>
      prev === selectedCategory.images.length - 1 ? 0 : prev + 1,
    );
  }, [selectedCategory]);

  const prevImage = useCallback(() => {
    if (!selectedCategory) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedCategory.images.length - 1 : prev - 1,
    );
  }, [selectedCategory]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCategory) return;
      if (e.key === "Escape") {
        closeCarousel();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCategory, closeCarousel, nextImage, prevImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCategory]);

  return (
    <>
      <section
        ref={sectionRef}
        id="work"
        className="py-12 md:py-24 bg-secondary/30 overflow-hidden relative"
      >
        {/* Decorative background elements */}
        <div
          className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div
          className="absolute right-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          {/* Header with animated line */}
          <div className="text-center mb-16">
            <p
              className={`text-sm tracking-[0.3em] uppercase text-primary mb-3 transition-all duration-700 ${
                sectionInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Portfolio
            </p>
            <h2
              className={`font-serif text-4xl md:text-6xl font-light transition-all duration-700 delay-100 ${
                sectionInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Selected Work
            </h2>
            {/* Animated underline */}
            <div className="flex justify-center">
              <div
                className={`h-px bg-primary mt-6 transition-all duration-1000 delay-300 ${
                  sectionInView ? "w-24 opacity-100" : "w-0 opacity-0"
                }`}
              />
            </div>
            <p
              className={`mt-6 text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-200 ${
                sectionInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Explore my work across different photography disciplines. Click on
              any category to view the full collection.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <button
                type="button"
                key={category.id}
                onClick={() => openCarousel(category)}
                className={`group relative aspect-4/5 rounded-2xl overflow-hidden cursor-pointer text-left transition-all duration-700 ${
                  visibleCategories.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={category.coverImage}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-foreground/50 via-foreground/20 to-transparent transition-opacity duration-500" />

                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 text-xs tracking-wider bg-background/90 backdrop-blur-sm rounded-full text-foreground font-medium">
                    {category.images.length} Photos
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-background mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-background/70 text-sm md:text-base mb-4 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-2 text-background opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <span className="text-sm font-medium">View Collection</span>
                    <IconChevronRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory && (
        <div
          className={`fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
          role="dialog"
          aria-modal="true"
          onClick={closeCarousel}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeCarousel();
            }
          }}
        >
          {/* Close button */}
          <Button
            onClick={closeCarousel}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors"
            aria-label="Close carousel"
            variant="ghost"
            size="icon"
          >
            <IconX className="w-6 h-6" />
          </Button>

          {/* Category title */}
          <div className="absolute top-6 left-6 z-10">
            <p className="text-background/60 text-sm tracking-wider uppercase mb-1">
              {selectedCategory.name}
            </p>
            <p className="text-background text-sm">
              {currentImageIndex + 1} / {selectedCategory.images.length}
            </p>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 z-10 rounded-full bg-background/10 hover:bg-background/20 text-background h-12 w-12"
            aria-label="Previous image"
          >
            <IconChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 z-10 rounded-full bg-background/10 hover:bg-background/20 text-background h-12 w-12"
            aria-label="Next image"
          >
            <IconChevronRight className="w-6 h-6" />
          </Button>

          {/* Main image */}
          <div
            role="img"
            className="relative w-full max-w-5xl mx-4 md:mx-8 aspect-3/4 md:aspect-4/3"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                nextImage();
              }
            }}
          >
            <Image
              src={selectedCategory.images[currentImageIndex].src}
              alt={selectedCategory.images[currentImageIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Thumbnail strip */}
          <div
            role="listbox"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-xl bg-background/10 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                nextImage();
              } else if (e.key === "ArrowLeft") {
                prevImage();
              }
            }}
          >
            {selectedCategory.images.map((image, index) => (
              <Button
                key={image.src}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex
                    ? "ring-2 ring-primary scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
