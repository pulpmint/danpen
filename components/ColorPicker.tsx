import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { FC } from "react";
import { ChevronDown } from "react-feather";
import { GRADIENTS } from "../constants/gradients";
import usePanelSettings from "../hooks/usePanelSettings";
import ColorDetail from "./ColorDetail";

const ColorPicker: FC = () => {
  const { color, setColor } = usePanelSettings();

  return (
    <Menu>
      <MenuButton marginRight="4" size="sm" as={Button} rightIcon={<ChevronDown size={18} />}>
        <ColorDetail color={color} label="Color" />
      </MenuButton>

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
