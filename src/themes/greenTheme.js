import { createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#154318',
    },
    secondary: {
      main: '#8f908f',
    },
  },
};

const theme = createTheme(themeOptions)

export default theme