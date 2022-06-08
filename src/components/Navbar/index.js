import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DefaultContainer } from "../DefaultContainer";
import { useLoginContext } from "../LoginProvider";
import { LogoWhite } from "../Logo";
import { MenuCreateBet } from "../MenuCreateBet";

export function Navbar() {
  const { userLogged, setUserLogged } = useLoginContext();
  const navigate = useNavigate();

  return (
    <Flex w="100%" bg="#4fa1b1" px="50px" alignItems="center" py="20px">
      <DefaultContainer alignItems="center" justifyContent="space-between">
        <Box>
          <LogoWhite />
        </Box>
        <Flex alignItems="center">
          {userLogged && userLogged.admin ? <MenuCreateBet /> : null}
          <Menu>
            <MenuButton
              as={IconButton}
              icon={
                <Text fontSize="20">
                  {userLogged && userLogged.nome.substr(0, 1)}
                </Text>
              }
              justifyContent="center"
              alignItems="center"
              borderRadius="50%"
              h="50px"
              w="50px"
              bg="white"
              ml="20px"
              border="none"
              boxShadow="none"
            />
            <MenuList py="0">
              <MenuItem
                onClick={() => {
                  setUserLogged(null);
                  navigate("/login");
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </DefaultContainer>
    </Flex>
  );
}
