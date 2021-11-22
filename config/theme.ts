import { extendTheme, Theme } from "@chakra-ui/react";

export const theme: Theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Fira Code, monospace"
  },
  colors: {
    gray: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#303030",
      800: "#262626",
      900: "#171717"
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "normal"
      }
    },
    Tooltip: {
      baseStyle: {
        borderRadius: "full"
      }
    }
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  }
});
