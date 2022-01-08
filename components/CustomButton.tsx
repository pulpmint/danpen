import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { ICON_BACKGROUND, ICON_BACKGROUND_HOVER } from "../config/colors";
import CustomTooltip from "./CustomTooltip";

interface CustomButtonProps {
  buttonProps?: ButtonProps;
  label?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  label = "",
  buttonProps
}) => {
  // colors
  const iconBackground = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );
  const iconBackgroundHover = useColorModeValue(
    ICON_BACKGROUND_HOVER.light,
    ICON_BACKGROUND_HOVER.dark
  );

  return (
    <CustomTooltip label={label}>
      <Button
        variant="solid"
        size="sm"
        rounded="full"
        bg={iconBackground}
        _hover={{ backgroundColor: iconBackgroundHover }}
        {...buttonProps}
      >
        {children}
      </Button>
    </CustomTooltip>
  );
};

export default CustomButton;
