import * as React from 'react';
import {AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Grid} from '@mui/material'
import disesLogo from '../content/photos/logos/dises_logo.png'

import MenuIcon from '@mui/icons-material/Menu';


interface Props {
  window?: () => Window;
  handlePageChange: (newString: string) => void;
  currentPage: string;
}

const drawerWidth = 240;
const navItems = ['Home', 'Pillars', 'Team', 'Data & Tools'];

// Logo-aligned palette
const headerBg = '#ffffff';
const navText = '#3d5c54';
const navTextActive = '#648C80';

export default function Header(props: Props) {
  const { window, handlePageChange, currentPage } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        src={disesLogo}
        alt="ECO-PLAN"
        sx={{
          height: 64,
          width: 'auto',
          maxWidth: '85%',
          my: 2,
          mx: 'auto',
          display: 'block',
        }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: 'center' }} onClick = {() => handlePageChange(item)} >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontWeight: currentPage === item ? 'bold' : 'normal',
                  color: currentPage === item ? navTextActive : navText,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex'}} >
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          backgroundColor: headerBg,
          borderBottom: '1px solid #e2e8e6',
        }}
      >
        <Grid container justifyContent="center">
            <Grid item  xs={12} sm={11} md={11} lg={10} xl={9}>
                <Toolbar
                  sx={{
                    minHeight: { xs: 72, sm: 88 },
                    py: 1.5,
                    gap: 2,
                  }}
                >
                <Box
                    component="img"
                    src={disesLogo}
                    alt="ECO-PLAN"
                    onClick={() => handlePageChange('Home')}
                    sx={{
                      height: { xs: 56, sm: 72 },
                      width: 'auto',
                      maxWidth: { xs: '65%', sm: 420 },
                      cursor: 'pointer',
                      display: 'block',
                      flexShrink: 0,
                      objectFit: 'contain',
                      objectPosition: 'left center',
                    }}
                />
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: 'auto', alignItems: 'center' }}>
                    {navItems.map((item) => (
                    <Button 
                        key={item} 
                        sx={{
                          color: currentPage === item ? navTextActive : navText,
                          fontWeight: currentPage === item ? "bold" : "normal",
                          '&:hover': {
                            backgroundColor: 'rgba(100, 140, 128, 0.08)',
                          },
                        }} 
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
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' }, color: navText, ml: 'auto' }}
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
