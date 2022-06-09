import {
  Button,
  Flex,
  Grid,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLoginContext } from "../LoginProvider";

export function MenuCash() {
  const [value, setValue] = useState("");
  const { setUserCash, userCash } = useLoginContext();

  function handleChangeCash(cash) {
    setUserCash((state) => state + parseFloat(cash));
    setValue("");
  }

  return (
    <Menu>
      <MenuButton>
        <Link p="4px" mr="20px" fontWeight="bold" fontSize="20" color="white">
          Saldo
        </Link>
      </MenuButton>
      <MenuList
        display="flex"
        flexDir="column"
        minW="450px"
        p="10px 10px 5px 10px"
      >
        <Flex alignItems="center" mb="15px">
          <Text mr="15px">Saldo:</Text> <Text>R${userCash}</Text>
        </Flex>

        <Flex alignItems="center">
          {" "}
          <Text whiteSpace="nowrap" mr="10px">
            Depositar Saldo:
          </Text>
          <Input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Flex>

        <Button
          mt="20px"
          ml="auto"
          bg="rgba(116,219,239, 1)"
          disabled={value === ""}
          color="white"
          _hover={{ bg: "#18b0ce" }}
          onClick={() => handleChangeCash(value)}
        >
          Depositar
        </Button>
      </MenuList>
    </Menu>
  );
}
