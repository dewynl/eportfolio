import * as React from "react";
import ModulesSection from "./routes/main_page/ModulesSection";
import SmokingHeroSection from "./routes/main_page/SmokingHeroSection";
import HeroSection from "./routes/main_page/HeroSection";
import SkillsSection from "./routes/main_page/SkillsSection";
import AppBar from "./routes/main_page/AppBar";
import AboutSection from "./routes/main_page/AboutSection";
import withRoot from "./withRoot";

function App() {
  return (
    <React.Fragment>
      <AppBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ModulesSection />
      <SmokingHeroSection />
    </React.Fragment>
  );
}

export default withRoot(App);
