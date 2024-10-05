import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Box } from '@mui/material';
import { useStyles } from './index.styles';

const pages = ['Home', 'About', 'Projects', 'Contact'];

const AppBarComponent: React.FC = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState<string>('Home');

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleButtonClick = (page: string) => {
    setSelectedPage(page);
    setDrawerOpen(false);
  };

  const drawerList = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={classes.drawer}
    >
      {pages.map((page) => (
        <Button
          key={page}
          color="inherit"
          fullWidth
          onClick={() => handleButtonClick(page)}
          className={`${classes.button} ${selectedPage === page ? classes.selectedButton : ''}`}
        >
          {page}
        </Button>
      ))}
    </Box>
  );

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }} // Hide on larger screens
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                color="inherit"
                onClick={() => handleButtonClick(page)}
                className={`${classes.button} ${selectedPage === page ? classes.selectedButton : ''}`}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </>
  );
};

export default AppBarComponent;
