import { Flex, Text } from "@chakra-ui/react";
import { ModalContentCustom } from "components/ModalContentCustom";
import { LoseIcon } from "components/ui/Vectors";
import { Fade } from "react-reveal";

export function LoseModal({ isOpen, onClose }) {
  return (
    <ModalContentCustom isOpen={isOpen} onClose={onClose} borderRadius="10">
      <Flex alignItems="center" flexDir="column" p="40px">
        <Fade top distance="40px">
          <LoseIcon width="200px" />
        </Fade>
        <Fade top distance="40px">
          <Text textAlign="center" mt="20px" fontSize="30">
            Você Perdeu.
          </Text>
        </Fade>
      </Flex>
    </ModalContentCustom>
  );
}
