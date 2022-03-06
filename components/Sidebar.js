import * as React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { GlobalContext } from "../context/global";
import language from "../strings/language";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import firebase from "../firebase/firebase";
import {
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
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
        {!globalState.user && (
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
        )}
        {globalState.user && (
          <ListItem
            button
            onClick={async () => {
              const res = await firebase.signOut();
              if (res) {
                dispatchGlobal({
                  type: "SET_USER",
                  payload: null,
                });
              }
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={language.logout} />
          </ListItem>
        )}
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
        <Box sx={{ bgcolor: "background.paper", p: 6 }}>
          {globalState.user && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Avatar
                alt={globalState.user?.displayName}
                src={globalState.user?.profileImage}
                sx={{ width: 56, height: 56, mb: 2 }}
              />
              <Typography variant="h6" color={"primary"}>
                Hi, {globalState.user?.displayName}
              </Typography>
            </Box>
          )}
          {list()}
        </Box>
      </Drawer>
    </div>
  );
}
