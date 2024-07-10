import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0D2d23',
            dark: '#021C25',
            light: '#b596e5'
        },
        // primary: {
        //     main: '#0398CE',
        //     light: '#FFFFFF',
        //     dark: '#242424'
        // },
        // green
        secondary: {
            light: '#e8f5e9',
            main: '#4caf50',
            dark:'#1b5e20'
        },
        
    },
    typography: {
        fontFamily: [
            'Oswald',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '3rem',
            fontWeight: 'normal',
        },
        h2: {
            fontSize: '2.5rem',
        },
        h3: {
            fontSize: '2.25rem', 
        },
        h4: {
            fontSize: '1.75rem', 
        },
        h5: {
            fontSize: '1.5rem', 
            lineHeight: '1.6'
        },
        h6: {
            fontSize: '1.15rem', 
            lineHeight: '1.4'
        },
        
    },
    // breakpoints: {
    //     values: {
    //         xs: 0,
    //         sm: 600,
    //         md: 900,
    //         lg: 1200,
    //         xl: 1700,
    //       },
    // }
});

export default theme