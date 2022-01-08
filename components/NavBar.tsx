import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";
import AboutDialog from "./AboutDialog";
import KeyboardShortcutsDialog from "./KeyboardShortcutsDialog";

const NavBar: FC = () => {
  return (
    <Container position="fixed" top="2" maxWidth="full" zIndex="1000">
      <Container
        maxWidth="container.md"
        p="4"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <AboutDialog />

        <Box display="flex" alignItems="center" gridGap="3">
          <KeyboardShortcutsDialog />
        </Box>
      </Container>
    </Container>
  );
};

export default NavBar;
