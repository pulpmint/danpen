import { FC } from "react";
import { theme } from "../config/theme";
import { useColorModeValue } from "@chakra-ui/color-mode";

import "focus-visible/dist/focus-visible";

const Misc: FC = () => {
  // colors
  const scrollbarColor = useColorModeValue(
    theme.colors.gray[200],
    theme.colors.gray[700]
  );

  return (
    <style jsx global>{`
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
