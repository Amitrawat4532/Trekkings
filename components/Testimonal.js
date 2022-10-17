import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Testimonal = () => {
  const Testimonal_context = [
    {
      icon_1: "./images/tickicon.png",
      header: "15",
      icon_2: "./images/plusicon.png",
      heading: "Years Of Experience",
    },
    {
      icon_1: "./images/tickicon.png",
      header: "60",
      icon_2: "./images/plusicon.png",
      heading: "Years Of best Destination",
    },

    {
      icon_1: "./images/tickicon.png",
      header: "30",
      icon_2: "./images/plusicon.png",
      heading: " Certified guides",
    },

    {
      icon_1: "./images/tickicon.png",
      header: "3,210",
      icon_2: "./images/plusicon.png",
      heading: "Satisfied Hikers",
    },
  ];
  return (
    <>
      {/* Header */}
      <Flex width="100%" height="100%" background="#606060">
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
            fontSize={["43px", "60px", "90px", "100px"]}
            color="#000000"
            opacity="0.19"
          >
            TESTIMONALS
          </Text>

          <Text
            as="h3"
            fontWeight="800"
            fontSize={["12px", "15px", "20px", "30px"]}
            color="#FF3606"
            position="absolute"
            textAlign="center"
          >
            WHAT THEY SAY ABOUT US
          </Text>
        </Flex>
      </Flex>
      {/* $$$$$$$$$$$$$testimonal container$$$$$$$$$$$$4 */}
      <Flex background="#606060">
        <Image
          src="./images/leftarrow.png"
          width={["60px", "65px", "76px", "76px"]}
          height={["62px", "68px", "78px", "78px"]}
          alignSelf="center"
        />
        {/* Main Testimonal */}
        <Flex
          width="100%"
          background="#606060"
          justifyContent="center"
          gap="5%"
          padding={["20px", "30px", "40px", "70px"]}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Flex
            width={["100%", "100%", "240px", "30%"]}
            height="100%"
            justifyContent="center"
            position="relative"
          >
            <Image
              src="./images/testimonal.png"
              //  width="100%"
              //  height="100%"
              width={["200px", "200px", "240px", "300px"]}
              height={["200px", "200px", "230px", "278px"]}
            />
            <Box
              width={["62px", "62px", "62px", "65px"]}
              height={["67px", "67px", "67px", "73px"]}
              borderRadius="50px"
              background="#ABAAAA"
              p="25px 15px 0px 20px"
              position="absolute"
              right="0px"
              top="0px"
            >
              <Image src="./images/uppercoma.png" />
            </Box>
          </Flex>
          <Flex
            width={["100%", "100%", "60%", "68%"]}
            flexDirection="column"
            justifyContent="center"
          >
            <Text
              as="h3"
              color=" #FFFFFF"
              fontSize="23px"
              textAlign={["center", "center", "start", "start"]}
            >
              Trekking has always helped me in getting mental peace and a
              peaceful time to spend with inner me. and i would specially thanx
              to this company for helping me to connect with my inner spirit.
            </Text>
            <Flex
              width="100%"
              justifyContent={["center", "center", "start", "start"]}
            >
              <Image src="./images/stars.png" width="162px" height="42px" />
            </Flex>
            <Text
              as="h2"
              color=" black"
              fontSize="35px"
              textAlign={["center", "center", "start", "start"]}
            >
              NELSON MANDELA
            </Text>
            <Text
              as="h2"
              color=" #FFFFFF"
              fontSize="23px"
              textAlign={["center", "center", "start", "start"]}
            >
              PRESIDENT OF AMERICA
            </Text>
          </Flex>
        </Flex>
        <Image
          src="./images/rightarrow.png"
          width={["60px", "65px", "76px", "76px"]}
          height={["62px", "68px", "78px", "78px"]}
          alignSelf="center"
        />
      </Flex>

      {/* Feature Context */}
      <Flex
        justifyContent={["center", "center", "space-evenly", "space-evenly"]}
        flexDirection={["column", "column", "row", "row"]}
      >
        {Testimonal_context.map((el, key) => {
          return (
            <Flex flexDirection="column" alignItems="center" key={key}>
              <Flex gap="10px" alignItems="center">
                <Image src={el.icon_1} />
                <Text
                  fontWeight="400"
                  fontSize="45px"
                  letterpSacing="0.02em"
                  color="#000000"
                >
                  {el.header}
                </Text>
                <Image src={el.icon_2} height="20px" />
              </Flex>
              <Flex>
                <Text
                  fontWeight="800"
                  fontSize={["12px", "15px", "20px", "23px"]}
                  letterSpacing="0.01em"
                  color="#000000"
                >
                  {el.heading}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};
export default Testimonal;
