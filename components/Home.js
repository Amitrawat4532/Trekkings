import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <Flex
        w="100vw"
        h={["100vh", "100vh", "120vh", "130vh"]}
        bgImg={[
          "url('/images/bg4.png')",
          "url('/images/bg4.png')",
          "url('/images/bg.png')",
          "url('/images/bg.png')",
        ]}
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          transform={[
            "translatex(0%)",
            "translatex(0%)",
            "translatex(-50%)",
            "translatex(-35%)",
          ]}
        >
          <Text
            as="h1"
            color=" #FFFFFF"
            fontSize={["40px", "45px", "60px", "70px"]}
            fontWeight="400"
          >
            make the
          </Text>
          <Text
            as="h1"
            color="#FF4417"
            fontSize={["45px", "50px", "60px", "70px"]}
            fontWeight="400"
          >
            Impossible
          </Text>
        </Box>

        {/* <Flex
          flexDirection="column"
          Border="2px solid white"
          justifyContent="start"
          gap="5px"
        >
          <Button>call</Button>
          <Button>message</Button>
        </Flex> */}
      </Flex>
    </>
  );
};

export default Home;
