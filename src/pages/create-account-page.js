import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

export default function CreateAccountPage() {
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [cpf, setCpf] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [isError, setIsError] = useState(false);


  const model = {
    admin: false,
    nome: nome,
    dataNasc: dataNasc,
    cpf: cpf,
    apostasFav: [],
    auth: {
      login: login,
      senha: senha,
    },
    cash: 0,
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(login);
  }, [login]);

  async function checkCredentials() {
    const isError =
      nome === "" ||
      dataNasc === "" ||
      cpf === "" ||
      login === "" ||
      senha === "";
    const response = await axios
      .post("http://localhost:3500/users", model)
      .then((response) => {
        if (response.status === 201) navigate("/login");
      });
  }
  return (
    <Flex
      alignItems="center"
      minH="100vh"
      w="100%"
      bg="#1A202C"
      justifyContent="center"
      color="white"
      pb="80px"
    >
      <Box>
        <Box mb="80px">
          <Logo size="400" />
        </Box>
        <FormControl>
          <Text fontSize="20" mb="12px">
            Nome:
          </Text>
          <Input
            placeholder="Nome"
            required
            mb="20px"
            onChange={(e) => setNome(e.target.value)}
          />

          <Text fontSize="20" mb="12px">
            Data de Nascimento:
          </Text>
          <Input
            placeholder="Data de nascimento"
            mb="20px"
            onChange={(e) => setDataNasc(e.target.value)}
          />

          <Text fontSize="20" mb="12px">
            Cpf:
          </Text>
          <Input
            placeholder="Cpf"
            mb="20px"
            onChange={(e) => setCpf(e.target.value.toString())}
          />

          <Text fontSize="20" mb="12px">
            Login:
          </Text>
          <Input
            placeholder="Login"
            mb="20px"
            onChange={(e) => setLogin(e.target.value)}
          />

          <Text fontSize="20" mb="12px">
            Senha:
          </Text>
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </FormControl>
        <HStack mt="25px" spacing="15px">
          <Button
            variant="outline"
            _hover={{ bg: "rgba(255,255,255, 0.1)" }}
            onClick={() => checkCredentials()}
          >
            Criar conta
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}
