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
            objectFit="cover"
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
            bottom={["-10%", "-10%", "0", "0"]}
            alt="trees"
          />
        </ChakraBox>
      </Flex>
    </>
  );
};

export default Home;

// import { Box } from "@chakra-ui/react";
// import { motion } from "framer-motion";

// function Home() {
//   return (
//     <Box
//       as={motion.div}
//       height="400px"
//       width="400px"
//       bg="orange.400"
//       drag="x"
//       dragConstraints={{ left: -100, right: 100 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       transition="0.5s linear"
//       // not work: transition={{ transition: "0.5", ease: "linear" }}
//     />
//   );
// }
// export default Home;

// import { Container, chakra, shouldForwardProp, Image } from "@chakra-ui/react";
// import { motion, isValidMotionProp } from "framer-motion";

// const ChakraBox = chakra(motion.div, {
//   /**
//    * Allow motion props and non-Chakra props to be forwarded.
//    */
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop) || shouldForwardProp(prop),
// });

// export default function App() {
//   return (
//     <Container
//       h="100vh"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       w="100vw"
//       bg="red"
//     >
//       <ChakraBox
//         animate={{
//           scale: [9, 6],
//           // rotate: [0, 0, 270, 270, 0],
//           // borderRadius: ["20%", "30%", "40%", "50%", "60%", ""],
//         }}
//         // @ts-ignore no problem in operation, although type error appears.
//         transition={{
//           duration: 2,
//           ease: "easeInOut",
//           // repeat: Infinity,
//           // repeatType: "loop",
//         }}
//         padding="2"
//         bgGradient="linear(to-l, #7928CA, #FF0080)"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         width="100px"
//         height="100px"
//       >
//        hiii my name is amit
//       </ChakraBox>
//     </Container>
//   );
// }
