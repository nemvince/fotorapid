"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLocale = () => {
    const next = locale === "en" ? "hu" : "en";
    document.cookie = `locale=${next}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggleLocale} className="text-sm font-medium px-2">
      {locale === "en" ? "HU" : "EN"}
    </Button>
  );
}
