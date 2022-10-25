import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Videobox = () => {
  return (
    <>
      <Flex
        width="100%"
        height="100%"
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Image src="./images/videobox.png" width="100%" height="200px" />
        <Text
          position="absolute"
          textColor="orange"
          fontSize="50px"
          textAlign="center"
          fontFamily="anton"
        >
          Yha pe video
        </Text>
      </Flex>
    </>
  );
};
export default Videobox;
