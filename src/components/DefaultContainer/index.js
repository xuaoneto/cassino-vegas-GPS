import { Flex } from "@chakra-ui/react";

export function DefaultContainer({ children, ...rest }) {
  return (
    <Flex w="100%" maxW="1560px" mx="auto" {...rest}>
      {children}
    </Flex>
  );
}
