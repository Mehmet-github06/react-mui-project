import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import OtherHousesSharpIcon from "@mui/icons-material/OtherHousesSharp";
import ContactPageSharpIcon from "@mui/icons-material/ContactPageSharp";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import PersonAddSharpIcon from "@mui/icons-material/PersonAddSharp";
import SettingsSuggestSharpIcon from "@mui/icons-material/SettingsSuggestSharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import Switch from "@mui/material/Switch";
import NightlightSharpIcon from "@mui/icons-material/NightlightSharp";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <OtherHousesSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <ContactPageSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <GroupsSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <StoreSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <PersonAddSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <SettingsSuggestSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBoxSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                {mode === "light" ? (
                  <NightlightSharpIcon />
                ) : (
                  <WbSunnyRoundedIcon />
                )}
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
