import { createTheme } from '@mui/material/styles';

const fonts = "'Lato'";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0D2d23',
            dark: '#021C25',
            light: '#fff'
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
    // components: {
    //     MuiTypography: {
    //         defaultProps: {
    //             fontFamily: fonts
    //         }
    //     }
    // },
    typography: {
        fontFamily: fonts,
        h1: {
            fontFamily: '"Montserrat"',
            fontSize: '3rem',
            fontWeight: 600,
        },
        h2: {
            fontFamily: '"Montserrat"',
            fontSize: '2.5rem',
            fontWeight: 500
        },
        h3: {
            fontFamily: '"Montserrat"',
            fontSize: '2.25rem', 
            fontWeight: 500
        },
        h4: {
            fontFamily: '"Lato"',
            fontSize: '1.75rem', 
        },
        h5: {
            fontFamily: '"Lato"',
            fontSize: '1.15rem', 
            lineHeight: '1.4'
        },
        h6: {
            fontFamily: '"Lato"',
            fontSize: '1rem', 
            lineHeight: '1.3'
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