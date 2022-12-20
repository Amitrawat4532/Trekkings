import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Box
        p="0"
        m="0"
        minH="100vh"
        overflow="hidden"
        position="relative"
        // bgImage="url('/images/space5.jpg')"
        // bgSize="100%"
        // bgPosition="bottom"
      >
        <Flex
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          p="6"
        >
          <Text fontSize="40px">About</Text>
        </Flex>
      </Box>
    </>
  );
};

export default AboutPage;
