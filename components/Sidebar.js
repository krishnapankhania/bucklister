import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import { GlobalContext } from "../context/global";
import language from "../strings/language";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";
export default function Sidebar(props) {
  const { globalState, dispatchGlobal } = React.useContext(GlobalContext);
  const list = () => (
    <Box
      sx={{ width: "auto", p: 1 }}
      role="presentation"
      onClick={() => {
        dispatchGlobal({
          type: "CHANGE_DRAWER_STATE",
          payload: false,
        });
      }}
      onKeyDown={() => {
        dispatchGlobal({
          type: "CHANGE_DRAWER_STATE",
          payload: false,
        });
      }}
    >
      <List>
        <ListItem
          button
          onClick={() => {
            dispatchGlobal({
              type: "OPEN_AUTH",
              payload: true,
            });
          }}
        >
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary={language.login} />
        </ListItem>
        {/* <ListItem button>
          <ListItemIcon>
            <HowToRegIcon />
          </ListItemIcon>
          <ListItemText primary={language.signup} />
        </ListItem> */}
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={language.logout} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={globalState.drawerOpen}
        onClose={() => {
          dispatchGlobal({
            type: "CHANGE_DRAWER_STATE",
            payload: false,
          });
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
}
