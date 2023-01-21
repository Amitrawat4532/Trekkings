import { Box, Flex, Image, Text, Img } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const Home = () => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const cardVariants = {
    onscreen: {
      y: 100,
    },
  };

  return (
    <>
      {/* main container */}
      <Flex
        className="home_container"
        w="100vw"
        // h={["100vh", "100vh", "120vh", "120vh"]}
        h="100vh"
        bgImg="url('/images/Background_final.png')" // backgroundSize={["100% 102%", "100% 102%", "100%", "100%"]}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
        position="relative"
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
        <Flex w="100vw" h="100%" position="absolute" bottom="0">
          <Img
            src="images/bgTrees.png"
            alt="basebg"
            w="100%"
            h="100%"
            objectFit="contain"
            objectPosition="bottom"
            zIndex={2}
          />
        </Flex>

        <ChakraBox
          position="absolute"
          initial="onscreen"
          whileInView="onscreen"
          variants={cardVariants}
          animate={{
            scale: [10, 4],
            // Y: [120, 100],
            rotate: [0, 0, 0, 0, 0],
            // borderRadius: ["20%", "30%", "40%", "50%", "60%", ""],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          padding="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100px"
          height="100px"
        >
          <Image
            as={motion.img}
            src="/images/bgElement.png"
            objectFit="contain"
            position="absolute"
            bottom="0"
            alt="trees"
          />
        </ChakraBox>
      </Flex>
    </>
  );
};

export default Home;
