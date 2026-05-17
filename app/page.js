import HeroSlider from "@/components/shared/HeroSlider";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import FeaturedProperties from "@/components/shared/FeaturedProperties";
import FeaturedCars from "@/components/shared/FeaturedCars";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <About />

      {/* Featured section*/}
      <FeaturedCars />
      <FeaturedProperties />
      
      {/* contact section*/ }
      <Contact />
    </main>
  );
}
