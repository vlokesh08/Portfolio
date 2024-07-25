import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mx-3">
      <Button
        variant="outline"
        size="icon"
        className="border-none hover:bg-transparent bg-transparent"
        onClick={toggleTheme}
      >
        <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
        <Moon className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} color="white" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}