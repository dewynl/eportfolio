import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "./Toolbar";
import { Link } from "@mui/material";

function AppBar(props) {
  return (
    <MuiAppBar elevation={0} position="fixed" {...props}>
      <Toolbar
        sx={{ justifyContent: "space-between", justifyContent: "center" }}
      >
        <Link underline="none" color="inherit" href="/" sx={{ fontSize: 16 }}>
          {"Dewyn Liriano"}
        </Link>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
