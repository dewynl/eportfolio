import React from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import modules from "./Modules";

const ModulePage = () => {
  const { path } = useParams();
  const selectedModule = modules.find(module => module.path === path);

  return (
    <HeroSection
      title={selectedModule.title}
      description={selectedModule.description}
      backgroundImage={selectedModule.backgroundImageUrl}
    />
  );
};

export default ModulePage;
