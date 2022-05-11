import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../components/LoginProvider";
import { Logo } from "../components/Logo";

export default function LoginPage() {
  const [login, setLogin] = useState({ login: "", senha: "" });
  const { isLogged, setIsLogged } = useLoginContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
    }
  }, [isLogged]);

  async function checkCredentials() {
    const response = await axios.get("http://localhost:3500/users");
    if (response.data) {
      for (let u of response.data) {
        const auth = u.auth;
        if (auth.login === login.login && auth.senha === login.senha) {
          navigate("/");
          setIsLogged(true);
        }
      }
    } else {
      console.log("ligar json-server");
    }
  }

  return (
    <>
      <Flex
        alignItems="center"
        h="100vh"
        w="100%"
        bg="#1A202C"
        justifyContent="center"
        color="white"
      >
        <Box>
          <Box mb="80px">
            <Logo size="400" />
          </Box>

          <Text fontSize="20" mb="12px">
            Login:
          </Text>
          <Input
            placeholder="Login"
            mb="20px"
            onChange={(e) =>
              setLogin((state) => ({ ...state, login: e.target.value }))
            }
          />

          <Text fontSize="20" mb="12px">
            Senha:
          </Text>
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) =>
              setLogin((state) => ({ ...state, senha: e.target.value }))
            }
          />

          <HStack mt="25px" spacing="15px">
            <Button
              variant="outline"
              _hover={{ bg: "rgba(255,255,255, 0.1)" }}
              onClick={() => checkCredentials()}
            >
              Login
            </Button>
            <Button
              variant="outline"
              _hover={{ bg: "rgba(255,255,255, 0.1)" }}
              onClick={() => navigate("/create-account")}
            >
              Criar conta
            </Button>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}
