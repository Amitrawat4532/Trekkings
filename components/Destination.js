import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Destination({ destination }) {
  return (
    <>
      {/* main container */}
      <Flex
        // width={["96%", "96%", "92%", "92%"]}
        h="100%"
        w={["100%", "100%", "96%", "96%"]}
        backgroundColor="#717171"
        flexDirection="column"
        px={["0", "0", "20", "20"]}
        pb="0"
        // minHeight="75vh"
        justifyContent="space-around"
        gap="3"
        mx="auto"
        pt="30px"
        borderRadius={["0px", "0px", "50px", "50px"]}
        // boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
        // borderRadius="3% 3% 3% 3% / 50% 50% 50% 50%"
      >
        {/* header container */}
        <Flex
          height="100%"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems={["center", "center", "center", "start"]}
          position="relative"
        >
          <Text variant="destinationHeader">Destination</Text>

          <Text variant="destinationHeading1">MOST POPULAR TREKKING</Text>
        </Flex>
        {/* header end */}
        <Flex
          width="100%"
          justifyContent={["center", "center", "center", "space-between"]}
          alignItems="center"
          // paddingBottom={["20px", "20px", "40px", "40px"]}
          px={["20px", "20px", "0px", "0px"]}
          flexDirection={["column", "column", "column", "row"]}
        >
          {/* <Button
            backgroundColor="#FF3606"
            color="#FFFFFF"
            width={["100px", "100px", "159px", "159px"]}
            borderRadius={["30px", "20px", "0px", "0px"]}
            p={["20px", "30px", "30px", "30px"]}
            m={["8px auto", "8px auto", "8px auto", "0"]}
          >
            View All
          </Button> */}
        </Flex>

        {/* card container */}

        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          // animateOut="animate__fadeOutUP"
        >
          <Flex
            justifyContent="space-between"
            width="100%"
            // flexWrap="wrap"
            gap="8"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
                height: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
                marginTop: "15px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "gray",
                borderRadius: "24px",
              },
            }}
            scrollSnapType="x mandatory"
            px={["8", "8", "0", "0"]}
            mb="10"
          >
            {destination?.map((el, id) => {
              return (
                <Flex
                  key={id}
                  // width="392.75px"
                  // height="100%"
                  // flex="1"
                  width={["100%", "100%", "500px", "500px"]}
                  height="100%"
                  position="relative"
                  justifyContent="end"
                  alignItems="center"
                  flexDirection="column"
                  //   pb="10px"
                  my="4"
                  padding="auto"
                  margin="auto"
                  scrollSnapAlign="center"
                >
                  <Image
                    src={el?.thumbnail}
                    alt={el?.location}
                    h="380px"
                    w="500px"
                    transition=".2s all ease"
                    fallbackSrc="/images/plusicon.png"
                    objectFit="cover"
                    filter="brightness(0.8)"
                    _hover={{
                      filter: "brightness(1)",
                      transform: "scale(1.05)",
                      transition: ".2s all ease",
                    }}
                  />
                  <Flex
                    height="64px"
                    width={["100%", "100%", "80%", "80%"]}
                    position="absolute"
                    justifyContent="space-evenly"
                    bottom="50px"
                  >
                    <Box
                      height={["50px", "50px", "64px", "64px"]}
                      width={["60px", "60px", "100px", "100px"]}
                      backgroundColor="#FF4417"
                      textAlign="center"
                      px="3"
                      py="1"
                    >
                      <Text
                        as="p"
                        color="#FFFFFF"
                        fontWeight="400"
                        fontSize={["18px", "18px", "22px", "22px"]}
                        fontFamily="anton"
                      >
                        {el?.trekkers}
                      </Text>
                      <Text variant="destinationSecondaryText">PERSON</Text>
                    </Box>

                    <Box
                      px="3"
                      py="1"
                      height={["50px", "50px", "64px", "64px"]}
                      width={["60px", "60px", "100px", "100px"]}
                      backgroundColor="#FF4417"
                      textAlign="center"
                    >
                      <Text
                        as="p"
                        color="#FFFFFF"
                        fontWeight="400"
                        fontSize={["18px", "18px", "22px", "22px"]}
                        fontFamily="anton"
                      >
                        {el?.days}
                      </Text>
                      <Text variant="destinationSecondaryText">Days</Text>
                    </Box>
                    <Box
                      height={["50px", "50px", "64px", "64px"]}
                      width={["95px", "95px", "110px", "110px"]}
                      backgroundColor="#FFFFFF"
                      textAlign="center"
                      px="3"
                      py="1"
                    >
                      <Text
                        as="p"
                        fontWeight="400"
                        fontSize={["18px", "18px", "22px", "22px"]}
                        color="#FF4417"
                        fontFamily="anton"
                      >
                        {el?.price} Rs
                      </Text>
                      <Text variant="destinationSecondaryText2">
                        PER PERSON
                      </Text>
                    </Box>
                  </Flex>
                  <Text
                    variant="destinationStartexploring"
                    mt="2"
                    minWidth="300px"
                  >
                    START EXPLORING&rarr;
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </AnimationOnScroll>
        <Text variant="destinationHeading2">
          HERE WE LIST OUR MOST POPULAR DESTINATIONS WE HAD AND FULL DETAILS ARE
          AS FOLLOWED{" "}
          <Text as="span" bottom="5px" position="relative">
            &#8594;
          </Text>
        </Text>
      </Flex>
    </>
  );
}
export default Destination;
