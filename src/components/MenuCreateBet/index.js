import {
  Button,
  Flex,
  HStack,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useApplicationContext } from "contexts/ApplicationContext/useApplicationContext";
import { useEffect, useState } from "react";

export function MenuCreateBet() {
  const [reward, setReward] = useState("");
  const [dozens, setDozens] = useState("");
  const { setBets } = useApplicationContext();

  async function sendSweepstakes(sweepstakes) {
    const sendBet = await axios.post("http://localhost:3500/sweepstakes", sweepstakes)
    const updateSweepstakes = await axios.get("http://localhost:3500/sweepstakes")

    setBets(updateSweepstakes.data);

    
  }

  function getRandomNumbers() {
    let numbers = [];
    for (let k = 0; k < 6; k++) {
      let sortedNum = Math.round(Math.random() * (60 - 1) + 1);
      if (numbers.indexOf(sortedNum) === -1) {
        numbers.push(sortedNum);
      } else {
        while (numbers.indexOf(sortedNum) !== -1) {
          sortedNum = Math.round(Math.random() * (60 - 1) + 1);
        }
        numbers.push(sortedNum);
      }
    }
    return numbers.join();
  }

  useEffect(() => {}, [dozens]);

  return (
    <Menu>
      <MenuButton>
        <Link p="4px" fontWeight="bold" fontSize="20" color="white">
          Sorteios
        </Link>
      </MenuButton>
      <MenuList minW="300px" p="12px">
        <Flex alignItems="center" mb="10px">
          <Text mr="10px">Prêmio:</Text>{" "}
          <Input
            placeholder="Prêmio"
            _focus={{}}
            type="number"
            value={reward}
            onChange={(event) => setReward(event.target.value)}
          />
        </Flex>
        <Flex alignItems="center" mb="15px">
          <Text mr="10px">Dezenas:</Text>{" "}
          <Input
            placeholder="Prêmio"
            _focus={{}}
            value={dozens}
            onChange={(event) => setDozens(event.target.value)}
          />
        </Flex>
        <HStack spacing="auto">
          <Button
            bg="rgba(116,219,239, 1)"
            color="white"
            _hover={{ bg: "#18b0ce" }}
            onClick={() => setDozens(getRandomNumbers())}
          >
            Gerar Dezenas
          </Button>
          <Button
            bg="rgba(116,219,239, 1)"
            color="white"
            _hover={{ bg: "#18b0ce" }}
            onClick={() =>
              sendSweepstakes({
                numbers: dozens.split(","),
                date: new Date().toString(),
                prize: reward,
                state: true,
              })
            }
          >
            Criar Sorteio
          </Button>
        </HStack>
      </MenuList>
    </Menu>
  );
}
