import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Popup from "./Popup";

const Home = () => {
  const ContactData = [
    {
      img: "/images/newfinalbg.png",
    },
    {
      img: "/images/swiperbg.png",
    },
    {
      img: "/images/swiperbg2.png",
    },
    {
      img: "/images/swiperbg3.png",
    },
    {
      img: "/images/swiperbg4.png",
    },
    {
      img: "/images/swiperbg5.png",
    },
    {
      img: "/images/swiperbg6.png",
    },
  ];
  return (
    <>
      {/* main container */}
      <Flex
        className="home_container"
        w="100%"
        h="110vh"
        maxH="110vh"
        justifyContent="center"
        alignItems="center"
        position="relative"
        flexDirection="column"
        backgroundImage={"url(./images/asset/finalBG.png)"}
        backgroundRepeat={"no-repeat"}
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        {/* heading container */}
        <Box>
          <Text variant="homeHeader1"
          //  pt={["0px", "0px", "130px", "130px"]}
           >
            MAKE THE
          </Text>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            initiallyVisible={true}
            animateOnce={true}
          >
            <Text
              variant="homeHeader2"
              textShadow="0px 0px 40px 0px rgba(0, 0, 0, 0.65)"
            >
              IMPOSSIBLE
            </Text>
          </AnimationOnScroll>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
