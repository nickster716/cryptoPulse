import { Box, Heading, Center, VStack, Text } from "@chakra-ui/react";
import Carousel from "./Carousel";
import ShinyText from "./ShinyText";

export default function Banner() {
  return (
    <>
      <Box
        w="100%"
        h="27em"
        bgImage="url('/banner2.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <Center>
          <VStack spacing="2rem">
            <ShinyText
              text="Crypto Pulse"
              disabled={false}
              speed={3}
              className="text-white mt-4 text-6xl"
            />
            {/* <Heading color="white" mt="1rem" size="4xl">
              Crypto Pulse
            </Heading> */}
            <Text color="white" mt="1rem" fontSize="lg">
              Your Trusted Source for Cryptocurrency Information and Analysis{" "}
            </Text>
            <Box w={{ sm: "40rem", md: "80rem" }} mt="1rem">
              <Carousel />
            </Box>
          </VStack>
        </Center>
      </Box>
    </>
  );
}
