import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider'; // Adjust the import path as necessary
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(next);
  };

  const icon =
    theme === 'light' ? (
      <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
    ) : theme === 'dark' ? (
      <Moon className="h-[1.2rem] w-[1.2rem] text-white" />
    ) : (
      <Laptop className="h-[1.2rem] w-[1.2rem] text-gray-400" />
    );

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      title={`Current: ${theme}`}
      className="relative h-10 w-10 rounded-full border border-border/40 bg-background/60 backdrop-blur-sm hover:bg-accent/80 transition-all duration-300 hover:scale-110"
    >
      {icon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
