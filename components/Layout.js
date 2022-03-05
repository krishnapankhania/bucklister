import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
// import AuthDialog from "./Auth/Auth";
import CustomizedDialogs from "./Auth/AuthD";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#512da8',
    },
    secondary: {
      main: '#f06292',
    },
    error: {
      main: '#b71c1c',
    },
    warning: {
      main: '#ef6c00',
    },
    success: {
      main: '#388e3c',
    },
    info: {
      main: '#4dd0e1',
    },
  },
});

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{props.children}</main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
      <Sidebar/>
      {/* <AuthDialog/> */}
      <CustomizedDialogs/>
    </ThemeProvider>
  );
}
