import { Container, Heading, Link, Text } from "@chakra-ui/layout";
import { FC } from "react";
import DoodleAlert from "../assets/SVGs/DoodleAlert";
import useWindowSize from "../hooks/useWindowSize";

const PissOff: FC = () => {
  const { height } = useWindowSize();

  return (
    <Container
      display="flex"
      flexDirection="column"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      height={height}
    >
      <DoodleAlert size={0.4} />

      <Heading my="4">Attention!</Heading>

      <br />

      <Text>
        Please use a PC / tablet or switch to desktop mode for perfect
        experience. No one writes code on their mobile phones anyway.
      </Text>

      <br />

      <Link
        isExternal
        href="https://github.com/pulpmint/danpen/"
        color="blue.300"
      >
        Check the code on GitHub
      </Link>
    </Container>
  );
};

export default PissOff;
