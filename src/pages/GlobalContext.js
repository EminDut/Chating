// GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState(null);

  const updateProfileImage = (imageURL) => {
    setProfileImage(imageURL);
  };

  return (
    <GlobalContext.Provider value={{ profileImage, updateProfileImage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
