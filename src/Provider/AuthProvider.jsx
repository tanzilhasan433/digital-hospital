/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUserUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUserUser,loading,setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
