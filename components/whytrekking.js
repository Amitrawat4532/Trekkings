import { Flex, Image, Text, HStack, Box } from "@chakra-ui/react";
import React from "react";

const Whytrekking = () => {
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
      {/* main container */}
      <Flex
        backgroundColor="black"
        width="100%"
        height="100%"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-around"
        // p={["2% 2%", "2% 4%", "3% 6%", "3% 7%"]}
        px={["10", "10", "20", "20"]}
        py="20px"
      >
        {/* header container */}
        <Flex
          height="100%"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems={["center", "center", "start", "start"]}
          position="relative"
          backgroundColor="black"
          // p={["2% 2%", "2% 4%", "3% 6%", "3% 7%"]}
        >
          <Text variant="whytrekkingHeader1">WHY TREKKING WITH US?</Text>

          <Text variant="whytrekkingHeader2">
            WE PROVIDE BEST HIKING AND TREKKING TO YOUR JOURNEY
          </Text>
        </Flex>

        {/* img container */}
        <Flex
          justifyContent="center"
          width="100%"
          pb="8"
          // height="20%"
        >
          <Image
            src="/images/adv2.jpg"
            borderRadius="41px"
            width="100%"
            height={["349px", "450px", "350px", "350px"]}
            objectFit="cover"
          />
        </Flex>

        <Flex justifyContent="space-evenly">
          {/* Feature Context */}
          <Flex
            // justifyContent={[
            //   "center",
            //   "center",
            //   "space-evenly",
            //   "space-evenly",
            // ]}
            alignItems="start"
            justifyContent="space-around"
            // flexDirection={["column", "column", "row", "row"]}
            flexDirection="row"
            flexWrap="wrap"
            gap="10"
          >
            {Testimonal_context.map((el, key) => {
              return (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  alignSelf="start"
                  key={key}
                >
                  <Flex gap="10px" alignItems="center">
                    {/* <Image src={el.icon_1} /> */}
                    <Text variant="testimonalHeader">{el.header}</Text>
                    <Image src={el.icon_2} height="20px" />
                  </Flex>
                  <Flex>
                    <Text variant="testimonalHeading">{el.heading}</Text>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Whytrekking;
