import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  backgroundLink: string | null;
  color: string | null;
  updateBackgroundLink: (value: string) => void;
}

const themeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [backgroundLink, setBackgroundLink] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);

  const updateBackgroundLink = (value: string) => {
    setBackgroundLink(value);
  };

  return (
    <themeContext.Provider
      value={{ backgroundLink, color, updateBackgroundLink }}
    >
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
