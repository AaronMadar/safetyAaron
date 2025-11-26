import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import DbContext from '@/context/db-context';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  direction: 'rtl', // important
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,          // icône à droite pour RTL
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,  // RTL → padding à droite
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function SearchBar() {

  const {dbLocal} = useContext(DbContext);
    


    const handleChange = (e) => {
        const value = e.target.value;

        const filtered = dbLocal.filter(x => x.map.includes(value));

        
    };

  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static" sx={{ borderRadius: "10px", width:'20%' }}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="חפש…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
    //   </AppBar>
    // </Box>
  );
}
