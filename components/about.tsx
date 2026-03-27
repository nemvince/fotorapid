import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function About() {
  const t = await getTranslations("About");
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
              {t("eyebrow")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
              {t("title")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("bio1")}</p>
              <p>{t("bio2")}</p>
              <p>{t("bio3")}</p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <p className="text-3xl font-serif">{t("stat1Value")}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("stat1Label")}
                </p>
              </div>
              <div>
                <p className="text-3xl font-serif">{t("stat2Value")}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("stat2Label")}
                </p>
              </div>
              <div>
                <p className="text-3xl font-serif">{t("stat3Value")}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("stat3Label")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
