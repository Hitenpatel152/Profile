import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import './App.css'
import { CssBaseline } from '@mui/material';
import AppBarComponent from './components/AppBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent />
    </ThemeProvider>
  )
}

export default App
