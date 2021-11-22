import { useColorModeValue } from "@chakra-ui/color-mode";
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
        "aria-label": label,
        mr: "4",
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
