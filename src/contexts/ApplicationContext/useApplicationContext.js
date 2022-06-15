import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const applicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [bets, setBets] = useState([]);
  const [bet, setBet] = useState();

  async function updateBet() {
    const response = await axios.put(
      `http://localhost:3500/sweepstakes/${bet.id}`,
      bet
    );
    if (response.status === 200) {
      axios
        .get("http://localhost:3500/sweepstakes/")
        .then((response) => setBets(response.data));
    }
  }

  useEffect(() => {
    if (bet && !bet.state) {
      updateBet().then(() => setBet(undefined));
    }
  }, [bet]);

  return (
    <applicationContext.Provider
      value={{
        bets,
        setBets,
        bet,
        setBet,
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
