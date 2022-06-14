import { Box, Grid, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BetModal } from "../BetModal";
import { useLoginContext } from "../../contexts/LoginProvider";
import { SweepstakesRow } from "../SweepstakesRow";
import { useApplicationContext } from "contexts/ApplicationContext/useApplicationContext";
import { ModalWin } from "components/ModalWin";
import { LoseModal } from "components/LoseModal";

export function BetsSection() {
  const { userLogged } = useLoginContext();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bets, setBets } = useApplicationContext();
  const [idBet, setIdBet] = useState();
  const [winner, setWinner] = useState(undefined);

  function handleBet(id) {
    onOpen();
    setIdBet(id);
  }

  function handleCloseBet(idbet) {}

  useEffect(() => {
    if (winner.winned !== undefined) {
      if (winner.winned) {
        handleCloseBet(winner.idbet);
      }
      setTimeout(() => {
        setWinner(undefined);
      }, 5000);
    }
  }, [winner]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/sweepstakes")
      .then((response) => setBets(response.data));
  }, []);

  return (
    <>
      <Box pt="50px" w="100%">
        <Text color="white" fontSize="40" mb="50px">
          Sorteios
        </Text>
        <Grid
          bg="#2F3A50"
          border="1px solid rgba(255,255,255, 0.4)"
          py="30px"
          gridTemplateColumns="repeat(4, 1fr)"
          px="30px"
          color="white"
          gap="25px"
          borderRadius="10px"
        >
          {/* THEAD */}
          {userLogged ? (
            userLogged.admin ? (
              <Text fontSize="18" textAlign="center">
                Números
              </Text>
            ) : null
          ) : null}
          <Text fontSize="18" textAlign="center">
            Data e Hora
          </Text>
          <Text fontSize="18" textAlign="center">
            Prêmio
          </Text>
          <Text fontSize="18" textAlign="center">
            Situação
          </Text>
          {userLogged ? userLogged.admin ? null : <Box /> : null}
          {/* FINAL THEAD */}

          {bets.map((item, index) => (
            <SweepstakesRow key={`${index}`} onClickBet={handleBet} {...item} />
          ))}
        </Grid>
      </Box>
      <BetModal
        isOpen={isOpen}
        onClose={onClose}
        idBet={idBet}
        setWinner={setWinner}
      />
      <ModalWin isOpen={winner.winned} onClose={setWinner} />
      <LoseModal isOpen={winner.winned === false} onClose={setWinner} />
    </>
  );
}
