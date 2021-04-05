import { Box } from "@chakra-ui/layout";
import { FC } from "react";

interface ColorDetailProps {
  color: string;
  label: string;
}

const ColorDetail: FC<ColorDetailProps> = ({ color, label }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box bgGradient={color} height="4" width="4" borderRadius="full" mr="2"></Box>
      {label}
    </Box>
  );
};

export default ColorDetail;
