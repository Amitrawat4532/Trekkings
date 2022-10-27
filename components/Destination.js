import { Box, Text, Flex, Button, Image, Span } from "@chakra-ui/react";
import React from "react";

function Destination() {
  const Gallery = [
    {
      img: "/images/card1.png",
      person: "10",
      days: "4",
      price: "4000",
    },
    {
      img: "/images/card2.png",
      person: "10",
      days: "8",
      price: "4000",
    },
    {
      img: "/images/card3.png",
      person: "10",
      days: "4",
      price: "3000",
    },
  ];

  return (
    <>
      {/* main container */}
      <Flex
        width="100%"
        height="100%"
        backgroundColor="#717171"
        flexDirection="column"
        px={["0", "0", "20", "20"]}
        py={["0", "0", "16", "16"]}
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
          paddingBottom="40px"
          px="20px"
          flexDirection={["column", "column", "column", "row"]}
        >
          <Text variant="destinationHeading2">
            HERE WE LIST OUR MOST POPULAR DESTINATIONS WE HAD AND FULL DETAILS
            ARE AS FOLLOWED
          </Text>
          <Button
            backgroundColor="#FF3606"
            color="#FFFFFF"
            width={["100px", "100px", "159px", "159px"]}
            borderRadius={["30px", "20px", "0px", "0px"]}
            p={["20px", "30px", "30px", "30px"]}
            m={["8px auto", "8px auto", "8px auto", "0"]}
          >
            View All
          </Button>
        </Flex>

        {/* card container */}
        <Flex justifyContent="space-between" flexWrap="wrap" gap="8">
          {Gallery.map((el, id) => {
            return (
              //   *********
              <Flex
                key={"id"}
                // width="392.75px"
                // height="100%"
                width={["80%", "80%", "392px", "392px"]}
                height="100%"
                position="relative"
                justifyContent="end"
                alignItems="center"
                flexDirection="column"
                //   pb="10px"
                my="4"
                padding="auto"
                margin="auto"
              >
                <Image src={el.img} />
                <Flex
                  height="64px"
                  width={["95%", "90%", "76%", "100%"]}
                  position="absolute"
                  justifyContent="space-evenly"
                  bottom="50px"
                >
                  <Box
                    height={["50px", "55px", "60px", "64px"]}
                    width={["48px", "55px", "66px", "70px"]}
                    backgroundColor="#FF4417"
                    textAlign="center"
                    padding="9px 3px 0px 2px"
                  >
                    <Text
                      as="h1"
                      color="#FFFFFF"
                      fontWeight="400"
                      fontSize={["10px", "12px", "15px", "15px"]}
                      fontFamily="anton"
                    >
                      {el.person}
                    </Text>
                    <Text variant="destinationPerson">PERSON</Text>
                  </Box>

                  <Box
                    padding="9px 3px 0px 2px"
                    height={["50px", "55px", "60px", "64px"]}
                    width={["48px", "55px", "66px", "70px"]}
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
                      {el.days}
                    </Text>
                    <Text variant="destinationDays">Days</Text>
                  </Box>
                  <Box
                    height={["50px", "55px", "60px", "64px"]}
                    width={["85px", "95px", "110px", "110px"]}
                    backgroundColor="#FFFFFF"
                    textAlign="center"
                    padding="9px 3px 0px 2px"
                  >
                    <Text
                      as="h1"
                      fontWeight="400"
                      fontSize={["10px", "12px", "15px", "15px"]}
                      color="#FF4417"
                      fontFamily="anton"
                    >
                      {el.price} Rs
                    </Text>
                    <Text variant="destinationPerperson">PER PERSON</Text>
                  </Box>
                </Flex>
                <Text variant="destinationStartexploring">
                  START EXPLORING--
                </Text>
              </Flex>
              //   **************
            );
          })}
        </Flex>
        <Text variant="destinationHeading3">
          <Text as="span" fontSize="50px" color="red" fontFamily="anton">
            &#34;
          </Text>
          THE BEST JOURNEY IN THE LIFE ARE THOSE THAT ANSWER QUESTION YOU NEVER
          THOUGHT TO ASK
        </Text>
      </Flex>
    </>
  );
}
export default Destination;
