import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fe654f',
        },
        secondary: {
            main: '#fd735d',
        },
        background: {
            default: '#f4f6f8', 
            paper: '#ffffff', 
        },
        text: {
            primary: '#333333', 
            secondary: '#555555', 
            disabled: '#cccccc',
        },
    },
});
