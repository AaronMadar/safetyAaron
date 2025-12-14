import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../search-bar/Search';
import SearchIconWrapper from '../search-bar/SearchIconWrapper';
import StyledInputBase from '../search-bar/StyledInputBase';



export default function SearchBar({ onSearch }: { onSearch?: (term: string) => void }) {

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  }

  return (
    <Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="חפש…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
        />
      </Search>
    </Toolbar>
  );

};

