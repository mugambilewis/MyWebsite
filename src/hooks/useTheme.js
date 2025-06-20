// src/hooks/useTheme.js
import { useContext } from 'react';
import ThemeProvider from '../components/ThemeProvider';

export const useTheme = () => {
  const context = useContext(ThemeProvider);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
