import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { GlobalContext } from "../../context/global";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

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

export default function BaseDialog(props) {
  const { globalState, dispatchGlobal } = React.useContext(GlobalContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
    dispatchGlobal({
      type: "SET_POPUP",
      payload: null,
    });
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={globalState.popup === props.id}
        onClose={handleClose}
        disableEscapeKeyDown={true}
        aria-labelledby="base-dialog"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {props.title}
        </BootstrapDialogTitle>
        <DialogContent className="popup-form">{props.children}</DialogContent>
      </Dialog>
    </div>
  );
}
