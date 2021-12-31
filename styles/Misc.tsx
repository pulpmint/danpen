import { useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { theme } from "../config/theme";

import "focus-visible/dist/focus-visible";
import { BACKGROUND_COLOR } from "../config/colors";

const Misc: FC = () => {
  // colors
  const backgroundColor = useColorModeValue(
    BACKGROUND_COLOR.light,
    BACKGROUND_COLOR.dark
  );
  const scrollbarColor = useColorModeValue(
    theme.colors.gray[200],
    theme.colors.gray[700]
  );

  return (
    <style jsx global>{`
      body {
        background-color: ${backgroundColor} !important;
      }

      .js-focus-visible :focus:not([data-focus-visible-added]) {
        outline: none;
        box-shadow: none;
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: ${scrollbarColor} rgba(0, 0, 0, 0);
      }

      *::-webkit-scrollbar {
        width: 4px;
      }

      *::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
      }

      *::-webkit-scrollbar-thumb {
        background-color: ${scrollbarColor};
        border-radius: 100px;
      }
    `}</style>
  );
};

export default Misc;
