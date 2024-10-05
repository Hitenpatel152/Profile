import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
    title: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(2),
    },
  }));