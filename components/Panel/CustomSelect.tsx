import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { FC } from "react";
import {
  BACKGROUND_COLOR,
  ICON_BACKGROUND,
  ICON_BACKGROUND_HOVER,
  TEXT_HIGHLIGHT
} from "../../config/colors";

interface CustomSelectProps {
  label: string;
  value: any;
  list: any[];
  changeValue: Function;
}

const CustomSelect: FC<CustomSelectProps> = ({
  label,
  value,
  list,
  changeValue
}) => {
  // colors
  const backgroundColor = useColorModeValue(
    BACKGROUND_COLOR.light,
    BACKGROUND_COLOR.dark
  );
  const iconBackground = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );
  const iconBackgroundHover = useColorModeValue(
    ICON_BACKGROUND_HOVER.light,
    ICON_BACKGROUND_HOVER.dark
  );
  const textHighlightColor = useColorModeValue(
    TEXT_HIGHLIGHT.light,
    TEXT_HIGHLIGHT.dark
  );

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Text mb="2" fontSize="xs" textColor={textHighlightColor}>
        {label}
      </Text>

      <Menu>
        <MenuButton
          size="xs"
          as={Button}
          px="2"
          py="1"
          fontWeight="medium"
          bg={iconBackground}
          borderColor={iconBackground}
          _hover={{ backgroundColor: iconBackgroundHover }}
          _active={{ backgroundColor: iconBackgroundHover }}
        >
          {value}
        </MenuButton>

        <MenuList
          rounded="xl"
          p="2"
          bg={backgroundColor}
          boxShadow="none"
          _hover={{ boxShadow: "none" }}
        >
          {list.map((item, index) => (
            <MenuItem
              key={index}
              rounded="lg"
              fontSize="sm"
              textColor={textHighlightColor}
              _hover={{ backgroundColor: iconBackground }}
              onClick={() => changeValue(item)}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default CustomSelect;
