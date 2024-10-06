// src/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define your custom theme options
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#d26c19',
    },
    grey: {
      100: '#575757'
    }
  },
};

// Create a theme instance
const theme = createTheme(themeOptions);

export default theme;
