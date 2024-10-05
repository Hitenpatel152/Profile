// src/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define your custom theme options
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
};

// Create a theme instance
const theme = createTheme(themeOptions);

export default theme;
