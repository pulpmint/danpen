import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";
import AboutDialog from "./AboutDialog";
import CustomButton from "./CustomButton";

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
          <CustomButton
            buttonProps={{ fontSize: "xs", px: "4" }}
            label="Coming Soon!"
          >
            Keyboard Shortcuts
          </CustomButton>
        </Box>
      </Container>
    </Container>
  );
};

export default NavBar;
