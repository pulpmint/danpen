import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

const PissOff: FC = () => {
  return (
    <Container
      className="hello"
      display="flex"
      flexDirection="column"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      minH="inherit"
    >
      <Box my="16">
        <Box mb="8">
          <Image
            src="/images/stuck.png"
            quality={100}
            width={216}
            height={216}
          />
        </Box>

        <Heading>Ooops!</Heading>

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
      </Box>
    </Container>
  );
};

export default PissOff;
