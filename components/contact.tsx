"use client";

import {
  IconCamera,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
} from "@tabler/icons-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const t = useTranslations("Contact");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
    alert(t("successMessage"));
    setFormState({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-foreground text-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-background/60 mb-2">
              {t("eyebrow")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
              {t("title")}
            </h2>
            <p className="text-background/70 leading-relaxed mb-10 max-w-md">
              {t("subtitle")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center">
                  <IconMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-background/60">{t("emailLabel")}</p>
                  <a
                    href="mailto:hello@csapokristof.com"
                    className="hover:text-primary transition-colors"
                  >
                    hello@csapokristof.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-background/60">{t("phoneLabel")}</p>
                  <a
                    href="tel:+36123456789"
                    className="hover:text-primary transition-colors"
                  >
                    +36 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-background/60">{t("locationLabel")}</p>
                  <p>{t("locationValue")}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center">
                  <IconCamera className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-background/60">{t("instagramLabel")}</p>
                  <a
                    href="https://instagram.com/csapokristof"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @csapokristof
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-background/80">
                    {t("nameLabel")}
                  </Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder={t("namePlaceholder")}
                    required
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-background/80">
                    {t("emailFieldLabel")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    required
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-background/80">
                    {t("phoneFieldLabel")}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    placeholder={t("formPhonePlaceholder")}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-background/80">
                    {t("serviceLabel")}
                  </Label>
                  <Input
                    id="service"
                    value={formState.service}
                    onChange={(e) =>
                      setFormState({ ...formState, service: e.target.value })
                    }
                    placeholder={t("servicePlaceholder")}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-background/80">
                  {t("messageLabel")}
                </Label>
                <Textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder={t("messagePlaceholder")}
                  rows={5}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <IconSend className="w-4 h-4 mr-2" />
                {t("sendButton")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
