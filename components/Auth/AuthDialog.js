import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import language from "../../strings/language";
import { Google } from "@mui/icons-material";
import { GlobalContext } from "../../context/global";
import { Box } from "@mui/material";
import firebase from "../../firebase/firebase";
import firestore from "../../firebase/firestore";
import { User } from "../../firebase/Models";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

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
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={globalState.authOpen}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {language.login}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box sx={{ bgcolor: "background.paper", p: 6 }}>
            <Button
              color="info"
              onClick={async () => {
                const user = await firebase.signInWithGoogle();
                const cuser = await firestore.createUser(new User(user).getDet(), user.uid);
                dispatchGlobal({
                  type: "SET_USER",
                  payload: new User(user),
                });
                handleClose();
              }}
              startIcon={<Google />}
              variant="contained"
            >
              {language.signinWithGoogle}
            </Button>
          </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
