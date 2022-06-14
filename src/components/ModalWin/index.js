import { Flex, Image, Text } from "@chakra-ui/react";
import { ModalContentCustom } from "../ModalContentCustom";
import troffImage from "assets/images/prize-image.png";
import { Fade } from "react-reveal";

export function ModalWin({ isOpen, onClose }) {
  return (
    <ModalContentCustom isOpen={isOpen} onClose={onClose} borderRadius="10">
      <Flex alignItems="center" flexDir="column" p="40px" minW="400px">
        <Fade top distance="40px">
          <Image src={troffImage} w="250px" mb="30px" />
        </Fade>
        <Fade top distance="40px">
          <Text fontSize="30" textAlign="center">
            Parabéns Você Ganhou!!
          </Text>{" "}
        </Fade>
      </Flex>
    </ModalContentCustom>
  );
}
