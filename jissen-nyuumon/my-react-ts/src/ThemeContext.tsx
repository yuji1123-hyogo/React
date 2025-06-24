import { PaletteMode } from '@mui/material';
import { createContext } from 'react';

export type ThemeContextType = {
  mode: PaletteMode,
  toggleMode: () => void
};

export default createContext<ThemeContextType>({
  mode: 'light',
  toggleMode: () => {}
});

// export default createContext<Partial<ThemeContextType>>({});