  
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  // darkMode: false,
  toggleDarkMode: ()=>{}
});
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};


