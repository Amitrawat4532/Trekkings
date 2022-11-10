import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const StartLoader = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="fixed"
      w="100vw"
      h="100vh"
      bg="white"
      zIndex="200"
    >
      <video autoPlay loop muted className="startLoader">
        <source src="/images/start.mp4" type="video/mp4"></source>
      </video>
    </Flex>
  );
};

export default StartLoader;
