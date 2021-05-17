import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";
import Logo from "../assets/SVGs/Logo";
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
        <Box height="32px" width="32px" p="2" backgroundColor="gray.900" borderRadius="full">
          <Logo size={16} />
        </Box>

        <AboutDialog />
      </Container>
    </Container>
  );
};

export default NavBar;
