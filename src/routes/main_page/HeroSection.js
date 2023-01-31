import * as React from "react";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage = process.env.PUBLIC_URL + "/background.jpg";

export default function HeroSection() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center"
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Msc Artificial Intelligence
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 4 } }}
      >
        This is my e-portfolio based on the work carried out on the Msc
        Artificial Intelligence.
      </Typography>
    </ProductHeroLayout>
  );
}
