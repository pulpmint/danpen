import { useColorModeValue } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Tooltip } from "@chakra-ui/tooltip";
import { ChangeEvent, FC } from "react";
import { Image, MinusCircle } from "react-feather";
import MinusIcon from "../../assets/SVGs/MinusIcon";
import {
  BACKGROUND_COLOR,
  ICON_BACKGROUND,
  TEXT,
  TEXT_HIGHLIGHT
} from "../../config/colors";
import { GRADIENTS } from "../../constants/gradients";
import usePanelSettings from "../../hooks/usePanelSettings";
import ColorDetail from "./ColorDetail";
import PanelIconButton from "./PanelIconButton";

const ColorPicker: FC = () => {
  const { background, color, setBackground, setColor } = usePanelSettings();

  // colors
  const backgroundColor = useColorModeValue(
    BACKGROUND_COLOR.light,
    BACKGROUND_COLOR.dark
  );
  const iconBackground = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );
  const textColor = useColorModeValue(TEXT.light, TEXT.dark);
  const textHighlightColor = useColorModeValue(
    TEXT_HIGHLIGHT.light,
    TEXT_HIGHLIGHT.dark
  );

  const uploadFile = () => {
    if (document) document.getElementById("bg-upload")!.click();
  };

  const addImageBackground = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.files.length) {
      var reader = new FileReader();

      reader.onloadend = function () {
        setColor({ name: "Image", value: `url(${this.result})` });
        setBackground(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Menu>
      <Tooltip
        isDisabled={false}
        bg={iconBackground}
        textColor={textColor}
        fontWeight="normal"
        label="Select Background"
      >
        <Box mr="6">
          <MenuButton>
            <PanelIconButton
              buttonProps={{
                "aria-label": "Select Theme",
                rounded: "xl"
              }}
            >
              {background ? (
                <Box
                  bgSize="cover !important"
                  bgPos="center !important"
                  height="6"
                  width="6"
                  m="3"
                  bg={color.value}
                  rounded="full"
                ></Box>
              ) : (
                <Box
                  height="6"
                  width="6"
                  m="3"
                  rounded="full"
                  textColor={textHighlightColor}
                >
                  <MinusIcon />
                </Box>
              )}
            </PanelIconButton>
          </MenuButton>
        </Box>
      </Tooltip>

      <MenuList
        rounded="xl"
        p="2"
        bg={backgroundColor}
        boxShadow="none"
        _hover={{ boxShadow: "none" }}
      >
        <Input
          type="file"
          accept="image/*"
          id="bg-upload"
          variant="unstyled"
          display="none"
          onChange={e => addImageBackground(e)}
        />

        {GRADIENTS.map((gradient, index) => (
          <MenuItem
            key={index}
            rounded="lg"
            fontSize="sm"
            textColor={textHighlightColor}
            _hover={{ backgroundColor: iconBackground }}
            onClick={() => {
              if (!background) setBackground(true);
              setColor(gradient);
            }}
          >
            <ColorDetail color={gradient.value} label={gradient.name} />
          </MenuItem>
        ))}

        <Divider my="2" />

        <MenuItem
          key={GRADIENTS.length}
          rounded="lg"
          fontSize="sm"
          textColor={textHighlightColor}
          _hover={{ backgroundColor: iconBackground }}
          onClick={() => setBackground(false)}
        >
          <Box display="flex" flexDir="row" alignItems="center">
            <MinusCircle size={16} />
            <Text ml="2">No Background</Text>
          </Box>
        </MenuItem>

        <MenuItem
          key={GRADIENTS.length + 1}
          rounded="lg"
          fontSize="sm"
          textColor={textHighlightColor}
          _hover={{ backgroundColor: iconBackground }}
          onClick={() => uploadFile()}
        >
          <Box display="flex" flexDir="row" alignItems="center">
            <Image size={16} />
            <Text ml="2">Image Background</Text>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ColorPicker;
