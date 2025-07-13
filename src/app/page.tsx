import HeroSection from "../components/sections/HeroSection";
import LogoSection from "../components/sections/LogoSection";
import WhyJoinSection from "../components/sections/WhyJoinSection";
import WhoWeAreSection from "../components/sections/WhoWeAreSection";
import TeamSection from "../components/sections/TeamSection";
import EventsSection from "../components/sections/EventsSection";
import FooterSection from "../components/sections/FooterSection";
import LoadingWrapper from "../components/LoadingWrapper";

export default function Home() {
  return (
    <LoadingWrapper loadingDuration={3500}>
      <HeroSection />
      <LogoSection />
      <WhyJoinSection />
      <WhoWeAreSection />
      <TeamSection />
      <EventsSection />
      <FooterSection />
    </LoadingWrapper>
  );
}
