import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-4/5 relative rounded-lg overflow-hidden">
              <Image
                src="/images/intro/IMG_8164.jpg"
                alt="Csapo Kristof - Professional Photographer"
                fill
                className="object-cover object-right"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
              The Artist Behind the Lens
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in professional photography,
                I&apos;ve dedicated my craft to capturing the essence of every
                moment. My approach combines technical precision with artistic
                vision, creating images that transcend the ordinary.
              </p>
              <p>
                Whether it&apos;s the intimate emotions of a wedding day, the
                dynamic energy of a corporate event, or the subtle beauty of a
                portrait session, I bring the same level of passion and
                attention to detail to every project.
              </p>
              <p>
                Based in Europe, I work with clients worldwide, bringing stories
                to life through carefully composed frames and thoughtful
                post-processing that enhances without overwhelming.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <p className="text-3xl font-serif">99+</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-serif">500.000+</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Projects Completed
                </p>
              </div>
              <div>
                <p className="text-3xl font-serif">101%</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
