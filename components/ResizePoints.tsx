import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

const ResizePoints: FC<BoxProps> = props => {
  return (
    <Box
      {...props}
      pos="absolute"
      top="50%"
      bottom="50%"
      marginTop="auto"
      marginBottom="auto"
      w="2"
      h="2"
      bg="gray.500"
      rounded="full"
      transitionProperty="transform"
      transitionDuration="0.25s"
      _hover={{ transform: "scale(1.25)" }}
    ></Box>
  );
};

export default ResizePoints;
