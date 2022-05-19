import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../components/LoginProvider";
import { Navbar } from "../components/Navbar";

export default function HomePage() {
  const { setUserLogged, userLogged } = useLoginContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (userLogged === null) {
      navigate("/login");
    }
  }, []);

  return (
    <Box w="100%" bg="#1A202C" minH="100vh">
      <Navbar />
    </Box>
  );
}
