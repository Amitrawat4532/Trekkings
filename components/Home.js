import { Box, Flex, Image, Text, Img } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Home = () => {
  return (
    <>
      {/* main container */}
      <Flex
        className="home_container"
        w="100vw"
        h={["100vh", "100vh", "120vh", "120vh"]}
        bgImg={[
          "url('/images/bg6.png')",
          "url('/images/bg6.png')",
          "url('/images/background_final.png')",
          "url('/images/background_final.png')",
        ]}
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
        // flexDirection="column"
        // border="5px solid red"
      >
        {/* heading container */}
        <Box position="relative" top={["20", "20", "-10", "-10"]}>
          <Text variant="homeHeader1">MAKE THE</Text>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            initiallyVisible={true}
            animateOnce={true}
          >
            <Text variant="homeHeader2">IMPOSSIBLE</Text>
          </AnimationOnScroll>
        </Box>
        {/* <Flex border="5px solid black" w="100%" h="100px">
          <Img
            src="images/trees.png"
            alt="basebg"
            // position="absolute"
            // top="6.5%"

            border="2px solid black"
          />
        </Flex> */}
      </Flex>
    </>
  );
};

export default Home;
