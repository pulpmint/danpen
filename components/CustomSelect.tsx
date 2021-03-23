import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { FC } from "react";

interface CustomSelectProps {
  label: string;
  value: any;
  list: any[];
  changeValue: Function;
}

const CustomSelect: FC<CustomSelectProps> = ({ label, value, list, changeValue }) => {
  return (
    <Box marginRight="4">
      <Text marginBottom="1" fontSize="sm" fontWeight="medium" textColor="gray">
        {label}
      </Text>

      <Menu>
        <MenuButton marginRight="4" size="xs" as={Button}>
          {value}
        </MenuButton>

        <MenuList>
          {list.map((item, index) => (
            <MenuItem key={index} onClick={() => changeValue(item)}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default CustomSelect;
