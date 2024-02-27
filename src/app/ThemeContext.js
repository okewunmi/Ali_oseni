// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext({
//   isDarkMode: false,
//   toggleTheme: () => {},
// });
// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode((prev) => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// import React, { createContext, useContext, useState, useEffect } from "react";

// const ThemeContext = createContext({
//   isDarkMode: false,
//   toggleTheme: () => {},
// });

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setDarkMode] = useState(
//     () => localStorage.getItem("theme") === "dark" || false // Use localStorage to get initial value
//   );

//   useEffect(() => {
//     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setDarkMode((prev) => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(() => {
    // Get the mode from local storage if available, otherwise default to false (light mode)
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Save the mode to local storage whenever it changes
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
