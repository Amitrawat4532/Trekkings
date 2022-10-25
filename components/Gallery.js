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
      {/* header container */}
      <Flex width="100vw" height="100%">
        <Flex
          position="relative"
          width="100%"
          heigh="100px"
          alignSelf="start"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="galleryHeader1">JOURNEY</Text>

          <Text variant="galleryHeader2">GALLERY F THE TOURS</Text>
        </Flex>
      </Flex>
      {/* header container end */}

      {/* CArd container */}
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
              width={["90%", "80%", "550px", "609px"]}
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
