import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Logo } from "./logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 border-t border-background/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo width={40} height={40} />
            <span className="font-serif text-lg">Csapo Kristof</span>
            <a
              href="https://instagram.com/csapokristof"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <IconBrandInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/csapokristof"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="Facebook"
            >
              <IconBrandFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/csapokristof"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-background/60">
            © {currentYear} Csapo Kristof Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
