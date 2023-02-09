import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "../../components/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function SmokingHeroSection() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "secondary.light"
      }}
    >
      <Container
        sx={{
          mt: 16,
          mb: 16,
          display: "flex",
          position: "relative",
          justifyContent: "center"
        }}
      >
        <Link
          target="_blank"
          underline="none"
          color="inherit"
          href="mailto:dewyn.liriano@gmail.com"
          sx={{
            border: "4px solid currentColor",
            borderRadius: 0,
            height: "auto",
            py: 2,
            px: 5
          }}
        >
          <Typography variant="h4" component="span">
            Get in touch!
          </Typography>
        </Link>
      </Container>
    </Box>
  );
}

export default SmokingHeroSection;
