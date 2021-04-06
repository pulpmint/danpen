import { Img } from "@chakra-ui/image";
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
        <Box height="32px" width="32px" p="2" backgroundColor="gray.900" borderRadius="full">
          <Img width="16px" height="16px" src="/images/icon-logo.png" />
        </Box>

        <AboutDialog />
      </Container>
    </Container>
  );
};

export default NavBar;
