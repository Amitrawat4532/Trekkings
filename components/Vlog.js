import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const Vlog = ({ vlog }) => {
  return (
    <>
      <Flex
        // background="#2A2550"
        bgImage="url('/images/space5.jpg')"
        width="100%"
        heigh="100%"
        flexDirection="column"
        className="blogs_container"
        py="5"
      >
        {/* Title */}

        <Flex
          position="relative"
          width="100%"
          heigh="100px"
          alignSelf="start"
          justifyContent="center"
          alignItems="center"
          pb="4"
        >
          <Text variant="blogMainheader" id="latestblog">
            OUR VLOGS
          </Text>

          {/* <Text variant="blogMainheader1">LATEST VLOG</Text> */}
        </Flex>

        <Flex
          w="100%"
          h="100%"
          px={["15px", "15px", "35px", "45px"]}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        >
          <Flex width="auto" flex="1" p="5">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <Text variant="blogParagraph">
                Vlog stands for a video blog or video log, and refers to a type
                of blog where most or all of the content is in a video format.
                Vlog posts consist of creating a video of yourself where you
                talk on a particular subject such as reporting or reviewing a
                product or an event. It can even serve as a way to share your
                artistic process or provide a tutorial guide on a creative
                practice or topic. Some vloggers even use it as a means to share
                new performance art or music they have created. In fact, just
                like blogs you can vlog about almost anything.
                <br />
                Vlogging makes the culture familiar. Through vlogs, people can
                understand the culture of different countries. The cultural
                shocks or cultural barriers seem to be less as compared to when
                there were no vlogs. When a vlogger makes daily vlogs and
                showcases their lifestyle and what kind of country they live in,
                the people of other countries can easily understand the culture
                of the vloggers country.
              </Text>
            </AnimationOnScroll>
          </Flex>

          <Flex w="100%" flex="1" my="4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="blogs_slider"
            >
              {vlog
                ?.sort()
                .reverse()
                .map((el, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <Flex alignItems="start" justifyContent="center" h="100%">
                        <Flex
                          flexDirection="column"
                          justifyContent="space-around"
                          p="20px 15px"
                          alignItems="center"
                          // border="1px solid red"
                          h="100%"
                        >
                          {/* <Image
                          mb="2"
                          src={el?.image}
                          borderRadius="61px"
                          width={["250px", "250px", "350px", "350px"]}
                          height={["200px", "200px", "300px", "300px"]}
                          fallbackSrc="/images/logo.png"
                        /> */}
                          <video
                            className="videoVlog"
                            poster={el?.image}
                            controls
                          >
                            <source src={el?.video} type="video/mp4"></source>
                          </video>
                          <Text variant="blogHeader">{el?.title}</Text>
                          <Text variant="blogDate">{el.date}</Text>
                          <Text variant="blogDescription">
                            {el?.description}
                          </Text>
                          <Text variant="blogReadmore">Read More</Text>
                        </Flex>
                      </Flex>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Vlog;
