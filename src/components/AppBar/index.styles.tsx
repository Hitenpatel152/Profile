import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.main,
      },
      selectedButton: {
        '&:after': {
          color: theme.palette.secondary.main,
        },
      },    
      menuButton: {
        '&:focus': {
            outline: 'none',
        },
      },
      drawer: {
        width: 250,
      },
      button: {
        position: 'relative',
        backgroundColor: 'transparent',
        color: `${theme.palette.grey[100]} !important`,
        fontWeight: '600 !important',
        border: 'none',
        '&:focus': {
            outline: 'none',
        },
        '&:hover': {
          color: `${theme.palette.secondary.main} !important`,
          fontWeight: 500,
          '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '2px',
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.secondary.main,
            transition: 'width 0.2s ease, background-color 0.2s ease',
          },
        },
      },
  }));