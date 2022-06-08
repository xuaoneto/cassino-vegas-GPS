import { Box, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BetsSection } from "../components/BetsSection";
import { DefaultContainer } from "../components/DefaultContainer";
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
      <DefaultContainer fontFamily="montserrat">
        <Grid w="100%" templateColumns="1fr">
          <BetsSection />
          <Box />
        </Grid>
      </DefaultContainer>
    </Box>
  );
}
