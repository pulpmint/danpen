import { Box } from "@chakra-ui/layout";
import { FC } from "react";

const colors: string[] = ["red.500", "yellow.500", "green.500"];

const WindowControls: FC = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="4">
      <Box display="flex">
        {colors.map(color => (
          <Box
            key={color}
            borderRadius="full"
            marginRight="2"
            height="4"
            width="4"
            backgroundColor={color}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default WindowControls;
