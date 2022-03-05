import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import language from "../../strings/language";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase";
import { GlobalContext } from "../../context/global";


export default function AuthDialog() {
  const { globalState, dispatchGlobal } = React.useContext(GlobalContext);

  const handleClose = () => {
    dispatchGlobal({
      type: "OPEN_AUTH",
      payload: false,
    });
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={globalState.authOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} >
          {language.login}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <StyledFirebaseAuth
            uiConfig={{
              // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
              signInSuccessUrl: "/",
              // GitHub as the only included Auth Provider.
              // You could add and configure more here!
              signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
            }}
            firebaseAuth={firebase.auth()}
          />
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
