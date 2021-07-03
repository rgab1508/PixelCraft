import { Flex, useColorMode } from "@chakra-ui/react";

const AppBody = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      direction={{ base: "column-reverse", sm: "row" }}
      justifyContent="space-between"
      bgColor={ colorMode == "light" ? "gray.100" : "gray.800"}
    >
      {children}
    </Flex>
  );
};

export default AppBody;
