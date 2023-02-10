import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Outlet } from "react-router-dom";
import image from './test.png'
const drawerWidth = 240;

export default function ClippedDrawer() {

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <img src={image} style={{width: '170px', height: '30px'}} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar /> 
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Accordion style={{boxShadow: 'none'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color = 'primary' fontSize='100%' >TERMOS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ListItem disablePadding>
                    <ListItemIcon  style={{minWidth: '2%'}}>
                      <InboxIcon />
                    </ListItemIcon>
                    <Button variant="text" href='/relatorio' size="small">PRENCHIMENTO FACIAL</Button>
                </ListItem>
              </AccordionDetails>
            </Accordion>
          </List>
        </Box>
      </Drawer>
        <Outlet />
    </Box>
  );
}