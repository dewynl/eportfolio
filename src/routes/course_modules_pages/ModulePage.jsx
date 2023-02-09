import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HeroSection from "../../components/HeroSection";
import Typography from "../../components/Typography";

import modules from "./Modules";

const ModulePage = () => {
  const { path } = useParams();
  const selectedModule = modules.find(module => module.path === path);

  return (
    <React.Fragment>
      <HeroSection
        title={selectedModule.title}
        description={selectedModule.description}
        backgroundImage={selectedModule.backgroundImageUrl}
      />
      <Container component="section" sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" marked="left" component="h2">
          Learning Outcomes
        </Typography>
        <List color="inherit" align="center">
          {selectedModule.learningOutcomes.map(learningOutcome =>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary={learningOutcome} />
            </ListItem>
          )}
        </List>
      </Container>
    </React.Fragment>
  );
};

export default ModulePage;
