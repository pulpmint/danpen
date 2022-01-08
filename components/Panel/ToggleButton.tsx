import { useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { ICON_BACKGROUND } from "../../config/colors";
import { IToggleButton } from "../../types/ToggleButton";
import PanelIconButton from "./PanelIconButton";

const ToggleButton: FC<IToggleButton> = ({
  label,
  icon,
  toggleValue,
  toggle
}) => {
  const iconBackground = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );

  return (
    <PanelIconButton
      buttonProps={{
        mr: "4",
        p: "3.5",
        bg: toggleValue ? iconBackground : "transparent",
        rounded: "full",
        onClick: () => toggle()
      }}
      label={label}
    >
      {icon}
    </PanelIconButton>
  );
};

export default ToggleButton;
