import React from "react";
import AboutSection from "./AboutSection";
import HeroSection from "../../components/HeroSection";
import ModulesSection from "./ModulesSection";
import SkillsSection from "./SkillsSection";
import SmokingHeroSection from "./SmokingHeroSection";

const backgroundImage = process.env.PUBLIC_URL + "/background.jpg";

const MainPage = () => {
  return (
    <React.Fragment>
      <HeroSection
        title="Msc Artificial Intelligence"
        description={
          "This is my e-portfolio based on the work carried out on the Msc Artificial Intelligence."
        }
        backgroundImage={backgroundImage}
      />
      <AboutSection />
      <SkillsSection />
      <ModulesSection />
      <SmokingHeroSection />
    </React.Fragment>
  );
};

export default MainPage;
