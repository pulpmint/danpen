import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC } from "react";
import { ChevronDown } from "react-feather";
import { GRADIENTS } from "../constants/gradients";
import usePanelSettings from "../hooks/usePanelSettings";
import ColorDetail from "./ColorDetail";

const ColorPicker: FC = () => {
  const { background, color, setColor } = usePanelSettings();

  return (
    <Menu>
      <Tooltip isDisabled={false} label={background ? "Select Theme" : "Background Disabled"}>
        <Box mr="4">
          <MenuButton
            disabled={!background}
            size="sm"
            as={Button}
            rightIcon={<ChevronDown size={18} />}
          >
            <ColorDetail color={color} label="Color" />
          </MenuButton>
        </Box>
      </Tooltip>

      <MenuList>
        {GRADIENTS.map((gradient, index) => (
          <MenuItem key={index} onClick={() => setColor(gradient)}>
            <ColorDetail color={gradient} label={`Color Scheme ${index + 1}`} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ColorPicker;
