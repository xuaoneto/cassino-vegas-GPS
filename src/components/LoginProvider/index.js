import { createContext, useContext, useState } from "react";

const loginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(null);

  return (
    <loginContext.Provider
      value={{
        setUserLogged,
        userLogged,
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
