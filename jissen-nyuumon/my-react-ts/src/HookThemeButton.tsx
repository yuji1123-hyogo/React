import { useContext } from 'react';
import { Button } from '@mui/material';
import ThemeContext, { ThemeContextType } from './ThemeContext';

export default function HookThemeButton() {
  const { mode, toggleMode } = useContext<ThemeContextType>(ThemeContext);
  // const { mode, toggleMode } = useContext<Partial<ThemeContextType>>(ThemeContext);
  return (
    <Button variant="contained" onClick={toggleMode}>
      Mode {mode}
    </Button>
  );
}