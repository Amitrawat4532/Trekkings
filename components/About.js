import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  const cards = [
    {
      img: "/images/location.png",
      header: "SECRET LOCATIONS",
      description:
        " We xplore for the fun and provide you with the best and beutiful locations available here so that you can add a new chapter of your adventure with beautiful memories",
    },
    {
      img: "/images/safe_adventure.png",
      header: "SAFE ADVENTURE",
      description:
        " We take a spical care with our team of our beloved customer so they dont face any difficulties while the journey and we take the whole responsibilities during the trek",
    },
    {
      img: "/images/professional_hiker.png",
      header: "PROFESSIONAL HIKERS",
      description:
        "We prefer to have an expert for our customer to guide them the best possible way and help them to make the route as easy for all our customer",
    },
  ];

  return (
    <>
      {/* main container */}

      <Flex
        className="about_container"
        width="100%"
        minHeight="70vh"
        height="100%"
        justifyContent="center"
        backgroundImage="url('/images/bg1.png')"
        py="10"
        flexWrap="wrap"
        gap="80px"
        backgroundSize="70%"
        backgroundPosition="center"
        bgRepeat="no-repeat"
        // border="1px solid red"
      >
        {/* card container */}
        {cards.map((el, id) => {
          return (
            <AnimationOnScroll animateIn="animate__bounceIn" key={id}>
              <Flex
                width={["80%", "80%", "350px", "350px"]}
                height="100%"
                maxHeight="400px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="white"
                direction="column"
                border="1px solid #949494"
                boxShadow="15px 15px 8px rgba(0, 0, 0, 0.25)"
                borderRadius="30px"
                p={["10px", "10px", "20px", "20px"]}
                m="auto 0"
                position="relative"
              >
                <Box
                  width="90px"
                  height="121px"
                  position={["absolute", "absolute", "relative", "relative"]}
                  top={["-20%", "-20%", "0%", "0%"]}
                >
                  <Image
                    src={el?.img}
                    objectFit="cover"
                    height="100%"
                    w="100%"
                    bg="transparent"
                  />
                </Box>

                <Flex
                  alignItems="center"
                  flexDirection="column"
                  gap="10px"
                  justifyContent="center"
                  p={["10px", "10px", "20px", "20px"]}
                  pt={["70px", "70px", "20px", "20px"]}
                  // transform={["translatex(-20%)"]}
                >
                  <Text variant="aboutHeader">{el?.header}</Text>
                  <Text variant="aboutParagraph">{el?.description}</Text>
                  <Text variant="aboutbutton" fontWeight="600">
                    READ MORE &rarr;
                  </Text>
                </Flex>
              </Flex>
            </AnimationOnScroll>
          );
        })}
      </Flex>

      {/* ***************************div end************************8 */}
      <Flex
        gap="30px"
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="center"
        py="6"
        px="2"
      >
        <Text
          as="h1"
          fontWeight="400"
          fontSize="23px"
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
          fontFamily="anton"
          textAlign="center"
        >
          EXPLORE ALL TREKKING &rarr;
        </Text>
      </Flex>
    </>
  );
}

export default About;
