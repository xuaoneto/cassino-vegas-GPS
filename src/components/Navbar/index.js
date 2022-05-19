import { Box, Flex, Link, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { useLoginContext } from "../LoginProvider";
import { LogoWhite } from "../Logo";
import { MenuCreateBet } from "../MenuCreateBet";

export function Navbar() {
  const { userLogged } = useLoginContext();

  console.log("asdosadloc,");
  console.log(userLogged);
  return (
    <Flex w="100%" bg="#74DBEF" px="50px" alignItems="center" py="20px">
      <Flex
        w="100%"
        maxW="1560px"
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        <Box>
          <LogoWhite />
        </Box>
        <Flex>{userLogged && userLogged.admin ? <MenuCreateBet /> : null}</Flex>
      </Flex>
    </Flex>
  );
}
