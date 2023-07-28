import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

//context provider, wraps entire application so that DarkModeContext can be accessed globally. Checks local storage for a darkMode variable. If there isn't a darkMode variable (ex. first time using application), then the value is set to false. 
export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  //if first visit, writes a variable in local storage. Whenever darkMode value changes, local storage will be set again with new value
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
