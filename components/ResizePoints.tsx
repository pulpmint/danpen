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
    ></Box>
  );
};

export default ResizePoints;
