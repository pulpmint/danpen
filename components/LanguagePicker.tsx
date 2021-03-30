import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { FC } from "react";
import { LANGUAGES } from "../constants/languages";
import usePanelSettings from "../hooks/usePanelSettings";

const LanguagePicker: FC = () => {
  const { language, predictions, setLanguage, setPredictions } = usePanelSettings();

  const getLabel = (): string => {
    if (language.mode === "auto") return predictions ? "Auto - " + predictions.name : "Auto";
    return language.name;
  };

  return (
    <Box marginRight="4">
      <Text marginBottom="1" fontSize="sm" fontWeight="medium" textColor="gray">
        Language
      </Text>

      <Menu>
        <MenuButton marginRight="4" size="xs" as={Button}>
          {getLabel()}
        </MenuButton>

        <MenuList maxHeight="64" overflowY="auto">
          {LANGUAGES.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                setPredictions(null);
                setLanguage(item);
              }}
            >
              {item.mode === "auto" ? getLabel() : item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguagePicker;
