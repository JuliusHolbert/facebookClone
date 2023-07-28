import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

//context provider, wraps entire application so that currentUser can be accessed globally. Checks local storage for a currentUser variable. If there isn't a currentUser variable (ex. first time using application), then the value is set to null.

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  //API returns user information and sets/updates current user.



  const login = async (inputs) => {
    const res = await axios.post("https://react-social-final-e75e2621bc17.herokuapp.com/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };

  //if first visit, writes a variable in local storage. Whenever currentUser value changes, local storage will be set again with new value
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
