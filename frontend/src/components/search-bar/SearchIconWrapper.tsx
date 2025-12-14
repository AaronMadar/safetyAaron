import { styled } from '@mui/material/styles';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0, // icône à droite pour RTL
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default SearchIconWrapper;
