import { Flex, Text, Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";
// import Image from "next/image";

const Gallery = () => {
  const gallery = [
    "/images/card1.png",
    "/images/card1.png",
    "/images/card2.png",
    "/images/card3.png",
    "/images/card2.png",
    "/images/card1.png",
  ];

  return (
    <>
      {/* header container */}
      <Flex
        width="100vw"
        height="100%"
        className="gallery_container"
        minHeight="70vh"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Flex
          position="relative"
          width="100%"
          heigh="100px"
          alignSelf="start"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="galleryHeader1">JOURNEY</Text>

          <Text variant="galleryHeader2">GALLERY OF THE TOURS</Text>
        </Flex>
        {/* header container end */}

        {/* Gallery Slides */}
        <Box w="100%" h="100%" mt="8" mb="5">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            // centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={-100}
            slidesPerView={3}
            breakpoints={{
              640: {
                spaceBetween: -100,
              },
              768: {
                spaceBetween: -100,
              },
              1024: {
                spaceBetween: 10,
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {gallery.map((el, id) => {
              return (
                <SwiperSlide key={id}>
                  <Image
                    width="500px"
                    height={["300px", "300px", "340px", "340px"]}
                    src={el}
                    objectFit="cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>

        <Text variant="destinationHeading3">
          <Text as="span" fontSize="40px" color="red" fontFamily="anton">
            &#34;
          </Text>
          THE BEST JOURNEY IN THE LIFE ARE THOSE THAT ANSWER QUESTION YOU NEVER
          THOUGHT TO ASK
          <Text
            as="span"
            fontSize="40px"
            color="red"
            fontFamily="anton"
            lineHeight=".6"
            position="relative"
            top={["10px", "10px", "0px", "0px"]}
          >
            &#34;
          </Text>
        </Text>
      </Flex>
    </>
  );
};
export default Gallery;
