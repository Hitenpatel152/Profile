import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.main,
      },
      selectedButton: {
        '&:after': {
          backgroundColor: theme.palette.secondary.main, // Show bottom border when selected
        },
      },    
      drawer: {
        width: 250,
      },
      button: {
        position: 'relative',
        backgroundColor: 'transparent',
        color: theme.palette.common.white,
        border: 'none',
        '&:hover': {
          // Show bottom border on hover
          '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '2px',
            backgroundColor: theme.palette.secondary.main,
            transition: 'width 0.2s ease, background-color 0.2s ease',
          },
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '2px',
          backgroundColor: 'transparent',
          transition: 'width 0.2s ease, background-color 0.2s ease',
        },
      },
  }));