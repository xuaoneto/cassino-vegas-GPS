import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const loginContext = createContext();

// user model example
// {
//   "admin": false,
//   "nome": "Fulano de tal",
//   "dataNasc": "Tue May 10 2022 19:52:40 GMT-0300",
//   "cpf": "123.123.123-12",
//   "apostasFav": [
//     {
//       "numeros": [24, 32, 12, 21, 5, 76, 19, 19, 67, 49]
//     }
//   ],
//   "auth": {
//     "login": "123money",
//     "senha": "12345678"
//   }
// },
export const LoginProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(null);
  const [userCash, setUserCash] = useState(0);

  useEffect(() => {
    if (userLogged) {
      userLogged["cash"] = userCash;
      axios
        .put(`http://localhost:3500/users/${userLogged.id}`, userLogged)
        .then((response) => {
          if (response.status === 200) {
            setUserLogged({ ...userLogged });
          }
        });
    }
  }, [userCash]);

  return (
    <loginContext.Provider
      value={{
        setUserLogged,
        userLogged,
        setUserCash,
        userCash,
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
