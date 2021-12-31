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
import { LANGUAGES } from "../../constants/languages";
import usePanelSettings from "../../hooks/usePanelSettings";

const LanguagePicker: FC = () => {
  const { language, predictions, setLanguage, setPredictions } =
    usePanelSettings();

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

  const getLabel = (): string => {
    if (language.mode === "auto")
      return predictions ? "Auto - " + predictions.name : "Auto";
    return language.name;
  };

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Text mb="2" fontSize="xs" textColor={textHighlightColor}>
        Language
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
          {getLabel()}
        </MenuButton>

        <MenuList
          p="2"
          maxHeight="64"
          overflow="hidden"
          rounded="xl"
          bg={backgroundColor}
          boxShadow="none"
          _hover={{ boxShadow: "none" }}
        >
          <Box maxHeight="60" overflowY="auto">
            {LANGUAGES.map((item, index) => (
              <MenuItem
                key={index}
                rounded="md"
                fontSize="sm"
                textColor={textHighlightColor}
                _hover={{ backgroundColor: iconBackground }}
                onClick={() => {
                  setPredictions(null);
                  setLanguage(item);
                }}
              >
                {language.mode === "auto" && item.mode === "auto"
                  ? getLabel()
                  : item.name}
              </MenuItem>
            ))}
          </Box>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguagePicker;
