import { createContext, useContext, useState } from "react";

const applicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [bets, setBets] = useState([]);

  return (
    <applicationContext.Provider
      value={{
        bets,
        setBets,
      }}
    >
      {children}
    </applicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  const context = useContext(applicationContext);
  if (context === undefined)
    throw new Error(
      "useApplicationContext must be used within a applicationContext"
    );
  return context;
};
