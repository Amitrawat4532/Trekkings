import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      {/* main container */}
      <Flex
        w="100vw"
        h={["100vh", "100vh", "120vh", "130vh"]}
        bgImg={[
          "url('/images/bg6.png')",
          "url('/images/bg6.png')",
          "url('/images/bg.png')",
          "url('/images/bg.png')",
        ]}
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
      >
        {/* heading container */}
        <Box
          transform={[
            "translatey(72%)",
            "translatey(72%)",
            "translatex(-50%)",
            "translatex(-35%)",
          ]}
        >
          <Text variant="homeHeader1">make the</Text>

          <Text variant="homeHeader2">Impossible</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
