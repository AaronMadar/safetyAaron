import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from "../../assets/logotsahal.png"
import { LightMode, DarkMode } from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from '@/context/theme-context';



export default function Header() {

    const {theme,toggleTheme} = useContext(ThemeContext)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    <Box component='img' src={logo} alt='logo' sx={{width:'58px', height:'58px'}} />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 2, textAlign: "center" }}>
                        Safety Form
                    </Typography>
                    <IconButton color="inherit" onClick={toggleTheme}>
                        {theme.palette.mode === 'light' ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </Toolbar>
            </AppBar>            
        </Box>
    );
}
