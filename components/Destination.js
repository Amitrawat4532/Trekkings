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
      <Flex
        width="100%"
        height="100%"
        backgroundColor="#717171"
        flexDirection="column"
        px={["0", "0", "20", "20"]}
        py={["0", "0", "16", "16"]}
      >
        <Flex
          height="100%"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems={["center", "center", "center", "start"]}
          position="relative"
        >
          <Text
            as="h1"
            fontWeight="800"
            fontSize={["43px", "50px", "80px", "80px"]}
            color="#FFFFFF"
            opacity="0.19"
            p={["0", "30", "0", "0"]}
            m="0"
            textTransform="uppercase"
          >
            Destination
          </Text>

          <Text
            as="h3"
            position="absolute"
            fontSize={["15px", "15px", "20px", "20px"]}
            fontWeight="800"
            color="#FFFFFF"
            // textAlign="center"
            pl="1"
            m="0"
            // p={["31", "31", "0", "0"]}
          >
            MOST POPULAR TREKKING
          </Text>
        </Flex>

        <Flex
          width="100%"
          justifyContent={["center", "center", "center", "space-between"]}
          alignItem="center"
          paddingBottom="40px"
          px="20px"
          flexDirection={["column", "column", "column", "row"]}
        >
          <Text
            as="h2"
            fontSize={["18px", "20px", "22px", "24px"]}
            fontWeight="800"
            color="#3E3E3E"
            textAlign={["center", "center", "center", "start"]}
          >
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
                  width="100%"
                  position="absolute"
                  justifyContent="space-evenly"
                  bottom="50px"
                >
                  <Box
                    height="64px"
                    width="70px"
                    backgroundColor="#FF4417"
                    textAlign="center"
                    padding="9px 3px 0px 2px"
                  >
                    <Text
                      as="h1"
                      color="#FFFFFF"
                      fontWeight="800"
                      fontSize="15px"
                    >
                      {el.person}
                    </Text>
                    <Text
                      as="h1"
                      color="#FFFFFF"
                      fontWeight="800"
                      fontSize="15px"
                    >
                      PERSON
                    </Text>
                  </Box>

                  <Box
                    padding="9px 3px 0px 2px"
                    height="64px"
                    width="70px"
                    backgroundColor="#FF4417"
                    textAlign="center"
                  >
                    <Text
                      as="h1"
                      color="#FFFFFF"
                      fontWeight="800"
                      fontSize="15px"
                    >
                      {el.days}
                    </Text>
                    <Text
                      as="h1"
                      color="#FFFFFF"
                      fontWeight="800"
                      fontSize="15px"
                    >
                      Days
                    </Text>
                  </Box>
                  <Box
                    height="64px"
                    width="110px"
                    backgroundColor="#FFFFFF"
                    textAlign="center"
                    padding="9px 3px 0px 2px"
                  >
                    <Text
                      as="h1"
                      fontWeight="800"
                      fontSize="15px"
                      color="#FF4417"
                    >
                      {el.price} Rs
                    </Text>
                    <Text
                      as="h1"
                      fontWeight="800"
                      fontSize="15px"
                      color="#FF4417"
                    >
                      PER PERSON
                    </Text>
                  </Box>
                </Flex>
                <Text
                  fontWeight="800"
                  fontSize="20px"
                  color="#FF3606"
                  alignItems="center"
                  // position="absolute"
                >
                  START EXPLORING--
                </Text>
              </Flex>
              //   **************
            );
          })}
        </Flex>
        <Text
          fontSize={["13px", "19px", "25px", "25px"]}
          fontWeight="800"
          textAlign="center"
          color="#3E3E3E"
          p="40px"
        >
          &#34;THE BEST JOURNEY IN THE LIFE ARE THOSE THAT ANSWER QUESTION YOU
          NEVER THOUGHT TO ASK &#34;
        </Text>
      </Flex>
    </>
  );
}
export default Destination;
