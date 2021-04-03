import { Container, Heading, Text } from "@chakra-ui/layout";
import { FC } from "react";
import useWindowSize from "../hooks/useWindowSize";

const PissOff: FC = () => {
  const { height } = useWindowSize();

  return (
    <Container display="flex" flexDirection="column" justifyContent="center" height={height}>
      <Heading mb="4">🛑 Stop right here!</Heading>

      <Text>
        No one writes code on their mobile phones 📱 so I didn't solve a problem 🖕 that never
        existed. Open you 💻 laptop. And yes, I'm lazy.
      </Text>
    </Container>
  );
};

export default PissOff;
