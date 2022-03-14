import * as React from "react";
import logo from "../assets/site/logo.png";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { GlobalContext } from "../context/global";

export default function Header() {
  const { globalState, dispatchGlobal } = React.useContext(GlobalContext);

  return (
    <AppBar position="relative" className="b-header">
      <Toolbar className="b-toolbar">
        <Typography variant="h6" noWrap component="div" className="b-logo">
          <img src={logo.src} />
        </Typography>
        <IconButton
          className="b-menu"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            dispatchGlobal({
              type: "CHANGE_DRAWER_STATE",
              payload: !globalState.drawerOpen,
            });
          }}
        >
          <MenuIcon />
        </IconButton>{" "}
      </Toolbar>
    </AppBar>
  );
}
