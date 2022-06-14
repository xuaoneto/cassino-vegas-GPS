import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginProvider";

export function ProfileMenu() {
  const { userLogged, setUserLogged } = useLoginContext();
  const navigate = useNavigate();
  return (
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
          _hover={{ bg: "rgba(0,0,0, 0.1)" }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
