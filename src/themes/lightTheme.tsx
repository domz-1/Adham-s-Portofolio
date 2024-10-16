import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',  // Pure white for primary color
    },
    secondary: {
      main: '#e0e0e0',  // Light gray for secondary color
    },
    warning: {
      main: '#bdbdbd',  // Medium gray for warning color
    },
    text: {
      primary: '#212121',  // Dark gray for main text
      secondary: '#757575', // Medium gray for subtext
    },
    background: {
      default: '#ffffff',  // Default background color (white)
      paper: '#f5f5f5',    // Paper background color (light gray)
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#212121', // Dark gray for header text
    },
    h2:{
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#212121', // Dark gray for subheader text
    },
    body1: {
      fontSize: '1rem',
      color: '#757575', // Medium gray for body text
    },
    h4:{
      fontWeight: 700,
      fontSize: '1.25rem',
      color: '#757575',  // Light gray for h4 text
    },
    h5:{
      fontWeight: 700,
      fontSize: '1rem',
      color: '#000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff', // Dark gray button text
          backgroundColor: '#000', // White button background
          '&:hover': {
            backgroundColor: '#ccc',
            color:"#000" 
          },
          borderRadius:'12px'
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',  // Card background (white)
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',  // Paper background (light gray)
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiStack:{
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    }, 
    MuiAppBar:{
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // White app bar background
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default lightTheme;