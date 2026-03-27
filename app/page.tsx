import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GalleryCarousel } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import SplashScreen from "@/components/splash-screen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Hero />
      <GalleryCarousel />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
