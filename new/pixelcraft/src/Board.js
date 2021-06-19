import { chakra, Flex } from "@chakra-ui/react";

const Canvas = chakra("canvas");
const SVG = chakra("svg");
const Rect = chakra("rect");

const Board = ({
  height,
  width,
  canvas,
  setActive,
  handleClick,
  handleHover,
}) => {
  return (
    <Flex flexGrow={1} justifyContent="center" align="center">
      <Canvas
        ref={canvas}
        boxShadow="lg"
        bgColor="white"
        width={width}
        height={height}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        onClick={handleClick}
        onMouseOver={handleHover}
      />
      <Flex
        width={width}
        height={height}
        bgColor="transparent"
        position="absolute"
        pointerEvents="none"
        backgroundImage="linear-gradient(to right, rgb(1,1,1) 0px, transparent 1px), linear-gradient(to bottom, rgb(1,1,1) 0px, transparent 1px);"
        backgroundSize={"5px 5px"}
      >
        <Flex
          position="absolute"
          left={100}
          top={100}
          width={20}
          height={20}
          bgColor="gray.100"
        />
      </Flex>
    </Flex>
  );
};

export default Board;
