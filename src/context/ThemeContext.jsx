import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('cyber'); // 'cyber', 'obsidian', 'light'

  useEffect(() => {
    document.documentElement.classList.remove('theme-cyber', 'theme-obsidian', 'theme-light');
    if (theme === 'obsidian') {
      document.documentElement.classList.add('theme-obsidian');
    } else if (theme === 'light') {
      document.documentElement.classList.add('theme-light');
    } else {
      document.documentElement.classList.add('theme-cyber');
    }
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
