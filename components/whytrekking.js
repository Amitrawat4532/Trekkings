import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";

const Whytrekking = ({ settings }) => {
  const countUpRef = React.useRef(null);
  const [visible, setVisible] = useState(false);

  const Testimonal_context = [
    {
      icon_1: "./images/tickicon.png",
      number: settings?.experience,
      icon_2: "./images/plusicon.png",
      heading: "Years Of Experience",
    },
    {
      icon_1: "./images/tickicon.png",
      number: settings?.totalTreks,
      icon_2: "./images/plusicon.png",
      heading: "Treks Completed",
    },

    {
      icon_1: "./images/tickicon.png",
      number: settings?.hikers,
      icon_2: "./images/plusicon.png",
      heading: "Satisfied Hikers",
    },

    {
      icon_1: "./images/tickicon.png",
      number: settings?.destination,
      icon_2: "./images/plusicon.png",
      heading: "Destinations Hiked",
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
          my="8"
          // height="20%"
        >
          <Image
            src="/images/whyTrek.png"
            alt="ILLUSTRATION"
            // borderRadius="41px"
            width="100%"
            height={["180px", "180px", "350px", "350px"]}
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
                minW="100px"
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
                    initiallyVisible={true}
                  >
                    {visible && (
                      <Text variant="testimonalHeader" ref={countUpRef}>
                        <CountUp end={el?.number} delay={0}></CountUp>
                      </Text>
                    )}
                  </AnimationOnScroll>
                  <Image src={el.icon_2} alt="ilustrator icon" height="20px" />
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
