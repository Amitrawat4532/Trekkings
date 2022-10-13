import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  const Ourservices = [
    {
      header: "HIKING/TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "./images/gallery1.png",
    },
    {
      header: "HIKING/TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "./images/gallery2.png",
    },
    {
      header: "HIKING/TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "./images/gallery3.png",
    },
    {
      header: "HIKING/TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "./images/gallery4.png",
    },
  ];
  return (
    <>
      {" "}
      <Flex
        backgroundImage="url('./images/map 2.png')"
        backgroundSize="20%"
        width="100vw"
        height="100%"
        justifyContent="start"
        aligItem="start"
        flexDirection="column"
        padding={["20px 20px", ",20px 40px", "20px 140px", "20px 140px"]}
        gap="20px"
      >
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
            fontSize={["45px", "60px", "110px", "124px"]}
            letterSpacing="0.04em"
            color="#000000"
            opacity="0.19"
            padding="0px 20px"
          >
            SERVICES
          </Text>

          <Text
            as="h3"
            fontWeight="800"
            fontSize={["10px", "15px", "20px", "30px"]}
            letterSpacing="0.04em"
            color="#FF3606"
            position="absolute"
            textAlign="center"
          >
            TOUR TRAVEL FOOD AND STAY
          </Text>
        </Flex>

        {Ourservices.map((el, key) => {
          return (
            <Flex
              flexDirection={key % 2 === 0 ? "row" : "row-reverse"}
              gap={["10px", "20px", "40px", "50px"]}
              key={key}
            >
              <Flex flexDirection="column" gap="20px" flex="1">
                <Text
                  as="h1"
                  fontSize={["20px", "25px", "33px", "33px"]}
                  fontWeight="800"

                  //   p="10px 0px 10px 10px"
                >
                  {el.header}
                </Text>
                <Text
                  as="h4"
                  fontSize={["12px", "12px", "15px", "18px"]}
                  fontWeight="400"
                  color="#8B8B8B"
                  // p="10px 0px 20px 0px"
                >
                  {el.paragraph}
                </Text>
                <Button
                  background="#FF3606"
                  borderRadius="10px"
                  width="170px"
                  height="30px"
                  fontSize={["10px", "12px", "18px", "18px"]}
                  color="#FFFFFF"
                  padding="0px 0px"
                >
                  KNOW MORE
                </Button>
              </Flex>
              <Flex
                flex="1"
                gap="40px"
                width="800px"
                height={["170px", "178px", "294px", "294px"]}
                // padding="10px 10px 0px 13px"
              >
                <Image src={el.image} />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};
export default Services;
