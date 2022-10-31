import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

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
          "url('/images/finalBg.png')",
          "url('/images/finalBg.png')",
        ]}
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
        // border="1px solid red"
      >
        {/* heading container */}
        <Box
          // transform={[
          //   "translateY(72%)",
          //   "translateY(72%)",
          //   "translateX(-50%)",
          //   "translateX(-20%) translateY(-40%)",
          // ]}
          position="relative"
          top={["20", "20", "-10", "-10"]}
        >
          <Text variant="homeHeader1">MAKE THE</Text>

          <Text variant="homeHeader2">IMPOSSIBLE</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
