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
import { SweepstakesRow } from "../SweepstakesRow";

export function BetsSection() {
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
          gridTemplateColumns="repeat(5, 1fr)"
          px="30px"
          color="white"
          gap="25px"
          borderRadius="10px"
        >
          {/* THEAD */}
          <Text fontSize="18" textAlign="center">
            Números
          </Text>
          <Text fontSize="18" textAlign="center">
            Data e Hora
          </Text>
          <Text fontSize="18" textAlign="center">
            Prêmio
          </Text>
          <Text fontSize="18" textAlign="center">
            Situação
          </Text>
          <Box />
          {/* FINAL THEAD */}

          {bets.map((item, index) => (
            <SweepstakesRow key={`${index}`} onClickBet={handleBet} {...item} />
          ))}
        </Grid>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>ALskdmaskldmasdmsalkd saodjaskdlasm asdo</Text>
            <Text my="30px">{idBet}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
