import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Gallery = () => {
  const gallery = [
    {
      image: "./images/card1.png",
    },
    {
      image: "./images/card2.png",
    },
    {
      image: "./images/card3.png",
    },
    {
      image: "./images/card1.png",
    },
  ];
  return (
    <>
      <Flex width="100vw" height="100%">
        <Flex
          position="relative"
          width="100%"
          heigh="100px"
          alignSelf="start"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            as="h1"
            fontWeight="800"
            fontSize={["45px", "60px", "110px", "124px"]}
            letterSpacing="0.04em"
            color="#000000"
            opacity="0.19"
            padding="0px 20px"
          >
            JOURNEY
          </Text>

          <Text
            as="h3"
            fontWeight="800"
            fontSize={["10px", "15px", "20px", "30px"]}
            letterSpacing="0.04em"
            color="black"
            position="absolute"
            textAlign="center"
          >
            GALLERY F THE TOURS
          </Text>
        </Flex>
      </Flex>
      <Flex
        backgroundColor="white"
        flexWrap="wrap"
        width="100%"
        justifyContent="space-evenly"
        // gap="0px"
      >
        {gallery.map((el, key) => {
          return (
            <Image
              key={key}
              src={el.image}
              width={["90%", "300px", "550px", "609px"]}
              my="10px"
              height="340px"
            />
          );
        })}
      </Flex>
    </>
  );
};
export default Gallery;
