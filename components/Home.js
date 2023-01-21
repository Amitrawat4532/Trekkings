import { Box, Flex, Image, Text, Img } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <>
      {/* main container */}
      <Flex
        as={motion.div}
        className="home_container"
        w="100vw"
        // h={["100vh", "100vh", "120vh", "120vh"]}
        h="100vh"
        bgImg="url('/images/Background_final.png')" // backgroundSize={["100% 102%", "100% 102%", "100%", "100%"]}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
        // flexDirection="column"
        // border="5px solid red"
        position="relative"
        scale={scrollYProgress.current}
      >
        {/* heading container */}
        <Box>
          <Text variant="homeHeader1">MAKE THE</Text>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            initiallyVisible={true}
            animateOnce={true}
          >
            <Text variant="homeHeader2">IMPOSSIBLE</Text>
          </AnimationOnScroll>
        </Box>
        <Flex
          // border="5px solid black"
          w="100vw"
          h={["80%", "80%", "100%", "100%"]}
          position="absolute"
          bottom="0"
          // border="2px solid black"
        >
          <Img
            src="images/bgTrees.png"
            alt="basebg"
            w="100%"
            h="100%"
            objectFit={["cover", "cover", "contain", "contain"]}
            objectPosition="bottom"
            zIndex={2}
          />
        </Flex>
        <Image
          src="/images/bgElement.png"
          h={["600px", "600px", "700px", "700px"]}
          w="100%"
          objectFit="contain"
          position="absolute"
          bottom="0"
          alt="trees"
        />
      </Flex>
    </>
  );
};

export default Home;
