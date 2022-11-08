import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const Blog = () => {
  const vlogs = [
    {
      Image: "./images/blog1.png",
      header: "Camping on cold mountains",
      date: "🕐 27 August,2022",
      paragraph: "this is a paragraph ",
      readmore_button: "Read More",
    },

    {
      Image: "./images/blog1.png",
      header: "Camping on cold mountains",
      date: "🕐 27 August,2022",
      paragraph: "this is a paragraph ",
      readmore_button: "Read More",
    },

    {
      Image: "./images/blog1.png",
      header: "Camping on cold mountains",
      date: "🕐 27 August,2022",
      paragraph: "this is a paragraph ",
      readmore_button: "Read More",
    },

    {
      Image: "./images/blog1.png",
      header: "Camping on cold mountains",
      date: "🕐 27 August,2022",
      paragraph: "this is a paragraph ",
      readmore_button: "Read More",
    },
  ];
  return (
    <>
      <Flex
        // background="#2A2550"
        bgImage="url('/images/space5.jpg')"
        width="100%"
        heigh="100%"
        flexDirection="column"
        className="blogs_container"
      >
        {/* Title */}

        <Flex
          position="relative"
          width="100%"
          heigh="100px"
          alignSelf="start"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="blogMainheader" id="latestblog">
            OUR VLOGS
          </Text>

          {/* <Text variant="blogMainheader1">LATEST VLOG</Text> */}
        </Flex>

        {/* card container */}
        {/* <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap="5%"
          alignItems="center"
        >
          {vlogs.map((el, key) => {
            return (
              <Flex alignItems="center" key={key}>
                <Flex
                  // width="545px"
                  // height="405px"
                  flexDirection="column"
                  p="20px 0px 20px 0px"
                  alignItems={["center", "center", "start", "start"]}
                >
                  <Image
                    src={el.Image}
                    borderRadius="61px"
                    width={["250px", "350px", "400px", "500px"]}
                    height={["200px", "250px", "300px", "405px"]}
                  />
                  <Text variant="blogHeader">{el.header}</Text>
                  <Text variant="blogDate">{el.date}</Text>
                  <Text variant="blogParagraph">{el.paragraph}</Text>
                  <Text variant="blogReadmore">{el.readmore_button}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex> */}

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
            <Text variant="blogParagraph">
              Duis voluptate nulla ex sint veniam nisi. Enim in deserunt est
              dolore adipisicing eu do ad exercitation sit. Officia ad enim
              deserunt laborum sint fugiat ullamco anim aliqua dolor. Do
              deserunt est dolore duis sunt exercitation et commodo aute anim
              excepteur excepteur voluptate. Veniam labore velit fugiat esse
              incididunt amet eu irure culpa ut voluptate ad. Et sit mollit
              nostrud Lorem nulla ut nisi quis qui cupidatat sint ea. Ut
              consequat cupidatat adipisicing et aute ullamco. Irure anim ad
              commodo aliqua id culpa dolore esse.
              <br />
              Duis voluptate nulla ex sint veniam nisi. Enim in deserunt est
              dolore adipisicing eu do ad exercitation sit. Officia ad enim
              deserunt laborum sint fugiat ullamco anim aliqua dolor. Do
              deserunt est dolore duis sunt exercitation et commodo aute anim
              excepteur excepteur voluptate.
            </Text>
            {/* <Image
              src="/images/whyTrek.png"
              w="100%"
              h="500px"
              objectFit="contain"
            /> */}
          </Flex>

          <Flex w="100%" flex="1" my="4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="blogs_slider"
            >
              {vlogs.map((el, key) => {
                return (
                  <SwiperSlide key={key}>
                    <Flex alignItems="center" justifyContent="center">
                      <Flex
                        flexDirection="column"
                        p="20px 0px 20px 0px"
                        alignItems={["center", "center", "start", "start"]}
                      >
                        <Image
                          mb="2"
                          src={el.Image}
                          borderRadius="61px"
                          width={["250px", "250px", "350px", "350px"]}
                          height={["200px", "200px", "300px", "300px"]}
                        />
                        <Text variant="blogHeader">{el.header}</Text>
                        <Text variant="blogDate">{el.date}</Text>
                        <Text variant="blogReadmore">{el.readmore_button}</Text>
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

export default Blog;
