import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

const Services = () => {
  const Ourservices = [
    {
      header: "HIKING / TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "/images/service1.png",
    },
    {
      header: "TOURS & TRAVELS",
      paragraph:
        "WE WILL PROVIDE YOU WITH THE BEST TRAVEL FACOLITY SO THAT IT CAN HELP YOU TO REACH US AT VERY EASE AND WE ALSO HAVE STARTED HOME PICK UP AND DROP SERVICES WHICH WILL MAKE IT MORE EASE FOR YOU",
      image: "/images/service2.png",
    },
    {
      header: "CAMPING & LIVING",
      paragraph:
        "WE WILL PROVIDE YOU WITH YOUR WISH LIVING IN YOUR ADVENTURE WHEATHER YOU DECIDE TO LIVE IN TENT OR LUXURIOUS HOTEL IT TOTALLY DEPEND ON YOU .",
      image: "/images/service3.png",
    },
    {
      header: "FOOD AND BEVERAGES",
      paragraph:
        "THE FOOD WE PROVIDE WILL BE ABSOLUTELY 100 PERCENT FRESH AND HEALTHY CAUSE IT WILL HELP YOU TO MAKE YOUR TRIP OR ADVENTURE EASE SO THAT IT WONT AFFECT YOUR HEALT",
      image: "/images/service4.png",
    },
  ];
  return (
    <>
      {/* main container */}
      <Flex w="100vw" h="100%" flexDirection="column" pb="94px" pt="50px">
        {/* header container */}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems={["center", "center", "center", "center"]}
          pb={["20px", "20px", "0px", "0px"]}
        >
          <Text variant="serviceHeader1">TOUR TRAVEL FOOD AND STAY</Text>
          <Text variant="serviceHeader">SERVICES</Text>
        </Flex>

        <Flex
          h="100%"
          w="100vw"
          bgColor="white"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={["200px", "200px", "20px", "20px"]}
          pt={["140px", "120px", "80px", "80px"]}
        >
          {Ourservices?.map((el, id) => {
            return (
              <Flex
                h={["281px", "281px", "546px", "546px"]}
                w="295px"
                bgColor="#210011"
                justifyContent="space-around"
                alignItems="center"
                borderRadius="20px"
                padding="30px 40px"
                flexDirection="column"
                position="relative"
              >
                <Box
                  position={["absolute", "absolute", "unset", "unset"]}
                  top={["-110px", "-110px", "0", "0"]}
                  // border="2px solid red"
                  borderRadius={["50%", "50%", "0%", "0%"]}
                  overflow="hidden"
                  w={["184px", "184px", "216px", "216px"]}
                  h={["184px", "184px", "216px", "216px"]}
                >
                  <Image src={el?.image} height="216px" width="216px" />
                </Box>

                <Text mt={["50px", "50px", "0", "0"]} variant="serviceHeader2">
                  {el?.header}
                </Text>
                <Text variant="serviceParagraph">{el?.paragraph}</Text>
                <Button
                  variant="serviceButton"
                  position={["absolute", "absolute", "relative", "relative"]}
                  bottom={["-20px", "-20px", "0px", "0px"]}
                >
                  Explore More{" "}
                  <Text as="span" fontSize="20px" ml="8px">
                    &rarr;
                  </Text>{" "}
                </Button>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};
export default Services;
