import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";

export function ModalContentCustom({
  isOpen,
  onClose,
  withoutCloseButton,
  children,
  backdropFilter = null,
  ...rest
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={backdropFilter} />
      <ModalContent
        borderRadius="0"
        minW="0"
        mt={{ base: "20%", xl: "12vh" }}
        mb="auto"
        mx="0"
        {...rest}
      >
        <ModalHeader p="0">
          {withoutCloseButton ? null : (
            <ModalCloseButton
              size="32px"
              color="white"
              top={{ base: "-15%", xl: "-8%" }}
              right={{ base: "5%", xl: "-1.5%" }}
            />
          )}
        </ModalHeader>
        <ModalBody p="0">
          <Flex justifyContent="center">{children}</Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
