import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import CodeIcon from "@mui/icons-material/Code";
import ArchitectureIcon from "@mui/icons-material/Architecture";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5
};

function SkillsSection() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src={process.env.PUBLIC_URL + "/productCurvyLines.png"}
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <ImportantDevicesIcon color="primary" fontSize="large" />
              <Typography variant="h6" sx={{ my: 5 }}>
                Web Development
              </Typography>
              <Typography variant="h5">
                Javascript, Typescript, React, GraphQL
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <CodeIcon color="primary" fontSize="large" />

              <Typography variant="h6" sx={{ my: 5 }}>
                Backend Development
              </Typography>
              <Typography variant="h5">
                Python, Flask, OpenCV, Airtable, MongoDB
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <ArchitectureIcon color="primary" fontSize="large" />
              <Typography variant="h6" sx={{ my: 5 }}>
                Infrastructure
              </Typography>
              <Typography variant="h5">
                Kafka, Argo Workflows, Docker, Serverless
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SkillsSection;
