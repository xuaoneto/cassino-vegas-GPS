import {
  Button,
  Flex,
  Grid,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useApplicationContext } from "contexts/ApplicationContext/useApplicationContext";
import { useLoginContext } from "contexts/LoginProvider";
import { useEffect, useState } from "react";
import { PriceCheckBox } from "./priceCheckBox";

const numberOfSelectedValues = {
  4.5: 6,
  15: 7,
  90: 8,
  300: 10,
};

export function BetModal({ setWinner }) {
  const [numbersArray, setNumbersArray] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bets, bet, setBet } = useApplicationContext();
  const { setUserCash, userCash } = useLoginContext();
  const [betPrice, setBetPrice] = useState(4.5);

  function handleCompareNumbers() {
    if (userCash > betPrice) {
      setUserCash((currentCash) => currentCash - betPrice);
    } else {
      alert("Você não tem saldo suficiente para jogar!");
      return;
    }
    let isLose = false;
    bets.map((current) => {
      if (current.id == bet.id) {
        for (let k of current.numbers) {
          const verify = numbersArray.filter((current) => k == current);
          if (verify.length === 0) {
            isLose = true;
            setWinner(false);
          }
        }
        if (isLose === false) {
          setWinner(true);
          setUserCash((state) => state + parseFloat(current.prize));
        }
      }
    });
  }

  useEffect(() => {
    if (bet) {
      onOpen();
    } else {
      onClose();
    }
  }, [bet]);

  useEffect(() => {
    if (!isOpen) {
      setBet(undefined);
    }
  }, [isOpen]);

  function handleAddNumber(number) {
    if (numbersArray.length < numberOfSelectedValues[betPrice]) {
      numbersArray.push(number);
      setNumbersArray([...numbersArray]);
    } else {
      numbersArray.shift();
      numbersArray.push(number);
      setNumbersArray([...numbersArray]);
    }
  }
  function handleDeleteNumber(number) {
    setNumbersArray(numbersArray.filter((item) => number !== item));
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} borderRadius="10">
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent bg="#2F3A50" color="white">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid gridTemplateColumns="repeat(6, auto)" gap="10px">
            {Array.from({ length: 60 }).map((item, index) => {
              const isActive =
                numbersArray.filter((current) => current === index + 1)
                  .length !== 0;

              return (
                <IconButton
                  icon={<Text textAlign="center">{index + 1}</Text>}
                  bg={isActive ? "#1db954" : "rgba(255, 255, 255, 0.1)"}
                  key={index}
                  borderRadius="5px"
                  onClick={
                    isActive
                      ? () => handleDeleteNumber(index + 1)
                      : () => handleAddNumber(index + 1)
                  }
                  variant="outline"
                  _hover={{
                    bg: isActive ? "#189a46" : "rgba(255, 255, 255, 0.2)",
                  }}
                  _active={{
                    bg: isActive ? "#116e32" : "rgba(255, 255, 255, 0.3)",
                  }}
                />
              );
            })}
          </Grid>
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <HStack spacing="15px">
            <PriceCheckBox
              price={4.5}
              disabled={userCash ? userCash < 4.5 : undefined}
              onChange={() => {
                setBetPrice(4.5);
                setNumbersArray([]);
              }}
              label="6 números para apostar"
              isChecked={betPrice === 4.5}
            />

            <PriceCheckBox
              price={15}
              disabled={userCash ? userCash < 15 : undefined}
              onChange={() => {
                setBetPrice(15);
                setNumbersArray([]);
              }}
              label="7 números para apostar"
              isChecked={betPrice === 15}
            />

            <PriceCheckBox
              price={90}
              disabled={userCash ? userCash < 90 : undefined}
              onChange={() => {
                setBetPrice(90);
                setNumbersArray([]);
              }}
              label="8 números para apostar"
              isChecked={betPrice === 90}
            />

            <PriceCheckBox
              price={300}
              disabled={userCash ? userCash < 300 : undefined}
              onChange={() => {
                setBetPrice(300);
                setNumbersArray([]);
              }}
              label="10 números para apostar"
              isChecked={betPrice === 300}
            />
          </HStack>
          <Flex>
            <Button
              variant="outline"
              _hover={{
                bg: "rgba(255, 255, 255, 0.2)",
              }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              variant="outline"
              bg="#1db954"
              disabled={numbersArray.length < numberOfSelectedValues[betPrice]}
              _hover={{
                bg: "#189a46",
              }}
              onClick={() => handleCompareNumbers()}
            >
              Apostar!
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
