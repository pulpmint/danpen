import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";
import { Maximize, Minimize } from "react-feather";
import usePanelSettings from "../hooks/usePanelSettings";
import AboutDialog from "./AboutDialog";
import CustomButton from "./CustomButton";

const NavBar: FC = () => {
  const { maxWidth, setMaxWidth } = usePanelSettings();

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
          <CustomButton buttonProps={{ fontSize: "xs", px: "4" }} label="Coming Soon!">
            Keyboard Shortcuts
          </CustomButton>

          <CustomButton
            buttonProps={{
              p: "0",
              onClick: () => setMaxWidth(!maxWidth)
            }}
            label={!!maxWidth ? "Minimize" : "Maximize"}
          >
            {!!maxWidth ? <Minimize size={16} /> : <Maximize size={16} />}
          </CustomButton>
        </Box>
      </Container>
    </Container>
  );
};

export default NavBar;
