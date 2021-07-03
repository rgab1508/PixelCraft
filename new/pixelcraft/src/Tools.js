import { Flex, IconButton } from "@chakra-ui/react";
import { tools } from "./config";

const Tools = ({ mode, setMode }) => {
  return (
    <Flex wrap="wrap" w={{ base: "100%", sm: "100px", md: "150px" }}>
      {tools.map((tool, i) => (
        <Flex
          justifyContent="center"
          align="center"
          flexBasis={{ base: "10%", sm: "50%" }}
          boxSizing="border-box"
          p={4}
          bgColor={mode == i && "gray.300"}
          cursor="pointer"
          onClick={() => setMode(i)}
        >
          <IconButton
            as={tool.icon}
            variant="unstyled"
            w={7}
            h={7}
            transform={tool.name == "Ellipse" && "rotateX(45deg)"}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default Tools;
