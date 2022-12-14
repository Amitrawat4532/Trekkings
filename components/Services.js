import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Services = () => {
  const Ourservices = [
    {
      header: "HIKING / TREKKING",
      paragraph:
        " WE PROVIDE YOU THE BEST AND THE SAFEST TREK AMONG ANY OTHER.WE PROVIDE OU WITH THE PROFESSIONAL TREKKER AND HELP YOU TO REACH THE DESTINY AND ENJOY YOUR ADVENTURE",
      image: "./images/gallery1.png",
    },
    {
      header: "TOURS & TRAVELS",
      paragraph:
        "WE WILL PROVIDE YOU WITH THE BEST TRAVEL FACOLITY SO THAT IT CAN HELP YOU TO REACH US AT VERY EASE AND WE ALSO HAVE STARTED HOME PICK UP AND DROP SERVICES WHICH WILL MAKE IT MORE EASE FOR YOU",
      image: "./images/gallery2.png",
    },
    {
      header: "CAMPING & LIVING",
      paragraph:
        "WE WILL PROVIDE YOU WITH YOUR WISH LIVING IN YOUR ADVENTURE WHEATHER YOU DECIDE TO LIVE IN TENT OR LUXURIOUS HOTEL IT TOTALLY DEPEND ON YOU .",
      image: "./images/gallery3.png",
    },
    {
      header: "FOOD AND BEVERAGES",
      paragraph:
        "THE FOOD WE PROVIDE WILL BE ABSOLUTELY 100 PERCENT FRESH AND HEALTHY CAUSE IT WILL HELP YOU TO MAKE YOUR TRIP OR ADVENTURE EASE SO THAT IT WONT AFFECT YOUR HEALT",
      image: "./images/gallery4.png",
    },
  ];
  return (
    <>
      {/* main container */}
      <Flex
        className="service_container"
        // backgroundImage="url('./images/map 2.png')"
        // backgroundSize="10%"
        background="radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent) 0% 0% / 20px 20px, radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent) 10px 10px / 20px 20px, linear-gradient(rgba(94, 60, 5, 0.02) 2px, transparent 2px) 0px -1px / 10px 10px, linear-gradient(90deg, rgba(94, 60, 5, 0.04) 2px, #ffffff 2px) -1px 0px / 10px 10px #ffffff"
        width="100vw"
        height="100%"
        justifyContent="start"
        alignItems="start"
        flexDirection="column"
        padding={["0px 20px", ",0px 40px", "20px 100px", "20px 140px"]}
        pb="80px !important"
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
              <AnimationOnScroll
                animateOnce={true}
                animateIn={
                  key % 2 === 0
                    ? "animate__fadeInLeftBig"
                    : "animate__fadeInRightBig"
                }
                key={key}
              >
                <Flex
                  flexDirection={key % 2 === 0 ? "row" : "row-reverse"}
                  gap={["20px", "20px", "40px", "50px"]}
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
                      maskSize: "134%",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                    src={el?.image}
                    alt="IGATPURIHILLSTREKTOURISM SERVICES"
                    objectPosition="center"
                    objectFit="cover"
                    width={["200px", "200px", "400px", "500px"]}
                    height={["200px", "200px", "294px", "294px"]}
                  />
                </Flex>
              </AnimationOnScroll>
            );
          })}
        </Box>
      </Flex>
    </>
  );
};
export default Services;
