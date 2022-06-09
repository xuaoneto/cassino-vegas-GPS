import {
  Box,
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BetModal } from "../BetModal";
import { useLoginContext } from "../LoginProvider";
import { SweepstakesRow } from "../SweepstakesRow";

export function BetsSection() {
  const { userLogged } = useLoginContext();
  const [bets, setBets] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [idBet, setIdBet] = useState();
  const handleBet = (id) => {
    onOpen();
    setIdBet(id);
  };

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
      <BetModal isOpen={isOpen} onClose={onClose} idBet={idBet} />
    </>
  );
}
