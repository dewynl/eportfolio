import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import Button from "../../components/Button";

function AboutSection() {
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
          component="a"
          href="#portfolio"
          sx={{ minWidth: 200 }}
        >
          Know a little bit more
        </Button>
      </Container>
    </Container>
  );
}

export default AboutSection;
