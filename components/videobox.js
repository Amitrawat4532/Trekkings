import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Videobox = () => {
  return (
    <>
      <Flex
        width="100vw"
        height="100%"
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Image src="./images/videobox.png" width="100vw" height="500px" />
        <Text position="absolute" textColor="orange" fontSize="90px">
          Yha pe video
        </Text>
      </Flex>
    </>
  );
};
export default Videobox;
