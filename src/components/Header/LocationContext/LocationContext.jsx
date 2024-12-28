import React, { createContext, useContext, useState } from "react";

// Create the context
const LocationContext = createContext();

// Create a custom hook to use the context
export const useLocationContext = () => useContext(LocationContext);

// Create a provider component
export const LocationProvider = ({ children }) => {
  const [cityName, setCityName] = useState("");

  return (
    <LocationContext.Provider value={{ cityName, setCityName }}>
      {children}
    </LocationContext.Provider>
  );
};
