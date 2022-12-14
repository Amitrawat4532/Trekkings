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
        backgroundColor="#666161e3"
        flexDirection="column"
        px={["0", "0", "20", "20"]}
        pt={["6", "6", "50px", "50px"]}
        pb="4"
        // minHeight="75vh"
        justifyContent="space-around"
        gap="7"
        mx="auto"
        my="50px"
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
          <Text variant="destinationHeading2">
            HERE WE LIST OUR MOST POPULAR DESTINATIONS WE HAD AND FULL DETAILS
            ARE AS FOLLOWED
          </Text>
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
                    h="320px"
                    w="400px"
                    fallbackSrc="/images/plusicon.png"
                    objectFit="cover"
                  />
                  <Flex
                    height="64px"
                    width={["100%", "100%", "80%", "80%"]}
                    position="absolute"
                    justifyContent="space-evenly"
                    bottom="50px"
                  >
                    <Box
                      height={["50px", "55px", "60px", "64px"]}
                      width={["48px", "55px", "66px", "100px"]}
                      backgroundColor="#FF4417"
                      textAlign="center"
                      padding="3"
                    >
                      <Text
                        as="h1"
                        color="#FFFFFF"
                        fontWeight="400"
                        fontSize={["10px", "12px", "15px", "15px"]}
                        fontFamily="anton"
                      >
                        {el?.trekkers}
                      </Text>
                      <Text variant="destinationPerson">PERSON</Text>
                    </Box>

                    <Box
                      padding="3"
                      height={["50px", "55px", "60px", "64px"]}
                      width={["48px", "55px", "66px", "100px"]}
                      backgroundColor="#FF4417"
                      textAlign="center"
                    >
                      <Text
                        as="h1"
                        color="#FFFFFF"
                        fontWeight="400"
                        fontSize={["10px", "12px", "15px", "15px"]}
                        fontFamily="anton"
                      >
                        {el?.days}
                      </Text>
                      <Text variant="destinationDays">Days</Text>
                    </Box>
                    <Box
                      height={["50px", "55px", "60px", "64px"]}
                      width={["85px", "95px", "110px", "110px"]}
                      backgroundColor="#FFFFFF"
                      textAlign="center"
                      padding="3"
                    >
                      <Text
                        as="h1"
                        fontWeight="400"
                        fontSize={["10px", "12px", "15px", "15px"]}
                        color="#FF4417"
                        fontFamily="anton"
                      >
                        {el?.price} Rs
                      </Text>
                      <Text variant="destinationPerperson">PER PERSON</Text>
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
      </Flex>
    </>
  );
}
export default Destination;
