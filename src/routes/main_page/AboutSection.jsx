import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const jobExperiences = [
  {
    title: "Software Engineer",
    company: "EPAM Systems",
    employmentTime: "05/22 - 12/22",
    tasks: [
      "Develop a highly accessible React component library to use in a couple of other projects for a client.",
      "Create unit tests for the React components developed.",
      "Create set of requirements for the front end components APIs."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Resonance Companies",
    employmentTime: "03/19 - 05/22",
    tasks: [
      "Developed a React app for the brands to interact with the platform.",
      "Developed a GraphQL API to consume from the different data sources in the platform.",
      "Automated and orchestrated flows to drive time to costumer down.",
      "Manage small teams of engineers to plan and implement projects."
    ]
  },
  {
    title: "Software Engineer",
    company: "Avathar Tech",
    employmentTime: "11/18 - 03/19",
    tasks: [
      "Enabled user's payment of household utilities like gas, electricity, and water.",
      "Established connection with telecommunication companies to enable users payment of phone and internet services.",
      "Stored users information that made easy for them to make this actions faster after the first time."
    ]
  },
  {
    title: "Web Developer",
    company: "PUCMM",
    employmentTime: "08/18 - 12/18",
    tasks: [
      "Upgraded Point-of-Sale UX for a smoother experience while using tablets and phones.",
      "Migrated web application to a new Bootstrap based template they acquired.",
      "Enabled application to take orders offline to avoid delaying costumers when wifi wasn’t strong enough. These orders were then synced back with our server as soon as internet connection was recovered."
    ]
  }
];

function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  const handleClose = () => {
    setShowMore(false);
  };

  const handleOpen = () => {
    setShowMore(true);
  };

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        About me
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 4 } }}
      >
        My name is <b>Dewyn Liriano</b>, from the Dominican Republic. I am a
        highly passionate, dependable, self-reliant, and goal-driven person. My
        keen ability is that I'm a fast learner and "learn by doing" kind of
        person. I have experience managing small teams and seeing projects from
        their planning to their implementation.
        <br />
        <br />
        Currently, I'm enrolled in a MSc in Artificial Intelligence in the
        University of Essex Online.
      </Typography>

      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          width: "auto",
          justifyContent: "center"
        }}
      >
        <Button
          color="secondary"
          variant="contained"
          size="large"
          sx={{ minWidth: 200 }}
          onClick={handleOpen}
        >
          Know a little bit more
        </Button>
      </Container>

      <Modal
        open={showMore}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h6">
            Work Experience
          </Typography>

          {jobExperiences.map(experience =>
            <React.Fragment>
              <Typography
                id="modal-modal-description"
                variant="h6"
                component="h6"
                sx={{ mt: 2 }}
              >
                <b>
                  {experience.title}
                </b>
              </Typography>
              <Typography id="modal-modal-description">
                {experience.company}
              </Typography>
              <Typography variant="p" component="h5">
                {experience.employmentTime}
              </Typography>

              <Typography
                variant="p"
                component="p"
                sx={{ mt: 1 }}
                color="secondary"
              >
                <i>Tasks/Achievements</i>
              </Typography>
              <List color="inherit" align="center">
                {experience.tasks.map(task =>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon color="secondary" fontSize="8px" />
                    </ListItemIcon>
                    <ListItemText primary={task} />
                  </ListItem>
                )}
              </List>
            </React.Fragment>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

export default AboutSection;
