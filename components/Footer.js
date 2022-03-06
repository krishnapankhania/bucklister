import * as React from "react";
import { Typography, Box } from "@mui/material";
import Link from "@mui/material/Link";
import language from "../strings/language";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        bucklister
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
     

      <Typography variant="h6" align="center" gutterBottom>
        {language.appName}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {language.appBy}
      </Typography>
      <Copyright />
    </Box>
  );
}
