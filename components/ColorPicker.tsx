import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Tooltip } from "@chakra-ui/tooltip";
import { ChangeEvent, FC } from "react";
import { ChevronDown, PlusCircle } from "react-feather";
import { GRADIENTS } from "../constants/gradients";
import usePanelSettings from "../hooks/usePanelSettings";
import ColorDetail from "./ColorDetail";

const ColorPicker: FC = () => {
  const { background, color, setColor } = usePanelSettings();

  const uploadFile = () => {
    if (document) document.getElementById("bg-upload")!.click();
  };

  const addImageBackground = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.files.length) {
      var reader = new FileReader();

      reader.onloadend = function () {
        setColor({ name: "Image", value: `url(${this.result})` });
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Menu>
      <Tooltip
        isDisabled={false}
        label={background ? "Select Theme" : "Background Disabled"}
      >
        <Box mr="4">
          <MenuButton
            disabled={!background}
            size="sm"
            as={Button}
            rightIcon={<ChevronDown size={18} />}
          >
            <Box mr="-2">
              <ColorDetail color={color.value} label="" />
            </Box>
          </MenuButton>
        </Box>
      </Tooltip>

      <MenuList p="2">
        <Input
          type="file"
          accept="image/*"
          id="bg-upload"
          variant="unstyled"
          display="none"
          onChange={e => addImageBackground(e)}
        />

        {GRADIENTS.map((gradient, index) => (
          <MenuItem key={index} rounded="md" onClick={() => setColor(gradient)}>
            <ColorDetail color={gradient.value} label={gradient.name} />
          </MenuItem>
        ))}

        <Divider my="2" />

        <MenuItem
          key={GRADIENTS.length}
          rounded="md"
          onClick={() => uploadFile()}
        >
          <Box display="flex" flexDir="row" alignItems="center">
            <PlusCircle size={16} />
            <Text ml="2">Image Background</Text>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ColorPicker;
