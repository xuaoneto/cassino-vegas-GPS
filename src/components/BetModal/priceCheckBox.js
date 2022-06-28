import { Checkbox, Flex, Text, Tooltip } from "@chakra-ui/react";

export function PriceCheckBox({ price, label, ...rest }) {
  return (
    <Flex
      flexDir="column"
      pos="relative"
      justifyContent="center"
      alignItems="center"
    >
      <Checkbox
        _disabled={{ opacity: "0.6", cursor: "not-allowed" }}
        {...rest}
      />

      <Tooltip label={label} hasArrow fontSize="md">
        <Text fontSize="13">R$ {price}</Text>
      </Tooltip>
    </Flex>
  );
}
