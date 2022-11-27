import { Flex, Image, Text, HStack, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp, { useCountUp } from "react-countup";

const Whytrekking = () => {
  const countUpRef = React.useRef(null);
  const [visible, setVisible] = useState(false);

  const Testimonal_context = [
    {
      icon_1: "./images/tickicon.png",
      number: "15",
      icon_2: "./images/plusicon.png",
      heading: "Years Of Experience",
    },
    {
      icon_1: "./images/tickicon.png",
      number: "60",
      icon_2: "./images/plusicon.png",
      heading: "Years Of best Destination",
    },

    {
      icon_1: "./images/tickicon.png",
      number: "30",
      icon_2: "./images/plusicon.png",
      heading: " Certified guides",
    },

    {
      icon_1: "./images/tickicon.png",
      number: "3210",
      icon_2: "./images/plusicon.png",
      heading: "Satisfied Hikers",
    },
  ];

  return (
    <>
      {/* main container */}
      <Flex
        backgroundColor="black"
        width="100%"
        height="100%"
        flexDirection="column"
        // minHeight="100vh"
        justifyContent="space-around"
        // p={["2% 2%", "2% 4%", "3% 6%", "3% 7%"]}
        px={["4", "4", "20", "20"]}
        py="20px"
      >
        {/* header container */}
        <Flex
          height="100%"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          backgroundColor="black"
          p="20px"
          // p={["2% 2%", "2% 4%", "3% 6%", "3% 7%"]}
        >
          <Text variant="whytrekkingHeader1">WHY TO TREK WITH US?</Text>

          <Text variant="whytrekkingHeader2">
            WE PROVIDE BEST HIKING AND TREKKING TO YOUR JOURNEY
          </Text>
        </Flex>

        {/* img container */}
        <Flex
          justifyContent="center"
          width="100%"
          pb="8"
          my="5"
          // height="20%"
        >
          <Image
            src="/images/whyTrek.png"
            borderRadius="41px"
            width="100%"
            height={["150px", "150px", "350px", "350px"]}
            objectFit="contain"
          />
        </Flex>

        {/* Feature Context */}
        <Flex
          px="4"
          my="6"
          alignItems="start"
          justifyContent="space-evenly"
          flexDirection="row"
          flexWrap="wrap"
          gap="10"
        >
          {Testimonal_context.map((el, key) => {
            return (
              <Flex
                flexDirection="column"
                alignItems="center"
                alignSelf="start"
                key={key}
                // transform={
                //   key === 0 || key === Testimonal_context.length - 1
                //     ? ["none", "none", "none", "translateY(-50px)"]
                //     : "none"
                // }
              >
                <Flex gap="10px" alignItems="center">
                  {/* <Image src={el.icon_1} /> */}
                  <AnimationOnScroll
                    animateOnce={true}
                    duration={0}
                    animateIn="animate__fadeIn"
                    afterAnimatedIn={() => setVisible(true)}
                  >
                    {visible && (
                      <Text variant="testimonalHeader" ref={countUpRef}>
                        <CountUp end={el?.number} delay={0}></CountUp>
                      </Text>
                    )}
                  </AnimationOnScroll>
                  <Image src={el.icon_2} height="20px" />
                </Flex>
                <Flex>
                  <Text variant="testimonalHeading">{el.heading}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};
export default Whytrekking;
