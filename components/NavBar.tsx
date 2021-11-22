import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";
import AboutDialog from "./AboutDialog";

const NavBar: FC = () => {
  return (
    <Container position="fixed" top="2" maxWidth="full" zIndex="1000">
      <Container
        maxWidth="container.lg"
        p="4"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box></Box>
        <AboutDialog />
      </Container>
    </Container>
  );
};

export default NavBar;
