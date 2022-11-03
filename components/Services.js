import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  const Ourservices = [
    {
      header: "HIKING / TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "./images/gallery1.png",
    },
    {
      header: "HIKING / TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "./images/gallery2.png",
    },
    {
      header: "HIKING / TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "./images/gallery3.png",
    },
    {
      header: "HIKING / TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "./images/gallery4.png",
    },
  ];
  return (
    <>
      {/* main container */}
      <Flex
        className="service_container"
        backgroundImage="url('./images/map 2.png')"
        backgroundSize="10%"
        width="100vw"
        height="100%"
        justifyContent="start"
        alignItems="start"
        flexDirection="column"
        padding={["20px 20px", ",20px 40px", "20px 100px", "20px 140px"]}
        gap="20px"
      >
        {/* header container */}
        <Flex
          position="relative"
          width="100%"
          heigh="100px"
          alignSelf="start"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="serviceHeader1">SERVICES</Text>

          <Text variant="serviceHeader2">TOUR TRAVEL FOOD AND STAY</Text>
        </Flex>

        {/* card container */}
        <Box width="100%">
          {Ourservices.map((el, key) => {
            return (
              <Flex
                flexDirection={key % 2 === 0 ? "row" : "row-reverse"}
                gap={["20px", "20px", "40px", "50px"]}
                key={key}
                alignItems="center"
                mx="1"
                my="12"
              >
                <Flex
                  flexDirection="column"
                  gap="20px"
                  flex="1"
                  width="100%"
                  alignItems={key % 2 === 0 ? "start" : "end"}
                >
                  <Text
                    variant="serviceHeader"
                    textAlign={key % 2 === 0 ? "start" : "end"}
                  >
                    {el.header}
                  </Text>
                  <Text
                    variant="serviceParagraph"
                    textAlign={key % 2 === 0 ? "start" : "end"}
                  >
                    {el.paragraph}
                  </Text>
                  <Button variant="whytrekkingButton">KNOW MORE</Button>
                </Flex>

                <Image
                  css={{
                    maskImage: "url('/images/stroke_mask.png')",
                    maskSize: "140%",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                  src={el?.image}
                  objectFit="cover"
                  width={["200px", "200px", "400px", "500px"]}
                  height={["200px", "200px", "294px", "294px"]}
                />
              </Flex>
            );
          })}
        </Box>
      </Flex>
    </>
  );
};
export default Services;
