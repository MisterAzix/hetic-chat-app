import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fe654f',
        },
        secondary: {
            main: '#fd735d',
        },
        background: {
            default: '#fffce3', 
            
        },
        text: {
            primary: '#001d23', 
            disabled: '#00323d',
        },
    },
    typography: {
        h1: {
            fontSize: '2rem',
            fontWeight: 500,
            color: '#fe654f',
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 400,
            color: 'rgba(0, 0, 0, 0.87)',
        },
        h6: {
            fontSize: '1rem'
        }
    },
});
