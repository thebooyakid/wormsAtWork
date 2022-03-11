import React from 'react';
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import greenTheme from './themes/greenTheme'
import { ThemeProvider } from '@mui/material/styles'


function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      <NavBar>
        <h1>Worms at Work</h1>
        <Button variant="text">Clicketh</Button>
      </NavBar>
    </ThemeProvider>
  );
}

export default App;
