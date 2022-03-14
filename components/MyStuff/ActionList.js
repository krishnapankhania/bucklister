import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import language from "../../strings/language";
import { GlobalContext } from "../../context/global";

export default function ActionList() {
  const { globalState, dispatchGlobal } = React.useContext(GlobalContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const actions = [
    {
      icon: <PlaylistAddIcon />,
      name: language.newItem,
      callback: () => {
        dispatchGlobal({
          type: "SET_POPUP",
          payload: "add-new-item",
        });
        handleClose();
      },
    },
    {
      icon: <CheckCircleOutlineIcon />,
      name: language.addDoneWish,
      callback: () => {
        dispatchGlobal({
          type: "SET_POPUP",
          payload: "add-new-done-item",
        });
        handleClose();
      },
    },
  ];
  return (
    <SpeedDial
      ariaLabel="SpeedDial tooltip example"
      sx={{ position: "fixed", bottom: 16, right: 16, m: 2 }}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          onClick={action.callback}
        />
      ))}
    </SpeedDial>
  );
}
