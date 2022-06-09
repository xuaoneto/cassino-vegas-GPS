import {
  Box,
  Flex,
  IconButton,
  Input,
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
import { MenuCash } from "../MenuCash";
import { MenuCreateBet } from "../MenuCreateBet";
import { ProfileMenu } from "./profile";

export function Navbar() {
  const { userLogged, userCash } = useLoginContext();

  return (
    <Flex w="100%" bg="#4fa1b1" px="50px" alignItems="center" py="20px">
      <DefaultContainer alignItems="center" justifyContent="space-between">
        <Box>
          <LogoWhite />
        </Box>
        <Flex alignItems="center">
          {userLogged && userLogged.admin ? null : <MenuCash />}
          {userLogged && userLogged.admin ? <MenuCreateBet /> : null}
          <ProfileMenu />
        </Flex>
      </DefaultContainer>
    </Flex>
  );
}
