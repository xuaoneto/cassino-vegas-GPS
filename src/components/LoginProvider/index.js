import { createContext, useContext, useState } from "react";

const loginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <loginContext.Provider
      value={{
        setIsLogged,
        isLogged,
      }}
    >
      {children}
    </loginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(loginContext);
  if (context === undefined)
    throw new Error("useLoginContext must be used within a loginContext");
  return context;
};
