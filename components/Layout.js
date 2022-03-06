import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import AuthDialog from "./Auth/AuthDialog";
import { useAuthState } from "react-firebase-hooks/auth";
import { GlobalContext } from "../context/global";
import firebase from "../firebase/firebase";
import { User } from "../firebase/Models";
import firestore from "../firebase/firestore";
import ActionList from "./MyStuff/ActionList";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#512da8",
    },
    secondary: {
      main: "#f06292",
    },
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#ef6c00",
    },
    success: {
      main: "#388e3c",
    },
    info: {
      main: "#4dd0e1",
    },
  },
});

export default function Layout(props) {
  const { globalState, dispatchGlobal } = React.useContext(GlobalContext);

  const [user, loading, error] = useAuthState(firebase.getAuth());

  React.useEffect(() => {
    if (user) {
      firestore.createUser(new User(user).getDet(), user.uid).then((cuser) => {
        dispatchGlobal({
          type: "SET_USER",
          payload: new User(user),
        });
      });
    }
  }, [loading]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{props.children}</main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
      <Sidebar />
      {/* <AuthDialog/> */}
      <AuthDialog />
      <ActionList/>
    </ThemeProvider>
  );
}
