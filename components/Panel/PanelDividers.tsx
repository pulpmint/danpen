import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { FC } from "react";
import { ICON_BACKGROUND } from "../../config/colors";

const PanelDividers: FC = () => {
  // colors
  const dividerColor = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );

  return <Box h="12" w="1px" bg={dividerColor}></Box>;
};

export default PanelDividers;
