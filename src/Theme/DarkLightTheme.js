    import { createTheme } from "@mui/material";

    export const lightTheme = createTheme(
        {
            palette : {
                mode: "light",
                primary: {main: '#dfdfdf'},
                secondary: {main:'#ffffffff'}
            }
        },
    );


    export const darkTheme = createTheme(
        {
            palette : {
                mode:'dark',
                primary: {main:'#000000'},
                secondary: {main: '#ffffffff'}
            }
        }
    )