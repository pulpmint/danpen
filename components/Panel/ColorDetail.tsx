import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface ColorDetailProps {
  color: string;
  label: string;
}

const ColorDetail: FC<ColorDetailProps> = ({ color, label }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box
        bg={color}
        bgSize="cover"
        bgPos="center"
        height="4"
        width="4"
        borderRadius="full"
        mr="2"
      ></Box>
      {label}
    </Box>
  );
};

export default ColorDetail;
