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
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        backgroundImage="url('/images/bg1.png')"
        pt="10"
        pb="100px"
        flexWrap="wrap"
        gap="50px"
        // padding="63px 20px 60px 30px"
        backgroundSize="contain"
      >
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
              py="20px"
              p="auto"
              m="auto"
            >
              <Box width="90px" height="121px">
                <Image src="/images/location.png" />
              </Box>

              <Flex
                alignItems="center"
                flexDirection="column"
                gap="10px"
                justifyContent="center"
                p="20px 20px 20px 23px"

                // transform={["translatex(-20%)"]}
              >
                <Text as="h3" fontWeight="800" fontSize="23px" color="#000000">
                  SECRET LOCATIONS
                </Text>
                <Text as="h4" fontSize="15px" fontWeight="400">
                  We xplore for the fun and provide you with the best and
                  beutiful locations available here so that you can add a new
                  chapter of your adventure with beautiful memories
                </Text>
                <Text as="a" color="#FF3606" fontWeight="800" fontSize="23px">
                  READ MORE
                </Text>
              </Flex>
            </Flex>
          );
        })}

        {/* ***************************div end************************8 */}
        <Flex gap="30px" flexDirection={["column", "column", "row", "row"]}>
          <Text
            as="h1"
            fontWeight="500"
            fontSize="23px"
            padding="0 0 0 45px"
            letterSpacing="0.01em"
            color="#848383"
          >
            Dont hesistate to contact us for more details
          </Text>
          <Text
            as="a"
            fontWeight="800"
            fontSize="23px"
            color="#FF3606"
            padding="0 0 0 45px"
          >
            EXPLORE ALL TREKKING--
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default About;
