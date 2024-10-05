import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import './App.css'
import { Hello } from './components/hello';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hello />
    </ThemeProvider>
  )
}

export default App
