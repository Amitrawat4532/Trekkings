import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Popup from "./Popup";
import Image from "next/image";

const Home = ({whatsApp}) => {
  console.log(whatsApp,'d');
  return (
    <>
      {/* main container */}
      <Flex
        className="home_container"
        w="100%"
        h={["97vh","97vh","110vh","110vh"]}
        maxH={["97vh","97vh","110vh","110vh"]}
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
      <a
          href={`https://wa.me/91${whatsApp}`}
          target="_blank"
          rel="noreferrer"
        >
          <Flex
            w="60px"
            h="60px"
            pl="3"
            py="2.5"
            justifyContent="start"
            position="fixed"
            bottom="10%"
            left="0"
            zIndex="100"
            transition=".3s ease"
            boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            borderTopRightRadius="20px"
            borderBottomRightRadius="20px"
            bg="white"
            cursor="pointer"
            _hover={{
              transform: "scale(1.16)",
              transition: ".3s ease",
            }}
            className="whatsappAnim"
          >
            <Image
              src="/images/asset/whatsapp_logo.png"
              height={40}
              width={40}
              alt="whatsapp icon"
              contain
            />
          </Flex>
        </a>
    </>
  );
};

export default Home;
