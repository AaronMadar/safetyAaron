import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LightMode, DarkMode } from '@mui/icons-material';
import {lightTheme,darkTheme} from '../../Theme/DarkLightTheme'

export default function Header({ children, theme, toggleTheme }: any) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ marginBottom: '2em' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 2, textAlign: "center" }}>
                        Safety Form
                    </Typography>
                    <IconButton color="inherit" onClick={toggleTheme}>
                        {theme === lightTheme ? <LightMode /> : <DarkMode/>}
                    </IconButton>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
}
