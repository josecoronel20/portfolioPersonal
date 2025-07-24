import HeroSection from "./homeComponents/HeroSection";
import AboutMeSection from "./homeComponents/AboutMeSection";
import TecnicStackSection from "./homeComponents/TecnicStackSection";
import MainProjectsSection from "./homeComponents/mainProjectsSection/MainProjectsSection";
import FocusSection from "./homeComponents/FocusSection";
import BlogSection from "./homeComponents/BlogSection";
import ContactSection from "./homeComponents/ContactSection";

export default function Portfolio(): JSX.Element {

  return (
    <div className="min-h-screen text-white ">
      {/* Hero Section */}
      <HeroSection />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-tl from-slate-950 via-cyan-950 to-slate-950 ">
        {/* About Me Section */}
        <AboutMeSection />

        {/* Tecnic Stack */}
        <TecnicStackSection />
      </section>

      {/* Main Projects */}
      <MainProjectsSection />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-tl from-slate-950 via-cyan-950 to-slate-950 ">
        {/* Focus */}
        <FocusSection />

        {/* Blog */}
        <BlogSection />
      </section>

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
