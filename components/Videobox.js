import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Videobox = () => {
  return (
    <>
      <Flex
        width="100%"
        height="507px"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image
          src="./images/finalGallary6.png"
          alt="IGATPURIHILLSTREKTOURISM VIDEO THUMBNAIL"
          width="100%"
          height="100%"
        />
        <Text
          position="absolute"
          textColor="white"
          fontSize="50px"
          textAlign="center"
          fontFamily="anton"
        >
          EXPLORE FULL OUR BLOGS & TRIP IDEAS FOR HIKING
        </Text>
        
      </Flex>
    </>
  );
};
export default Videobox;
