// hooks/useMobileMenu.js (or .ts if you're using TypeScript)
import { useState } from 'react';

export function useMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return { isMenuOpen, toggleMenu, closeMenu };
}
