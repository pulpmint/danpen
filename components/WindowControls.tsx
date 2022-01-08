import { Box, Input } from "@chakra-ui/react";
import { FC } from "react";

const colors: string[] = ["red.500", "yellow.500", "green.500"];

const WindowControls: FC = () => {
  return (
    <Box
      pos="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb="4"
    >
      <Box pos="absolute" left="0" display="flex">
        {colors.map(color => (
          <Box
            key={color}
            borderRadius="full"
            mr="2"
            height="4"
            width="4"
            backgroundColor={color}
          ></Box>
        ))}
      </Box>
      <Input
        variant="unstyled"
        size="sm"
        w="max-content"
        textAlign="center"
        defaultValue="readme.md"
      />
    </Box>
  );
};

export default WindowControls;
