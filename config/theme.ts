import { extendTheme, Theme } from "@chakra-ui/react";

export const theme: Theme = extendTheme({
  fonts: {
    body: "Manrope, sans-serif",
    heading: "Manrope, sans-serif",
    mono: "Fira Code, monospace"
  },
  config: {
    initialColorMode: "dark"
  }
});
