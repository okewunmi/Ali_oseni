import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// components/ThemeContext.js
// import React, { createContext, useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const { theme, setTheme } = useTheme();
//   const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

//   useEffect(() => {
//     setIsDarkMode(theme === "dark");
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//     console.log("toggle");
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeContext, ThemeProvider };
