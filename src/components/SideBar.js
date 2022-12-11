import React from 'react'
import {Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText, Switch} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Storefront from '@mui/icons-material/Storefront';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const SideBar = ({mode,setMode}) => {
  return (
   <Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"},flexWrap:"wrap"}}>
   <Box position="fixed" flexShrink="2">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#pages'>
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href='#marketplace'>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding>
            <ListItemButton component="a" href='#Friends'>
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#CommunityTab'>
              <ListItemIcon>
                <Diversity1Icon/>
              </ListItemIcon>
              <ListItemText primary="Community" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Settings'>
              <ListItemIcon>
                <SettingsRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkModeIcon/>
              </ListItemIcon>
              <Switch onChange={(e)=>setMode(mode==="light"?"dark":"light")}/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
    </Box>
  )
}
