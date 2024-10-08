import * as React from 'react';
import {AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Grid} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';


interface Props {
  window?: () => Window;
  handlePageChange: (newString: string) => void;
  currentPage: string;
}

const drawerWidth = 240;
const navItems = ['Home', 'Pillars', 'Team', 'Data & Tools'];

export default function Header(props: Props) {
  const { window, handlePageChange, currentPage } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DISES | ECOPLAN
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
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
    <Box sx={{ display: 'flex'}} >
      <AppBar position="static" style={{backgroundColor: '#333'}} color="primary">
        <Grid container justifyContent="center">
            <Grid item  xs={12} sm={11} md={11} lg={10} xl={9}>
                <Toolbar>
                
                <Typography
                    variant="h5"
                    color="#fff"
                    sx={{ flexGrow: 1, display: { xs: 'block' } }}
                >
                    DISES | ECOPLAN
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button 
                        key={item} 
                        sx={{ color: '#fff', fontWeight: currentPage === item ? "bold" : "normal" }} 
                        onClick = {() => handlePageChange(item)}
                        >
                          <Typography variant="h6">
                          {item}
                          </Typography>
                        
                    </Button>
                    ))}
                </Box>
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' }, color: '#fff' }}
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
