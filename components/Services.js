import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
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
                  Explore More
                  <Box ml="8px">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9378 16.082L16.4378 10.582C16.5211 10.4987 16.5803 10.4084 16.6153 10.3112C16.6503 10.2139 16.6675 10.1098 16.667 9.99867C16.667 9.88756 16.6495 9.78339 16.6145 9.68617C16.5795 9.58894 16.5206 9.49867 16.4378 9.41533L10.9378 3.91533C10.785 3.76256 10.5939 3.68283 10.3645 3.67617C10.135 3.6695 9.93726 3.74922 9.77115 3.91533C9.60448 4.06811 9.51753 4.25922 9.51031 4.48867C9.50309 4.71811 9.58309 4.91589 9.75031 5.082L13.8336 9.16533H4.52115C4.28504 9.16533 4.08698 9.24533 3.92698 9.40533C3.76698 9.56533 3.68726 9.76311 3.68781 9.99867C3.68781 10.2348 3.76754 10.4328 3.92698 10.5928C4.08642 10.7528 4.28448 10.8326 4.52115 10.832H13.8336L9.75031 14.9153C9.59754 15.0681 9.51753 15.2626 9.51031 15.4987C9.50309 15.7348 9.58309 15.9292 9.75031 16.082C9.90309 16.2487 10.0975 16.332 10.3336 16.332C10.5698 16.332 10.7711 16.2487 10.9378 16.082Z" fill="white"/>
</svg>

                  </Box>
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
