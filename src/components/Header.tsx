import * as React from 'react';
import {AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Grid} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';


interface Props {
  window?: () => Window;
  handlePageChange: (newString: string) => void;
  currentPage: string;
}

const drawerWidth = 240;
const navItems = ['Home', 'Projects', 'Team', 'Contact'];

export default function Header(props: Props) {
  const { window, handlePageChange, currentPage } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ECO-PLAN
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick = {() => handlePageChange(item)} >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar position="static" style={{backgroundColor: "#ffffff"}} color="primary">
        <Grid container justifyContent="center">
            <Grid item xs={12} xl={10}>
                <Toolbar>
                
                <Typography
                    variant="h4"
                    component="div"
                    color="primary"
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                >
                    ECO-PLAN
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button 
                        key={item} 
                        sx={{ color: 'primary', fontWeight: currentPage === item ? "bold" : "normal" }} 
                        onClick = {() => handlePageChange(item)}
                        >
                        {item}
                    </Button>
                    ))}
                </Box>
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                </Toolbar>
            </Grid>
        </Grid>
        
      </AppBar>
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {drawer}
        </Drawer>
    </Box>
  );
}
