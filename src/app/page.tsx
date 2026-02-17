import CTASection from "./components/CTASection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SocialProofSection from "./components/SocialProofSection";
import StatsBar from "./components/StatsBar";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
}
