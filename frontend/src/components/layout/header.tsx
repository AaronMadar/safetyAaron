import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from "@/assets/logo-tsahal.png"
import { LightMode, DarkMode } from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import SearchBar from '../dashboard/search-bar';

/**
 * COMMENT TYPER LES PROPS D'UN COMPOSANT :
 * 
 * 1. On crée une interface qui décrit les props
 * 2. On l'utilise dans les paramètres de la fonction
 * 3. TypeScript vérifie automatiquement que les props passées correspondent
 */
interface HeaderProps {
  title: string;
  showSearch: boolean;
  onSearch?: (term: string) => void ; // fonction optionnelle pour la recherche
}

export default function Header({ title, showSearch , onSearch }: HeaderProps) {

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
                    {showSearch && (
                        <Box sx={{ display: { xs: 'none', sm: 'block' } } } >
                            <SearchBar onSearch={onSearch} />
                        </Box>
                    )}
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
