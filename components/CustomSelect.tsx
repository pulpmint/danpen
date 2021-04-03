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
    <Box mr="4">
      <Text mb="1" fontSize="sm" fontWeight="medium" textColor="gray">
        {label}
      </Text>

      <Menu>
        <MenuButton mr="4" size="xs" as={Button}>
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
