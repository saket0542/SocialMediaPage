import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Icon,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem
} from "@mui/material";
import saket from './saket.jpg'
import React from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import { useState } from "react";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
export const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SearchBar = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)({

    display:"flex",
    alignItems:"center",
    gap:"15px"
  });
  const [display,setDisplay]=useState(false)
  function ClickHandler()
  {
    setDisplay(!display)
  }
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Xconnect
        </Typography>
        <ConnectWithoutContactIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <SearchBar>
          <InputBase placeholder="Search..."></InputBase>
        </SearchBar>
        <Icons>
        <Icons sx={{display:{xs:"none",sm:"block"}}}>
        <Badge badgeContent={4} color="warning">
          <ChatIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="warning">
          <NotificationsIcon color="action" />
        </Badge>
        </Icons>
        <Avatar alt="Saket Saraogi" src={saket} onClick={ClickHandler}/>
        </Icons>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={display}
        onClose={(e)=>setDisplay(false)}
        anchorOrigin={{
          vertical: 'Bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  );
};
