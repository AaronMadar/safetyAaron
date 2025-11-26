import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from "@/assets/logotsahal.png"
import { LightMode, DarkMode } from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from '@/context/theme-context';
import SearchBar from '../component-dashboard/search-bar';

export default function Header({ title, showSearch }: any) {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <AppBar position="static">
            <Toolbar 
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    
                }}
            >

                {/* Logo + Search */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                        component='img'
                        src={logo}
                        alt='logo'
                        sx={{ width: 50, height: 50 }}
                    />
                    {showSearch && <SearchBar />}
                </Box>

                {/* Titre centré */}
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }, // responsive
                    }}
                >
                    {title}
                </Typography>

                {/* Bouton thème */}
                <IconButton color="inherit" onClick={toggleTheme}>
                    {theme.palette.mode === 'light' ? <LightMode /> : <DarkMode />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
