import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

function About() {
  const cards = [
    {
      img: "/images/location.png",
      header: "SECRET LOCATIONS",
      description:
        " We xplore for the fun and provide you with the best and beutiful locations available here so that you can add a new chapter of your adventure with beautiful memories",
    },
    {
      img: "/images/location.png",
      header: "SECRET LOCATIONS",
      description:
        " We xplore for the fun and provide you with the best and beutiful locations available here so that you can add a new chapter of your adventure with beautiful memories",
    },
    {
      img: "/images/location.png",
      header: "SECRET LOCATIONS",
      description:
        " We xplore for the fun and provide you with the best and beutiful locations available here so that you can add a new chapter of your adventure with beautiful memories",
    },
  ];

  return (
    <>
      {/* main container */}
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        backgroundImage="url('/images/bg1.png')"
        py="10"
        flexWrap="wrap"
        gap="100px 0"
        // filter="blur(2px)"
        backgroundSize="80%"
        backgroundPosition="center"
        bgRepeat="no-repeat"
      >
        {/* card container */}
        {cards.map((el, id) => {
          return (
            <Flex
              key={id}
              width={["80%", "80%", "400px", "400px"]}
              height="100%"
              justifyContent="center"
              alignItems="center"
              backgroundColor="white"
              direction="column"
              border="1px solid #949494"
              boxShadow="15px 15px 8px rgba(0, 0, 0, 0.25)"
              borderRadius="30px"
              p="20px"
              m="auto"
              position="relative"
            >
              <Box
                width="90px"
                height="121px"
                position={["absolute", "absolute", "relative", "relative"]}
                top={["-20%", "-20%", "0%", "0%"]}
              >
                <Image src="/images/location.png" />
              </Box>

              <Flex
                alignItems="center"
                flexDirection="column"
                gap="10px"
                justifyContent="center"
                p="20px"
                pt={["70px", "70px", "20px", "20px"]}
                // transform={["translatex(-20%)"]}
              >
                <Text variant="aboutHeader">SECRET LOCATIONS</Text>
                <Text variant="aboutParagraph">
                  We xplore for the fun and provide you with the best and
                  beutiful locations available here so that you can add a new
                  chapter of your adventure with beautiful memories
                </Text>
                <Text variant="aboutbutton">READ MORE</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>

      {/* ***************************div end************************8 */}
      <Flex
        gap="30px"
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="center"
        py="6"
      >
        <Text
          as="h1"
          fontWeight="400"
          fontSize="23px"
          padding="0 0 0 45px"
          letterSpacing="0.01em"
          color="#848383"
          fontFamily="anton"
          textAlign="center"
        >
          Dont hesistate to contact us for more details
        </Text>
        <Text
          as="a"
          fontWeight="400"
          fontSize="23px"
          color="#FF3606"
          padding="0 0 0 45px"
          fontFamily="anton"
          textAlign="center"
        >
          EXPLORE ALL TREKKING--
        </Text>
      </Flex>
    </>
  );
}

export default About;
