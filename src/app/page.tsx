import HeroSection from "./homeComponents/HeroSection";
import AboutMeSection from "./homeComponents/AboutMeSection";
import TecnicStackSection from "./homeComponents/TecnicStackSection";
import MainProjectsSection from "./homeComponents/mainProjectsSection/MainProjectsSection";
import FocusSection from "./homeComponents/FocusSection";
import BlogSection from "./homeComponents/BlogSection";
import ContactSection from "./homeComponents/ContactSection";
import FadeInSection from "@/components/reutilizable/FadeInSection";

export default function Portfolio(): JSX.Element {
  return (
    <div className="min-h-screen text-white ">
      {/* Hero Section */}
      <HeroSection />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-color-to-t ">
        {/* About Me Section */}
        <FadeInSection direction="right">
          <AboutMeSection />
        </FadeInSection>

        {/* Tecnic Stack */}
        <FadeInSection direction="left">
          <TecnicStackSection />
        </FadeInSection>
      </section>

      {/* Main Projects */}

      <MainProjectsSection />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-color-to-t ">
        {/* Focus */}
        <FadeInSection direction="right">
          <FocusSection />
        </FadeInSection>

        {/* Blog */}
        <FadeInSection direction="left">
          <BlogSection />
        </FadeInSection>
      </section>

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
