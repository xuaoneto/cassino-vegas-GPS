import {
  Box,
  Button,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { dateFormatter } from "../../utils";
import { useLoginContext } from "../../contexts/LoginProvider";
import { useApplicationContext } from "contexts/ApplicationContext/useApplicationContext";

export function SweepstakesRow({ numbers, id, prize, state, model }) {
  const { setBet } = useApplicationContext();
  const { userLogged } = useLoginContext();
  return (
    <>
      {userLogged ? (
        userLogged.admin ? (
          <Flex>
            <Menu>
              <MenuButton
                mx="auto"
                as={Button}
                variant="outline"
                _hover={{ bg: "rgba(255,255,255, 0.1)" }}
                color="white"
                _active={{ color: "black", bg: "rgba(255,255,255, 0.5)" }}
              >
                Números
              </MenuButton>
              <MenuList display="flex" alignItems="stretch" flexDir="column">
                <Grid templateColumns="repeat(3, 1fr)" color="black">
                  {numbers.map((number, index) => (
                    <Text textAlign="center" key={`${index}-${number}`}>
                      {number}
                    </Text>
                  ))}
                </Grid>
              </MenuList>
            </Menu>
          </Flex>
        ) : null
      ) : null}
      <Text textAlign="center" my="auto">
        {id}
      </Text>
      <Text textAlign="center" my="auto">
        R$ {prize}
      </Text>
      <Text textAlign="center" my="auto">
        {state ? "Aberto" : "Fechado"}
      </Text>
      {userLogged ? (
        userLogged.admin ? null : (
          <Flex>
            <Button
              mx="auto"
              disabled={!state}
              variant="outline"
              _hover={{ bg: "rgba(255,255,255, 0.1)" }}
              color="white"
              _active={{ color: "black", bg: "rgba(255,255,255, 0.5)" }}
              onClick={() => setBet(model)}
            >
              Apostar
            </Button>
          </Flex>
        )
      ) : null}
    </>
  );
}
